class DataTable{
constructor(columns = [], data = []){
this.columns = columns;
this.data = data;
}

createTable(){
    const $table = document.createElement('table');
    const $dataTableContainer = document.querySelector('.data-table-container');
    $dataTableContainer.appendChild($table);

    this.createThead();
}
createThead(){
   const $thead = document.createElement();
   const $tr = document.createElement('tr');

   this.columns.forEach((column) => {
       const $th = document.createElement('th');
       $tr.appendChild($th);
   });
   $thead.appendChild($tr);
   return $th
}
}
 export default DataTable;