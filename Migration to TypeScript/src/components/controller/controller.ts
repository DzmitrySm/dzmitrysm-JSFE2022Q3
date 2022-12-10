import AppLoader from './appLoader';
import { INews } from '../../types/index';
import { ISources } from '../../types/index';
import { Callback } from '../../types/index';

class AppController extends AppLoader {
    getSources(callback: Callback<ISources>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback<INews>) {
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
