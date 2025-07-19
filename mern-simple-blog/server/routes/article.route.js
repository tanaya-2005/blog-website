import express from 'express';
import {
    deleteArticle,
    getArticle,
    getArticles,
    postArticle,
    putArticle,
} from '../controllers/article.controller.js';

const router = express.Router();

router.get('/', getArticles);
router.get('/:id', getArticle);
router.post('/', postArticle);
router.put('/:id', putArticle);
router.delete('/:id', deleteArticle);

export default router;
