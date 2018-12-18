export interface Videos {

    data: Datum[];
    pagination: Pagination;
}

export interface Datum {
    id: string;
    user_id: string;
    title: string;
    description: string;
    created_at: Date;
    published_at: Date;
    url: string;
    thumbnail_url: string;
    viewable: string;
    view_count: number;
    language: string;
    type: string;
    duration: string;
}

export interface Pagination {
    cursor: string;
}


