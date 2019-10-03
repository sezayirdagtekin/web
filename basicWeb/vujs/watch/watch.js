
new Vue({
	el: '#watch',
	data: {
		cm: '',
		meter: ''

	},
	methods: {

	},
	watch: {

		meter: function (val) {
			this.meter = val;
			this.cm = val * 100;
		},
		cm: function (val) {
			this.meter = val / 100;
			this.cm = val;

		}
	}

});