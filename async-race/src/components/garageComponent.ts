import GarageView from '../view/garageView';
import GarageModel from '../model/garageModel';
import { IRespCars, ICar, IQueryParams } from '../types/types';

export default class GarageComponent {
    garageModel;

    garageView;

    constructor(GarageView: GarageView, GarageModel: GarageModel) {
      this.garageModel = GarageModel;
      this.garageView = GarageView;
    }

    async renderAllCars() {
      const allCars = (await this.garageModel.getCars()) as IRespCars;
      this.garageView.createGarage(allCars);
    }

    async createCar(props: ICar) {
      this.garageModel.createCar(props);
      this.renderAllCars();
    }

    runAddCarBtn(props: ICar) {
      this.createCar(props);
    }

    async getCar(id: number) {
      const response = await this.garageModel.getCar(id);
      this.garageView.select(response);
      this.renderAllCars();
    }

    async updateCar(id: number, body: ICar) {
      this.garageModel.updateCar(id, body);
      this.renderAllCars();
    }

    runUpdateCarBtn(id: number, body: ICar) {
      this.updateCar(id, body);
    }

    runGetCarBtn(id: number) {
      this.getCar(id);
    }

    async deleteCar(id: number) {
      this.garageModel.deleteCar(id);
      this.renderAllCars();
    }

    runDeleteCarBtn(id: number) {
      this.deleteCar(id);
    }

    switchEngineCar(query: IQueryParams) {
      return this.garageModel.switchEngineCar(query);
    }

    runDriveCarBtn(query: IQueryParams) {
      return this.switchEngineCar(query);
    }
}
