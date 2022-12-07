let j;
let a = [1,2,3,4,5];

let check = (x) =>{
    a.push(x)
    // console.log(a)
        console.log(isNaN(x))
    if(x){
        let j = a.reduce((a,b)=> a+b)
        console.log(j)
    }else if (isNaN(x)){
        console.log(a.length)
    }
}

check("kj")