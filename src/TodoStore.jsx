import React ,{useEffect ,useReducer }from 'react';
import {useFetch} from './UseFetch'
import {todoRedcer} from './reducers'


export const TodoContext = React.createContext();
  
const TodoStore = (props)=>{
//   const [todos, setTodo] = useState([]);
  const [todos, dispatch] = useReducer(todoRedcer , [])
//   const [newTodo , setNewTodo] = useState();

const setInitData = (initData)=>{
    dispatch({type:'SET_INIT_DATA' , payload:initData})
}


const loading = useFetch(setInitData, `http://localhost:8008/api/todo`)

useEffect(()=>{
console.log("새로운 내용이 입력 되었습니다" ,todos)
},[todos])
  
  

  return (
    <TodoContext.Provider value={{todos, dispatch,loading}}>
    {props.children}
    </TodoContext.Provider>
  );
}

export default TodoStore;
