import { redirect } from 'react-router-dom';
import { API_ENDPOINTS } from '../constants/api-endpoints';

export const deleteArticle = async ({ params }) => {
    const id = params.articleId;
    try {
        const res = await fetch(API_ENDPOINTS.ARTICLE(id), {
            method: 'DELETE',
        });

        if (!res.ok) {
            const errorData = await res.json();
            return {
                success: false,
                message: errorData || 'Error while deleting article',
            };
        }

        return redirect('/');
    } catch (error) {
        console.error('Error while deleting article', error);
        return { sucess: false, message: 'Error while deleting article' };
    }
};
