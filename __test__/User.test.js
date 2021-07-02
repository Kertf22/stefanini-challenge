const axios = require("axios")
const app = require("../src/app.js")



describe('Aplication Tests', () => {

    /// Teste da função de cadastro 
    it('Criando usuário', async () => {

        const params = {
            "id":"1",
            "name": "Pedro",
            "idade": 19,
            "cargo": "Assistente"
        }

        const res = await axios.default.post(process.env.API_URL + '/users', params)

        expect(res.status).toEqual(200)
        expect(res.data).toHaveProperty('user_name',params.name)
        expect(res.data).toHaveProperty('idade',params.idade)
        expect(res.data).toHaveProperty('cargo',params.cargo)
    })
    
    // Teste da função de receber os dados de determinado usuário, 
    // será utilizado o usuário criado na função de criação.

    it("Pegando usuário", async () => {
        
        const params = {
            "id":"1",
            "name": "Pedro",
            "idade": 19,
            "cargo": "Assistente"
        }

        const res = await axios.default.get(process.env.API_URL + '/users/1')
        const data = res.data

        expect(res.status).toEqual(200)
        expect(data.Item).toHaveProperty('user_name',params.name)
        expect(data.Item).toHaveProperty('idade',params.idade)
        expect(data.Item).toHaveProperty('cargo',params.cargo)

    }) 
     // Teste da função de atualização de dados de determinado usuário,
     // será utilizado o usuário criado na função de criação.
    it("Atualizando usuário", async () => {

        const params = {
            "name": "Pedro",
            "idade": 20,
            "cargo": "Engenheiro de Software"
        }

        const res = await axios.default.put(process.env.API_URL + '/users/1', params)
        
        const data = res.data

        expect(res.status).toEqual(200)
        expect(data.Attributes).toHaveProperty('user_name',params.name)
        expect(data.Attributes).toHaveProperty('idade',params.idade)
        expect(data.Attributes).toHaveProperty('cargo',params.cargo)
    })

    // Teste da função de deletar determinado usuário, será utilizado o usuário criado na função de criação.

    it("Deletando usuário", async () => {
        const res = await axios.default.delete(process.env.API_URL + '/users/1')

        expect(res.status).toEqual(200)
        expect(res.data).toHaveProperty("message")
 
    })
})
