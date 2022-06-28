function converter(num){
    const lookUpNumber = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let romanNumeral = ''

    for(let i in lookUpNumber){
        const numberValue = lookUpNumber[i];
        while (numberValue <= num){
            num -= numberValue;
            romanNumeral += i;
        }
    }
    document.getElementById('result').innerHTML = romanNumeral
}

document.getElementById('btn').addEventListener('click', function(){
    const number = document.getElementById('numbers').value
    converter(number);
});
