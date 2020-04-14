var vm = new Vue({
  el: "#app",
  data: {
    title: "men's shoes fashion x",
    url: "http://google.com",
    target: "_blank",
    price: 1000,
    testhtml: "<h1>testhtml</h1>"
  },
  methods: {
    formatPrice() {
      var number = this.price;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND"
      }).format(number);
    }
  }
});
