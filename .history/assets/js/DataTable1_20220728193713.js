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
    let newObj = {}; // էս էն օբյեկտն ա որ վերջում պետք ա վերադարձնի, որպես քոփի

    if (typeof object !== 'object' || object == null) { //ստեղ ստուգում ա որ եթե օբ․ չի հենց իրան տա
        return object;
    }

    newObj = Array.isArray(object) ? [] : {}; //ու եթե վերևի պայմանիմեջ չի մտնում գա էս տողի վրա, ստեղ էլ կստուգի, եթե զանգվածա [] սրա մեջ կսկսի լցնել, եթե օբ ա ՝ {} սրա

    for (let key in object) { // նու էդ ստուգումից հետո կմտնի մեջը կֆռա հերթով բոլորի վրայով
        newObj[key] = deepCopy(object[key]); // ամեն մեկի համար էլի հենց էս նույն ֆունկցիան կկանչի, քանի որ կարա ասենք էլի զանգվածի մեջ զանգված լինի, կամ օբ-ի մեջ օբ
    }

    return newObj; // ու վերջում էդ ամենը վերադարձնում ա
}

let newObject = deepCopy(obj); // էդ վերադարձրածը պահում ենք մի հատ փոփոխականի մեջ 

console.log(newObject);