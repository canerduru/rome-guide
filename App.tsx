
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { MapPin, Download, CheckCircle, RefreshCw } from 'lucide-react';
import { Map as PigeonMap, Marker, ZoomControl } from 'pigeon-maps';
import useSupercluster from 'use-supercluster';
import { ROME_SITES, ROME_CENTER } from './constants';
import SiteDetail from './components/SiteDetail';
import { Site, ViewMode } from './types';

// Helper to convert blob to base64
const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const App: React.FC = () => {
  const [sites, setSites] = useState<Site[]>(ROME_SITES);
  const [selectedSiteId, setSelectedSiteId] = useState<string | null>(null);
  const [hoveredSiteId, setHoveredSiteId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('MAP');
  const [center, setCenter] = useState<[number, number]>(ROME_CENTER);
  const [zoom, setZoom] = useState(14);
  const [cachingStatus, setCachingStatus] = useState<'idle' | 'caching' | 'done'>('idle');

  // Map bounds for clustering [west, south, east, north]
  const [bounds, setBounds] = useState<[number, number, number, number] | null>(null);

  // Derive selected site from current sites state
  const selectedSite = sites.find(s => s.id === selectedSiteId) || null;

  const syncOfflineData = useCallback(async () => {
    setCachingStatus('caching');
    // Always start with fresh ROME_SITES constant data (for text updates)
    const updatedSites = [...ROME_SITES];
    let updatesMade = false;

    // 1. Check local storage for cached images
    for (let i = 0; i < updatedSites.length; i++) {
      const site = updatedSites[i];
      const storageKey = `offline_img_${site.id} `;

      try {
        const cachedImage = localStorage.getItem(storageKey);
        if (cachedImage) {
          updatedSites[i] = { ...site, imageUrl: cachedImage };
          updatesMade = true;
        }
      } catch (e) {
        console.error("Error accessing localStorage", e);
      }
    }

    // Update state immediately if we found cached items
    if (updatesMade) {
      setSites([...updatedSites]);
    }

    // 2. Fetch missing images from network
    let fetchUpdates = false;
    for (let i = 0; i < updatedSites.length; i++) {
      const site = updatedSites[i];
      const storageKey = `offline_img_${site.id} `;

      if (site.imageUrl.startsWith('http')) {
        try {
          const response = await fetch(site.imageUrl);
          if (response.ok) {
            const blob = await response.blob();
            const base64 = await blobToBase64(blob);

            try {
              localStorage.setItem(storageKey, base64);
              updatedSites[i] = { ...site, imageUrl: base64 };
              fetchUpdates = true;
            } catch (quotaError) {
              console.warn('LocalStorage quota exceeded, cannot cache image for ' + site.name);
            }
          }
        } catch (err) {
          console.error('Error handling offline image for ' + site.name, err);
        }
      }
    }

    if (fetchUpdates) {
      setSites([...updatedSites]);
    }
    setCachingStatus('done');
  }, []);

  // Initial sync on mount
  useEffect(() => {
    syncOfflineData();
  }, [syncOfflineData]);

  const handleSiteClick = (site: Site) => {
    setSelectedSiteId(site.id);
    setViewMode('DETAIL');
    setCenter(site.location);
    setZoom(16);
  };

  const closeDetail = () => {
    setSelectedSiteId(null);
    setViewMode('MAP');
    setZoom(14);
  };

  // Convert sites to GeoJSON points for supercluster
  const points = useMemo(() => sites.map(site => ({
    type: 'Feature',
    properties: { cluster: false, siteId: site.id, ...site },
    geometry: {
      type: 'Point',
      coordinates: [site.location[1], site.location[0]] // Longitude, Latitude
    }
  })), [sites]);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 16 }
  });

  return (
    <div className="h-screen w-full bg-stone-100 flex flex-col md:flex-row overflow-hidden font-sans">

      {/* Sidebar / List View */}
      <div className={`
        ${viewMode === 'DETAIL' ? 'hidden md:flex' : 'hidden md:flex'}
flex - col w - full md: w - [450px] bg - white shadow - xl z - 20 border - r border - stone - 200 shrink - 0
  `}>
        <div className="p-6 bg-amber-600 text-white shrink-0 shadow-md z-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Rome Guide</h1>
              <p className="text-amber-100 text-sm mt-1">Offline Audio Companion</p>
            </div>

            <button
              onClick={syncOfflineData}
              disabled={cachingStatus === 'caching'}
              className="flex items-center gap-1 bg-amber-700 hover:bg-amber-800 disabled:opacity-50 text-xs px-2 py-1 rounded transition-colors shadow-sm border border-amber-600"
              title="Sync Offline Data"
            >
              {cachingStatus === 'caching' ? (
                <>
                  <RefreshCw size={12} className="animate-spin" />
                  <span>Syncing...</span>
                </>
              ) : cachingStatus === 'done' ? (
                <>
                  <CheckCircle size={12} />
                  <span>Offline Ready</span>
                </>
              ) : (
                <>
                  <Download size={12} />
                  <span>Sync</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-4 space-y-4 bg-stone-50">
          {sites.map(site => (
            <button
              key={site.id}
              onClick={() => handleSiteClick(site)}
              onMouseEnter={() => setHoveredSiteId(site.id)}
              onMouseLeave={() => setHoveredSiteId(null)}
              className={`
w - full text - left p - 4 rounded - xl transition - all border shadow - sm group relative overflow - hidden
                ${selectedSiteId === site.id
                  ? 'bg-amber-50 border-amber-300 ring-1 ring-amber-300'
                  : 'bg-white border-stone-200 hover:border-amber-300 hover:shadow-md'
                }
`}
            >
              <div className="flex gap-4 items-start">
                <div className="w-20 h-20 rounded-lg shrink-0 overflow-hidden bg-stone-200 shadow-inner">
                  <img
                    src={site.imageUrl}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font - bold text - lg mb - 1 truncate ${selectedSiteId === site.id ? 'text-amber-900' : 'text-stone-900'} `}>
                    {site.name}
                  </h3>
                  <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {site.overview}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative h-full flex flex-col md:flex-row overflow-hidden">

        {/* Map View Container */}
        <div className="relative flex-1 h-full w-full bg-stone-200 transition-all duration-300 ease-in-out">
          <PigeonMap
            defaultCenter={ROME_CENTER}
            center={center}
            zoom={zoom}
            onBoundsChanged={({ center, zoom, bounds }) => {
              setCenter(center);
              setZoom(zoom);
              if (bounds) {
                setBounds([
                  bounds.sw[1],
                  bounds.sw[0],
                  bounds.ne[1],
                  bounds.ne[0]
                ]);
              }
            }}
            attribution={false}
          >
            <ZoomControl />

            {/* Render Clusters or Markers */}
            {clusters.map(cluster => {
              const [longitude, latitude] = cluster.geometry.coordinates;
              const { cluster: isCluster, point_count: pointCount } = cluster.properties;

              // Render Cluster Marker
              if (isCluster) {
                return (
                  <Marker
                    key={`cluster - ${cluster.id} `}
                    width={40}
                    anchor={[latitude, longitude]}
                    onClick={() => {
                      const expansionZoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        18
                      );
                      setZoom(expansionZoom);
                      setCenter([latitude, longitude]);
                    }}
                  >
                    <div className="group relative flex justify-center items-center cursor-pointer">
                      <div className="absolute w-full h-full bg-amber-400 rounded-full animate-ping opacity-25"></div>
                      <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white hover:bg-amber-700 hover:scale-110 transition-all z-10">
                        {pointCount}
                      </div>
                    </div>
                  </Marker>
                );
              }

              // Render Individual Site Marker
              const siteData = cluster.properties as Site;
              const isSelected = selectedSiteId === siteData.id;
              const isHovered = hoveredSiteId === siteData.id;
              const isActive = isSelected || isHovered;

              return (
                <Marker
                  key={siteData.id}
                  width={50}
                  anchor={[latitude, longitude]}
                  onClick={() => handleSiteClick(siteData)}
                  style={{ zIndex: isActive ? 100 : 1 }}
                >
                  <div
                    className="relative flex justify-center items-center w-[50px] h-[50px]"
                    onMouseEnter={() => setHoveredSiteId(siteData.id)}
                    onMouseLeave={() => setHoveredSiteId(null)}
                  >
                    {isSelected && (
                      <span className="absolute inline-flex h-10 w-10 rounded-full bg-amber-400 opacity-75 animate-ping -z-10 mt-[-8px]"></span>
                    )}

                    <div className={`relative transition - transform duration - 300 ease - out origin - bottom ${isActive ? 'scale-125 -translate-y-2' : 'scale-100'} `}>
                      <MapPin
                        size={40}
                        className={`transition - colors duration - 300 drop - shadow - xl filter ${isSelected ? 'text-amber-600 fill-amber-600/20' : isHovered ? 'text-amber-500 fill-stone-100' : 'text-stone-700 fill-black/10'} `}
                      />
                    </div>

                    {/* Tooltip Label */}
                    <div className={`
                        absolute bottom - full left - 1 / 2 - translate - x - 1 / 2 mb - 1
bg - white text - xs font - bold px - 2 py - 1 rounded shadow - md whitespace - nowrap
pointer - events - none transition - all duration - 200 z - 10 text - stone - 800 border border - stone - 200
                        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
`}>
                      {siteData.name}
                    </div>
                  </div>
                </Marker>
              );
            })}

          </PigeonMap>

          {/* Mobile Floating List Toggle */}
          {viewMode === 'MAP' && (
            <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 pointer-events-none">
              <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-stone-200 text-stone-600 font-medium text-sm pointer-events-auto animate-bounce flex items-center gap-2">
                <MapPin size={16} className="text-amber-600" />
                Tap a marker to explore
              </div>
            </div>
          )}
        </div>

        {/* Detail View */}
        {viewMode === 'DETAIL' && selectedSite && (
          <div className="absolute inset-0 z-30 md:static md:z-auto md:w-[600px] md:border-l md:border-stone-200 md:shadow-2xl bg-white shrink-0 animate-in slide-in-from-right-10 fade-in duration-300">
            <SiteDetail site={selectedSite} onClose={closeDetail} />
          </div>
        )}

      </div>
    </div>
  );
};

export default App;