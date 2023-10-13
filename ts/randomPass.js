var pass = '0123456789qwerrttyuopasdfhklgzxcv,mnbQWERTYUOADFGHJKL:ZXCVBN;:@#$$#%&*)(_+!``/.?¿.<><,.';
var arrPass = pass.split('');
var result;
function shuffleArray(array) {
    var _a;
    for (var c = arrPass.length - 1; c > 0; c--) {
        var r = Math.floor(Math.random() * (c + 1));
        _a = [array[r], array[c]], array[c] = _a[0], array[r] = _a[1];
    }
}
shuffleArray(arrPass);
result = arrPass.join('');
console.log(result.slice(0, 35));
