export const DiscountedPrice = {
  data() {
    return {
      discounted_value: "",
    };
  },
  mounted(){
    this.discountedValue();
    console.log("Mixins Worked");
  }
};