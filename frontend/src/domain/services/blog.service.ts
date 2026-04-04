import apiClient from './api-client';

export interface Blog {
    id: string;
    title: string;
    slug: string;
    content: string;
    thumbnail?: string;
    author_id: string;
    category_id: string;
    published_at: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    author?: {
        name: string;
    };
    category?: {
        name: string;
    };
}

export interface BlogResponse {
    items: Blog[];
    meta: {
        total: number;
        page: number;
        limit: number;
    }
}

export const blogService = {
    async getPublicBlogs(params?: { page?: number; limit?: number; category_id?: string }): Promise<BlogResponse> {
        const response = await apiClient.get<BlogResponse>('/v1/public/blogs', { params });
        return response.data;
    },

    async getBlogBySlug(slug: string): Promise<Blog> {
        const response = await apiClient.get<Blog>(`/v1/public/blogs/${slug}`);
        return response.data;
    }
};
