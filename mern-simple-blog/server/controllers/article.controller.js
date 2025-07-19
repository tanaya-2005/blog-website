import mongoose from 'mongoose';
import Article from '../models/article.model.js';

export const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({});
        res.status(200).json({
            success: true,
            message: 'Articles have been successfully fetched',
            data: articles,
        });
    } catch (error) {
        console.error(`Error while fetching articles: ${error.message}`);
        res.status(500).json({ success: false, message: 'Error while fetching articles' });
    }
};

export const getArticle = async (req, res) => {
    const { id } = req.params;

    try {
        const articles = await Article.findById(id);
        res.status(200).json({
            success: true,
            message: 'Article has been successfully fetched',
            data: articles,
        });
    } catch (error) {
        console.error(`Error while fetching article: ${error.message}`);
        res.status(500).json({ success: false, message: 'Error while fetching article' });
    }
};

export const postArticle = async (req, res) => {
    const article = req.body;

    if (!article.title || !article.text || !article.author || !article.category) {
        return res.status(400).json({ success: false, message: 'Please fill in all the fields' });
    }

    const newArticle = new Article(article);

    try {
        await newArticle.save();
        res.status(201).json({
            success: true,
            message: 'Article successfully created',
            data: newArticle,
        });
    } catch (error) {
        console.error(`Error while creating article ${error.message}`);
        res.status(500).json({ success: false, message: 'Error while creating article' });
    }
};

export const putArticle = async (req, res) => {
    const { id } = req.params;
    const article = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Article not found' });
    }

    try {
        const updatedArticle = await Article.findByIdAndUpdate(id, article, { new: true });
        res.status(200).json({
            success: true,
            message: 'Article has been successfully updated',
            data: updatedArticle,
        });
    } catch (error) {
        console.error(`Error while updating article: ${error.message}`);
        res.status(500).json({ success: false, message: 'Error while updating article' });
    }
};

export const deleteArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Article not found' });
    }

    try {
        await Article.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Article has been successfully deleted' });
    } catch (error) {
        console.error(`Error while deleting article ${error.message}`);
        res.status(500).json({ success: false, message: 'Error while deleting article' });
    }
};
