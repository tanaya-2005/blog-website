import { API_ENDPOINTS } from '../constants/api-endpoints';

export const updateArticle = async ({ params, request }) => {
    const id = params.articleId;
    const formData = new URLSearchParams(await request.formData());
    const updatedArticle = {
        title: formData.get('title'),
        text: formData.get('text'),
        image: formData.get('image'),
        author: formData.get('author'),
        category: formData.get('category'),
    };

    try {
        const res = await fetch(API_ENDPOINTS.ARTICLE(id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedArticle),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return { success: false, message: errorData.message || 'Failed to update the article' };
        }

        const data = await res.json();
        return { success: true, message: 'The article has been successfully updated', data: data };
    } catch (error) {
        console.error('Error updating article:', error);
        return { success: false, message: 'An error occurred while updating the article' };
    }
};
