import { redirect } from 'react-router-dom';
import { API_ENDPOINTS } from '../constants/api-endpoints';

export const createArticle = async ({ request }) => {
    try {
        const formData = new URLSearchParams(await request.formData());
        const newArticle = {
            title: formData.get('title'),
            text: formData.get('text'),
            image: formData.get('image'),
            author: formData.get('author'),
            category: formData.get('category'),
        };

        if (!newArticle.title || !newArticle.text || !newArticle.author || !newArticle.category) {
            return { success: false, message: 'Please fill in all the fields' };
        }

        const res = await fetch(API_ENDPOINTS.ARTICLES, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newArticle),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return { success: false, message: errorData.message || 'Failed to create article' };
        }

        const data = await res.json();

        if (data.success) {
            return redirect('/');
        }

        return { success: true, message: 'The article has been successfully created', data };
    } catch (error) {
        console.error('Error creating article:', error);
        return { success: false, message: 'An error occurred while creating the article' };
    }
};
