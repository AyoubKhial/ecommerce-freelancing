import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CategoryService, ICategory } from 'src/app/_services/category.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	@ViewChild('agGrid') agGrid: AgGridAngular;
	@ViewChild('closeModal') closeModal: ElementRef;

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

	public categories: ICategory[];
	public category: Partial<ICategory> = {};
	public errorMessage: string;
	private selectedRows: ICategory[];

	constructor(private categoryService: CategoryService) { }

	ngOnInit(): void {
		this.getCategories();
	}

	public onCellValueChanged = (event: any): void => {
		const id = event.data.id;
		const data = { [event.colDef.field]: event.newValue };
		this.updateCategory(id, data);
	}

	public onSelectionChanged = (event: any): void => {
		this.selectedRows = event.api.getSelectedRows();
	}

	public add = (): void => {
		if (!this.category?.name) {
			this.errorMessage = 'Please provide the category name.';
			return;
		}
		if (!this.category?.sequenceNumber) {
			this.errorMessage = 'Please provide the category sequence NO.';
			return;
		}
		this.createCategory(this.category);
	}

	public remove = (): void => {
		if (this.selectedRows && confirm('Are you sure you want to delete the data selected ?')) {
			const ids = this.selectedRows.map(row => row.id);
			for (const id of ids) this.deleteCategory(id);
			this.categories = this.categories.filter(category => !ids.includes(category.id));
			this.selectedRows = [];
		}
	}

	private getCategories = (): void => {
		this.categoryService.find().subscribe(categories => {
			this.categories = categories;
		});
	}

	private updateCategory = (id: number, data: Partial<ICategory>): void => {
		this.categoryService.update(id, data).subscribe();
	}

	private deleteCategory = (id: number): void => {
		this.categoryService.delete(id).subscribe();
	}

	private createCategory = (category: Partial<ICategory>): void => {
		this.categoryService.create(category).subscribe(category => {
			this.categories = [...this.categories, category];
			this.errorMessage = '';
			this.closeModal.nativeElement.click();
		});
	}
}

