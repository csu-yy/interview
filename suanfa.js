/**
 * @Author:      skyeGao
 * @Email:       yingyinggao@sohu-inc.com
 * @DateTime:    2018-06-06 16:39:34
 * @Description: js各种常见算法 
 传送门
 1、http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 */

/* 冒泡排序  时间复杂度为 O(n^2）
  参考链接： http://www.cnblogs.com/kkun/archive/2011/11/23/bubble_sort.html
  原理是临近的数字两两进行比较,按照从小到大或者从大到小的顺序进行交换,
  这样一趟过去后,最大或最小的数字被交换到了最后一位,
  然后再从头开始进行两两比较交换,直到倒数第二位时结束,其余类似
*/

function bubble_sort (arr) {
  if(!Array.isArray(arr)){
    console.log('type error')
    return 
  }

  let len = arr.length
  for(let i = 0; i<len; i+=1){
    for(let j = 0; j<len; j+=1){
      if(arr[i]>arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}



/* 快速排序 
  参考链接： http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
  整个排序只需要3步
  1、在数据集中，选择一个元素作为‘基准
  2、所有小于‘基准’的元素，都移到‘基准’的左边；所有大于‘基准’的元素，都移到‘基准’的右边；
  3、对‘基准’左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止 

  注： ‘基准’可以随意选取，但是一般选择中间的元素比较好理解
*/
function quick_sort(arr){
  if (!Array.isArray(arr)) {
    console.log('type error')
    return;
  }
  if (arr.length <= 1) {
    return arr
  }

  let len = arr.length
  let baseItemIndex = Math.floor(arr.length / 2);
  let baseItem = arr.splice(baseItemIndex,1)[0]

  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i += 1) {  // 注意： 写成 i < len 会发生堆栈溢出 的错误
    if (arr[i] < baseItem) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  let result = quick_sort(left).concat(baseItem, quick_sort(right))
  return result
}



/* 遍历二叉树
  二叉树的遍历主要分三种：
  1、先（根）序遍历  根左右
  2、中（根）序遍历  左根右
  3、后（根）序遍历  左右根
*/



















