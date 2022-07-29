const obj =  {
    obj1: { 
        a: 4, 
        b: 9 
    },
    number: 10,
    array: [1, 4, [2, 3]],
    null: null,
    func: () => {
        console.log("this is deep copy!");
    }
  };

function deepCopy(object) {
    let newObj = {}; 
    if (typeof object !== 'object' || object == null) {
        return object;
    }
    newObj = Array.isArray(object) ? [] : {};
    for (let key in object) {
        newObj[key] = deepCopy(object[key]);
    }
    return newObj; 
}

let newObject = deepCopy(obj); // էդ վերադարձրածը պահում ենք մի հատ փոփոխականի մեջ 

console.log(newObject);