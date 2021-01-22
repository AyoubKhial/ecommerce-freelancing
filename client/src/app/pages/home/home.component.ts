import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { HomeMenu } from './home-menu';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  menus: HomeMenu[];
  submenus: HomeMenu[];
  showdaliy: boolean;
  showsession: boolean;
  showorder: boolean;
  showmember: boolean;
  showpayment: boolean;

  constructor(private userService: UserService) { 
    this.menus = [
      new HomeMenu(0, 'general', 'fa fa-bar-chart', 'Polls'),
      new HomeMenu(1, 'general', 'fa fa-shopping-basket', 'Orders'),
      new HomeMenu(2, 'general', 'fa fa-truck', 'Cargo Management'),
      new HomeMenu(3, 'general', 'fa fa-sticky-note-o', 'pages'),
      new HomeMenu(4, 'general', 'fa fa-line-chart', 'Statistic'),
      new HomeMenu(5, 'general', 'fa fa-envelope-o', 'Mail Accounts'),
      new HomeMenu(6, 'product', 'fa fa-plus-square', 'Add New Product'),
      new HomeMenu(7, 'product', 'fa fa-shopping-bag', 'Products'),
      new HomeMenu(8, 'product', 'fa fa-sitemap', 'Categories'),
      new HomeMenu(9, 'product', 'fa fa-tag', 'Brands'),
      new HomeMenu(10, 'product', 'fa fa-home', 'Showcase Settings'),
      new HomeMenu(11, 'product', 'fa fa-user-circle', 'Product Reviews'),
      new HomeMenu(12, 'user', 'fa fa-user', 'Users'),
      new HomeMenu(13, 'user', 'fa fa-users', 'User Groups'),
      new HomeMenu(14, 'user', 'fa fa-user-secret', 'Member/Dealer Management'),
      new HomeMenu(15, 'user', 'fa fa-user-secret', 'Member/Dealer group'),
      new HomeMenu(16, 'user', 'fa fa-user-plus', 'New Member Registration'),
      new HomeMenu(17, 'user', 'fa fa-user-plus', 'Add member/Reseller Group'),
      new HomeMenu(18, 'setting', 'fa fa-bar-chart', 'Additional Settings'),
      new HomeMenu(19, 'setting', 'fa fa-wrench', 'Definitions'),
      new HomeMenu(20, 'setting', 'fa fa-paint-brush', 'Site Content Settings'),
      new HomeMenu(21, 'setting', 'fa fa-th-large', 'Block Management'),
      new HomeMenu(22, 'setting', 'fa fa-bank', 'Bank Accounts'),
      new HomeMenu(23, 'setting', 'fa fa-file-vedio-o', 'POS Managemen'),
      new HomeMenu(24, 'setting', 'fa fa-bars', 'Menu Management')
    ];
  }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.menu_click('general');
    this.showdaliy = true;
    this.showmember = false;
    this.showorder = false;
    this.showpayment = false;
    this.showsession = false;

  }

  menu_daliy() {
    this.showdaliy = true;
    this.showmember = false;
    this.showorder = false;
    this.showpayment = false;
    this.showsession = false;
  }

  menu_order() {
    this.showdaliy = false;
    this.showmember = false;
    this.showorder = true;
    this.showpayment = false;
    this.showsession = false;
  }

  menu_session() {
    this.showdaliy = false;
    this.showmember = false;
    this.showorder = false;
    this.showpayment = false;
    this.showsession = true;
  }

  menu_member() {
    this.showdaliy = false;
    this.showmember = true;
    this.showorder = false;
    this.showpayment = false;
    this.showsession = false;
  }

  menu_payment() {
    this.showdaliy = false;
    this.showmember = false;
    this.showorder = false;
    this.showpayment = true;
    this.showsession = false;
  }
  menu_click(menu_id: string) {
    this.submenus = [];
    this.menus.forEach((menu) => {
      if(menu.cat_id == menu_id) {
        this.submenus.push(menu);
      }
    });
  }
}