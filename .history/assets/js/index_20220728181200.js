import DataTable from './DataTable.js';

const columns = ['id', 'name', 'age'];


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
    name: 'Vaik',
    age: 11,
},
{
    id: 5,
    name: 'Arno',
    age: 7,
},
{
    id: 6,
    name: 'Mark',
    age: 5,
},
{
    id: 7,
    name: 'Vaik',
    age: 11,
},
{
    id: 8,
    name: 'Arno',
    age: 7,
},
{
    id: 9,
    name: 'Mark',
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
    id: 5,
    name: 'Arno',
    age: 7,
},
{
    id: 6,
    name: 'Mark',
    age: 5,
},
{
    id: 7,
    name: 'Vaik',
    age: 11,
},
{
    id: 8,
    name: 'Arno',
    age: 7,
},
{
    id: 9,
    name: 'Mark',
    age: 5,
},
{
    id: 10,
    name: 'Mark',
    age: 5,
}
];
const dataTable = new DataTable(columns,data);
dataTable.createTable();

// Element.prototype.dataTable = function(){

// };
// const $table = document.querySelector('.data-table-container');
