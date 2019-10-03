
new Vue({
	el: '#app',
	data: {
		error: '',
		username: '',
		userage: '',
		users: [{ "name": "Lionel Messi", "userage": 27 }, { "name": "Luis suarez", "userage": 29 }, { "name": "Antoine Griezmann", "userage": 32 }],
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
				this.users.push({ 'name': this.username, userage: this.userage });
			}
		}
	}

});