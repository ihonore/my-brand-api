import Query from "../models/query.js";

export const createQueryService = async (data) => {
    const query = await Query(data)
    query.save()
    return query
}

export const getAllQueriesService = async () => {
    const queries = await Query.find()
    return queries
}

export const getOneQueryService = async (id) => {
    const query = await Query.findOne({ _id: id })
    return query
}

export const deleteQueryService =async (id) =>{
    const deletedQuery = await Query.findByIdAndDelete(id)
    if(deletedQuery){
        return "Query deleted successfully"
    } else{
        return "Query does not exists"
    }
    
}
