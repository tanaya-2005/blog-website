import { useState } from 'react';
import { Form, useNavigation, useSubmit } from 'react-router-dom';
import LoadingSpinner from './loading-spinner';

function ArticleCreateForm() {
    const submit = useSubmit();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        image: '',
        author: '',
        category: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
        const newErrors = {};

        if (!data.title?.trim()) newErrors.title = 'title is required';
        if (!data.text?.trim()) newErrors.text = 'text is required';
        if (!data.author?.trim()) newErrors.author = 'author is required';
        if (!data.category?.trim()) newErrors.category = 'category is required';

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        submit(e.target, { method: 'post', action: '/create' });
    };

    if (isSubmitting) return <LoadingSpinner />;

    return (
        <Form
            method='POST'
            onSubmit={handleSubmit}
            className='bg-white rounded-xl shadow-sm p-6 space-y-6'
        >
            <div className='space-y-4'>
                <div className='flex flex-col gap-2'>
                    <input
                        value={formData.title}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                            errors.title
                                ? 'border-red-300 bg-red-50 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                        } outline-none transition-colors`}
                        type='text'
                        name='title'
                        placeholder='Article Title'
                    />
                    {errors.title && (
                        <span className='text-red-500 text-sm pl-1'>{errors.title}</span>
                    )}
                </div>

                <div className='flex flex-col gap-2'>
                    <textarea
                        value={formData.text}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border min-h-[200px] ${
                            errors.text
                                ? 'border-red-300 bg-red-50 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                        } outline-none transition-colors`}
                        name='text'
                        placeholder='Article Content'
                    ></textarea>
                    {errors.text && (
                        <span className='text-red-500 text-sm pl-1'>{errors.text}</span>
                    )}
                </div>

                <div className='flex flex-col gap-2'>
                    <input
                        value={formData.image}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                            errors.image
                                ? 'border-red-300 bg-red-50 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                        } outline-none transition-colors`}
                        type='text'
                        name='image'
                        placeholder='Image URL'
                    />
                    {errors.image && (
                        <span className='text-red-500 text-sm pl-1'>{errors.image}</span>
                    )}
                </div>

                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className='flex-1'>
                        <input
                            value={formData.author}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${
                                errors.author
                                    ? 'border-red-300 bg-red-50 focus:border-red-500'
                                    : 'border-gray-200 focus:border-blue-500'
                            } outline-none transition-colors`}
                            type='text'
                            name='author'
                            placeholder='Author Name'
                        />
                        {errors.author && (
                            <span className='text-red-500 text-sm pl-1'>{errors.author}</span>
                        )}
                    </div>

                    <div className='flex-1'>
                        <input
                            value={formData.category}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${
                                errors.category
                                    ? 'border-red-300 bg-red-50 focus:border-red-500'
                                    : 'border-gray-200 focus:border-blue-500'
                            } outline-none transition-colors`}
                            type='text'
                            name='category'
                            placeholder='Category'
                        />
                        {errors.category && (
                            <span className='text-red-500 text-sm pl-1'>{errors.category}</span>
                        )}
                    </div>
                </div>
            </div>

            <button
                type='submit'
                className='w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70'
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Creating...' : 'Create Article'}
            </button>
        </Form>
    );
}

export default ArticleCreateForm;
