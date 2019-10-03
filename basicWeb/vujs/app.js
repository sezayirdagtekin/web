
new Vue({
    el: '#app',
    data: {
        price: 12000
    }
    ,
    filters: {
        toUSD: function (value) {
            return `$${value}`
        }
    }
});