export interface Inews extends ISources {
    sources: ISources[];
}

export interface ISources {
    author: string;
    title: string;
    description: string;
    publishedAt: string;
    url: string;
    urlToImage: string;
    content?: string;
}

export interface ISource {
    source: {
        id: null | string;
        name: string;
    };
}

export interface IArticles extends ISources, ISource {
    articles: [ISources, ISource];
}
