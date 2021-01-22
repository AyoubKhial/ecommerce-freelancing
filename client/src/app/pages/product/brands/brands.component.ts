import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;

  defaultColDef = {
    sortable: true,
    filter: true,
    editable: true,
    resizable: true
  };

  columnDefs = [
    { field: 'id', checkboxSelection: true, editable: false},
    { field: "sequenceNo"},
    { field: 'firstName' },
    { field: 'showcase' },
    { field: 'Condition' },
    { field: 'Upload New Image'}
  ];

  



  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];
  rowData: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    //this.rowData = this.http.get('https://www.ag-grid.com/example-assets/small-row-data.json');
    this.rowData = this.http.get('http://localhost:8081/assets/data.json');

  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => {
      if (node.groupData) {
        return { firstName: node.key, model: 'Group' };
      }
      return node.data;
    });
    const selectedDataStringPresentation = selectedData.map(node => node.firstName).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
