import React from "react";

function mapMethod(arr, fnc) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fnc(arr[i]));
    }
    return result;
}

function cube(x) {
    return x * x * x;
}

console.log(mapMethod([1,2,3,4,5], cube));
function ArrayMethods() {
   return (
      <>
      </>
   );
}

export default ArrayMethods;

    