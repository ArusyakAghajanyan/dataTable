class DataTable{
constructor(columns = [], data = []){
this.columns = columns;
this.data = data;
}

createTable(){
    const $table = document.createElement('table');
    const $dataTableContainer = document.querySelector('.data-table-container');
    $dataTableContainer.appendChild($table);
}
createThead(){
   const $thead = document.createElement();
   const $tr = doc
}
}
 export default DataTable;