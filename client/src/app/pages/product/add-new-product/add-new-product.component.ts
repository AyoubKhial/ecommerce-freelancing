import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BrandService, IBrand } from 'src/app/_services/brand.service';
import { CategoryService, ICategory } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { IVariant, VariantService } from 'src/app/_services/variant.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
	selector: 'app-add-new-product',
	templateUrl: './add-new-product.component.html',
	styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
	public currentMenu: string;
	public productMenus: any = [
		{ id: 'newProduct', name: 'New Product' },
		{ id: 'price', name: 'Price' },
		{ id: 'productDetail', name: 'Product Detail' },
		{ id: 'other', name: 'Other' },
		{ id: 'variants', name: 'Variants' },
		{ id: 'seoInfor', name: 'Seo Infermation' },
		{ id: 'seoTag', name: 'Seo + Tag System' },
		{ id: 'countdown', name: 'Countdown Feature' },
		{ id: 'customize', name: 'Customize' }
	];
	public Editor = ClassicEditor;
	public categories: ICategory[];
	public brands: IBrand[];
	public variants: IVariant[];
	public selectedVariants: any = {};
	public product: any = {};
	public featuresData = [
		{
			name: 'Gender',
			values: ['Male', 'Female', 'Child', 'Unisex']
		},
		{
			name: 'Shoe',
			values: ['Male', 'Lady']
		},
		{
			name: 'Color',
			values: ['Red', 'White', 'Blue', 'Black', 'Yellow', 'Green', 'Brown']
		}
	];
	@ViewChild('UploadFileInput1', { static: false }) uploadFileInput1: ElementRef;
	@ViewChild('UploadFileInput2', { static: false }) uploadFileInput2: ElementRef;
	@ViewChild('UploadFileInput3', { static: false }) uploadFileInput3: ElementRef;
	@ViewChild('UploadFileInput4', { static: false }) uploadFileInput4: ElementRef;
	@ViewChild('UploadFileInput5', { static: false }) uploadFileInput5: ElementRef;
	@ViewChild('UploadFileInput6', { static: false }) uploadFileInput6: ElementRef;
	@ViewChild('UploadFileInput7', { static: false }) uploadFileInput7: ElementRef;
	@ViewChild('UploadFileInput8', { static: false }) uploadFileInput8: ElementRef;
	private file1: File;
	private file2: File;
	private file3: File;
	private file4: File;
	private file5: File;
	private file6: File;
	private file7: File;
	private file8: File;

	constructor(
		private categoryService: CategoryService,
		private brandService: BrandService,
		private productService: ProductService,
		private variantService: VariantService
	) { }

	ngOnInit(): void {
		this.currentMenu = 'newProduct';
		this.getCategories();
		this.getBrands();
		this.getVariants();
	}

	public getFeatureValues = (): string[] => {
		return this.featuresData.find(feature => feature.name === this.product.productFeature).values;
	}

	public onPicture1Select(event: any): void {
		this.file1 = event.target.files[0];
	}

	public onPicture2Select(event: any): void {
		this.file2 = event.target.files[0];
	}

	public onPicture3Select(event: any): void {
		this.file3 = event.target.files[0];
	}

	public onPicture4Select(event: any): void {
		this.file4 = event.target.files[0];
	}

	public onPicture5Select(event: any): void {
		this.file5 = event.target.files[0];
	}

	public onPicture6Select(event: any): void {
		this.file6 = event.target.files[0];
	}

	public onPicture7Select(event: any): void {
		this.file7 = event.target.files[0];
	}

	public onPicture8Select(event: any): void {
		this.file8 = event.target.files[0];
	}

	public addOrRemoveVariant = (checked: boolean, variantName: string): void => {
		if (checked) this.selectedVariants[variantName] = [];
		else delete this.selectedVariants[variantName];
	}

	public getVariantValues = (variantName: string): string[] => {
		return this.variants.find(variant => variant.name === variantName).values;
	}

	public gotoPage(id: string) {
		this.currentMenu = id;
	}

	public save = (): void => {
		let index = 1;
		for (const [key, variant] of Object.entries(this.selectedVariants)) {
			this.product[`variant${index}`] = variant;
			this.product[`variant${index}`].unshift(key);
			index++;
		}
		if (this.product.countdownStartDate) {
			const date = this.product.countdownStartDate.split('-');
			const time = this.product.countdownStartTime.split(':');
			this.product.countdownStart = new Date(date[0], Number(date[1]) - 1, date[2], time[0], time[1]).getTime()
		}
		if (this.product.countdownEndDate) {
			const date = this.product.countdownEndDate.split('-');
			const time = this.product.countdownEndTime.split(':');
			this.product.countdownEnd = new Date(date[0], Number(date[1]) - 1, date[2], time[0], time[1]).getTime()
		}
		if (this.product.throwProductDate) {
			const date = this.product.throwProductDate.split('-');
			const time = this.product.throwProductTime.split(':');
			this.product.throwProduct = new Date(date[0], Number(date[1]) - 1, date[2], time[0], time[1]).getTime()
		}
		this.createProduct(this.product, [this.file1, this.file2, this.file3, this.file4, this.file5, this.file6, this.file7, this.file8].filter(file => file))
	}

	private getCategories = (): void => {
		this.categoryService.find().subscribe(categories => {
			this.categories = categories;
		})
	}

	private getBrands = (): void => {
		this.brandService.find().subscribe(brands => {
			this.brands = brands;
		});
	}

	private getVariants = (): void => {
		this.variantService.find().subscribe(variants => {
			this.variants = variants;
		});
	}

	private createProduct = (product: any, files: File[]): void => {
		if (files.length) {
			for (const [index, file] of files.entries()) {
				setTimeout(() => {
					this.productService.create(product, file, index).subscribe(a => console.log(a))
				}, index * 1000);
			}
		} else {
			this.productService.create(product).subscribe(a => console.log(a))
		}
		
	}
}
