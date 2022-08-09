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
};

let newObject = deepCopy(obj); // էդ վերադարձրածը պահում ենք մի հատ փոփոխականի մեջ 

console.log(newObject);

// copyData(data){
//     let searchedData = [];
//     if (typeof data !== 'object' || data === null) return data;

//     searchedData = Array.isArray(data) ? [] : {};
//     for (let key in data) {
//       searchedData[key] = this.copyData(data[key]);
//     }
//     return searchedData;
// }


class Animal {
    constructor(name) {
        this._name = name;
    }
    // talk(){
    //     alert(this.name + 'says woof');
    // }
    toString(){
        return this._name;
    }
}

class Dog extends Animal {
    constructor(name, age){
        this._age
    }
    talk(){
        alert(this.name + 'says woof' + this.toString());
    } 
    toString(){
        return 'Dog named' + super.toString();
    }
}

 class Cat  extends Animal{   
    talk(){
        alert(this.name + 'says meaw');
    }   
}

const dog1 = new Dog('Koki');
dog1.talk();
alert(dog1);
alert(dog1.toString());