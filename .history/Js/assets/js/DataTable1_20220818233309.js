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

 // column.dataIndex === 'delete'
      //   ? $th.setAttribute('data-delete', column.dataIndex)
      //   : $th.setAttribute('data-sort', column.dataIndex);
      // column.dataIndex === 'delete'
      //   ? ''
      //   : 

class Animal {
    constructor(name) {
        this._name = name;
    }

    toString(){
        return this._name;
    }
}

class Dog extends Animal {
    constructor(name, age){
        super(name);
        this._age = age;
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


createPageSelect() {
    const $select = document.createElement("select");
    document.querySelector(".data-table-container").appendChild($select);
    const options = [5, 10, 20, 25];
    $select.classList.add("selectDataCount");
    options.forEach((item) => {
      const $option = document.createElement("option");
      $option.innerHTML = item;
      $select.appendChild($option);
    });

    $select.addEventListener("change", (e) => {
      this.dataCount = e.target.value;
      this.$tbody.innerHTML = "";
      let pageNumber = 1;
      let start = (pageNumber - 1) * this.dataCount;
      let end = start + this.dataCount;
      let forRender =
      this.searchedData == null || this.searchedData.length == 0
          ? this.searchedData.slice(start, end)
          : this.data.slice(start, end);  
      this.forRender = forRender;
      this.$tpage.remove();
      console.log(this.dataCount, this.forRender);
  
      this.per = Math.ceil(
        this.searchedData == null || this.searchedData.length == 0
          ? this.data.length / this.dataCount
          : this.searchedData.length / this.dataCount
      );

      
      this.createPagination();
      this.renderData(this.dataCount, this.forRender);
      this.pagination(
        pageNumber,
        this.searchedData == null || this.searchedData.length == 0
          ? this.data
          : this.searchedData
      );
    });
  }


