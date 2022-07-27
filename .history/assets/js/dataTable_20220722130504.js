class DataTable{
constructor(columns = [], data = []){
this.columns = columns;
this.data = data;
}

createTable(){
    const $table = document.createElement('table');
    const $dataTableContainer = document.querySelector('.data-table-container');
    $dataTableContainer.appendChild($table);
 
   $table.appendChild(this.createThead());
   $table.appendChild(this.createTbody());

}
createThead(){
   const $thead = document.createElement('thead');
   const $tr = document.createElement('tr');

   this.columns.forEach((column) => {
       const $th = document.createElement('th');
       $th.innerHTML = column;
       $tr.appendChild($th);
   });
   $thead.appendChild($tr);
   return $thead;
}
createTbody(){
    const $tbody = document.createElement('tbody');
    // const $tr = document.createElement('tr');/////
    return $tbody;
}
renderData(){
this.data.forEach((item)=>)
}
}
 export default DataTable;