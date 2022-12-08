export interface IDataSources extends ISources {
    sources: ISources[];
}

export interface INews {
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
        id: string | null;
        name: string;
    };
}

export interface IArticles extends INews, ISource {
    articles: [INews, ISource];
}

export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
}
