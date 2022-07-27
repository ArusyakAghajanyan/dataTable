class DataTable {
    constructor(columns = [], data = []) {
      this.columns = columns;
      this.data = data;
    }
  
    createTable() {
      const dataCount = 5;
      this.dataCount = dataCount;
      const $table = document.createElement('table');
      this.$table = $table;
      const $dataTableContainer = document.querySelector('.data-table-container');
      $dataTableContainer.appendChild($table);

      this.createThead();
      this.createTbody();     
      this.renderData(dataCount);
      this.createPagination();  
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
  
    renderData(dataCount, rData) {
      if (!rData) rData = this.data;
      rData.every((item, index) => {
        if(index === dataCount) return;
        const $tr = document.createElement('tr');
        for (const key in item){
            const $td = document.createElement('td');
            $td.innerHTML = item[key];
            $tr.appendChild($td);
        }
        this.$tbody.appendChild($tr);
        return $tr;
    });
    }
    createPagination(){
        const $tpage = document.createElement('tr');
        const $td = document.createElement('td');
        const attr = document.createAttribute("colspan"); 
        const per = Math.ceil()    
        attr.value = "3";
        $td.setAttributeNode(attr);
        for (let btnCount = 1; btnCount <= ; btnCount++){
            const $btn = document.createElement('button');            
            $btn.addEventListener('click', ()=>{
                this.$tbody.innerHTML = '';
                let pageNumber = $btn.innerText;
                let start = (pageNumber - 1) * this.dataCount;
                let end = start + this.dataCount;
                let forRender = this.data.slice(start, end);
                this.renderData(this.dataCount, forRender);
            });            
            $td.appendChild($btn);
            $btn.innerHTML = btnCount;
            $tpage.appendChild($td);
        }
        this.$table.appendChild($tpage);
    }
  }
  
  export default DataTable;