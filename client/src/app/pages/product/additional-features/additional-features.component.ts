import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { FeatureService, IFeature } from 'src/app/_services/feature.service';

@Component({
	selector: 'app-additional-features',
	templateUrl: './additional-features.component.html',
	styleUrls: ['./additional-features.component.css']
})
export class AdditionalFeaturesComponent implements OnInit {

	@ViewChild('agGrid') agGrid: AgGridAngular;

	public defaultColDef = {
		sortable: true,
		filter: true,
		editable: true
	};

	public columnDefs = [
		{ field: 'id' },
		{ field: 'name' },
		{ field: 'sequenceNumber' },
		{ field: 'createdAt' },
		{ field: 'updatedAt' }
	];

	public features: IFeature[];
	public feature: Partial<IFeature> = {};
	private selectedRows: IFeature[];

	constructor(private featureService: FeatureService) { }

	ngOnInit(): void {
		this.getFeatures();
	}

	public onCellValueChanged = (event: any): void => {
		console.log(event);
		const id = event.data.id;
		const data = { [event.colDef.field]: event.newValue };
		this.updateFeature(id, data);
	}

	public onSelectionChanged = (event: any): void => {
		this.selectedRows = event.api.getSelectedRows();
	}

	public add = (): void => {
		this.createFeature(this.feature);
	}

	public remove = (): void => {
		if (this.selectedRows && confirm('Are you sure you want to delete the data selected ?')) {
			const ids = this.selectedRows.map(row => row.id);
			for (const id of ids) this.deleteFeature(id);
			this.features = this.features.filter(feature => !ids.includes(feature.id));
			this.selectedRows = [];
		}
	}

	private getFeatures = (): void => {
		this.featureService.find().subscribe(features => {
			this.features = features;
		});
	}

	private updateFeature = (id: number, data: Partial<IFeature>): void => {
		this.featureService.update(id, data).subscribe();
	}

	private deleteFeature = (id: number): void => {
		this.featureService.delete(id).subscribe();
	}

	private createFeature = (feature: Partial<IFeature>): void => {
		this.featureService.create(feature).subscribe(feature => {
			this.features = [...this.features, feature];
		});
	}
}

