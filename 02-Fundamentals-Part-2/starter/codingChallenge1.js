const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(44, 23, 71))
// console.log(calcAverage(65, 54, 27))
const dolphins = calcAverage(85, 54, 41)
const koalas = calcAverage(23, 34, 27)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgKoalas > avgDolphins * 2) {
        return (`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else if (avgDolphins > avgKoalas * 2) {
        return (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else {
        return ('NOBODY WINS 💋')
    }
}
console.log(checkWinner(dolphins, koalas))