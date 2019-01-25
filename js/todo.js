Vue.component('popup', {
    template: '#popup'
    //template: '<li>{{todo.text}}<div v-if="todo.completed"><img src="./source/todo_done.png"></div><div else><img src="./source/todo_default.png"></div></li>',
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
                   completed: false,
                   info: 'ㄱㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ'
               },
               {
                   text: 'test-todo2',
                   completed: true,
                   info: 'ㄱㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ'
               },
               {
                   text: 'test-todo3',
                   completed: false,
                   info: 'ㄱㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ'
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
                completed: false,
                info: ''
            };
            this.todos.push(todo); 
            console.log(this.todos);
        },
        completeTodo(index){
            console.log(index);
            this.todos[index].completed = !this.todos[index].completed;
        },
        deleteTodo(index){
            this.todos.splice(index, 1);
        },
        openPopup(index){
            console.log(`openPopUp`);

        }
    },
    
})


