
new Vue({
	el: '#eventHandler',
	data: {
		counter: 0

	},
	methods: {

		incrementer: function () {
			this.counter = this.counter + 1;
			return this.counter;
		},
	}

});