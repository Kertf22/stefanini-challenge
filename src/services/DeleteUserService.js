const AWS =  require("aws-sdk");


class DeleteUserService {
    async execute(user_id){
        
        const USERS_TABLE = process.env.USERS_TABLE;
        const dynamoDb = new AWS.DynamoDB.DocumentClient();
    
        const params = {
            TableName: USERS_TABLE,
            Key:{
                id: user_id
            }
        }
        
        try {
            await dynamoDb.delete(params).promise();

            return { message:"DeleteItem succeeded" }
        } 
          catch (error) {
            throw new Error("Could not delete user");
        }
    }
}

module.exports = DeleteUserService