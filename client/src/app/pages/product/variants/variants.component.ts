import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { VariantService, IVariant } from 'src/app/_services/variant.service';

@Component({
	selector: 'app-variants',
	templateUrl: './variants.component.html',
	styleUrls: ['./variants.component.css']
})
export class VariantsComponent implements OnInit {

	@ViewChild('agGrid') agGrid: AgGridAngular;
	@ViewChild('closeModal') closeModal: ElementRef;

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
	public errorMessage: string;
	private selectedRows: IVariant[];

	constructor(private variantService: VariantService) {}

	ngOnInit(): void {
		this.getVariants();
	}

	public onCellValueChanged = (event: any): void => {
		const id = event.data.id;
		const data = { [event.colDef.field]: event.newValue };
		this.updateVariant(id, data);
	}

	public onSelectionChanged = (event: any): void => {
    	this.selectedRows = event.api.getSelectedRows();
	}

	public add = (): void => {
		if (!this.variant?.name) {
			this.errorMessage = 'Please provide the variant name.';
			return;
		}
		if (!this.variant?.values) {
			this.errorMessage = 'Please provide the variant values.';
			return;
		}
		this.createVariant(this.variant);
	}

	public remove = (): void => {
		if (this.selectedRows && confirm('Are you sure you want to delete the data selected ?')) {
			const ids = this.selectedRows.map(row => row.id);
			for (const id of ids) this.deleteVariant(id);
			this.variants = this.variants.filter(variant => !ids.includes(variant.id));
			this.selectedRows = [];
		}
	}

	private getVariants = (): void => {
		this.variantService.find().subscribe(variants => {
			this.variants = variants;
		});
	}

	private updateVariant = (id: number, data: Partial<IVariant>): void => {
		this.variantService.update(id, data).subscribe();
	}

	private deleteVariant = (id: number): void => {
		this.variantService.delete(id).subscribe();
	}

	private createVariant = (variant: Partial<IVariant>): void => {
		this.variantService.create(variant).subscribe(variant => {
			this.variants = [...this.variants, variant];
			this.errorMessage = '';
			this.closeModal.nativeElement.click();
		});
	}
}

