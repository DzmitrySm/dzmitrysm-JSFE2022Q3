import News from './news/news';
import Sources from './sources/sources';
import { IFinalyNews } from '../../types/index';
import { IFinalySources } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: Readonly<IFinalyNews>): void {
        const values = data?.articles ? data?.articles : [];
        console.log(values);
        this.news.draw(values);
    }

    public drawSources(data: Readonly<IFinalySources>): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
