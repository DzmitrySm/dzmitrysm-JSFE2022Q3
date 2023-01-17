export interface ICar {
  name: string;
  color: string;
  id?: number | string;
}

export type ICars = ICar[];

export interface IRespCars {
  items: ICars;
  count?: number | string;
}
