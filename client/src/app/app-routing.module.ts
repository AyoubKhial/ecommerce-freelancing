import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { BoardModeratorComponent } from './pages/board-moderator/board-moderator.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';
import { AuthGuard } from "../app/_services/auth.guard";


import { ProductsComponent } from './pages/product/products/products.component';
import { AddNewProductComponent } from './pages/product/add-new-product/add-new-product.component';
import { FilterManagementComponent } from './pages/product/filter-management/filter-management.component';
import { CategoriesComponent } from './pages/product/categories/categories.component';
import { BrandsComponent } from './pages/product/brands/brands.component';
import { AdditionalFeaturesComponent } from './pages/product/additional-features/additional-features.component';
import { AdditionalInformationComponent } from './pages/product/additional-information/additional-information.component';
import { MultipleProductUpdatesComponent } from './pages/product/multiple-product-updates/multiple-product-updates.component';
import { ShowcaseComponent } from './pages/product/showcase/showcase.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { OrdersComponent } from './pages/orders/orders/orders.component';
import { ShippingCompaniesComponent } from './pages/orders/shipping-companies/shipping-companies.component';
import { DeliveryZonesComponent } from './pages/orders/delivery-zones/delivery-zones.component';
import { CountriesComponent } from './pages/orders/countries/countries.component';
import { CitiesComponent } from './pages/orders/cities/cities.component';
import { DistrictsComponent } from './pages/orders/districts/districts.component';
import { DeliveryAdditionalSettingsComponent } from './pages/orders/delivery-additional-settings/delivery-additional-settings.component';
import { SuppliersComponent } from './pages/orders/suppliers/suppliers.component';
import { BasketReminderComponent } from './pages/orders/basket-reminder/basket-reminder.component';
import { PagesComponent } from './pages/contentManagement/pages/pages.component';
import { BlogManagementComponent } from './pages/contentManagement/blog-management/blog-management.component';
import { SurveyManagementComponent } from './pages/contentManagement/survey-management/survey-management.component';
import { CommentsComponent } from './pages/contentManagement/comments/comments.component';
import { FormManagementComponent } from './pages/contentManagement/form-management/form-management.component';
import { InvoiceSettingsComponent } from './pages/contentManagement/invoice-settings/invoice-settings.component';
import { InvoiceDesignComponent } from './pages/contentManagement/invoice-design/invoice-design.component';
import { SiteContentSettingsComponent } from './pages/contentManagement/site-content-settings/site-content-settings.component';
import { UsersComponent } from './pages/users/users/users.component';
import { UserGroupsComponent } from './pages/users/user-groups/user-groups.component';
import { UserRolesComponent } from './pages/users/user-roles/user-roles.component';
import { BlockIpsComponent } from './pages/users/block-ips/block-ips.component';
import { TransactionRecordsComponent } from './pages/users/transaction-records/transaction-records.component';
import { MemberManagementComponent } from './pages/memberManagement/member-management/member-management.component';
import { NewMemberRegistrationComponent } from './pages/memberManagement/new-member-registration/new-member-registration.component';
import { MemberGroupComponent } from './pages/memberManagement/member-group/member-group.component';
import { AddMemberGroupComponent } from './pages/memberManagement/add-member-group/add-member-group.component';
import { SupportRequestManagementComponent } from './pages/memberManagement/support-request-management/support-request-management.component';
import { MailingListManagementComponent } from './pages/mailManagement/mailing-list-management/mailing-list-management.component';
import { MailingListGroupsComponent } from './pages/mailManagement/mailing-list-groups/mailing-list-groups.component';
import { MailManagementComponent } from './pages/mailManagement/mail-management/mail-management.component';
import { SmtpMailSettingsComponent } from './pages/mailManagement/smtp-mail-settings/smtp-mail-settings.component';
import { MailTemplatesComponent } from './pages/mailManagement/mail-templates/mail-templates.component';
import { PointSystemComponent } from './pages/campaignManagement/point-system/point-system.component';
import { ScoreHistoryComponent } from './pages/campaignManagement/score-history/score-history.component';
import { GiftManagementComponent } from './pages/campaignManagement/gift-management/gift-management.component';
import { PosCampaignsComponent } from './pages/campaignManagement/pos-campaigns/pos-campaigns.component';
import { SpecialOffersComponent } from './pages/campaignManagement/special-offers/special-offers.component';
import { PromotionsComponent } from './pages/campaignManagement/promotions/promotions.component';
import { QuickBuyComponent } from './pages/campaignManagement/quick-buy/quick-buy.component';
import { PackageBuilderComponent } from './pages/campaignManagement/package-builder/package-builder.component';
import { PurchaseLimitComponent } from './pages/campaignManagement/purchase-limit/purchase-limit.component';
import { NetGSMComponent } from './pages/campaignManagement/net-gsm/net-gsm.component';
import { InstagramFeedComponent } from './pages/campaignManagement/instagram-feed/instagram-feed.component';
import { AdvertisingCenterComponent } from './pages/shoppingAds/advertising-center/advertising-center.component';
import { AdSettingsComponent } from './pages/shoppingAds/ad-settings/ad-settings.component';
import { DefinitionsComponent } from './pages/settings/definitions/definitions.component';
import { DesignSettingsComponent } from './pages/settings/design-settings/design-settings.component';
import { AdditionalSettingsComponent } from './pages/settings/additional-settings/additional-settings.component';
import { LanguageSettingsComponent } from './pages/settings/language-settings/language-settings.component';
import { SeoComponent } from './pages/settings/seo/seo.component';
import { PaymentSettingsComponent } from './pages/settings/payment-settings/payment-settings.component';
import { FileManagementComponent } from './pages/settings/file-management/file-management.component';
import { OptimizationsComponent } from './pages/settings/optimizations/optimizations.component';
import { CustomFormComponent } from './pages/settings/custom-form/custom-form.component';
import { RevenuePartnershipComponent } from './pages/settings/revenue-partnership/revenue-partnership.component';
import { SummaryStatisticsComponent } from './pages/statistics/summary-statistics/summary-statistics.component';
import { VisitStatisticsComponent } from './pages/statistics/visit-statistics/visit-statistics.component';
import { TapeUsersComponent } from './pages/statistics/tape-users/tape-users.component';
import { OrderStatisticsComponent } from './pages/statistics/order-statistics/order-statistics.component';
import { PaymentStatisticsComponent } from './pages/statistics/payment-statistics/payment-statistics.component';
import { RatedProductsComponent } from './pages/statistics/rated-products/rated-products.component';
import { SearchStatisticsComponent } from './pages/statistics/search-statistics/search-statistics.component';
import { DiscountRequestsComponent } from './pages/statistics/discount-requests/discount-requests.component';
import { ReportsComponent } from './pages/statistics/reports/reports.component';
import { IntegrationsComponent } from './pages/integrations/integrations/integrations.component';
import { IdeaOutputComponent } from './pages/integrations/idea-output/idea-output.component';
import { MarketplaceComponent } from './pages/integrations/marketplace/marketplace.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  
  //Basic pages router
  { path: 'products', component: ProductsComponent },
  { path: 'addingProduct', component: AddNewProductComponent},
  { path: 'filterManagement', component: FilterManagementComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'brands', component: BrandsComponent},
  { path: 'additionalInformation', component: AdditionalInformationComponent},
  { path: 'additionalFeature', component: AdditionalFeaturesComponent},
  { path: 'mutipleProductUpdate', component: MultipleProductUpdatesComponent},
  { path: 'showcase', component: ShowcaseComponent},
  { path: 'productNewList', component: ProductListComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'shippingCompanies', component: ShippingCompaniesComponent},
  { path: 'deliveryZone', component: DeliveryZonesComponent},
  { path: 'countries', component: CountriesComponent},
  { path: 'cites', component: CitiesComponent},
  { path: 'districts', component: DistrictsComponent},
  { path: 'deliveryAdditionalSettings', component: DeliveryAdditionalSettingsComponent},
  { path: 'suppliers', component: SuppliersComponent},
  { path: 'basketReminder', component: BasketReminderComponent},
  { path: 'pages', component: PagesComponent},
  { path: 'blogManagement', component: BlogManagementComponent},
  { path: 'survey', component: SurveyManagementComponent},
  { path: 'comments', component: CommentsComponent},
  { path: 'formManagement', component: FormManagementComponent},
  { path: 'invoiceDesign', component: InvoiceDesignComponent},
  { path: 'contentSettings', component: SiteContentSettingsComponent},
  { path: 'users', component: UsersComponent},
  { path: 'userGroup', component: UserGroupsComponent},
  { path: 'userRoles', component: UserRolesComponent},
  { path: 'blockedIps', component: BlockIpsComponent},
  { path: 'transectionRecords', component: TransactionRecordsComponent},
  { path: 'memberManagement', component: MemberManagementComponent},
  { path: 'newRegistration', component: NewMemberRegistrationComponent},
  { path: 'memberGroup', component: MemberGroupComponent},
  { path: 'addMemberGroup', component: AddMemberGroupComponent},
  { path: 'supportManagement', component: SupportRequestManagementComponent},
  { path: 'mailingListManagement', component: MailingListManagementComponent},
  { path: 'mailingListGroups', component: MailingListGroupsComponent},
  { path: 'mailManagement', component: MailManagementComponent},
  { path: 'smtpMailSettings', component: SmtpMailSettingsComponent},
  { path: 'mailTemplate', component: MailTemplatesComponent},
  { path: 'pointSystem', component: PointSystemComponent},
  { path: 'scoreHistory', component: ScoreHistoryComponent},
  { path: 'giftManagement', component: GiftManagementComponent},
  { path: 'posCompaies', component: PosCampaignsComponent},
  { path: 'specialOffers', component: SpecialOffersComponent},
  { path: 'promotions', component: PromotionsComponent},
  { path: 'quickBuys', component: QuickBuyComponent},
  { path: 'packageBuilder', component: PackageBuilderComponent},
  { path: 'purchaseLimit', component: PurchaseLimitComponent},
  { path: 'netCSM', component: NetGSMComponent},
  { path: 'instagramFeed', component: InstagramFeedComponent},
  { path: 'advertisingCenter', component: AdvertisingCenterComponent},
  { path: 'adSettings', component: AdSettingsComponent},
  { path: 'definitions', component: DefinitionsComponent},
  { path: 'designSettings', component: DesignSettingsComponent},
  { path: 'additionalSettings', component: AdditionalSettingsComponent},
  { path: 'languageSettings', component: LanguageSettingsComponent},
  { path: 'seo', component: SeoComponent},
  { path: 'paymentSettings', component: PaymentSettingsComponent},
  { path: 'fileManagement', component: FileManagementComponent},
  { path: 'optimizations', component: OptimizationsComponent},
  { path: 'customForm', component: CustomFormComponent},
  { path: 'partnerShip', component: RevenuePartnershipComponent},
  { path: 'summaryStatistics', component: SummaryStatisticsComponent},
  { path: 'visitorStatistics', component: VisitStatisticsComponent},
  { path: 'tapeUsers', component: TapeUsersComponent},
  { path: 'orderStatistics', component: OrderStatisticsComponent},
  { path: 'paymentStatistics', component: PaymentStatisticsComponent},
  { path: 'ratedProducts', component: RatedProductsComponent},
  { path: 'searchStatistics', component: SearchStatisticsComponent},
  { path: 'discountRequests', component: DiscountRequestsComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'integration', component: IntegrationsComponent},
  { path: 'ideaOutputSystem', component: IdeaOutputComponent},
  { path: 'marketplaceIntegration', component: MarketplaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
