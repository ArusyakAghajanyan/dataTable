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
];


const data = [

{
    id: 1,
    name: 'Vaik',
    age: 11,
},
{
    id: 2,
    name: 'Arno',
    age: 7,
},
{
    id: 3,
    name: 'Mark',
    age: 5,
},
{
    id: 4,
    name: 'Alik',
    age: 110,
},
{
    id: 5,
    name: 'Alex',
    age: 70,
},
{
    id: 6,
    name: 'Marat',
    age: 50,
},
{
    id: 7,
    name: 'Vanik',
    age: 50,
},
{
    id: 8,
    name: 'Seroj',
    age: 21,
},
{
    id: 9,
    name: 'Stepan',
    age: 5,
},
{
    id: 10,
    name: 'Mark',
    age: 5,
},
{
    id: 11,
    name: 'Vaik',
    age: 11,
},
{
    id: 12,
    name: 'Arno',
    age: 7,
},
{
    id: 13,
    name: 'Mark',
    age: 5,
},
{
    id: 14,
    name: 'Vaik',
    age: 11,
},
{
    id: 15,
    name: 'Arno',
    age: 7,
},
{
    id: 16,
    name: 'Mark',
    age: 5,
},
{
    id: 17,
    name: 'Vaik',
    age: 11,
},
{
    id: 18,
    name: 'Arno',
    age: 7,
},
{
    id: 19,
    name: 'Mark',
    age: 5,
},
{
    id: 20,
    name: 'Mark',
    age: 5,
}
];
const options = {
    dataCount: 5,
}


const dataTable = new DataTable(columnsObject,data,options);
const $dataTableContainer = document.querySelector('.data-table-container');
dataTable.createTable($dataTableContainer);
// Element.prototype.dataTable = function(){

// };
// const $table = document.querySelector('.data-table-container');
