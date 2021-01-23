import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'app-image-formatter-cell',
    template: `<img border="0" width="50" height="50" [src]="getSafeUrl()">`
})

export class ImageFormatterComponent {
    params: any;

    constructor(private sanitizer: DomSanitizer) {}

    agInit(params: any) {
        this.params = params;
    }

    getSafeUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.params.value);     
}
}