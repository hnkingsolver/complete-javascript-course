const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [];
const totals = [];

const calcTip = function calcTip(bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals)

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    sum = sum / arr.length
    console.log(sum)
    return sum
}
calcAverage(totals)
