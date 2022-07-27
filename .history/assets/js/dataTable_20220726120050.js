class DataTable {
    constructor(columns = [], data = []) {
      this.columns = columns;
      this.data = data;
    }
  
    createTable() {
      const $table = document.createElement('table');
      this.table = $table;
      const $dataTableContainer = document.querySelector('.data-table-container');
      $dataTableContainer.appendChild($table);  
      $table.appendChild(this.createThead());
      const $tbody = this.createTbody();
      $table.appendChild($tbody);      
      this.createThead();
      this.createTbody();     
    
    }
  
    createThead() {
      const $thead = document.createElement('thead');
      const $tr = document.createElement('tr');  
      this.columns.forEach((column) => {
        const $th = document.createElement('th');
        $th.innerHTML = column;
        $tr.appendChild($th);
      });  
      $thead.appendChild($tr);
      this.$table.appendChild($thead);
    }
  
    createTbody() {
      const $tbody = document.createElement('tbody');
      this.$tbody = $tbody;
      this.$table.appendChild($tbody);
    }
  
    renderData() {
      return this.data.map((item) => {
        const $tr = document.createElement('tr');  
        for(const key in item) {
          const $td = document.createElement('td');
          $td.innerHTML = item[key];
          $tr.appendChild($td);
        }
        
        this.$tbody.appendChild($tr);
        return $tr;
      });
    }
  }
  
  export default DataTable;