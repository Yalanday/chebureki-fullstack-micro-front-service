export interface PromoItemSlide {
    id: number,
    city: string,
    src: string,
    text: string,
    price: number,
}

export interface TypeItemSlide {
    id: number,
    city: string,
    name: string,
    type: string,
    price: number,
    images: {src: string}[],
}

export type FilterItemType = {
    id: number
    name: string,
    value: string,
    active: boolean,
}

export type ConnectionType = {
    id: number,
    img: string,
    link: string,
    label: string
}

export type HomeLinkType = {
    id: number,
    href: string,
    text: string,
}

export type NewsType = {
    id: number,
    title: string,
    text: string,
    author: string,
    date: string,
}

export interface PropsStyle {
    borderColor: string;
    textColor: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    hoverTextColor: string;
}

export type itemFavoriteType = {
    img: string,
    link: string,
    label: string
}

export type PropertyCatalogType = {
    id: number;
    developer: string;
    rec: boolean;
    actual: boolean;
    strong: boolean;
    offer: string;
    title: string;
    src: string;
    city: string;
    district: string;
    location: string;
    favorite: boolean;
    type: string;
    typeValue: string;
    price: number;
    labelInfo: string;
    options: {
        bedroom: string;
        square: string;
    };
    images: {
        id: number;
        src: string;
    }[];
}
