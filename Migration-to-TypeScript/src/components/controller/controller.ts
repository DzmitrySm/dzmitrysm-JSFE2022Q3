import AppLoader from './appLoader';
import { IFinalyNews } from '../../types/index';
import { IFinalySources } from '../../types/index';
import { Callback } from '../../types/index';

class AppController extends AppLoader {
    public getSources(callback: Callback<IFinalySources>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<IFinalyNews>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target !== null) {
                target = target.parentNode as HTMLElement;
            }
        }
    }
}

export default AppController;
