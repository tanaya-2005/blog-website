import { useActionData } from 'react-router-dom';
import ArticleCreateForm from '../components/article-create-form';

function CreateArticlePage() {
    const actionData = useActionData();

    return (
        <main className='bg-gradient-to-b from-gray-50 to-white pt-20 px-4'>
            <div className='max-w-3xl mx-auto py-8'>
                <h2 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                    Create New Article
                </h2>
                {actionData && actionData.success === false && (
                    <div className='mb-6 p-4 bg-red-50 border border-red-100 rounded-lg text-red-600'>
                        {actionData.message}
                    </div>
                )}
                <ArticleCreateForm />
            </div>
        </main>
    );
}

export default CreateArticlePage;
