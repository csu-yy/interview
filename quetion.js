//  几个短而让我印象深刻的题
if(!("a" in window)){
    var a = 10;
}
console.log(a); // undefined

// !("a" i n window)  , 返回 true
// 留言小伙伴的刨析,非常感谢,还是涉及变量提升的问题
/*
 var a;
if(!("a" in window)){
    a = 10;
}
*/

// 变种题
(function(){
 var  x = c =  b = {a:1}
})()

console.log(x.a); // error , x is not defined
console.log(c,b) // {a: 1} {a: 1}


var count = 0;

console.log(typeof count === "number"); // true , 这个不用解释了

console.log(!!typeof count === "number"); // false

// 这里涉及到就是优先级和布尔值的问题
// typeof count 就是字符串"number"
// !!是转为布尔值(三目运算符的变种),非空字符串布尔值为 true
// 最后才=== 比较 , true === "number" , return false


(function(){
  var a = b = 3;
})()

console.log(typeof a === "undefined"); // true
console.log(typeof b === "undefined"); // false

// 这里涉及的就是立即执行和闭包的问题,还有变量提升,运算符执行方向(=号自左向右)
// 那个函数可以拆成这样

(function()
  var a; /* 局部变量,外部没法访问*/
  b = 3; /* 全局变量,so . window.b === 3 , 外部可以访问到*/
  a = b;
})()

// 若是改成这样,这道题应该是对的
console.log(typeof b === "number" && b ===3); // true



function foo(something){
  this.a = something;
}

var obj1 = {
  foo:foo
};

var obj2 = {};

obj1.foo(2)

console.log(obj1.a) // 2 ,此时的 this 上下文还在 obj1内,若是 obj1.foo 先保存当做引用再执行传参,则上下文为 window

obj1.foo.call(obj2,3); // 用 call 强行改变上下文为 obj2内
console.log(obj2.a); // 3

var  bar = new obj1.foo(4); // 这里产生了一个实例
console.log(obj1.a); // 2
console.log(bar.a); // 4;  new的绑定比隐式和显式绑定优先级更高


function fn(){
 alert(a);
 var a = 200;
 alert(a);
}

fn(); // undefined / 200 ; 涉及变量提升
alert(a); // undefined
var a;
alert(a); // undefined

var a = 300;
alert(a); // 300

var obj1= {
  name:'obj1',
  fn:function(){
    console.log(this.name);
  }
};

var obj2 = {name:'obj2'};
var obj3 = {name:'obj3'};

// 这道题主要涉及的是 this 指向的问题..
obj1.fn(); // obj1

var newFn = obj1.fn;
newFn(); // undefined, this 指向 window

newFn.call(obj2);// obj2, this 指向 obj2

obj3.fn = newFn;
/*
ƒ (){
    console.log(this.name);
  }
*/

obj3.fn(); // 这里指向的是 obj3 .所以输出 obj3





// 这道题来作为笔试题很绕,因为要回答的答案很多(脑海构思)..反正我是遇到了..
// 这道题主要考核的是对原型链继承这块的理解
function Parent(){
  this.a = 1;
  this.b = [1,2,this.a];
  this.c = {demo:5};
  this.show = function(){
   console.log(this.a + '' + this.c.demo + ':' + this.b)
  }
}

function Child(){
  this.a  = 2;
  this.change = function(){
    this.b.push(this.a);
    this.a = this.b.length;
    this.c.demo = this.a++;
  }

}

Child.prototype = new Parent();
var parent = new Parent();
var child1 = new Child();
var child2 = new Child();

child1.a = 11;
child2.a = 12;

// 这前面几个还算简单,继续看下去
parent.show(); // 15:1,2,1

// 因为 Child 自身没有 show 的方法,所以往原型链的上游找;
// 找到父类的,this 因为没更改,所以输出结果如下
child1.show(); // 115:1,2,1
child2.show(); // 125:1,2,1

child1.change();  // 改变一些数据,没有输出
child2.change();  // +1

parent.show(); // 15:1,2,1

child1.show(); // 55:1,2,1,11,12
child2.show(); // 65:1,2,1,11,12


// 这道题也很绕,函数递归调用的


function test(a,b){
  console.log(b);
  return {
    test:function(c){
       return test(c,a);
    }
};

// 这道题的理解,拆成这样就好理解了
/*function test(a,b){
  console.log("a:"+a,"b:"+b);
  return {
    test:function(c){
       console.log("a:"+a,"b:"+b,"c"+c);
       return test(c,a);
    }
  }

}*/



var a = test(100); // undefined, 这个是不言而喻的;
a.test(200); //  100;
a.test(300); // 100;

var b =  test(101).test(201).test(301); // undefined/101/201


var c =  test(102).test(202); // undefined / 102

c.test(302); // 202



let i=0;
let result = i++
console.log(i)        // 1
console.log(result)   // 0

let j=0;
let result2 = ++j
console.log(j)         // 1
console.log(result2)   // 1












