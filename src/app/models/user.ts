export interface User {

    data: Datum[];
    pagination: Pagination;
}

export interface Datum {
    id: string;
    login: string;
    display_name: string;
    type: string;
    broadcaster_type: string;
    description: string;
    profile_image_url: string;
    offline_image_url: string;
    view_count: number;
}

export interface Pagination {
    cursor: string;
}
