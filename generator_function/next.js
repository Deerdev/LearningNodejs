// next
function makeNextIterator(arr) {
    let nextIndex = 0

    // 返回一个迭代器对象
    return {
        next: () => {
            // 返回结果对象
            if (nextIndex < arr.length) {
                return {value: arr[nextIndex++], done: false}
            } else {
                return {done: true}
            }
        }
    }
}

const it = makeNextIterator(["1", "2", "3"])
console.log("一", it.next().value)
console.log("二", it.next().value)
console.log("三", it.next().value)
console.log("四", it.next().value)

// genertator

function *makeIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
        
    }
}

const gen = makeIterator(["1", "2", "3"])
console.log("一", gen.next().value)
console.log("二", gen.next().value)
console.log("三", gen.next().value)
console.log("四", gen.next().value)
