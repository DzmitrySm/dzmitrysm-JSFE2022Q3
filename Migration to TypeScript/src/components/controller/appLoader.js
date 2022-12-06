import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1adcca06e463459899c6f272d67c3608', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
