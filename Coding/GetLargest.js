function getLargest(arr){
    let largest =0;
    for(let i=0; i<=arr.length; i++){
        if(largest<arr[i]){
            largest= arr[i];
        }

    }
    return largest;
}

let arr = [1,2,3,4,5,7,6];
console.log(getLargest(arr));

// let arr= [1,2,3,4,5,7,6];
// let largest = Math.max(...arr);
// console.log(largest);


