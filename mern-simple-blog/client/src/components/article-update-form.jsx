import { useState } from 'react';
import LoadingSpinner from './loading-spinner';

function ArticleUpdateForm({ article, fetcher, setIsEdit }) {
    const isSubmitting = fetcher.state === 'submitting';
    const [formData, setFormData] = useState({
        title: article.title,
        text: article.text,
        image: article.image,
        author: article.author,
        category: article.category,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetcher.submit(formData, {
            method: 'POST',
            action: `/articles/update/${article._id}`,
        });
        setIsEdit(false);
    };

    if (isSubmitting) return <LoadingSpinner />;

    return (
        <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-4'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='title' className='font-medium text-gray-700'>
                        Title
                    </label>
                    <input
                        id='title'
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, title: e.target.value }))
                        }
                        className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all'
                        placeholder='Article Title'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='text' className='font-medium text-gray-700'>
                        Content
                    </label>
                    <textarea
                        id='text'
                        name='text'
                        value={formData.text}
                        onChange={(e) => setFormData((prev) => ({ ...prev, text: e.target.value }))}
                        className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all min-h-[200px]'
                        placeholder='Article Content'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='image' className='font-medium text-gray-700'>
                        Image URL
                    </label>
                    <input
                        id='image'
                        type='text'
                        name='image'
                        value={formData.image}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, image: e.target.value }))
                        }
                        className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all'
                        placeholder='Image URL'
                    />
                </div>

                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className='flex-1 flex flex-col gap-2'>
                        <label htmlFor='author' className='font-medium text-gray-700'>
                            Author
                        </label>
                        <input
                            id='author'
                            type='text'
                            name='author'
                            value={formData.author}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, author: e.target.value }))
                            }
                            className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all'
                            placeholder='Author Name'
                        />
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <label htmlFor='category' className='font-medium text-gray-700'>
                            Category
                        </label>
                        <input
                            id='category'
                            type='text'
                            name='category'
                            value={formData.category}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, category: e.target.value }))
                            }
                            className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all'
                            placeholder='Category'
                        />
                    </div>
                </div>
            </div>

            <div className='flex gap-3'>
                <button
                    type='submit'
                    disabled={isSubmitting}
                    className='px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed'
                >
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                    type='button'
                    onClick={() => setIsEdit(false)}
                    disabled={isSubmitting}
                    className='px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed'
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default ArticleUpdateForm;
