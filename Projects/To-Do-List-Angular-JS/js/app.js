var app = angular.module('ToDos', [	]);

app.controller('toDos',function toDosCtrl(){
	this.tesst = "hello";
});

app.component('toDoList', {
	bindings: {
		tesst: '='
	},
	templateUrl: 'js/views/todolist.html',
	controller: function ToDoListCtrl(){
		class ToDoItem {
			constructor(name, items){
				this.name = name;
				this.items = items || [];
				this.c = 0;
			}
			addItem(i){
				this.items.push(i);
				this.c++;
			}
			removeItem(i){
				let j = this.items.indexOf(i);
				this.items = (this.items.slice(0, j)).concat(this.items.slice(j+1));
			}
		}

		let td1 = new ToDoItem('Trader Joes', ['almond milk', 'hummus', 'apples']);
		let td2 = new ToDoItem('Whole Foods', ['protein powder', 'sea salt']);
		this.allToDos = [td1, td2];
		this.say = "hi";
	}
});
