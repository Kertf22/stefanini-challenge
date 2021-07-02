const AWS =  require("aws-sdk");


class GetUserService{
    async execute(user_id){
        
        const USERS_TABLE = process.env.USERS_TABLE;
        const dynamoDb = new AWS.DynamoDB.DocumentClient();
    
        const params = {
            TableName: USERS_TABLE,
            Key:{
                id:user_id
            }
        }
        
        try {
            const user = await dynamoDb.get(params).promise()
            if (!user){
                throw new Error("User does not exist!");
            }
            return user
        } 
          catch (error) {
            throw new Error("Could not find user");
        }
    }
}

module.exports = GetUserService