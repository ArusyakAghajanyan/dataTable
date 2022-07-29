class DataTable {
    constructor(columns = [], data = []) {
      this.columns = columns;
      this.data = data;
    }
  
    createTable() {        
      const $table = document.createElement('table');
      this.$table = $table;      
      const $dataTableContainer = document.querySelector('.data-table-container');
      $dataTableContainer.appendChild($table);
      this.createThead();
      this.createTbody();     
      this.renderData(this.dataCount,this.data);
      this.createPagination();  
      this.createPageSelect(); 
      const $select = document.querySelector('.selectDataCount');
      const dataCount = $select.value;
      this.dataCount = dataCount;
      console.log(this.dataCount);  
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
      for (let i = 0; i < dataCount; i++){
        const $tr = document.createElement('tr');

        for (const key in rData[i]){
            const $td = document.createElement('td');
            $td.innerHTML = rData[i][key];
            $tr.appendChild($td);
        }

        this.$tbody.appendChild($tr);
    }
    }
    createPagination(){
        const $tpage = document.createElement('tr');
        const $td = document.createElement('td');
        const attr = document.createAttribute("colspan"); 
        const per = Math.ceil(this.data.length / this.dataCount);    
        attr.value = "3";
        $td.setAttributeNode(attr);
        for (let btnCount = 1; btnCount <= per; btnCount++){
            const $btn = document.createElement('button');            
            $btn.addEventListener('click', ()=>{
                this.$tbody.innerHTML = '';
                let pageNumber = $btn.innerText;
                let start = (pageNumber - 1) * this.dataCount;
                let end = start + this.dataCount;
                let forRender = this.data.slice(start, end);
                this.forRender = forRender;
                this.renderData(this.dataCount, this.forRender);
            });            
            $td.appendChild($btn);
            $btn.innerHTML = btnCount;
            $tpage.appendChild($td);
        }
        this.$table.appendChild($tpage);
    }

    createPageSelect(){
        const $select = document.createElement("select");        
        document.querySelector('.data-table-container').appendChild($select);
        const options = [5, 10, 20, 25];
        $select
        options.forEach((item) => {
            const $option = document.createElement('option');
            $option.innerHTML = item;
            $select.appendChild($option);
        });
        
       $select.addEventListener('change', (e) => {
           this.dataCount = e.target.value;
           console.log(this.dataCount, this.forRender);
           let pageNumber = 1;
           this.$tpage.remove();
           this.createPagination();
           
       });
    }
  }
  
  export default DataTable;