import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { Path } from './path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  paths: Path[];
  showCase: boolean;
  activeBtn: string;
  showPath: any;

  constructor(public tokenStorageService: TokenStorageService) { }
  
  title = "front";

  ngOnInit(): void {
    /* this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.paths =[
      new Path({id: 1, parentName:'Home Page'}, [
        {id:'home',childName:'Home page'}
      ]),
      new Path({id: 2, parentName: 'Products'}, [
        {id: 'products', childName: 'Products'}, 
        {id: 'addingProduct', childName: 'Add New Product'}, 
        {id: 'filterManagement', childName: 'Fiter Management'}, 
        {id: 'categories', childName: 'Categories'}, 
        {id: 'brands', childName: 'Brands'}, 
        {id: 'additionalFeature', childName: 'Additional Feature'},
        {id: 'additionalInformation', childName: 'Additional Information'}, 
        {id: 'mutipleProductUpdate', childName: 'Mutiple Product Update'}, 
        {id: 'showcase', childName: 'Showcase and Layout'}, 
        {id: 'productNewList', childName: 'Product New List'}
      ]),
      new Path({id: 3, parentName:'Orders'}, [
        {id: 'orders', childName: 'Orders'}, 
        {id: 'shippingCompanies', childName: 'Shipping Companies'}, 
        {id: 'deliveryZone', childName: 'Delivery Zone'}, 
        {id: 'countries', childName: 'Countries'}, 
        {id: 'cites', childName:'Cites'}, 
        {id: 'districts', childName: 'Districts'}, 
        {id: 'deliveryAdditionalSettings', childName: 'Delivery Additional Settings'},
        {id: 'suppliers', childName: 'Suppliers'}, 
        {id: 'basketReminder', childName: 'Basket Reminder'}
      ]),
      new Path({id: 4, parentName: 'Content Management'}, [
        {id: 'pages', childName: 'Pages'}, 
        {id: 'blogManagement', childName: 'Blog Management'}, 
        {id: 'survey', childName: 'Survey Management'}, 
        {id: 'comments', childName: 'Comments and Suggestions'}, 
        {id: 'formManagement', childName: 'Form Mangement'}, 
        {id: 'invoiceDesign', childName: 'Invoice Design'}, 
        {id: 'contentSettings', childName: 'Site Content Settigns'}
      ]),
      new Path({id: 5, parentName: 'Users'}, [
        {id: 'users', childName: 'Users'}, 
        {id: 'userGroup', childName: 'User Group'}, 
        {id: 'userRoles', childName: 'User Roles'}, 
        {id: 'blockedIps', childName: 'Blocked IPs'}, 
        {id: 'transectionRecords', childName: 'Transection Records'}
      ]),
      new Path({id: 6, parentName: 'Member/Dealer Management'}, [
        {id: 'memberManagement', childName: 'Member/Dealer Management'}, 
        {id: 'newRegistration', childName: 'New Member Registration'}, 
        {id: 'memberGroup', childName: 'Member/Dealer Group'}, 
        {id: 'addMemberGroup', childName: 'Add Memeber Group'}, 
        {id: 'supportManagement', childName: 'Support Request Management'}
      ]),
      new Path({id: 7, parentName: 'Mail Management'}, [
        {id: 'mailingListManagement', childName: 'Mailing List Management'}, 
        {id: 'mailingListGroups', childName: 'Mailing List Groups'}, 
        {id: 'mailManagement', childName: 'Mail Management'}, 
        {id: 'smtpMailSettings', childName: 'Smtp-Mail Settings'}, 
        {id: 'mailTemplate', childName: 'Mail Templates'}
      ]),
      new Path({id: 8, parentName: 'Compaign Management'}, [
        {id: 'pointSystem', childName: 'Point System'}, 
        {id: 'scoreHistory', childName: 'Score History'}, 
        {id: 'giftManagement', childName: 'Gift Certificate Management'}, 
        {id: 'posCompaies', childName: 'Pos Companies'}, 
        {id: 'specialOffers', childName: 'Special Offers'}, 
        {id: 'promotions', childName: 'Promotions'}, 
        {id: 'quickBuys', childName: 'Quick Buys'}, 
        {id: 'packageBuilder', childName: 'Package Builder'}, 
        {id: 'purchaseLimit', childName: 'Purchase Limit'}, 
        {id: 'netCSM', childName: 'NetCSM'}, 
        {id: 'instagramFeed', childName: 'Instagram Feed & Shop'}
      ]),
      new Path({id: 9, parentName: 'Shopping Ads'}, [
        {id: 'advertisingCenter', childName: 'Advertising Center'}, 
        {id: 'adSettings', childName: 'Ad Settings'}
      ]),
      new Path({id: 10, parentName: 'Settings'}, [
        {id: 'definitions', childName: 'Definitions'}, 
        {id: 'designSettings', childName: 'Design Settings'}, 
        {id: 'additionalSettings', childName: 'Additional Settings'}, 
        {id: 'languageSettings', childName: 'Language Settings'}, 
        {id: 'seo', childName: 'SEO'}, 
        {id: 'paymentSettings', childName: 'Payment Settings'}, 
        {id: 'fileManagement', childName: 'File Management'}, 
        {id: 'optimizations', childName: 'Optimizations'}, 
        {id: 'customForm', childName: 'Custom Form Fields'}, 
        {id: 'partnerShip', childName: 'Revenue PartnerShip'}
      ]),
      new Path({id: 11, parentName: 'Statistics'}, [
        {id: 'summaryStatistics', childName: 'Summary Statistics'}, 
        {id: 'visitorStatistics', childName: 'Visitor Statistics'}, 
        {id: 'tapeUsers', childName: 'Tape Users'}, 
        {id: 'orderStatistics', childName: 'Order Statistics'}, 
        {id: 'paymentStatistics', childName: 'Payment Statistics'}, 
        {id: 'ratedProducts', childName: 'Rated Products'}, 
        {id: 'searchStatistics', childName: 'Search Statistics'}, 
        {id: 'discountRequests', childName: 'Discount Requests'}, 
        {id: 'reports', childName: 'Reports'}
      ]),
      new Path({id: 12, parentName: 'Integrations'}, [
        {id: 'integration', childName: 'Integrations'}, 
        {id: 'ideaOutputSystem', childName: 'Idea Output System'}, 
        {id: 'marketplaceIntegration', childName: 'Marketplace Integration'}
      ])
    ];
    this.show_subnav_content(this.paths[0]); */

  }

  logout(): void {
    /* this.tokenStorageService.signOut();
    window.location.reload(); */
  }

  show_subnav_content(path:any){
    /* this.showCase = true;
    this.activeBtn = path.parent;
    this.showPath = path.child; */
  }
}