const axios = require('axios')

//https://jsonplaceholder.typicode.com/todos

//GET
exports.getAllTodos = async (req, res) => {
    try{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // res.send(data);
        res.status(200).json({
            status: 'success',
            data
        })
    } catch(err){
        console.log(err)
    }

};


//POST

//GET by ID

//UPDATE

//DELETE