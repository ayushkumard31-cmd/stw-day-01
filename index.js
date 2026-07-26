console.log("Hello,world!");
console.log(32);
console.log("The value of 32 "+32);
console.log(5==0);
console.log(4+7);
console.log(`Hello Ayush,
      I am glad to see you.`);
console.log('5'+'3');
console.log('5'-'3');
console.log('5'==5);// simple compare it
console.log('5'===5);//compare with datatype
console.log(`This is a text,this is sum of 2+3: ${2+3}`);
const name='Grurkulam STW'
console.log('Hello',name,'is my name')
let a=3
let b=2
console.log(a+b);
a=10
console.log(a+b);
console.log(typeof a);
console.log(typeof name);

const arr=[3,6,9,0,5];
console.log(arr);
console.log(arr[0]);
const input=prompt("Enter your name");
console.log("Your name is",input);
const email=prompt("Enter your email");
console.log("Your emil is",email);
console.log(typeof arr);
const obj={
    name:{
    first:"Ayush",
    last:"kumar"
    },
    roll :25,
    school:"XYZ School"
    isStudent:true

}
console.log(typeof obj==typeof arr);
const abc=null;
const xyz=undefined
console.log(abc);
console.log(abc===xyz);
console.log(abc==xyz);
console.log(obj.name.first);
// console.log(obj.school.l);
console.log('5'!=5);
console.log('5'!==5);
console.log('5'==5 ||obj.school.name);
if (2>5) {
    console.log("Mathmatics is wrong")
}
else{
    console.log("This will print")
    const str=''//emtpy means false
    // let confusion =500*'abc' prints NaN means not a number
    let confusion=5/0
    console.log(confusion)
    if(str||confusion){
        console.log("will it print")
    }
    
}
const marks={
    math:90,
    phy:75,
    chem:85,
    practical:
    {
        phy:45,
        math:90

    }
}
let total=marks.math+marks.phy+marks.chem
total+=(marks.practical.phy && marks.practical)||0
console.log(total)

console.log(5+parseInt('4a'))
console.log((0.1+0.2).toFixed(2))
const newChar='Arnab'
console.log(newChar.toLowerCase()=='arnab')















