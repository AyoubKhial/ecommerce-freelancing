import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit, OnDestroy {
  currentMenu: string;
  productMenus: any = [
    { id: 'newProduct', name: 'New Product' },
    { id: 'price', name: 'Price' },
    { id: 'productDetail', name: 'Product Detail' },
    { id: 'other', name: 'Other' },
    { id: 'variants', name: 'Variants' },
    { id: 'seoInfor', name: 'Seo Infermation' },
    { id: 'seoTag', name: 'Seo + Tag System' },
    { id: 'facebook', name: 'Facebook Sharing' },
    { id: 'countdown', name: 'Countdown Feature' },
    { id: 'customize', name: 'Customize' },
    { id: 'additional', name: 'Additional Features' }
  ];

  editorInfor: Editor;
  editorDetailInfor: Editor;
  editorContent: Editor;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify']
  ];
  htmlInfor: '';
  htmlDetailInfor: '';
  htmlContent: '';

  constructor() { }

  ngOnInit(): void {
    this.currentMenu = 'newProduct';
    this.editorInfor = new Editor();
    this.editorDetailInfor = new Editor();
    this.editorContent = new Editor();
  }
  ngOnDestroy(): void {
    this.editorInfor.destroy();
    this.editorDetailInfor.destroy();
    this.editorContent.destroy();
  }
  gotoPage(id: string) {
    if (id == 'productDetail') {
      this.editorInfor = new Editor();
      this.editorDetailInfor = new Editor();
      this.editorContent = new Editor();
    }
    this.currentMenu = id;
    console.log(this.currentMenu);
  }


}
