// Task One
var farh;

function convertFahrToCelsius(farh){
    farhType= Object.prototype.toString.call(farh).slice(8,-1).toLowerCase()
    if (isNaN(farh) === true){
        var invalid= "'"+JSON.stringify(farh)+" is not a valid number but a/an "+farhType+"'";
        return invalid
    }

    else {
        Cel= (farh-32)/1.8;
        return Cel.toFixed(4)
    }  
}

console.log(convertFahrToCelsius({temp : 0}))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius("ik"))
console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("0"))



// Task Two
var myInput;
function checkYuGiOh(n){
    if (isNaN(n) === true){
        return "invalid parameter: "+JSON.stringify(n)
    }

    else{
        var myArr=[]
        for (var i=1; i<=n; i++){
            var figure;
            if ((i%2===0)&& (i%3!==0) && (i%5!==0)){
                figure="yu"
                myArr.push(figure)
            }
            else if ((i%3===0)&& (i%2!==0) && (i%5!==0)){
                figure="gi"
                myArr.push(figure)
            }
            else if ((i%5===0)&& (i%3!==0) && (i%2!==0)){
                figure="oh"
                myArr.push(figure)
            }
            else if ((i%2===0) && (i%3===0)&& (i%5 !== 0)){
                figure="yu-gi"
                myArr.push(figure)
            }
            else if ((i%2===0) && (i%3!==0)&& (i%5 === 0)){
                figure="yu-oh"
                myArr.push(figure)
            }
            else if ((i%2!==0) && (i%3===0)&& (i%5 === 0)){
                figure="gi-oh"
                myArr.push(figure)
            }
            else if ((i%2===0) && (i%3===0)&& (i%5 == 0)){
                figure="yu-gi-oh"
                myArr.push(figure)
            }
            else{
                myArr.push(i)
            }
        }

        console.log(myArr)
        return JSON.stringify(myArr)       
    }
}


console.log(checkYuGiOh("10"))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh("fizzbuzz is meh"))
console.log(checkYuGiOh([1,2,3]))
console.log(checkYuGiOh({temp:0}))