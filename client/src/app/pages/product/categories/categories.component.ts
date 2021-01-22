import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	@ViewChild('agGrid') agGrid: AgGridAngular;

	public defaultColDef = {
		sortable: true,
		filter: true,
		editable: true
	};

	public columnDefs = [
		{ field: 'id' },
		{ field: "sequenceNumber" },
		{ field: 'name' },
		{ field: 'priceRatio' },
		{ field: 'isCombine' },
		{ field: 'label' },
		{ field: 'keywords' }
	];

	public categories: any;

	constructor(private categoryService: CategoryService) {}

	ngOnInit(): void {
		this.getCategories();
	}

	private getCategories = (): void => {
		this.categoryService.find().subscribe(categories => {
			console.log(categories);
			this.categories = categories;
			console.log(this.categories);
		})
	}

	getSelectedRows() {
		const selectedNodes = this.agGrid.api.getSelectedNodes();
		const selectedData = selectedNodes.map(node => {
			if (node.groupData) {
				return { firstName: node.key, model: 'Group' };
			}
			return node.data;
		});
		const selectedDataStringPresentation = selectedData.map(node => node.firstName + ' ' + node.subName).join(', ');

		alert(`Selected nodes: ${selectedDataStringPresentation}`);
	}

}

