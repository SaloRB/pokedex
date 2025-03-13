export interface PokeResponse {
  count: number;
  next: string;
  previous: null;
  results: PokeData[];
}

export interface PokeData {
  name: string;
  url: string;
}
