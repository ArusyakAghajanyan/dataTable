const obj =  {
    obj1: { a: 1, b: 2 },
    number: 5,
    array: [1, [2, 3], 4],
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


pagination(pageNumber, currentData) {
    let start = (pageNumber - 1) * this.dataCount;
    let end = start + this.dataCount;
    let forRender = currentData.slice(start, end);
    this.forRender = forRender;
    this.renderData(this.dataCount, this.forRender);
}