
new Vue({
	el: '#computed',
	data: {
		message: ''

	},

	computed: {

		reversedMessage: function (val) {
			return this.message.split('').reverse().join('');
		},

	}

});