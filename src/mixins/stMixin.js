const stMixin = {
  data() {
    return {
      products: [],
      name: "Ahmed",
      age: "21",
    };
  },
  methods: {
    async getProducts() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
  },
  async mounted() {
    await this.getProducts();
  },
};

export default stMixin;
