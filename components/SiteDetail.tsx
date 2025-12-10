import React, { useEffect, useRef } from 'react';
import { Site } from '../types';
import { X, BookOpen, Hammer, Sparkles } from 'lucide-react';
import AudioPlayer from './AudioPlayer';

interface SiteDetailProps {
  site: Site;
  onClose: () => void;
}

const SiteDetail: React.FC<SiteDetailProps> = ({ site, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when opening
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [site]);

  return (
    <div className="fixed inset-0 z-50 bg-white md:relative md:h-full md:w-full md:overflow-y-auto flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
      
      {/* Sticky Header with Image */}
      <div className="relative h-64 shrink-0">
        <img 
          src={site.imageUrl} 
          alt={site.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <X size={24} />
        </button>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h1 className="text-3xl font-bold text-white mb-1 shadow-sm leading-tight">{site.name}</h1>
          <div className="h-1 w-20 bg-amber-500 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div ref={containerRef} className="flex-1 overflow-y-auto bg-stone-50 p-6 pb-24 md:pb-6">
        
        <AudioPlayer text={site.audioScript} />

        <div className="mt-8 space-y-8">
          
          <section className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
            <div className="flex items-center gap-3 mb-3 text-amber-700">
              <BookOpen size={20} />
              <h2 className="font-bold uppercase tracking-wider text-sm">Historical Overview</h2>
            </div>
            <p className="text-stone-700 leading-relaxed text-lg font-serif">
              {site.overview}
            </p>
          </section>

          <section className="bg-amber-50 p-5 rounded-xl shadow-sm border border-amber-100">
            <div className="flex items-center gap-3 mb-3 text-amber-800">
              <Sparkles size={20} />
              <h2 className="font-bold uppercase tracking-wider text-sm">Unsung Stories</h2>
            </div>
            <p className="text-stone-800 leading-relaxed italic border-l-4 border-amber-300 pl-4">
              "{site.unsungStories}"
            </p>
          </section>

          <section className="bg-stone-100 p-5 rounded-xl shadow-sm border border-stone-200">
            <div className="flex items-center gap-3 mb-3 text-stone-600">
              <Hammer size={20} />
              <h2 className="font-bold uppercase tracking-wider text-sm">Construction & Origins</h2>
            </div>
            <p className="text-stone-600 leading-relaxed text-sm">
              {site.construction}
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SiteDetail;
