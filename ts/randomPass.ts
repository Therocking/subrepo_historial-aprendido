const pass = '0123456789qwerrttyuopasdfhklgzxcv,mnbQWERTYUOADFGHJKL:ZXCVBN;:@#$$#%&*)(_+!``/.?¿.<><,.';
const arrPass = pass.split('');
let result: string;

function shuffleArray(array: Array<string>) {
    for (let c = arrPass.length - 1; c > 0; c--) {
        const r = Math.floor( Math.random() * (c + 1) );

        [ array[c], array[r] ] = [ array[r] , array[c] ]
    }
}

shuffleArray(arrPass);
result = arrPass.join('');
console.log( result.slice(0, 35) );