import GarageView from '../view/garageView';
import GarageModel from '../model/garageModel';
import { IRespCars } from '../types/types';

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
}
