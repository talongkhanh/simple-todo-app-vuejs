const app = new Vue({
	el: '#app',
	data: {
		todos: [
		{ id: 1, text: 'Nấu Cơm', done: false },
		{ id: 2, text: 'Rửa Bát', done: true },
		{ id: 3, text: 'Đánh Liên Minh', done: false },
		]
	},
	methods: {
		toggle(todo) {
			todo.done = !todo.done;
		},
		deleteTodo(id) {
			this.todos = this.todos.filter((todo) => todo.id != id);
			console.log(JSON.parse(JSON.stringify(this.todos)));
		},
		addTodo(e) {
			let id = Math.ceil(Math.random() * 99999999);
			let text = e.target.value;
			let done = false;
			let newTodo = { id, text, done };
			this.todos.push(newTodo);
			e.target.value = '';
			console.log(JSON.parse(JSON.stringify(this.todos)));
		},
		editTodo(e) {
			let newText = e.target.innerText;
			let id = e.target.getAttribute('data-id');

			for(todo of this.todos) {
				if(todo.id == id) {
					todo.text = newText;
				}
			}

			console.log(JSON.parse(JSON.stringify(this.todos)));
		}
	},
});