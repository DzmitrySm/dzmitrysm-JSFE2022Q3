const baseUrl = 'http://127.0.0.1:3000/garage';

export default class GarageModel {
  async getCars() {
    const response = await fetch(`${baseUrl}`);
    return {
      cars: await response.json(),
      number: response.headers.get('X-Total-Count'),
    };
  }
}
