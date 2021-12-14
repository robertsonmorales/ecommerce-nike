import Vue from "vue";

Vue.filter("unit", function (value) {
  return "₱" + value + ".00";
});

Vue.filter("separator", function (value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

Vue.filter("rate", function (value) {
  if (typeof value && Number.isInteger(value)) {
    return value + ".0";
  }

  return value;
});

Vue.filter("shortThousand", function (value) {
  let review = value;
  let splitReview = review.split(",");
  let reviewsLength = splitReview.length;
  let formattedReview = "";
  let unit, hundreds, thousands;

  if (reviewsLength == 1) {
    formattedReview = review;
  } else if (reviewsLength == 2) {
    // K
    unit = "K";
    hundreds = splitReview[1].charAt(0) == 0 ? "" : splitReview[1].charAt(0);
    hundreds = hundreds == "" ? "" : "." + hundreds;
    thousands = splitReview[0];

    formattedReview = thousands + hundreds + unit;
  }

  return formattedReview;
});
