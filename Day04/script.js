//1a (annonymous function)

var oddarr = function(arr){
    for(let x of arr){
        if(x%2!==0){
            console.log(x)
        }
    }
}

oddarr([2,4,5,7,8,10,11])

//1a iife

(
 function(arr){
    for(let x of arr){
        if(x%2!==0){
            console.log(x)
        }
    }
}   
    )([2,4,5,7,8,10,11])

//1b annonymous
var titlecaps = function(arr){
    for(var i=0;i<arr.length;i++){
        arr[i] = arr[i][0].toUpperCase()+arr[i].substring(1)
    }
    return arr;
}

console.log(titlecaps(["abc","xyz","pqr"]))

//1b iife

(
    function(arr){
    for(var i=0;i<arr.length;i++){
        arr[i] = arr[i][0].toUpperCase()+arr[i].substring(1)
    }
    console.log(arr)
}
    )(["abc","xyz","pqr"])

//1c annonymous

var sum = function(arr){
    var total =0
    for(let x of arr){
        total=total+x
    }
    
    return total;
}

console.log(sum([1,2,3,4,5]))

//1c iife

(
 function(arr){
    var total =0
    for(let x of arr){
        total=total+x
    }
    
     console.log(total);
}
    )([1,2,3,4,6])

//1d annonymous

var primeobj = function(arr){
    var newarr = arr.map((elem)=>{
        return {
            val: elem,
            counter: 0
        }
    })
    
    var resarr= []
    
    for(var i=0;i<newarr.length;i++){
        for(j=1;j<=parseInt(arr[i]/2);j++){
            if(newarr[i].val%j===0){
                newarr[i].counter++
            }
        }
    }
    
    for(let x of newarr){
        if(x.counter===1){
            resarr.push(x.val)
        }
    }
    
    return resarr;
}

console.log("Prime numbers in the given array are -->"+" "+primeobj([3,6,7,8,9,10,5,17]))

//1d iife

(function(arr){
    var newarr = arr.map((elem)=>{
        return {
            val: elem,
            counter: 0
        }
    })
    
    var resarr= []
    
    for(var i=0;i<newarr.length;i++){
        for(j=1;j<=parseInt(arr[i]/2);j++){
            if(newarr[i].val%j===0){
                newarr[i].counter++
            }
        }
    }
    
    for(let x of newarr){
        if(x.counter===1){
            resarr.push(x.val)
        }
    }
    
    console.log("Prime numbers in the given array are -->"+resarr);
}
    )([3,6,7,8,9,10,5,19])

// 1e annonymous

var pallindromeCheck = function(arr){
    
    var palarr = []
    for(let x of arr){
        if(x===x.split('').reverse().join('')){
            palarr.push(x)
        }
    }
    
    return palarr
}

console.log(pallindromeCheck(['abc','pqr','rar','saas']))

//1e iife

(
   function(arr){
    
    var palarr = []
    for(let x of arr){
        if(x===x.split('').reverse().join('')){
            palarr.push(x)
        }
    }
    
     console.log(palarr)
}
 )(['abc','pqr','rar','saas'])

// 1f annonymous

var medianarr = function(arr1,arr2){
    var newarr = [...arr1,...arr2]
    newarr.sort((a,b)=>{
        return a-b
    })
    
    if(newarr.length%2!==0){
        mid= parseInt(newarr.length/2)
         console.log(newarr[mid])
    }else{
        mid=parseInt(newarr.length/2)
        console.log(newarr[mid],newarr[mid-1]) 
    }
}

medianarr([2,3,5,6,1],[12,3,77,5,1])

//1f iife

(function(arr1,arr2){
    var newarr = [...arr1,...arr2]
    newarr.sort((a,b)=>{
        return a-b
    })
    
    if(newarr.length%2!==0){
        mid= parseInt(newarr.length/2)
         console.log(newarr[mid])
    }else{
        mid=parseInt(newarr.length/2)
        console.log(newarr[mid],newarr[mid-1]) 
    }
})([2,3,5,6,1],[12,3,77,5,1])

// 1g annonymous

var removeDup = function(arr){
    var newarr = [...new Set(arr)]
    return newarr
}

console.log(removeDup([1,2,2,3,3,4,5]))

//1g iife

(function(arr){
    var newarr = [...new Set(arr)]
    return newarr
})([1,2,2,3,3,4,5])

// 1h annonymous

var rotateK = function(arr,k){
    k = k % arr.length;
    var newarr = arr.splice(0,k)
    var resarr = [...arr,...newarr]
    console.log(resarr)
}

rotateK([1,2,3,4,5,6],7)

//1h iife

(function(arr,k){
    k = k % arr.length;
    var newarr = arr.splice(0,k)
    var resarr = [...arr,...newarr]
    console.log(resarr)) ([1,2,3,4,5,6],7)

// 2a

var oddCheck = (arr) =>{
    
    for(let x of arr){
        if(x%2!==0){
            console.log(x)
        }
    }
}

oddCheck([1,2,3,4,5,6,7,8])

// 2b

var titleCaps = (arr) =>{
    
   for(var i=0;i<arr.length;i++){
        arr[i] = arr[i][0].toUpperCase()+arr[i].substring(1)
    }
    return arr;
}

console.log(titleCaps(["abc","xyz","pqr"]))

// 2c

var sum = (arr) =>{
    
    var total =0
    for(let x of arr){
        total=total+x
    }
    
    return total;
}

console.log(sum([1,2,3,4,5]))

// 2d

var prime = (arr) =>{
    
    var newarr = arr.map((elem)=>{
        return {
            val: elem,
            counter: 0
        }
    })
    
    var resarr= []
    
    for(var i=0;i<newarr.length;i++){
        for(j=1;j<=parseInt(arr[i]/2);j++){
            if(newarr[i].val%j===0){
                newarr[i].counter++
            }
        }
    }
    
    for(let x of newarr){
        if(x.counter===1){
            resarr.push(x.val)
        }
    }
    
    return resarr;
}

console.log(prime([1,2,3,4,5,19,27,15,11]))

// 2e

var pal = (arr) =>{
    var palarr = []
    for(let x of arr){
        if(x===x.split('').reverse().join('')){
            palarr.push(x)
        }
    }
    
    return palarr
}

console.log(pal(['abc','pqr','rar','saas']))






