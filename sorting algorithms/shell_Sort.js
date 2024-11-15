//  15-nov-2024


function shellSort(arr) {

    for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) { 
        for(let j=i;j<arr.length;j++){
                let value=arr[j];
                let k=j;

                while (k >= i && arr[k - i] > value) {
                    arr[k] = arr[k - i];
                    k=k-i;
                }
                arr[k]=value;
        }
    }
    return arr;
}

let arr = [10, 14, 28, 11, 7, 16, 30, 50, 25, 18];
console.log(shellSort(arr));



// sort for string

function shellSortForStrings(arr) {
    for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
        for (let j = i; j < arr.length; j++) {
            let value = arr[j];
            let k = j;

            while (k >= i && compareStrings(arr[k - i], value) > 0) {
                arr[k] = arr[k - i];
                k = k - i;
            }
            arr[k] = value;
        }
    }
    return arr;
}

function compareStrings(str1, str2) {
    let minLength = str1.length<str2.length?str1.length:str2.length;
    
    for (let i = 0; i < minLength; i++) {
        if (str1[i] < str2[i]) return -1;
        if (str1[i] > str2[i]) return 1;
    }
    return str1.length - str2.length;
}

let nameArr = ["Sophia", "James", "Liam", "Isabella", "Ethan", "Ava", "Mason", "Mia", "Lucas", "Charlotte"];
console.log(shellSortForStrings(nameArr));



