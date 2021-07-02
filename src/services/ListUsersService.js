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

            return data;
        } 
          catch (error) {
            console.log(error);
            throw new Error("Could not fetch data");
        }
    }
}

module.exports = ListUsersService