module.exports = function reverse(n) {
    cl(n)
    const polovina = (Math.floor(n.toString().length / 2))
    let str = n.toString().replace(/(-)/g, "");
    newStr = reverseString(str.substr(polovina + 1, n.length)) + str[polovina] + reverseString(str.substr(0, polovina))
    console.log(newStr);
    return newStr
}

function cl(x) { console.log(x) }
function reverseString(str) { return str.split("").reverse().join("") }
