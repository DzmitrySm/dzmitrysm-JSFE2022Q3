import GarageView from './view/garageView';

function init() {
  const garageView = new GarageView();
  garageView.createBtnToGarage();
  garageView.createBtnsCreateCar();
  garageView.createBtnsUpdateCar();
  garageView.createBtnsRaceResetGenerate();
}
init();
