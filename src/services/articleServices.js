import Article from "../models/article.js";

export const createArticleService = async (data) => {
    const article = await Article(data)
    article.save()
    return article
}

export const getAllArticlesService = async () => {
    const articles = await Article.find()
    return articles
}

export const getOneArticleService = async (id) => {
    const article = await Article.findOne({ _id: id })
    return article
}

export const updateArticleService =async (id,articleUpdate) =>{
    const updatedArticle = await Article.findOneAndUpdate({ _id: id }, articleUpdate, { new: true });
    return updatedArticle
    
}

export const deleteArticleService =async (id) =>{
    const deletedArticle = await Article.findByIdAndDelete(id)
    if(deletedArticle){
        return "Article deleted successfully"
    } else{
        return "Article does not exists"
    }
    
}
