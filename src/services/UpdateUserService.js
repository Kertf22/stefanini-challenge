const AWS = require("aws-sdk");

class UpdateUserService{
    async execute(user_id,name,idade,cargo){
        
        if(typeof name !== 'string' || typeof idade !== 'number' || typeof cargo !== 'string'){
          console.error('Validation Failed')
          throw new Error("Could not Update user")
      }

       const USERS_TABLE = process.env.USERS_TABLE;
        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        const timestamp = new Date().getTime()
        const params = {
            TableName: USERS_TABLE,
            Key:{
                id: user_id,
            },
            ExpressionAttributeNames: {
                '#user_name': 'user_name',
                '#idade': "idade",
                "#cargo": "cargo"
            },
            ExpressionAttributeValues: {
                ":n": name,
                ":i": idade,
                ":c": cargo,
                ":updated_at": timestamp,
              },
            UpdateExpression: "set #user_name = :n, #idade = :i, #cargo = :c, updated_at = :updated_at",
            ReturnValues: "ALL_NEW",

        }
        try {
            console.log("Attempting a conditional update...")
            const user = await dynamoDb.update(params).promise()

            return user
        } 
          catch (error) {
            console.log(error);
            throw new Error("Could not Update User");
        }
    }
}

module.exports = UpdateUserService