//Given 2 Arrays, return an array with the values that are commom to both
//arrays. Only unique values. 
const arr1 = [1, 2, 2, 3, 4, 5, 5, 5, 6]; 
const arr2 = [2, 5, 5, 3]; // [2, 5, 3]; 

//solution with .filter() and .includes() function
intersection(arr1, arr2){ 
    let newArr = []; 
    arr1.filter((item)=>{ 
        if (arr2.includes(item) && !newArr.includes(item)){ 
            newArr.push(item); 
        } 
    }); 
    
    return newArr; 
} 

//console.log(intersection(arr1, arr2)); 

//solution with reduce() and
//.indexOf() 
function intersection1(arr1, arr2){ 
    const newArr1 = arr1.reduce((acc, curr)=>{
         if (arr2.indexOf(curr) !== -1 && acc.indexOf(curr) === -1){
            acc.push(curr); 
        } 
        
        return acc; 
    },[]); 
    
    return newArr1; 
}
console.log(intersection1(arr1, arr2)); 

// solution with a for loop and indexOf
function intersection2(arr1, arr2){ 
    let newArr2 = []; 
    for (let i = 0; i < arr1.length; i++){ 
        if (arr2.indexOf(arr1[i]) !== -1 && newArr2.indexOf(arr1[i]) === -1){ 
            newArr2.push(arr1[i]); 
        } 
    } 
    
    return newArr2; 
}
