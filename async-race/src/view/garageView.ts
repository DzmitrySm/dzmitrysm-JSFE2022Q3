import '../style.css';
import {
  ICar, IQueryParams, IRespCars, IDriveParams,
} from '../types/types';

export default class GarageView {
  createBtnToGarage(): void {
    const wrapperBtnsChoiceView = document.createElement('div');
    wrapperBtnsChoiceView.classList.add('choice-view');
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
    wrapperBtnsCreateCar.classList.add('wrapper-create-btns');
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
    wrapperBtnsUpdateCar.classList.add('wrapper-update-btns');
    const inputRenameCar = document.createElement('input');
    inputRenameCar.classList.add('input-rename-car');
    inputRenameCar.setAttribute('type', 'text');
    inputRenameCar.disabled = true;
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

  createBtnsRaceResetGenerate(): HTMLDivElement {
    const wrapperBtnsRRG = document.createElement('div');
    wrapperBtnsRRG.classList.add('wrapper-btns-rrg');
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
    return wrapperBtnsRRG;
  }

  createGarage({ cars }: IRespCars) :void {
    let wrapperTitleCount = document.querySelector('.wrapper-garage-count');
    if (!wrapperTitleCount) {
      wrapperTitleCount = document.createElement('div');
      wrapperTitleCount.classList.add('wrapper-garage-count');
    }
    wrapperTitleCount.innerHTML = '';
    const nameGarage = document.createElement('span');
    nameGarage.textContent = 'Garage ';
    const countGarageCars = document.createElement('span');
    countGarageCars.textContent = `${cars.length}`;
    wrapperTitleCount.append(nameGarage, countGarageCars);
    let wrapperPageCount = document.querySelector('.wrapper-page-number');
    if (!wrapperPageCount) {
      wrapperPageCount = document.createElement('div');
      wrapperPageCount.classList.add('wrapper-page-number');
    }
    wrapperPageCount.innerHTML = '';
    wrapperPageCount.classList.add('wrapper-page-number');
    const page = document.createElement('span');
    page.textContent = 'Page: ';
    const pageNumber = document.createElement('span');
    pageNumber.textContent = '#1';
    wrapperPageCount.append(page, pageNumber);
    document.body.append(wrapperTitleCount, wrapperPageCount);
    let divCars = document.querySelector('.wrapper-cars');
    if (!divCars) {
      divCars = document.createElement('div');
      divCars.classList.add('wrapper-cars');
    }
    divCars.innerHTML = '';
    cars.forEach((car) => {
      const CarsItem = this.renderCar(car);
      (divCars as HTMLDivElement).appendChild(CarsItem);
    });
    document.body.append(divCars);
  }

  renderCar(car: ICar) {
    const raceBlockItem = document.createElement('div');
    raceBlockItem.classList.add('race-block-items');
    const wrapperBtnsSelectRemove = document.createElement('div');
    wrapperBtnsSelectRemove.classList.add('wrapper-select-remove');
    const btnSelect = document.createElement('button');
    btnSelect.classList.add('btn-select');
    btnSelect.textContent = 'select'.toUpperCase();
    const btnRemove = document.createElement('button');
    btnRemove.classList.add('btn-remove');
    btnRemove.textContent = 'remove'.toUpperCase();
    const nameCar = document.createElement('span');
    nameCar.classList.add('name-car');
    nameCar.textContent = `${car.name}`;
    wrapperBtnsSelectRemove.append(btnSelect, btnRemove, nameCar);
    const wrapperBtnsSecondRow = document.createElement('div');
    const btnsAB = document.createElement('div');
    btnsAB.classList.add('car-controls-btns');
    const btnA = document.createElement('button');
    btnA.classList.add('btn-a');
    btnA.textContent = 'a'.toUpperCase();
    const btnB = document.createElement('button');
    btnB.classList.add('btn-b');
    btnB.textContent = 'b'.toUpperCase();
    btnB.disabled = true;
    btnsAB.append(btnA, btnB);
    const wrapperCarSvg = document.createElement('div');
    wrapperCarSvg.innerHTML = `<svg data-name=${car.id} id=${car.name} class="car-svg car" width="90px" height="70px" viewBox="0 0 512 330" xmlns="http://www.w3.org/2000/svg"><defs><style>.${car.name}{fill:${car.color};}.${car.name}{fill:${car.color};}.${car.name}{fill:${car.color};}.${car.name}{fill:${car.color};}.${car.name}{fill:${car.color};}.${car.name}{fill:${car.color};}.${car.name}{fill:${car.color};}.${car.name}{fill:${car.color};}</style></defs><title/><path  class=${car.name} d="M17.5,277.06c-2-15,5-20,5-20,9-13,30-13.81,30-13.81,9.25-1.7,20.22-8.48,22.16-8.72s32.48-20.82,78.09-26.15,91.64-1.21,116.6,4.36,81.1,41.89,81.1,41.89,55.08,6.78,73.12,10.65,33.37,8,40,16a67.86,67.86,0,0,1,14.41,32,74.06,74.06,0,0,1,0,24.94l1.94,4.6-1.94,2.67-47.32,2.9s5.16-62-41.18-60.05S349,348.33,349,348.33H216.47c-20.66,0-74.87-2.9-74.87-2.9s9.47-54.73-39.22-55.94-39.95,54.73-39.95,54.73-20.22.72-31-2.18-4.25-26.17-6.19-29.56c0,0-7.76-12.42-7.76-17.42Z"/><path class=${car.name} d="M52,272.33s66-2,78-1,49.88,10,75.94,10,103.84-6.89,115-8.95S341,268.33,352,269.33s71,7,71,7,12,11,20,15,34,10,36,14-1,12,0,21,3.13,18.19.06,19.6-40.06,3.4-40.06,3.4,9.89-67.11-44.55-60.55S350,348.83,350,348.83s-105,.5-114,.5-86-3-86-3,12-61-40-56-43,54.73-43,54.73-22.63,4.27-29.82-2.73-4.18-29-4.18-29-7-6-8-18,.5-17.5.5-17.5Z"/><path class=${car.name} d="M35.5,258.83s11-1,8,9-8,17-14,17-8.36.13-8.36.13-2-16.63.36-21.13S35.5,258.83,35.5,258.83Z"/><circle class=${car.name} cx="105.43" cy="330.57" r="11.5"/><circle class="cls-4" cx="393.95" cy="330.57" r="11.5"/><path class=${car.name} d="M105.87,295.75a35.56,35.56,0,1,0,35.56,35.56A35.57,35.57,0,0,0,105.87,295.75Zm0,63.09a27.53,27.53,0,1,1,27.53-27.53A27.53,27.53,0,0,1,105.87,358.84Z"/><path class="cls-5" d="M393.9,295.75a35.56,35.56,0,1,0,35.56,35.56A35.57,35.57,0,0,0,393.9,295.75Zm0,63.09a27.53,27.53,0,1,1,27.52-27.53A27.53,27.53,0,0,1,393.9,358.84Z"/><path class=${car.name} d="M58,242.07s47.53.26,55.53-3.74,41-22,40-26S138,211,138,211s-34.49,7.34-49.49,16.34C82.8,230.75,58,242.07,58,242.07Z"/><path class=${car.name} d="M422.19,275.73s11.78,1.93,20.5,3.87,14.62,2.66,16.74,2.66a37.52,37.52,0,0,0,5.66-.72s6,7.07,8.19,11.27S478,303.07,478,303.07s-1.85,1.71-5.62,1.47-25.92-10.9-29.93-13.32-19.33-8.23-20.27-10.89A6.28,6.28,0,0,1,422.19,275.73Z"/><path class=${car.name} d="M477.13,306.06l-.83,0c-4.36-.28-27.08-11.4-30.62-13.53-1.29-.78-4-2-6.87-3.32-9-4.09-13.28-6.24-14-8.36a7.7,7.7,0,0,1,.07-5.76l.49-1,1.1.19c.12,0,11.93,2,20.59,3.89,8.13,1.8,14.2,2.62,16.41,2.62a37,37,0,0,0,5.35-.69l.87-.18.58.68c.25.29,6.13,7.24,8.38,11.55s4.68,10.13,4.78,10.38l.41,1-.77.72A8.86,8.86,0,0,1,477.13,306.06Zm-49.84-28.63a5.55,5.55,0,0,0,.31,2.4c.76,1.31,8.37,4.77,12.45,6.63,3.08,1.4,5.74,2.61,7.18,3.48,4.43,2.67,26.09,12.9,29.26,13.1a7.5,7.5,0,0,0,3.64-.56c-.84-2-2.61-6-4.17-9-1.71-3.28-5.94-8.49-7.46-10.33a33.42,33.42,0,0,1-5.07.58c-2.44,0-8.67-.83-17.06-2.7C439.51,279.54,430.63,278,427.29,277.43Z"/><path class="cls-8" d="M109.43,367.63a37.06,37.06,0,1,1,37.07-37.06A37.1,37.1,0,0,1,109.43,367.63Zm0-71.12a34.06,34.06,0,1,0,34.07,34.06A34.1,34.1,0,0,0,109.43,296.51Zm0,63.09a29,29,0,1,1,29-29A29.07,29.07,0,0,1,109.43,359.6Zm0-55.06a26,26,0,1,0,26,26A26.06,26.06,0,0,0,109.43,304.54Z"/><path class="cls-6" d="M276.29,214.69s.67,8.33,5.19,13.5,37.45,23.89,37.45,23.89l32.56,2.82s-31.1-19.12-41.36-24.51S276.29,214.69,276.29,214.69Z"/><path class="cls-8" d="M398,367.63A37.06,37.06,0,1,1,435,330.57,37.1,37.1,0,0,1,398,367.63Zm0-71.12A34.06,34.06,0,1,0,432,330.57,34.1,34.1,0,0,0,398,296.51Zm0,63.09a29,29,0,1,1,29-29A29.06,29.06,0,0,1,398,359.6Zm0-55.06a26,26,0,1,0,26,26A26.06,26.06,0,0,0,398,304.54Z"/><path class="cls-8" d="M363.68,256.94l-39.21-3.4-.28-.16c-1.35-.77-33.21-18.91-37.84-24.21-4.79-5.47-5.53-14-5.56-14.36l-.2-2.5,2.3,1c.24.1,23.74,10.39,33.94,15.74s41.14,24.37,41.45,24.56Zm-38.29-6.33,25.89,2.25c-9.39-5.73-28.34-17.2-35.85-21.14-8.14-4.28-24.91-11.76-31.24-14.56.54,2.73,1.78,7,4.42,10C292.14,231.24,316.08,245.31,325.39,250.61Z"/><path class="cls-8" d="M109.43,343.57a13,13,0,1,1,9.19-22.19h0a13,13,0,0,1-9.19,22.19Zm0-23a10,10,0,1,0,7.07,2.93h0A9.91,9.91,0,0,0,109.43,320.57Z"/><path class="cls-8" d="M398,343.57a13,13,0,1,1,9.19-22.19h0A13,13,0,0,1,398,343.57Zm0-23A10,10,0,1,0,405,323.5h0A9.93,9.93,0,0,0,398,320.57Z"/><path class="cls-3" d="M102,316.83a4.05,4.05,0,0,0-2-5c-2-1-11.67,2.18-15,8-4,7-3,16,0,20,2.16,2.89,7-2,7-2s-3-8-1-13S102,316.83,102,316.83Z"/><path class="cls-3" d="M391,316.83a4.05,4.05,0,0,0-2-5c-2-1-11.67,2.18-15,8-4,7-3,16,0,20,2.16,2.89,7-2,7-2s-3-8-1-13S391,316.83,391,316.83Z"/><path class="cls-8" d="M89.8,342.24h-.28a3.64,3.64,0,0,1-2.72-1.51c-3.4-4.54-4.41-14.1-.1-21.64,2.18-3.81,6.37-6.14,8.68-7.18,2.69-1.22,6.48-2.33,8.29-1.42a5.46,5.46,0,0,1,2.74,6.85l-.25.69-.68.23c-2.33.77-8.66,3.57-10.09,7.13-1.76,4.4,1,11.84,1,11.92l.33.9-.67.68C95.5,339.46,92.6,342.24,89.8,342.24Zm12.09-29.12c-2.22,0-9.78,2.55-12.59,7.46-3.53,6.18-2.89,14.63-.1,18.35a.65.65,0,0,0,.53.31c.9.06,2.44-.92,3.54-1.85-.77-2.39-2.44-8.67-.66-13.11,1.87-4.7,8.74-7.67,11.11-8.58a2.38,2.38,0,0,0-1.39-2.53A1.66,1.66,0,0,0,101.89,313.12Z"/><path class="cls-8" d="M378.8,342.24h-.28a3.64,3.64,0,0,1-2.72-1.51c-3.4-4.54-4.41-14.1-.1-21.64,2.18-3.81,6.37-6.14,8.68-7.18,2.69-1.22,6.48-2.33,8.29-1.42a5.46,5.46,0,0,1,2.74,6.85l-.25.69-.68.23c-2.33.77-8.66,3.57-10.09,7.13-1.76,4.4,1,11.84,1,11.92l.33.9-.67.68C384.5,339.46,381.6,342.24,378.8,342.24Zm12.09-29.12c-2.22,0-9.78,2.55-12.59,7.46-3.53,6.18-2.89,14.63-.1,18.35a.65.65,0,0,0,.53.31c.93.06,2.44-.92,3.54-1.85-.77-2.39-2.44-8.67-.66-13.11,1.87-4.7,8.74-7.67,11.11-8.58a2.38,2.38,0,0,0-1.39-2.53A1.66,1.66,0,0,0,390.89,313.12Z"/><path class="cls-6" d="M128,239.83s30-26,34-27,66-2,81,0,22,5,24,7,36,33,36,33-117-6-128-7S128,239.83,128,239.83Z"/><path class="cls-8" d="M313.1,254.55l-4.18-.22c-1.17-.06-117.15-6-128.06-7s-46.71-6-47.07-6l-3.27-.46,2.5-2.16c5-4.38,30.48-26.29,34.62-27.32,4.77-1.2,67-2,81.56,0,12.6,1.68,21.89,4.45,24.86,7.42,1.95,2,35.61,32.65,35.95,32.95ZM137.49,238.8c9.14,1.25,34.76,4.73,43.65,5.54,9.66.88,102.77,5.7,123.76,6.78-8.48-7.73-31.3-28.56-33-30.23-1.86-1.85-9-4.69-23.14-6.57-15-2-76.76-.95-80.44,0C166.09,214.88,151.23,227,137.49,238.8Z"/><path class="cls-8" d="M174.15,263.36l-33.69-4.08-.29-.2c-.61-.41-3.67-2.58-3.67-5.25a2.56,2.56,0,0,1,1-2c1.42-1.11,3.93-.64,4.8-.43l31.83,4c2.14,0,4.4,1.14,4.4,3.5,0,3-3.61,4.29-4,4.43Zm-32.59-7,32.25,3.91c.78-.33,1.69-1,1.69-1.47,0-.26-.93-.49-1.51-.5h-.18l-32.17-4a6.43,6.43,0,0,0-2.09-.18A6.11,6.11,0,0,0,141.56,256.39Z"/><path class="cls-8" d="M292.5,338.83H159.13l-.12-1.36c0-.43-4.13-43.48-19.41-54.94-16.3-12.22-20.41-36.91-20.58-38l3-.47c0,.24,4.1,24.55,19.42,36,6.92,5.19,12.49,16.42,16.56,33.35a190.93,190.93,0,0,1,3.89,22.35H290.93A223,223,0,0,1,293,300.14c3-23.17,18.68-42,19.34-42.77l2.3,1.93c-.16.19-15.76,18.95-18.66,41.23-2.95,22.55-2,36.56-2,36.7l.11,1.6Z"/><path class="cls-8" d="M97,278.83a11,11,0,1,1,11-11A11,11,0,0,1,97,278.83Zm0-19a8,8,0,1,0,8,8A8,8,0,0,0,97,259.83Z"/><path class="cls-8" d="M222.19,282.9c-39.47,0-83.56-10-84-10.11l.66-2.92c.48.11,48.29,10.95,88.63,10,24.6-.6,52.87-4.51,75.59-7.65,15.32-2.11,28.56-3.94,37.38-4.35,21.9-1,68.32,5.73,70.29,6l-.44,3c-.48-.07-48.11-7-69.71-6-8.69.4-21.86,2.22-37.11,4.33-22.79,3.15-51.16,7.07-75.92,7.67C225.77,282.88,224,282.9,222.19,282.9Z"/><path class="cls-8" d="M436.1,350.21l.14-1.73c0-.32,2.49-32.43-13.28-48.85-6.54-6.81-15.4-10-26.34-9.57-11.43.48-20.56,4.56-27.14,12.12-14.72,16.95-12,46-12,46.28l.16,1.65H223.47c-20.46,0-74.41-2.88-74.95-2.91l-1.68-.09.28-1.66c0-.26,4.29-26-8.68-41.78-6.5-7.91-16.29-12.08-29.1-12.4-12.65-.31-22.38,3.32-29,10.82-13.45,15.31-9.5,41.9-9.45,42.17l.25,1.67-1.68.06c-.84,0-20.58.7-31.43-2.23-8.63-2.33-7.74-15.07-7.16-23.5.19-2.69.43-6.05.06-6.77-.79-1.25-8-12.88-8-18.16v-17.9c-1.87-14.28,4.1-20.07,5.4-21.14,9.13-12.93,29.1-14.17,31-14.26,5.94-1.11,12.67-4.41,17.13-6.59a24.64,24.64,0,0,1,4.9-2.11c.38-.14,1.64-.82,3-1.55,9.18-5,37.09-20.16,75.25-24.62,44.19-5.16,90.66-1.51,117.1,4.39C301,217,353.15,250.32,358,253.46c4.69.58,55.74,6.94,72.9,10.63,16.72,3.59,33.65,7.82,40.88,16.49a69.82,69.82,0,0,1,14.74,32.66,75.78,75.78,0,0,1,.08,25l2.09,5-2.85,3.92Zm-285.78-5.92c9.21.48,54.78,2.82,73.15,2.82h130.9a92.35,92.35,0,0,1,.57-15.77c1.1-9,4.12-21.73,12.28-31.12,7.13-8.22,17-12.65,29.28-13.16,11.83-.5,21.47,3,28.63,10.5,8.77,9.14,12.13,22.59,13.41,32.27a101.5,101.5,0,0,1,.79,17.18l44.94-2.76,1-1.41-1.79-4.25.09-.45a73.16,73.16,0,0,0,0-24.38A67.06,67.06,0,0,0,469.5,282.5c-6.62-7.94-23-12-39.21-15.48-17.77-3.81-72.43-10.56-73-10.63l-.34,0-.29-.19c-.56-.36-56.21-36.24-80.62-41.68-26.2-5.85-72.26-9.46-116.1-4.34-37.59,4.39-65.12,19.36-74.16,24.28-2.68,1.45-3.33,1.8-3.92,1.87a37.27,37.27,0,0,0-4.07,1.85c-4.63,2.26-11.63,5.69-18,6.86l-.21,0c-.21,0-20.41.95-28.87,13.17l-.15.21-.21.15c-.24.19-6.22,4.8-4.38,18.58v18.2c0,3.75,5.44,13.28,7.53,16.63.82,1.42.69,3.9.37,8.51-.52,7.45-1.31,18.71,5,20.39,8.66,2.35,23.89,2.27,28.89,2.17a79.57,79.57,0,0,1-.18-14.33c.93-11.9,4.58-21.78,10.55-28.58,7.2-8.2,17.74-12.19,31.31-11.85s24.27,4.88,31.35,13.5c7.26,8.85,9.4,20.41,9.92,28.55A77.45,77.45,0,0,1,150.32,344.29Zm-68.81-111h0Z"/><path class="cls-8" d="M62.08,245.57H60l-6.82,0,6.2-2.83c.25-.11,24.83-11.32,30.39-14.65,15-9,48.53-16.23,50-16.53,4.82-.88,16.07-2.39,17.28,2.45.34,1.37.91,3.66-17.31,14.65-8.85,5.33-19.06,10.84-23.48,13C108.85,245.34,71.54,245.57,62.08,245.57Zm86.67-31.95a48.32,48.32,0,0,0-8.48.84c-.31.07-34.39,7.39-49,16.16-4,2.37-16.65,8.34-24.43,11.94,15.82-.12,42.59-.87,48-3.57,4.1-2.05,13.72-7.23,22.26-12.34,14.25-8.51,16.53-11.37,16.89-12.09C153.58,214,151.67,213.62,148.75,213.62Z"/><path class="cls-8" d="M23.82,286l-.17-1.4c-.21-1.75-2-17.23.52-22,2.66-5.08,13.82-5.74,15.23-5.8.57,0,6-.38,8.65,2.92,1.6,1.95,1.89,4.65.89,8-3.45,11.49-9.07,18.07-15.44,18.07-5.87,0-8.25.13-8.28.13Zm16.46-26.23c-.39,0-.63,0-.64,0h-.07c-4.17.18-11.32,1.48-12.74,4.2s-1,12.51-.35,18.88c1.3,0,3.55-.08,7-.08,4.87,0,9.57-5.95,12.56-15.93.71-2.34.59-4.11-.33-5.24C44.38,260,41.55,259.81,40.28,259.81Z"/></svg><?xml version="1.0" ?><svg id="a" class="svg-flag" width="90px" height="70px" viewBox="0 0 750 600" xmlns="http://www.w3.org/2000/svg"><path d="M531.28,222.88c-1.5-13.26-1.51-29.69-13.08-38.57-15.93-9.99-35.84-9.58-53.65-5.76-19.19,3.95-36.56,13.31-54.23,21.41-26.18,11.67-53.12,21.68-81.01,28.38-21.64,5.39-43.15,12.42-65.43,14.56-5.25,.89-16.74-.5-26.38-.35-.09-2.54-.2-5.08-.32-7.62-.08-6.95,1.83-15.66-4.84-20.28-6.18-4.2-12.93,2.65-13.5,8.87-1.8,11.51-.79,23.16-.38,34.74,1.4,25.7,1.01,51.45,.89,77.18,.2,9.11,.64,18.22,1.04,27.33-8.89,3.83-9.6,20.46,.5,23.63,.08,0,.16,0,.24,0,.08,6.96,0,13.92-.39,20.88-2.3,39.77-7.31,79.46-4.8,119.36,1.64,10.92-.63,37.82,6.85,44.66,8.85,8.1,18.88-4.36,17.31-13.46-.58-6.2-.93-12.4-1.19-18.62-.64-21.48-.51-43.64-2.09-65.86-.49-4.23-.88-8.47-1.22-12.7,9.5,3.56,19.76,5.13,29.79,6.14,38.06,5.72,76.88,.47,111.55-16.47,18.3-7.86,35.13-19.41,54.63-24.27,16.06-4.19,32.76-3.96,49.1-1.76,13.42,1.5,25.88,7.18,39.1,9.4,16.45,2.38,12.63-20.02,12.8-30.44-.18-14.46,.97-28.88,2.25-43.27,4.55-45.77-1.52-91.44-3.54-137.14Zm-47.75,92.33c-8.39,.88-16.65,2.46-24.81,4.46-.18-5.52-.37-11.04-.61-16.56,.14-6.96,.36-13.91,.67-20.87,11.79-2.31,23.74-3.77,35.78-4.33,4.93-.24,9.88-.51,14.79-.05,1.79,.29,3.56,.78,5.3,1.21-.25,8.06-.8,16.11-1.52,24.11-.29,4.69-.53,9.39-.73,14.09-9.35-2.68-19.13-3.4-28.87-2.07Zm-110.24,29.93c-5.44,1.2-10.92,2.13-16.43,2.91,.12-10.74,.15-21.49,.47-32.23,.08-1.52,.17-3.04,.26-4.56,7.18-1.59,14.3-3.42,21.34-5.64,3.57-.84,7.11-1.78,10.63-2.76,.38,12.49,.61,24.97,.31,37.46-5.52,1.62-11.05,3.23-16.58,4.82Zm-31.46,90.51c-14.74,6.04-30.09,10.46-45.9,12.77-.11-1.73-.2-3.45-.11-5.13-.27-13.28-.28-24.97,.42-39.12,.59-8.58,.7-17.15,.56-25.72,14.18-1.51,28.47-2.5,42.59-4.5,.72,20.57,1.8,41.12,2.43,61.7Zm-104.69-83.9c.09-8.71,.24-17.43,.39-26.15,2.49,.13,4.99,.15,7.22,.45,10.54,.48,21.05-.21,31.52-1.41,.41,10.43,1.04,20.85,1.57,31.21-13.76,1.34-27.49,2.95-41.22,4.64,.17-2.91,.34-5.82,.52-8.73Zm76.62,1.33c-5.95,.31-11.89,.73-17.83,1.19-.49-9.98-1.06-19.96-1.35-29.95,.01-.72,.03-1.44,.04-2.16,3.22-.48,6.43-.98,9.64-1.46,11.57-1.99,23.19-3.73,34.75-5.77-.02,.57-.04,1.14-.06,1.71-.35,11.21-.36,22.41-.18,33.6-8.35,.88-16.71,1.7-25.01,2.85Zm50.37-103.63c1.07-3.26,1.13-6.44,.52-9.23,8.19-3.77,16.29-7.81,24.42-11.79-.01,.15-.02,.3-.03,.46-1.06,17.85-.7,35.69-.13,53.54-9.84,1.69-19.69,3.44-29.54,5.17,1.19-12.76,2.75-25.48,4.77-38.14Zm43.7,47.83c8.76-2.88,17.47-5.95,26.23-8.89,2.09-.63,4.2-1.23,6.31-1.81-.04,1.25-.07,2.51-.11,3.76-.51,11.48-.2,22.93,.63,34.35-4.58,1.42-9.13,2.92-13.66,4.45-6.4,1.95-12.81,3.88-19.23,5.81,.26-12.55,.02-25.11-.17-37.67Zm98.71-86.61h0c3.99,12.47,6.28,25.26,7.4,38.18-9.44-1.1-19.16,.81-28.45,2.6-8.65,2-17.06,4.77-25.36,7.86,1.04-14.17,2.46-28.31,4.32-42.39,.16-3.91,1.2-8.27,1.72-12.56,13.83-.76,27.87,.06,40.38,6.3Zm-60.39-4.01c-.25,1.63-.49,3.26-.72,4.89-2.84,18.32-3.84,36.81-4.47,55.32-10.95,4.42-21.93,8.78-33.26,12.05,0-.68,0-1.37,0-2.05,.14-19.25,.22-38.49,1.14-57.72,12.05-5.3,24.37-9.83,37.32-12.49Zm-116.56,45.71c4.96-1.25,9.83-2.34,15.06-3.99-2.78,13.98-3.98,28.25-4.7,42.54-14.84,2.47-29.71,4.71-44.62,6.41,.52-12.07,1.37-24.12,2.74-36.1,10.51-3.02,20.96-6.36,31.51-8.85Zm-78.25,16.42c9.08,.31,17.95-.76,26.72-2.53-1.47,10.9-2.1,21.9-2.22,32.94-12.59,.97-25.22,1.44-37.9,1.22,.14-10.68,.2-21.36,.12-32.04,4.43,.17,8.9,.15,13.28,.4Zm-15.81,176.33c-.3-.13-.59-.22-.87-.28-.8-19.49-.34-38.99,.57-58.49,14.75-.92,29.39-4.09,44.1-5.98,1.46,23.21,2.56,46.44,3.14,69.69-15.88,1.58-32.17,1.71-46.94-4.93Zm119.6-15.38c0-1.12,.02-2.23,.09-3.34-.19-12.82-.29-26.73,.29-40.84,.38-4.87,.64-9.74,.84-14.62,.84-.19,1.69-.37,2.53-.56,10.78-2.59,21.01-6.82,31.29-10.91,.49,12.61,1.32,25.2,1.65,37.81,.28,3.19,.56,9.37,1.37,15.31-12.91,5.3-25.52,11.58-38.07,17.14Zm51.32-22.14c-.12-.77-.23-1.55-.34-2.32-.76-6.6-.36-13.25-.3-19.87,0-10.76,.79-21.5,1.44-32.24,3.07-.99,6.16-1.9,9.31-2.65,8.7-2.21,17.45-4.33,26.32-5.62,.84,6.91,1.81,13.8,2.86,20.68,1.36,7.07,2.14,23,4.41,35.23-15.15-.92-29.63,2.04-43.7,6.79Zm58.38-4.74c-1.15-5.13-2.08-10.31-2.79-15.52-1.39-14.53-2.06-29.11-2.56-43.7,16.7-.67,33.91-1.99,49.76,3.73,.79,.25,1.68,.6,2.64,.98,.18,23.14,1.69,46.28,4.94,69.16-17.46-4.22-34.34-11.07-51.98-14.66Z"/></svg>`;
    wrapperCarSvg.classList.add('wrapper-car-svg');
    wrapperBtnsSecondRow.append(btnsAB, wrapperCarSvg);
    raceBlockItem.setAttribute('id', `${car.id}`);
    raceBlockItem.setAttribute('name', `${car.name}`);
    raceBlockItem.append(wrapperBtnsSelectRemove, wrapperBtnsSecondRow);
    document.body.append(raceBlockItem);
    return raceBlockItem;
  }

  addCarToPage(run: (props: ICar) => void) {
    const inputCreate = document.querySelector('.btn-create-car');
    (inputCreate as HTMLInputElement).addEventListener('click', () => {
      const nameCar = document.querySelector('.input-name-car') as HTMLInputElement;
      const colorCar = document.querySelector('.input-color-car') as HTMLInputElement;
      run({ name: nameCar.value, color: colorCar.value });
      nameCar.value = '';
    });
  }

  runUpdateCar(handler: (id: number, props: ICar) => void) {
    const btnUpdate = document.querySelector('.btn-update-car') as HTMLButtonElement;
    const nameUpdateCar = document.querySelector('.input-rename-car') as HTMLInputElement;
    (btnUpdate as HTMLButtonElement).addEventListener('click', () => {
      const updateName = (document.querySelector('.input-rename-car') as HTMLInputElement).value;
      const blockRace = Array.from(document.querySelectorAll('.race-block-items'));
      const raceUpdBlock = document.querySelector(`[name=${updateName}]`);
      console.log(raceUpdBlock);
      const filteredUpdate = blockRace.filter((x) => x.getAttribute('name') === (updateName.trim()));
      const updateColor = (document.querySelector('.input-update-color-car') as HTMLInputElement).value;
      if (filteredUpdate.length > 0) {
        console.log((filteredUpdate[0] as HTMLDivElement).getAttribute('id'));
        handler(Number((filteredUpdate[0] as HTMLDivElement).getAttribute('id')), { name: updateName, color: updateColor });
        nameUpdateCar.value = '';
        nameUpdateCar.disabled = true;
      }
    });
  }

  select(response: ICar) {
    const updateName = document.querySelector('.input-rename-car') as HTMLInputElement;
    const updateColor = document.querySelector('.input-update-color-car') as HTMLInputElement;
    updateName.value = response.name;
    updateColor.value = response.color;
  }

  runSelectCarBtn(handler: (id: number) => void) {
    const wrapperCars = document.querySelector('.wrapper-cars');
    const nameUpdateCar = document.querySelector('.input-rename-car') as HTMLInputElement;
    (wrapperCars as HTMLDivElement).addEventListener('click', (event) => {
      if ((event.target as HTMLButtonElement).classList.contains('btn-select')) {
        nameUpdateCar.disabled = false;
        (event.target as HTMLButtonElement).classList.add('active-select-btn');
        const selectCarForUpdate = (event.target as HTMLButtonElement).closest('.race-block-items');
        const id = Number((selectCarForUpdate as HTMLDivElement).getAttribute('id'));
        handler(id);
      }
    });
    (nameUpdateCar as HTMLInputElement).value = '';
    nameUpdateCar.disabled = true;
  }

  runDeleteCarBtn(handler: (id: number) => void) {
    const wrapperCars = document.querySelector('.wrapper-cars');
    (wrapperCars as HTMLDivElement).addEventListener('click', (event) => {
      if ((event.target as HTMLButtonElement).classList.contains('btn-remove')) {
        const carForDelete = (event.target as HTMLButtonElement).closest('.race-block-items');
        const id = Number((carForDelete as HTMLDivElement).getAttribute('id'));
        handler(id);
      }
    });
  }

  runDriveCarBtn(handler: (query: IQueryParams) => Promise<IDriveParams>) {
    const carsBlock = document.querySelector('.wrapper-cars') as HTMLDivElement;
    carsBlock.addEventListener('click', async (event: Event) => {
      if (((event.target) as HTMLButtonElement).textContent === 'A') {
        const btnB = ((event.target) as HTMLButtonElement).nextElementSibling;
        (btnB as HTMLButtonElement).disabled = false;
        ((event.target) as HTMLButtonElement).setAttribute('disabled', 'true');
        const id = (((event.target) as HTMLButtonElement).closest('.race-block-items') as HTMLDivElement).getAttribute('id') as string;
        const carImg = ((((event.target) as HTMLButtonElement).closest('.car-controls-btns') as HTMLDivElement).nextElementSibling as HTMLDivElement).firstChild as HTMLElement;
        const query = {
          id: Number(id),
          status: 'started',
        };
        const { velocity, distance }: IDriveParams = await handler(query);
        const animationTime = distance / velocity;
        console.log(animationTime);
        query.status = 'drive';
        (carImg as HTMLElement).style.animation = `drive ${animationTime}ms ease-in-out 0s 1 normal forwards running`;
        try {
          console.log(1);
          await handler(query);
        } catch (e) {
          carImg.style.animationPlayState = 'paused';
        }
      }
    });
  }
}
