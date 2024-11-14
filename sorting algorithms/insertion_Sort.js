//  12-nov-2024


function insertionSort(arr) {
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        let j=i-1;
        for(;j>=0;j--){
            if(temp<arr[j]){
                arr[j+1]=arr[j];
            }
            else{
                break;
            }
        }
        arr[j+1]=temp;
    }
    return arr;


}
let arr=[10, 14, 28, 11, 7, 16, 30, 50, 25, 18];
console.log(insertionSort(arr));
