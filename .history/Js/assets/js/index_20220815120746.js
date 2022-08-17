import DataTable from './DataTable.js';

// const columns = ['id', 'name', 'age'];

const columnsObject = [
    {
        value: 'ID',
        dataIndex: 'id',
    },
    {
        value: 'Name',
        dataIndex: 'name',
    },
    {
        value: 'Age',
        dataIndex: 'age',
    },
    {
        value: 'Developer',
        dataIndex: 'developer',
    },
   
];


const data = [

{
    id: 1,
    name: 'Vaik',
    age: 11,
    position: 'Developer', 
},
{
    id: 2,
    name: 'Arno',
    age: 7,
    position: 'Teacher', 
},
{
    id: 3,
    name: 'Mark',
    age: 5,
    position: 'QA', 
},
{
    id: 4,
    name: 'Alik',
    age: 110,
    position: 'Developer', 
},
{
    id: 5,
    name: 'Alex',
    age: 70,
    position: 'Developer', 
},
{
    id: 6,
    name: 'Marat',
    age: 50,
    position: 'Developer', 
},
{
    id: 7,
    name: 'Vanik',
    age: 50,
    position: 'Developer', 
},
{
    id: 8,
    name: 'Seroj',
    age: 21,
    position: 'Developer', 
},
{
    id: 9,
    name: 'Stepan',
    age: 59,
    position: 'Developer', 
},
{
    id: 10,
    name: 'Avag',
    age: 5,
    position: 'Developer', 
},
{
    id: 11,
    name: 'Tigran',
    age: 15,
    position: 'Accounting',
},
{
    id: 12,
    name: 'Berta',
    age: 79,
    position: 'Accounting',
},
{
    id: 13,
    name: 'Karin',
    age: 53,
    position: 'Accounting',
},
{
    id: 14,
    name: 'Hmayak',
    age: 18,
    position: 'Accounting',
},
{
    id: 15,
    name: 'Hamest',
    age: 89,
    position: 'Accounting',
},
{
    id: 16,
    name: 'Lilit',
    age: 65,
    position: 'Accounting',
},
{
    id: 17,
    name: 'Lia',
    age: 45,
    position: 'Accounting',
},
{
    id: 18,
    name: 'Lenur',
    age: 40,
    position: 'Accounting',
},
{
    id: 19,
    name: 'Mher',
    age: 36,
    position: 'Accounting',
},
{
    id: 20,
    name: 'Papin',
    age: 36,
    position: 'Accounting',
},
{
    id: 21,
    name: 'Mika',
    age: 98,
    position: 'Accounting',
},
{
    id: 22,
    name: 'Pargev',
    age: 58,
    position: 'Accounting',
}
];
const options = {
    dataCount: 5,
}


const $dataTableContainer = document.querySelector('.data-table-container');

Element.prototype.dataTable = function(columnsObject, data, options){
    const dataTable = new DataTable(columnsObject,data,options);
    dataTable.createTable(this); 
};
$dataTableContainer.dataTable(columnsObject, data, options);

console.dir($dataTableContainer);
