export interface Site {
  id: string;
  name: string;
  location: [number, number]; // [Latitude, Longitude]
  overview: string;
  unsungStories: string;
  construction: string;
  audioScript: string;
  imageUrl: string;
}

export type ViewMode = 'MAP' | 'LIST' | 'DETAIL';
