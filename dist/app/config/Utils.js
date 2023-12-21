export function priceFormatter(price) {
    console.log("price : "+price)
    var val = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return val;
}