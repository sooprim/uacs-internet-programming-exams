export interface Band {
    id: number;
    name: string;
    genre: string;
    formed: number;
    location: string;
    members: string[];
    albums: Album[];
}

export interface Album {
    name: string;
    year: number;
}

export interface Place {
    id: number,
    country: string,
    city: string[]
}