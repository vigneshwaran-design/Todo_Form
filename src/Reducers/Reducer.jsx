import { ADD_TODO, DELETE_TODO } from "../Actions/Actions";

const initialValue = {
  todoList: [],
};
function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case ADD_TODO:
       if(action.text!==''){
         let id = Date.now();
         let date = new Date().toDateString();
         let a = new Date().getHours().toString();
         let b = new Date().getMinutes().toString();
         let time = a + ":" + b;
   
         return {
           ...state,
           todoList: [
             ...state.todoList,
             { id: id, todo: (action.text).trim(), date: date, time: time },
           ],
         };
       }
       else{
          alert('Type Something....!')
       }
       return state;
     
   case DELETE_TODO:
      return {...state,todoList:state.todoList.filter(i=>i.id !== action.id)}
    default:
      return state;
  }
}

export default todoReducer;