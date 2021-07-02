const AWS =  require("aws-sdk");
const { v4 } = require("uuid");


class CreateUserService {
    async execute(id,name,idade,cargo){
        
        if(typeof name !== 'string' || typeof idade !== 'number' || typeof cargo !== 'string'){
            console.error('Validation Failed')
            throw new Error("Could not create user")
        }

        const USERS_TABLE = process.env.USERS_TABLE;
        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        const timestamp = new Date().getTime();

        // Isso é apenas necessário para fazer testes
        const new_id = id ? id : v4()

        const params = {
            TableName: USERS_TABLE,
            Item:{
                id: new_id,
                user_name: name,
                idade: idade,
                cargo: cargo,
                created_at: timestamp,
                updated_at: timestamp
            }
        }
    
        try {
            await dynamoDb.put(params).promise();

            return params.Item
        } 
          catch (error) {
            console.log(error)
            throw new Error("Could not create user");
        }
    }
}

module.exports = CreateUserService