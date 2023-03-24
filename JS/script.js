

function minNumber(first, second) {
    if (typeof (first) === 'number') {
        console.log(Math.min(first, second));
    } else if (Array.isArray(first)) {
        console.log(Math.min(...first));
    } else if (typeof (first) === 'object') {
        let arr = Object.values(first)
        console.log(Math.min(...arr));
    }
}

minNumber(1, 2)
minNumber([1, 2])
minNumber({ a: 1, b: 2 })
minNumber({ a: 1, b: 2 }, { a: 11, b: 12 })


let numbers = [7, 2, 8, 32, 6, 3, 12, 18, 0, 1, 10];

for (let i = 1; i < numbers.length; i++) {
    for (let k = 0; k < i; k++) {
        if (numbers[i] < numbers[k]) {
            let sorter = numbers[i]
            numbers[i] = numbers[k]
            numbers[k] = sorter
        }
    }
}

console.log(numbers);