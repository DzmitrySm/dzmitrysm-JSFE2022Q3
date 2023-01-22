export interface ICar {
  name: string;
  color: string;
  id?: number | string;
}

export type ICars = ICar[];

export interface IRespCars {
  cars: ICars;
  number?: number | string;
}

export interface IQueryParams {
  id: number;
  status: string;
}

export interface IDriveParams {
  velocity: number;
  distance: number;
}
