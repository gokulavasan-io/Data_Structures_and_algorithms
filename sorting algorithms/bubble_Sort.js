//  11-nov-2024


// For loop
let bubbleSortUsingForLoop = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];

                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

// Do while loop

let bubbleSortUsingDoWhile = (inputArr) => {
    let len = inputArr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return inputArr;
};

let arr=[10, 14, 28, 11, 7, 16, 30, 50, 25, 18];
console.log(bubbleSortUsingForLoop(arr));
console.log(bubbleSortUsingDoWhile(arr));
