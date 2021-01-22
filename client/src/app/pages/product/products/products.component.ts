import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  @ViewChild('myTable') table: DatatableComponent;
  @ViewChild('DataTableComponent') myFilterTable: DatatableComponent;

  constructor(private router: Router) { }

  title = 'angular-datatables';

  temp = [];
  rows = [];

  ngOnInit() {
    this.fetch((data) => {

      //cache our list
      this.temp = [...data];
      //push our initial complete list
      this.rows = data;
    });
    // this.table.offset = 0;
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://swimlane.github.io/ngx-datatable/assets/data/company.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.myFilterTable.offset = 0;
  }

  gotoAddingProduct() {
    this.router.navigateByUrl('addingProduct')
  }
}
