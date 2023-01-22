import GarageView from './view/garageView';
import GarageModel from './model/garageModel';
import GarageComponent from './components/garageComponent';

async function init() {
  const garageView = new GarageView();
  const garageModel = new GarageModel();
  const garageComponent = new GarageComponent(garageView, garageModel);
  garageView.createBtnToGarage();
  garageView.createBtnsCreateCar();
  garageView.createBtnsUpdateCar();
  garageView.createBtnsRaceResetGenerate();
  garageView.addCarToPage(garageComponent.runAddCarBtn.bind(garageComponent));
  await garageComponent.renderAllCars();
  garageView.runSelectCarBtn(garageComponent.runGetCarBtn.bind(garageComponent));
  garageView.runUpdateCar(garageComponent.runUpdateCarBtn.bind(garageComponent));
  garageView.runDeleteCarBtn(garageComponent.runDeleteCarBtn.bind(garageComponent));
  garageView.runDriveCarBtn(garageComponent.runDriveCarBtn.bind(garageComponent));
  garageView.runStopCarBtn(garageComponent.runDriveCarBtn.bind(garageComponent));
}
init();
