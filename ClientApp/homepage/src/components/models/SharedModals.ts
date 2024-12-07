export interface RouteHash {
    key: string;
    pathname: string;
    search: string;
    state: any; // or use `undefined` if you know it will always be undefined
  }