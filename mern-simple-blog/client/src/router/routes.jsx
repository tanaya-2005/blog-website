import ErrorBoundary from '../error-boundary';
import RootLayout from '../layouts/root-layout';

import { createArticle } from '../actions/create-article';
import { deleteArticle } from '../actions/delete-article';
import { updateArticle } from '../actions/update-article';
import { fetchArticles } from '../loaders/fetch-articles';
import { fetchSingleArticle } from '../loaders/fetch-single-article';

import ArticlePage from '../pages/article-page';
import CreateArticlePage from '../pages/create-article-page';
import HomePage from '../pages/home-page';

export const routes = [
    {
        path: '/articles/delete/:articleId',
        action: deleteArticle,
    },
    {
        path: '/articles/update/:articleId',
        action: updateArticle,
    },
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: '',
                element: <HomePage />,
                loader: fetchArticles,
            },
            {
                path: 'create',
                element: <CreateArticlePage />,
                action: createArticle,
            },
            {
                path: 'articles/:articleId',
                element: <ArticlePage />,
                loader: fetchSingleArticle,
            },
        ],
    },
];
