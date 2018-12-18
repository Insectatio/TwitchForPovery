export interface TopGames {

    data: Datum[];
    pagination: Pagination;
}

    export interface Datum {
        id: string;
        name: string;
        box_art_url: string;
    }

    export interface Pagination {
        cursor: string;
}
