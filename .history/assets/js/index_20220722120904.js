import DataTable from './DataTable.js';

const columns = ['id', 'name', 'age'];


const data = [
{
    id: 1,
    name: 'Arno',
    age: 6,
},
{
    id: 2,
    name: 'Vaik',
    age: 11,
},
{
    id: 3,
    name: 'Mark',
    age: 5,
}

];
Element.prototype.dataTable = function(){

};
const $table = document.querySelector('.data-table-container');