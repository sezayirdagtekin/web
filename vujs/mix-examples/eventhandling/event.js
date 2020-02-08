
new Vue({
	el: '#eventHandler',
	data: {
		counter: 0,
		name: ""

	},
	methods: {

		incrementer: function () {
			this.counter = this.counter + 1;
			return this.counter;
		},
		greeting: function () {
			if (!this.name) {
				this.name = "Hello Vue js";
			}
			else {
				this.name = "";
			}

		}
	}

});