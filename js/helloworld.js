/* function fact(n){
    if(n<=1) return n;
    return n*fact(n-1);
}

document.write(`hello?`);

var sym1 =Symbol("하하");
var sym2 = Symbol("gkgkg");


var sym3 = Symbol.for("club");
var sym4 = Symbol("club");
//`역따움표 탬플릿 리터럴 `
var st = `adsfasdf\n
adsfasdfsdf`;
console.log(st)
console.log(Symbol.keyFor(sym3))
console.log(Symbol.keyFor(sym4))
for(var i=1;i<10;i++){
    console.log(i+"! = " + fact(i));
}
var a = 3;
var b = 4;

console.log("a"+ st);
console.log(`${a+1} ${b+3} $`);

var card = {"cost": 1, "info": "asdrfasdfasdf"};


var a = 10;
for (let a = 0; a < 5; a++) {
    console.log(a); // 0 1 2 3 4 5
}
console.log(a); // 6
 */
//비동기통신
//ES6 learn
/* var name = "global"

function home(){
    var homevar = "homevar";
    for(let i=0; i<100; i++){
        console.log(i);
    }
    //console.log(i);
}

home(); */

/* var list = document.querySelectorAll('li');
console.log(list.length)
for(let i=0; i<list.length; i++){
    list[i].addEventListener("click", function(){
        console.log(i+ "번째 리스트");
    });
}

function home(){
    const homename = ["asdf", "adsfasa"]
    homename.push("adsfdd");
  //  homename = `your house`
  //const를 기본으로 사용, 변경가능 변수는 let으로..
    console.log(homename);
}

const homename = ["asdf", "adsfasa"]
list2 = [].concat(homename, "banana")
console.log(homename, list2)
console.log(homename === list2)
//home();
 */

 let str =`hello world! ~~`
 let matchstr = `hello`
 console.log(str.startsWith(matchstr))
 console.log(str.endsWith(matchstr))
 console.log(str.includes(matchstr))
 //표준에서 사용가능

 var data =[1,2,"asdf", null, ""];
 data.forEach(function(value){
    console.log(value)
 })

 for(let idx in data){
     console.log(data[idx])
 }

 for(let value of data){
     console.log(value);
 }