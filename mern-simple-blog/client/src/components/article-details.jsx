import { formatDate } from '../utils/format-date';
import { truncateText } from '../utils/truncate-text';

function ArticleDetails({ article, truncate = false }) {
    return (
        <div className='space-y-6'>
            {article.image && (
                <div className='relative h-96 -mx-6 -mt-6 mb-6'>
                    <img
                        className='w-full h-full object-cover'
                        src={article.image}
                        alt={`image for the article: ${article.title}`}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
                </div>
            )}

            <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-medium'>
                        {article.author[0].toUpperCase()}
                    </div>
                    <div>
                        <h3 className='font-medium text-gray-900'>{article.author}</h3>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                            <span>{article.category}</span>
                            <span>•</span>
                            <time>{formatDate(article.createdAt)}</time>
                        </div>
                    </div>
                </div>

                <h2 className='text-2xl font-bold text-gray-900 leading-tight'>{article.title}</h2>

                <p className='text-gray-600 leading-relaxed whitespace-pre-wrap'>
                    {truncate ? truncateText(article.text) : article.text}
                </p>

                <div className='pt-4 border-t border-gray-100'>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                        <span>Last updated:</span>
                        <time>{formatDate(article.updatedAt)}</time>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetails;
