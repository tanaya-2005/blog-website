import { useState } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import ArticleDetails from './article-details';
import ArticleUpdateForm from './article-update-form';
import { createPortal } from 'react-dom';
import ConfirmationModal from './confirmation-modal';

function ArticleCard({ article, showButtons }) {
    const [isEdit, setIsEdit] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const fetcher = useFetcher();

    return (
        <article className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
            {fetcher.data && (
                <div className='px-6 py-3 border-b border-gray-100'>
                    {fetcher.data.success === false ? (
                        <div className='text-red-500 text-sm font-medium'>
                            {fetcher.data.message}
                        </div>
                    ) : (
                        <div className='text-green-500 text-sm font-medium'>
                            {fetcher.data.message}
                        </div>
                    )}
                </div>
            )}

            <div className='p-6'>
                {!isEdit ? (
                    <>
                        <ArticleDetails article={article} truncate={!showButtons} />
                        <div className='mt-6 flex gap-3'>
                            {!showButtons ? (
                                <Link
                                    to={`/articles/${article._id}`}
                                    className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02]'
                                >
                                    Read More
                                </Link>
                            ) : (
                                <div className='flex gap-3'>
                                    <button
                                        onClick={() => setIsEdit((prev) => !prev)}
                                        className='px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm font-medium'
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className='px-4 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium'
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <ArticleUpdateForm article={article} fetcher={fetcher} setIsEdit={setIsEdit} />
                )}
            </div>

            {showModal &&
                createPortal(
                    <ConfirmationModal
                        onClose={() => setShowModal(false)}
                        onConfirm={() => {
                            fetcher.submit(null, {
                                method: 'POST',
                                action: `/articles/delete/${article._id}`,
                            });
                            setShowModal(false);
                        }}
                    />,
                    document.getElementById('root-modal')
                )}
        </article>
    );
}

export default ArticleCard;
