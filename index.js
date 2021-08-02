const http = require('http');

const apiCallFromTodos = require('./todo_callback');


http.createServer((req, res) => {

        if(req.url === "/todos"){
            apiCallFromTodos.callApi(function(response){

                // changing json to object
                const obj = JSON.parse(response);

                const obj_length = Object.keys(obj).length ;
                for(var i=0;i<obj_length;i++){
                    // deleting the userId index from the object
                    delete obj[i].userId ;
                }

                // again converting object to json
                const todoJSON = JSON.stringify(obj);
                res.write(todoJSON);
                res.end();
            });
        }
    
}).listen(3000);

console.log("service running on 3000 port....");
