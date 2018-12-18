export interface Clips {

    data: Datum[];
    pagination: Pagination;
}

export interface Datum {
    id: string;
    url: string;
    embed_url: string;
    broadcaster_id: string;
    creator_id: string;
    video_id: string;
    game_id: string;
    language: string;
    title: string;
    view_count: number;
    created_at: Date;
    thumbnail_url: string;
}

export interface Pagination {
    cursor: string;
}
