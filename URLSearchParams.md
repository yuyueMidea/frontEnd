## 今天我们来学习下专门用来处理URL的query的接口：URLSearchParams 。

let url = '?wd=蔡徐坤&skill=篮球&year=2019';
let searchParams = new URLSearchParams(url);

for (let p of searchParams) {
  console.log(p);
}

// ["wd", "蔡徐坤"]
// ["skill", "篮球"]
// ["year", "2019"]

searchParams.get('wd') // "蔡徐坤"
searchParams.get('skill') // "篮球"
searchParams.get('year') // "2019"
