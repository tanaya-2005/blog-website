import { API_ENDPOINTS } from '../constants/api-endpoints';

export const fetchSingleArticle = async ({ params }) => {
    const id = params.articleId;

    const res = await fetch(API_ENDPOINTS.ARTICLE(id));
    if (!res.ok) throw new Error('Failed to load article', { status: 500 });

    const data = await res.json();
    return data.data;
};
