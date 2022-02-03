import { createArticleService, getAllArticlesService, getOneArticleService, updateArticleService, deleteArticleService }
from "../services/articleServices.js"
import {uploadFile} from "../helpers/fileUpload.js"
export class ArticleController {
    async createArticle(req, res) {
        try {
            req.body.image = await uploadFile(req)
            const data = {
                title: req.body.title,
                content: req.body.content,
                image: req.body.image,
                create_at: new Date()
            }
            console.log(data)
            const article = await createArticleService(data)
            res.status(200).json({ status: 200, message: "Article created successfully", data: article })
        } catch (error) {
            res.status(500).json({message: "Internal server error!"})
        }
    }
    async getAllArticles(req, res) {
        try {
            const articles = await getAllArticlesService()
            res.status(200).json({ status: 200, message: "These are all the articles", data: articles })
        } catch (error) {
            res.status(500).json({message: "Internal server error!"})
        }
    }
    async getArticle(req, res) {
        try {
            const article = await getOneArticleService(req.params.id)
            res.status(200).json({ status: 200, message: "article found", data: article })
        } catch (error) {
            res.status(500).json({message: "Internal server error!"})
        }
    }
    async updateArticle(req, res) {
        try {

            if (req.file) {
                req.body.image = await uploadFile(req)
            }
            const articleUpdate={
                title: req.body.title,
                content: req.body.content,
                image: req.body.image
            }
         const article = await updateArticleService(req.params.id,articleUpdate)
         res.status(200).json({ status: 200, message: "article updated successfully", data: article })
        } 
        catch (error) {
            res.send(error.message)
            res.status(500).json({message: "Internal server error!"})
        }

     }
    async deleteArticle(req, res) { 
        try{
            const deleteMessage = await deleteArticleService(req.params.id);
            res.status(200).json({status:200, message: deleteMessage})
        }
        catch (error){
            res.send(error.message)
            res.status(500).json({message: "Internal server error!"})
        }
    }
}