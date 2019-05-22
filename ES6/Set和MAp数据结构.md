使用set可以实现并集、交集和差集
let a = new Set([1,2,3])
let b = new Set([4,2,3])

//并集
//let union = new Set([...a, ...b])       ==>{1,2,3,4}
//交集
//let interset = new Set([...a].filter(v=>b.has(v)))      ==>{2,3}

//差集
//let difference = new Set([...a].filter(v=>!b.has(v)))     ==>{1}
