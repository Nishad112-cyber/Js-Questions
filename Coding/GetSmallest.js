function getSmallest(arr){
    let smallest =arr[0];
    for(let i=0; i<=arr.length; i++){
        if(arr[i]<smallest){
              smallest  = arr[i];
        }

    }
    return smallest;
}

let arr = [2,3,4,1,5,7,6];
console.log(getSmallest(arr));

// let arr= [1,2,3,4,5,7,6];
// let largest = Math.min(...arr);
// console.log(largest);


