export interface ICar {
  name: string;
  color: string;
  id?: number;
}

export type ICars = ICar[];

export interface IRespCars {
  cars: ICars;
  number?: number | string;
}
