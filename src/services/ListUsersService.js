const AWS =  require("aws-sdk");

class ListUsersService{
    async execute(){
        const USERS_TABLE = process.env.USERS_TABLE;
        const dynamoDb = new AWS.DynamoDB.DocumentClient();
    
        const params = {
            TableName: USERS_TABLE,
        }
        
        try {
            const data = await dynamoDb.scan(params).promise();

            if (!data){
                throw new Error("There are no users on database!");
            }

            return data;
        } 
          catch (error) {
            throw new Error("Could not fetch data");
        }
    }
}

module.exports = ListUsersService