/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todos){
      this.todos=[];
     }

     add(a){
      this.todos.push(a);
     }


     remove(i){
      this.todos.splice(i,1);
      return this.todos
     }

     update(i,a){
      if(this.get(i)){
      this.todos[i]=a
      }
     }

     getAll(){
      return this.todos
     }

     get(i){
      if(this.todos[i]){
      return this.todos[i];
     }
     return null
    }

     clear(){
      this.todos=[]
      return this.todos
     }

  

}

module.exports = Todo;
