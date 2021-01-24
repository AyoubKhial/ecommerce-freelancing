import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { BrandService, IBrand } from 'src/app/_services/brand.service';
import { environment } from 'src/environments/environment';
import { ImageFormatterComponent } from '../../../_helpers/Image-formatter.component';

@Component({
	selector: 'app-brands',
	templateUrl: './brands.component.html',
	styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

	@ViewChild('agGrid') agGrid: AgGridAngular;
	@ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
	@ViewChild('closeModal') closeModal: ElementRef;
	
	defaultColDef = {
		sortable: true,
		filter: true,
		editable: true,
		resizable: true
	};

	public columnDefs = [
		{ field: 'id' },
		{ field: "sequenceNumber" },
		{ field: 'name' },
		{ field: 'label' },
		{ field: 'keywords' },
		{ field: 'logo', cellRendererFramework: ImageFormatterComponent }
	];

	public brand: Partial<IBrand> = {};
	public brands: IBrand[];
	public errorMessage: string;
	private file: File;
	private selectedRows: IBrand[];

	constructor(private brandService: BrandService) { }

	ngOnInit(): void {
		this.getBrands();
	}

	public onFileSelect(event: any): void {
		this.file = event.target.files[0];
	}

	public add(): void {
		if (!this.brand?.name) {
			this.errorMessage = 'Please provide the brand name.';
			return;
		}
		if (!this.brand?.sequenceNumber) {
			this.errorMessage = 'Please provide the brand sequence NO.';
			return;
		}
		this.createBrand(this.brand, this.file);
	}

	public onSelectionChanged = (event: any): void => {
    	this.selectedRows = event.api.getSelectedRows();
	}

	public remove = (): void => {
		if (this.selectedRows && confirm('Are you sure you want to delete the data selected ?')) {
			const ids = this.selectedRows.map(row => row.id);
			for (const id of ids) this.deleteBrand(id);
			this.brands = this.brands.filter(brand => !ids.includes(brand.id));
			this.selectedRows = [];
		}
	}

	private getBrands = (): void => {
		this.brandService.find().subscribe(brands => {
			brands = brands.map(brand => ({ ...brand, logo: `${environment.server}${brand.logo}` }))
			this.brands = brands;
		});
	}

	private deleteBrand = (id: number): void => {
		this.brandService.delete(id).subscribe();
	}

	private createBrand = (brand: Partial<IBrand>, file: File): void => {
		this.brandService.create(brand, file).subscribe(brand => {
			brand.logo = `${environment.server}${brand.logo}`;
			this.brands = [...this.brands, brand];
			this.errorMessage = '';
			this.closeModal.nativeElement.click();
		});
	}
}
