//https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let applesCross, orangesCross = 0;

    for (let i = 0; i < apples.length; i++) {
        applesCross += 1 ? (a + apples[i] >= s && a + apples[i] <= t) : null;
    }

    for (let i = 0; i < oranges.length; i++) {
        orangesCross += 1 ? (b + oranges[i] <= t && b + oranges[i] >= s) : null;
    }
    console.log(applesCross)
    console.log(orangesCross)

}