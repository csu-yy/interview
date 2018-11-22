/*  求一个数组的 最大与最小值之和*/
function maxminPlus(arr){
  if(!Array.isArray(arr)){
    console.log('type error')
    return
  }
  const max = Math.max.apply(Math,arr)
  const min = Math.min.apply(Math,arr)
  return max - min;
}


/* 去重数组 并返回重复的字符 
   如 输入 [1,6,8,3,7,9,2,7,2,4,4,3,3,1,5,3]  输出为 [1, 3, 7, 2, 4]
*/
function uniqueArray(arr){
  if(Object.prototype.toString.call(arr) !== '[object Array]'){
    console.log('type error')
    return
  }

  let result = Array.of()
  arr.forEach(function(item,index,ar){
    if(ar.indexOf(item)!==ar.lastIndexOf(item) && result.indexOf(item)===-1){
      result.push(item)
    }
  })

  return result
}

/*
关于排序
[1, 3, 7, 2, 4].sort(function(a,b){
  return a>b?-1:1
})  // 输出为 [7, 4, 3, 2, 1]  降序排列  升序可以 return a>b ? 1:-1

[1, 3, 7, 2, 4].sort(function(a,b){
  return a>b
})  // 输出为 [1, 2, 3, 4, 7]  升序排列

*/


/* 一个part 数组中 有多个 {name:'张三',age:15} 构成，将这个数组按照年龄从大到小排序*/
let objArr = [{name:'张1',age:15},{name:'张2',age:18},{name:'张3',age:3}]
objArr.sort(function(a,b){
  return a.age>b.age
})

/* 回文字符串判断
   注： 回文字符串 即字符串的正序和倒序都一样
   例 输入 abcba  则返回true  */

/*------- 普通版 ------ */ 
//判断回文字符串
var isPalindromes = function(params){
  params = params.toString().toLowerCase()
  return params === params.split('').reverse().join('');
}
// 同字母异序判定,比如 `abcefd` 和 `dceabf`
var isAnagram = function(str1, str2)  {
  str1 = str1.toString().toLowerCase();
  str2 = str2.toString().toLowerCase();
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}


/*------- 进阶版  多一些特殊字符 ------ */ 
// 若是我们要去除所有非字母数字的字符,则需要用到正则

// 进阶版: isPalindromes('abc_ &b #@a')
var isPalindromes_up = function(params){
  // 传入参数先转为字符串且全部转为小写,最后去除多余字符比较
  params = params.toString().toLowerCase().replace(/[\W_\s]/g,'');
  console.log(params)
  return params === params.split('').reverse().join('');
}

// 进阶版同字母异序: isAnagram('ab *&cef#d','!d@ce^abf')
var isAnagram_up = function(str1, str2)  {
  str1 = str1.toString().toLowerCase().replace(/[\W_\s]/g,'');
  str2 = str2.toString().toLowerCase().replace(/[\W_\s]/g,'');
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}


/* js 实现 String.trim() 方法 */

// 原生是有 trim()方法的.我们要模拟一个;
//'  fsaf fsdaf f safl lllll    '.emuTrim();  //"fsaf fsdaf f safl lllll"
String.prototype.emuTrim = function(){
  // 这条正则很好理解,就是把头部尾部多余的空格字符去除
  return this.replace(/(^\s*)|(\s*$)/g,'');
}





















