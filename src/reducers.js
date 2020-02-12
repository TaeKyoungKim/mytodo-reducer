export const todoRedcer =(todos, action)=>{
    switch (action.type) {
        case "ADD_TODO":
            
            // return;
            // return [...todos, {'title':action.payload, 'id':String(todos.length+1), 'status':'todo'}]
            
           fetch('http://localhost:8008/api/todo',{
                method:'post',
                headers:{'Content-Type':'application/json'
            },
                body:JSON.stringify({
                    'title':action.payload,
                    'id':todos.length+1,
                    'status':'todo'
                })
            }).then(response=>response.json())
            .then(res=>{
                console.log(res)
                // debugger;
                
            })
           
            return [...todos, {'title':action.payload, 'id':String(todos.length+1), 'status':'todo'}]
            
            
            
        case "SET_INIT_DATA":
        
            return action.payload;
        case "CHANGE_TODO_STATUS":

            return todos.map(todo=>{
                if(todo.id === action.payload){
                    if(todo.status === 'done') todo.status ="todo"
                    else todo.status= "done"
                }
          
                return todo
              })
        default:
            throw new Error();
    }
}