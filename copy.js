/**
 * @Author:      skyeGao
 * @Email:       yingyinggao@sohu-inc.com
 * @DateTime:    2018-05-24 10:51:06
 * @Description: 深拷贝、浅拷贝 
 */

// 并没有考虑属性的值依然是对象或者是数组的情况
function extendCopy(p){
  var c = {}
  for(let k in p){
    c[k] = p[k]
  }
  return c;
}

// 深拷贝就是考虑属性的值依然是对象或者是数组的情况  利用递归
function extendCopy(obj){
  var data = {}
  for(let k in obj){
    if(typeof obj[k] === 'object' && Object.keys(obj[k].length>0)){
      data[k] = extendCopy(obj[k])
    }else{
      data[k] = obj[k]
    }
  }
  return data
}

// 一种巧妙的方式就是使用json转换 
// 这里是将对象转化为json字符串又转换为json对象，不过弊端就是继承的属性会丢失  同时要求a必须严格遵守json格式
let h = JSON.parse(JSON.stringify(a))


// json转换  当遇到层级较深，且序列化对象不完全符合JSON格式时，使用JSON的方式进行深拷贝就会出现问题。
let obj1 = {
  a: 1,
  b: 2,
  c: function fun(){}
}
let obj2 = JSON.parse(JSON.stringify(obj1))
console.log(obj2)  // {a:1,b:2}  好像漏了些什么





function deepCopy(obj) {
  if (typeof obj === "object") {
    if (obj.constructor === Array) {
      var newArr = []
      for (var i = 0; i < obj.length; i++) newArr.push(obj[i])
      return newArr
    } else {
      var newObj = {}
      for (var key in obj) {
        newObj[key] = this.deepCopy(obj[key])
      }
      return newObj
    }
  } else {
    return obj
  }
}

// 上面的deepCopy简化后 
function deepCopy_2(obj) {
  let temp = obj.constructor === Array ? [] : {}
  for (let val in obj) {
    temp[val] = typeof obj[val] == 'object' ? deepCopy(obj[val]) : obj[val]
  }
  return temp
}











