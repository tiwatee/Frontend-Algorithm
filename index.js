var farh;

function convertFahrToCelsius(farh){
    farhType= Object.prototype.toString.call(farh).slice(8,-1).toLowerCase();


    if (farhType==="number" || farhType==="string"){
        if ((isNaN(farh) === true) || (isNaN(parseInt(farh))=== true)){
            var invalid= "'"+JSON.stringify(farh)+" is not a valid number but a/an "+farhType+"'";
            return invalid
        }
        else{
            var Cel= (farh-32)*(5/9);
            return Cel.toFixed(4)
        }
    }

    else{
        var invalid= "'"+JSON.stringify(farh)+" is not a valid number but a/an "+farhType+"'";
        return invalid
    }
}


// Task Two
var n;
function checkYuGiOh(n){
    nType= Object.prototype.toString.call(n).slice(8,-1).toLowerCase();

    if (nType==="number" || nType==="string"){
        if ((isNaN(n) === true) || (isNaN(parseInt(n)) === true)){
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
    else {
        return "invalid parameter: "+JSON.stringify(n)
    }
}