import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { VariantService, IVariant } from 'src/app/_services/variant.service';

@Component({
	selector: 'app-variants',
	templateUrl: './variants.component.html',
	styleUrls: ['./variants.component.css']
})
export class VariantsComponent implements OnInit {

	@ViewChild('agGrid') agGrid: AgGridAngular;

	public defaultColDef = {
		sortable: true,
		filter: true,
		editable: true
	};

	public columnDefs = [
		{ field: 'id' },
		{ field: 'name' },
		{ field: 'values' },
		{ field: 'createdAt' },
		{ field: 'updatedAt' }
	];

	public variants: IVariant[];
	public variant: Partial<IVariant> = {};
	private selectedRows: IVariant[];

	constructor(private variantService: VariantService) {}

	ngOnInit(): void {
		this.getCategories();
	}

	public onCellValueChanged = (event: any): void => {
		console.log(event);
		const id = event.data.id;
		const data = { [event.colDef.field]: event.newValue };
		this.updateCategory(id, data);
	}

	public onSelectionChanged = (event: any): void => {
    	this.selectedRows = event.api.getSelectedRows();
	}

	public add = (): void => {
		this.createCategory(this.variant);
	}

	public remove = (): void => {
		if (this.selectedRows && confirm('Are you sure you want to delete the data selected ?')) {
			const ids = this.selectedRows.map(row => row.id);
			for (const id of ids) this.deleteCategory(id);
			this.variants = this.variants.filter(category => !ids.includes(category.id));
			this.selectedRows = [];
		}
	}

	private getCategories = (): void => {
		this.variantService.find().subscribe(variants => {
			this.variants = variants;
		});
	}

	private updateCategory = (id: number, data: Partial<IVariant>): void => {
		this.variantService.update(id, data).subscribe();
	}

	private deleteCategory = (id: number): void => {
		this.variantService.delete(id).subscribe();
	}

	private createCategory = (variant: Partial<IVariant>): void => {
		this.variantService.create(variant).subscribe(variant => {
			this.variants = [...this.variants, variant];
		});
	}
}

