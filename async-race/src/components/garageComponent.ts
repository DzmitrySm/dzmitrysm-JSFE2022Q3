import GarageView from '../view/garageView';
import GarageModel from '../model/garageModel';
import { IRespCars, ICar } from '../types/types';

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
}
