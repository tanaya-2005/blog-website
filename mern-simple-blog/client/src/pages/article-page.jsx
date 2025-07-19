import { useLoaderData, useNavigation } from 'react-router-dom';
import ArticleCard from '../components/article-card';
import LoadingSpinner from '../components/loading-spinner';

function ArticlePage() {
    const article = useLoaderData();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    if (isLoading) return <LoadingSpinner />;

    return (
        <main className='bg-gradient-to-b from-gray-50 to-white pt-20'>
            <div className='max-w-4xl mx-auto px-4 py-8'>
                <ArticleCard article={article} showButtons={true} />
            </div>
        </main>
    );
}

export default ArticlePage;
