import { ICar } from '../types/types';

const baseUrl = 'http://127.0.0.1:3000/garage';

export default class GarageModel {
  async getCars() {
    const response = await fetch(`${baseUrl}`);
    return {
      cars: await response.json(),
      number: response.headers.get('X-Total-Count'),
    };
  }

  async createCar(props: ICar) {
    const response = await fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(props),
    });
    return response.json();
  }

  async getCar(id: number) {
    return (await fetch(`http://127.0.0.1:3000/garage/${id}`)).json();
  }

  async updateCar(id: number, body: ICar) {
    (
      await fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }
}
