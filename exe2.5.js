function supplies(input) {

let numPackPens = Number (input[0]);
let numPackMarkers = Number (input[1]);
let detergentByLiter = Number (input[2]);
let discount = Number (input[3]);

let priceForPens = 5.8;
let priceForMarkers = 7.2;
let priceForDetergent = 1.2;

let totalPrice = (numPackPens*priceForPens)+(numPackMarkers*priceForMarkers)+(detergentByLiter*priceForDetergent);
let totalPriceWithDiscount = totalPrice-(totalPrice*0.25);

console.log(totalPrice);
console.log(totalPriceWithDiscount);



}

supplies(["2", "3", "4", "25"])