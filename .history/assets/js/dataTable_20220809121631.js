class DataTable {
  constructor(
    columns = [],
    data = [],
    {
      dataCount = 5,
      rowClassName = 'test',
      cellClassName = 'test',
      tableClassName = 'test',
      deleteClassName = 'test',
    }
  ) {
    this.columns = columns;
    this.data = data;
    this.forRender = data.slice(0, this.dataCount);
    this.dataCount = dataCount;
    this.rowClassName = rowClassName;
    this.cellClassName = cellClassName;
    this.deleteClassName = deleteClassName;
    this.tableClassName = tableClassName;
  }

  createTable($dataTableContainer) {
    this.$dataTableContainer = $dataTableContainer;
    let pageCount= Math.ceil(this.data.length / this.dataCount);////
    this.pageCount= pageCount;

    let searchedData = null;
    this.searchedData = searchedData;

    this.createSearchForm();
    console.log(this.dataCount);
    const $table = document.createElement('table');
    $table.classList.add(this.tableClassName);
    this.$table = $table;
    $dataTableContainer.appendChild($table);

    this.createThead();
    this.createTbody();
    this.createPageSelect();
    this.renderData(this.dataCount, this.data);
    this.createPagination();
  }

  createThead() {
    const $thead = document.createElement('thead');
    const $tr = document.createElement('tr');
    $tr.classList.add(this.rowClassName);

    this.columns.forEach((column) => {
      const $th = document.createElement('th');
      $th.innerHTML = column.value;
      column.dataIndex === 'delete'
        ? $th.setAttribute('data-delete', column.dataIndex)
        : $th.setAttribute('data-sort', column.dataIndex);
      column.dataIndex === 'delete'
        ? ''
        : $th.setAttribute('data-sort-order','asc');
      $tr.appendChild($th);

      $th.addEventListener('click', (e) => {
        let sortMethod = $th.getAttribute('data-sort-order');
        let columnName = $th.getAttribute('data-sort');

        let sortedData =
          this.searchedData == null || this.searchedData.length == 0
            ? this.data
            : this.searchedData;

        if (sortMethod === 'asc') {
          $th.setAttribute('data-sort-order', 'des');
          $th.innerHTML = column.value;

          console.log(sortMethod);
          if (columnName === 'id') {
            sortedData.sort((dataA, dataB) => dataA.id - dataB.id);
          } else if (columnName === 'name') {
            sortedData.sort((dataA, dataB) => {
              let a = dataA.name.toLowerCase();
              let b = dataB.name.toLowerCase();
              if (a < b) return -1;
              if (a > b) return 1;
              return 0;
            });
          } else if (columnName === 'age') {
            sortedData.sort((dataA, dataB) => dataA.age - dataB.age);
          }
        } else if (sortMethod === 'des') {
          $th.setAttribute('data-sort-order', 'asc');
          $th.innerHTML = column.value;

          if (columnName === 'id') {
            sortedData.sort((dataA, dataB) => dataB.id - dataA.id);
          } else if (columnName === 'name') {
            sortedData.sort((dataA, dataB) => {
              let a = dataA.name.toLowerCase();
              let b = dataB.name.toLowerCase();
              if (b < a) return -1;
              if (b > a) return 1;
              return 0;
            });
          } else if (columnName === 'age') {
            sortedData.sort((dataA, dataB) => dataB.age - dataA.age);
          }
        }
        this.$tbody.innerHTML = '';
        this.renderData(this.dataCount, sortedData);
      });
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
    for (let i = 0; i < dataCount; i++) {
      const $tr = document.createElement('tr');
      for (const key in rData[i]) {
        const $td = document.createElement('td');
        $td.classList.add(this.cellClassName);
        $td.innerHTML = rData[i][key];
        $tr.appendChild($td);
      }
      if (!(i >= rData.length)) {
        const $tdDelete = document.createElement('td');
        this.$tdDelete = $tdDelete;
        this.$tdDelete.innerHTML = '"X';
        this.$tdDelete.classList.add(this.deleteClassName);
        this.$tdDelete.setAttribute("data-id", rData[i].id);
        $tr.appendChild(this.$tdDelete);
      }
      this.$tdDelete.addEventListener("click", (e) => {
        let deletedData = e.target.dataset.id;
        console.log(deletedData);

        if (this.searchedData == null || this.searchedData.length == 0) {
          this.data = this.data.filter((ditem) => {
            return ditem.id != deletedData;
          });
        } else {
          this.data = this.data.filter((ditem) => {
            return ditem.id != deletedData;
          });
          this.searchedData = this.searchedData.filter((ditem) => {
            return ditem.id != deletedData;
          });
        }
        this.pageCount= Math.ceil(
          this.searchedData == null || this.searchedData.length == 0
            ? this.data.length / this.dataCount
            : this.searchedData.length / this.dataCount
        );

        this.$tpage.remove();
        this.$tbody.innerHTML = "";
        this.createPagination();
        this.renderData(
          this.dataCount,
          this.searchedData == null || this.searchedData.length == 0
            ? this.data
            : this.searchedData
        );
      });
      this.$tbody.appendChild($tr);
    }
  }
  createPagination() {
    const $tpage = document.createElement("tr");
    this.$tpage = $tpage;
    const $td = document.createElement("td");
    $td.setAttribute("colspan", 4);
    for (let btnCount = 1; btnCount <= this.pageCount; btnCount++) {
      const $btn = document.createElement("button");
      $btn.addEventListener("click", () => {
        this.$tbody.innerHTML = "";
        let pageNumber = $btn.innerText;

        this.pagination(
          pageNumber,
          this.searchedData == null || this.searchedData.length == 0
            ? this.data
            : this.searchedData
        );
      });
      $td.appendChild($btn);
      $btn.innerHTML = btnCount;
      $tpage.appendChild($td);
    }
    this.$table.appendChild($tpage);
  }

  createPageSelect() {
    const $select = document.createElement("select");
    document.querySelector(".data-table-container").appendChild($select);
    const options = [5, 10, 20, 25];
    $select.classList.add("selectDataCount");
    options.forEach((item) => {
      const $option = document.createElement("option");
      $option.innerHTML = item;
      $select.appendChild($option);
    });

    $select.addEventListener("change", (e) => {
      this.dataCount = e.target.value;
      this.$tbody.innerHTML = '';
      this.pageCount= Math.ceil(this.searchedData == null || this.searchedData.length == 0 ? this.data.length/this.dataCount : this.searchedData.length / this.dataCount);
      let pageNumber = 1;
      this.$tpage.remove();
      this.createPagination();
      this.pagination(pageNumber, this.searchedData == null || this.earchedData.length == 0 ? this.data : this.earchedData);

      
    });
  }

  createSearchForm() {
    const $search = document.createElement("input");
    this.$dataTableContainer.appendChild($search);
    this.$search = $search;
    this.$search.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase();
      if (value == "") {
        this.searchedData = this.data;
      }
      console.log(e.target.value);
      this.searchedData = this.data.filter((item) => {
        console.log(item);
        return (
          item.name.toLowerCase().includes(value) ||
          item.age === +value ||
          item.id === +value
        );
      });
      this.pageCount= Math.ceil(
        this.searchedData.length == 0
          ? this.data.length / this.dataCount
          : this.searchedData.length / this.dataCount
      );
      this.$tpage.remove();
      this.$tbody.innerHTML = "";
      this.createPagination();
      this.renderData(
        this.dataCount,
        this.searchedData == null || this.searchedData.length == 0
          ? this.data
          : this.searchedData
      );
    });
  }
  pagination(pageNumber, currentData) {
    let start = (pageNumber - 1) * this.dataCount;
    let end = start + this.dataCount;
    let forRender = currentData.slice(start, end);
    this.forRender = forRender;
    this.renderData(this.dataCount, this.forRender);
  }
}

export default DataTable;
