export interface INews {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    publishedAt: string;
    url: string;
    urlToImage: string;
    content: string;
}

export interface IFinalyNews extends INews {
    articles: [INews];
}

export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
}

export interface IFinalySources extends ISources {
    sources: [ISources];
}

export interface Iloader {
    baseLink: string;
    options: { apiKey: string };
}

export type Callback<T> = (data: T) => void;
