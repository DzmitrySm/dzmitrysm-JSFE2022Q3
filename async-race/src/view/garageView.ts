class GarageView {
  createBtnToGarage(): void {
    const wrapperBtnsChoiceView = document.createElement('div');
    const btnToGarage = document.createElement('button');
    btnToGarage.classList.add('btn-to-garage');
    btnToGarage.textContent = 'To garage';
    const btnWinners = document.createElement('button');
    btnWinners.classList.add('btn-winners');
    btnWinners.textContent = 'Winners table';
    wrapperBtnsChoiceView.append(btnToGarage, btnWinners);
    document.body.append(wrapperBtnsChoiceView);
  }

  createBtnsCreateCar(): void {
    const wrapperBtnsCreateCar = document.createElement('div');
    const inputNameCar = document.createElement('input');
    inputNameCar.classList.add('input-name-car');
    inputNameCar.setAttribute('type', 'text');
    const inputColorCar = document.createElement('input');
    inputColorCar.classList.add('input-color-car');
    inputColorCar.setAttribute('type', 'color');
    inputColorCar.setAttribute('value', '#ff0000');
    const btnCreateCar = document.createElement('button');
    btnCreateCar.classList.add('btn-create-car');
    btnCreateCar.textContent = 'create'.toUpperCase();
    wrapperBtnsCreateCar.append(inputNameCar, inputColorCar, btnCreateCar);
    document.body.append(wrapperBtnsCreateCar);
  }

  createBtnsUpdateCar(): void {
    const wrapperBtnsUpdateCar = document.createElement('div');
    const inputRenameCar = document.createElement('input');
    inputRenameCar.classList.add('input-rename-car');
    inputRenameCar.setAttribute('type', 'text');
    const inputUpdateColorCar = document.createElement('input');
    inputUpdateColorCar.classList.add('input-update-color-car');
    inputUpdateColorCar.setAttribute('type', 'color');
    inputUpdateColorCar.setAttribute('value', '#000000');
    const btnUpdateCar = document.createElement('button');
    btnUpdateCar.classList.add('btn-update-car');
    btnUpdateCar.textContent = 'update'.toUpperCase();
    wrapperBtnsUpdateCar.append(inputRenameCar, inputUpdateColorCar, btnUpdateCar);
    document.body.append(wrapperBtnsUpdateCar);
  }

  createBtnsRaceResetGenerate(): void {
    const wrapperBtnsRRG = document.createElement('div');
    const btnRace = document.createElement('button');
    btnRace.classList.add('btn-race');
    btnRace.textContent = 'race'.toUpperCase();
    const btnReset = document.createElement('button');
    btnReset.classList.add('btn-reset');
    btnReset.textContent = 'reset'.toUpperCase();
    const btnGenerate = document.createElement('button');
    btnGenerate.classList.add('btn-generate');
    btnGenerate.textContent = 'generate'.toUpperCase();
    wrapperBtnsRRG.append(btnRace, btnReset, btnGenerate);
    document.body.append(wrapperBtnsRRG);
  }

  createGarage():void {

  }
}
export default GarageView;
