class DataTable {
    constructor(columns = [], data = []) {
      this.columns = columns;
      this.data = data;
    }
  
    createTable() {
      const dataCount = Math.ceil(this.data.length/3);
      this.dataCount = dataCount;
      const $table = document.createElement('table');
      this.$table = $table;
      const $dataTableContainer = document.querySelector('.data-table-container');
      $dataTableContainer.appendChild($table);

      this.createThead();
      this.createTbody();     
      this.renderData(dataCount);
        this.createTfooter();  
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
      this.data.forEach((item) => {
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