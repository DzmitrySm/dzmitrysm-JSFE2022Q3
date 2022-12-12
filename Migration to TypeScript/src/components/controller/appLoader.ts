import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd836b3f09ad24676867dd02f7ec5b7ba', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
