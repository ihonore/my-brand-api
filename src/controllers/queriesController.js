import { createQueryService, getAllQueriesService, getOneQueryService, deleteQueryService }
from "../services/queryServices.js"
export class QueryController {
    async createQuery(req, res) {
        try {
            const data = {
                senderName: req.body.senderName,
                message: req.body.message,
                email: req.body.email,
                location: req.body.location,
                create_at: new Date()
            }
            console.log(data)
            const query = await createQueryService(data)
            res.status(200).json({ status: 200, message: "Query created successfully", data: query })
        } catch (error) {
            console.log(error)
        }
    }
    async getAllQueries(req, res) {
        try {
            const queries = await getAllQueriesService()
            res.status(200).json({ status: 200, message: "These are all the queries", data: queries })
        } catch (error) {
            console.log(error)
        }
    }
    async getQuery(req, res) {
        try {
            const query = await getOneQueryService(req.params.id)
            res.status(200).json({ status: 200, message: "Query found", data: query })
        } catch (error) {
            console.log(error)
        }
    }
    async deleteQuery(req, res) { 
        try{
            const deleteMessage = await deleteQueryService(req.params.id);
            res.status(200).json({status:200, message: deleteMessage})
        }
        catch (error){
            res.send(error.message)
            console.log(error)
        }
    }
}