import { API_ENDPOINTS } from '../constants/api-endpoints';

export const fetchArticles = async () => {
    const res = await fetch(API_ENDPOINTS.ARTICLES);
    if (!res.ok) throw new Error('Failed to load articles', { status: 500 });

    const data = await res.json();
    return data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};
