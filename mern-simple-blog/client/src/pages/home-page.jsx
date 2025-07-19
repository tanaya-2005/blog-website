import { useLoaderData, useNavigation } from 'react-router-dom';
import ArticleCard from '../components/article-card';
import LoadingSpinner from '../components/loading-spinner';

function HomePage() {
    const articles = useLoaderData();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    if (isLoading) return <LoadingSpinner />;

    return (
        <main className='bg-gradient-to-b from-gray-50 to-white pt-20'>
            <div className='max-w-7xl mx-auto px-4 py-8'>
                <h1 className='text-4xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                    Latest Articles
                </h1>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {articles.map((article) => (
                        <li
                            key={article._id}
                            className='transform hover:scale-[1.02] transition-all duration-300'
                        >
                            <ArticleCard article={article} showButtons={false} />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default HomePage;
