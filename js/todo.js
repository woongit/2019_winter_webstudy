Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>',
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'MY ToDo'
    }
})





var todoApp = new Vue({
    el: '#todo',
    data() {
       return {
           message: '',
           todos: [
               {
                   text: '일번ㅁㄴㅇㄹ',
                   completed: false
               },
               {
                   text: 'test-todo2',
                   completed: true
               },
               {
                   text: 'test-todo3',
                   completed: false
               },
               
           ]
       }
    },
    methods: {
        addTodo(input){
            console.log(input)
            //input.preventDefault();
            const todo = {
                //document.querySelector('input.input-todo').nodeValue,
                text: input,
                completed: false
            };
            this.todos.push(todo);  
        },
        completeTodo(index){
            this.todos[index].completed = !this.todos[index].completed;
        },
        deleteTodo(index){
            
        }
    },
    
})


