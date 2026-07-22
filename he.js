// write a funtion to take numner b/w 1-9 and return in words

function numbertowords(num){
    const words = ["one","two","three","four","five","six","seven","eight","nine"];
    if(num>=1&&num<=9){
        return words[num-1];

    }else{
        return "enter a number";
    }
}
console.log(numbertowords(5));


