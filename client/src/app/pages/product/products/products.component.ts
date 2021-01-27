import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';
import { BrandService } from 'src/app/_services/brand.service';
import { CategoryService } from 'src/app/_services/category.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	@ViewChild('myTable') table: DatatableComponent;
	@ViewChild('DataTableComponent') myFilterTable: DatatableComponent;
	public products: any[];

	constructor(private router: Router, private productService: ProductService, private categoryService: CategoryService, private brandService: BrandService, private sanitizer: DomSanitizer) { }

	title = 'angular-datatables';

	temp = [];
	rows = [];

	ngOnInit() {
		this.getProducts();
		this.fetch((data) => {
			this.temp = [...data];
			this.rows = data;
		});
	}

	private getProducts = () => {
		this.productService.find().subscribe(products => {
			for (const product of products) {
				this.categoryService.findById(product.category).subscribe(category => {
					product.category = category.name;
					this.brandService.findById(product.brand).subscribe(brand => {
						product.brand = brand.name;
						this.products = products
					});
				});
			}
		})
	}

	fetch(cb) {
		const req = new XMLHttpRequest();
		req.open('GET', `http://swimlane.github.io/ngx-datatable/assets/data/company.json`);

		req.onload = () => {
			const data = JSON.parse(req.response);
			console.log(data);
			cb(data);
		};

		req.send();
	}

	updateFilter(event) {
		const val = event.target.value.toLowerCase();
		const temp = this.temp.filter(function (d) {
			return d.name.toLowerCase().indexOf(val) !== -1 || !val;
		});
		this.rows = temp;
	}

	gotoAddingProduct() {
		this.router.navigateByUrl('addingProduct')
	}

	getSafeUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(environment.server + url);
    }
}
