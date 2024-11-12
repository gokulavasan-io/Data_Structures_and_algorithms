//  12-nov-2024


// for numbers and names

function selectionSort(arr) {
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i;j<arr.length;j++){
                if(arr[j]<arr[min]){
                    min=j;
                }
        }
        if(min!=i){
            [arr[i],arr[min]]=[arr[min],arr[i]];
        }
    }
    return arr;


}

let arr=[67,5,23,98,12,2];
let nameArr= ["Sophia", "James", "Liam", "Isabella", "Ethan", "Ava", "Mason", "Mia", "Lucas", "Charlotte"];

console.log(selectionSort([67,4,34,2,98,56,33]));
console.log(selectionSort(nameArr));

// for object

function objectSelectionSort(arr,which) {
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i;j<arr.length;j++){
                if(arr[j][which]<arr[min][which]){
                    min=j;
                }
        }
        if(min!=i){
            [arr[i][which],arr[min][which]]=[arr[min][which],arr[i][which]];
        }
    }
    return arr;


}

let students = [
    { name: "Zen", marks: 95 },
    { name: "Sobi", marks: 62 },
    { name: "Tave", marks: 10 },
    { name: "Alice", marks: 78 },
    { name: "Gavid", marks: 5 }
];

console.log(objectSelectionSort(students,"marks"));