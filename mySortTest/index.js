var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

// 冒泡
function bubbleSort (arr) {
  console.time('耗时')
  for(let i = 0;i<arr.length;i+=1){
    for(let j = i+1;j<arr.length;j+=1){
      if(arr[i]>arr[j]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.timeEnd('耗时');
  return arr;
}
// console.log('冒泡：'+bubbleSort(arr))

// 选择
function selectSort(arr){
  var len = arr.length
  var minIndex, temp;
  for(let i = 0;i<len;i+=1){
    minIndex = i;
    for(let j = i+1;j<len;j+=1){
      if(arr[j]<arr[minIndex]){
        minIndex = j
      }
    }

    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}
// console.log('选择：'+selectSort(arr))


// 插入
function insertSort(arr){
  for (var i = 1; i < arr.length; i++) {
    var key = arr[i];
    var j = i - 1;
    debugger
    while (j >= 0 && arr[j] > key) { // 从后向前扫描
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr
}
console.log('插入：'+insertSort(arr))

// 插入  查找插入位置时  使用二分查找法
function binaryinsertSort(arr){
  console.time('二分插入排序耗时：');
  for (var i = 1; i < array.length; i++) {
    var key = array[i], 
    left = 0, 
    right = i - 1;
    while (left <= right) {
        var middle = parseInt((left + right) / 2);
        if (key < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    for (var j = i - 1; j >= left; j--) {
        array[j + 1] = array[j];
    }
    array[left] = key;
  }

  console.timeEnd('二分插入排序耗时：');
  return array;
}



// 1、客户端发送SSL链接 到服务器端，服务器保存唯一的私钥
// 2、服务器发送公钥到客户端，客户端发送对称密钥给服务器（主要是利用公钥加密，由于只有私钥才能解密，因此只有客户端
// 才能够拿到对称密钥）
// 3、利用对称密钥传输数据

// DNS解析-TCP连接-http请求-服务器处理请求并返回http报文-浏览器解析并渲染-返回页面









// 对称加密 TCP https 







