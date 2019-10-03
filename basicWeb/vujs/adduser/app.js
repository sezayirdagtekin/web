
new Vue({
	el: '#app',
	data: {
		error: '',
		username: '',
		userage: '',
		users: [{ "name": "Lionel Messi", "age": 27 }, { "name": "Luis suarez", "age": 29 }, { "name": "Antoine Griezmann", "age": 32 }],
	},
	methods: {
		add() {
			if (!this.username) {
				this.error = "Please enter name ";
				return;
			}
			else if (!this.userage) {
				this.error = "Please enter age!"
			}
			else {
				this.users.push({ 'name': this.username, age: this.userage });
			}
		}
	}

});