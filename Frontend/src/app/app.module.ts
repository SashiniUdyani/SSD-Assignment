import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './main/content/content.component';
import {NavbarComponent} from './main/navbar/navbar.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ItemDeliveryComponent} from './main/content/transport-manager/item-delivery/item-delivery.component';
import {ViewItemDeliveryComponent} from './main/content/transport-manager/view-item-delivery/view-item-delivery.component';
import {NavTransportManagerComponent} from './main/navbar/nav-transport-manager/nav-transport-manager.component';
import {ViewPassengerDeliveryComponent} from './main/content/transport-manager/view-passenger-delivery/view-passenger-delivery.component';
import {PassengerDeliveryComponent} from './main/content/transport-manager/passenger-delivery/passenger-delivery.component';
import {NavVehicleDriverManagerComponent} from './main/navbar/nav-vehicle-driver-manager/nav-vehicle-driver-manager.component';
import {VehicleComponent} from './main/content/vehicleDriver-manager/vehicle/vehicle.component';
import {UpdateItemDeliveryComponent} from './main/content/transport-manager/view-item-delivery/update-item-delivery/update-item-delivery.component';
import {NavGeneralManagerComponent} from './main/navbar/nav-general-manager/nav-general-manager.component';
import {CreateUserAccountComponent} from './main/content/general-manager/create-user-account/create-user-account.component';
import {UserAccountListComponent} from './main/content/general-manager/user-account-list/user-account-list.component';
import {AccountRequestsComponent} from './main/content/general-manager/account-requests/account-requests.component';
import {TransportRequestsComponent} from './main/content/general-manager/transport-requests/transport-requests.component';
import {NavApplicantComponent} from './main/navbar/nav-applicant/nav-applicant.component';
import {AvailableTransportsComponent} from './main/content/applicant/available-transports/available-transports.component';
import {CreateNewRequestComponent} from './main/content/applicant/create-new-request/create-new-request.component';
import {ApplicationStatusComponent} from './main/content/applicant/application-status/application-status.component';
import {NotificationsComponent} from './main/content/applicant/notifications/notifications.component';
import {FeedbackComponent} from './main/content/applicant/feedback/feedback.component';
import {NavAccidentMaintenanceManagerComponent} from './main/navbar/nav-accident-maintenance-manager/nav-accident-maintenance-manager.component';
import {VehicleAccidentComponent} from './main/content/accident-maintenance-manager/vehicle-accident/vehicle-accident.component';
import {VehicleMaintenanceComponent} from './main/content/accident-maintenance-manager/vehicle-maintenance/vehicle-maintenance.component';
import {VehicleAccidentReportComponent} from './main/content/accident-maintenance-manager/vehicle-accident-report/vehicle-accident-report.component';
import {VehicleMaintenanceReportComponent} from './main/content/accident-maintenance-manager/vehicle-maintenance-report/vehicle-maintenance-report.component';
import {NavDriverComponent} from "./main/navbar/nav-driver/nav-driver.component";
import {DriverRegistrationComponent} from "./main/content/driver/driver-registration/driver-registration.component";
import {OverTimeComponent} from "./main/content/driver/over-time/over-time.component";
import {ShiftDetailsComponent} from "./main/content/driver/shift-details/shift-details.component";
import {FuelUpdateComponent} from "./main/content/driver/fuel-update/fuel-update.component";
import {DriverAccountComponent} from "./main/content/driver/driver-account/driver-account.component";
import {ViewOverTimeComponent} from "./main/content/driver/view-over-time/view-over-time.component";
import {NavSecurityOfficerComponent} from './main/navbar/nav-security-officer/nav-security-officer.component';
import {TokenComponent} from './main/content/security-officer/token/token.component';
import {UpdatePassengerDeliveryComponent} from "./main/content/transport-manager/view-passenger-delivery/update-passenger-delivery/update-passenger-delivery.component";
import {DatePipe} from "@angular/common";
import {VipmemberComponent} from './main/content/vehicleDriver-manager/vipmember/vipmember.component';
import {ViewVipmembersComponent} from './main/content/vehicleDriver-manager/view-vipmembers/view-vipmembers.component';
import {UpdateVipmemberComponent} from './main/content/vehicleDriver-manager/update-vipmember/update-vipmember.component';
import {NavBookingManagerComponent} from './main/navbar/nav-booking-manager/nav-booking-manager.component';
import {UpdateDriverComponent} from './main/content/driver/driver-account/update-driver/update-driver.component';
import {BookingsComponent} from './main/content/booking_management_clerk/bookings/bookings.component';
import {ViewBookingsComponent} from './main/content/booking_management_clerk/view-bookings/view-bookings.component';
import {ShiftComponent} from './main/content/booking_management_clerk/shift/shift.component';
import {ViewShiftComponent} from './main/content/booking_management_clerk/view-shift/view-shift.component';
import {UpdateAvailableTransportsComponent} from './main/content/applicant/available-transports/update-available-transports/update-available-transports.component';
import {VehicleAccidentViewComponent} from './main/content/accident-maintenance-manager/vehicle-accident-view/vehicle-accident-view.component';
import {ViewVehiclesComponent} from './main/content/vehicleDriver-manager/view-vehicles/view-vehicles.component';
import {UpdateVehicleComponent} from './main/content/vehicleDriver-manager/update-vehicle/update-vehicle.component';
import {ArrivalDepartureLogPageComponent} from './main/content/security-officer/arrival-departure-log-page/arrival-departure-log-page.component';
import {MeterDetailComponent} from './main/content/security-officer/meter-detail/meter-detail.component';
import {UpdateDetailsComponent} from './main/content/security-officer/update-details/update-details.component';
import {ViewApprovedTripDetailsComponent} from './main/content/security-officer/view-approved-trip-details/view-approved-trip-details.component';
import {UpdateUserAccountComponent} from './main/content/general-manager/user-account-list/update-user-account/update-user-account.component';
import {TvProgramComponent} from './main/content/general-manager/tv-program/tv-program.component';
import {UpdateAccidentDetailsComponent} from './main/content/accident-maintenance-manager/update-accident-details/update-accident-details.component';
import {VehicleMaintenanceViewComponent} from './main/content/accident-maintenance-manager/vehicle-maintenance-view/vehicle-maintenance-view.component';
import {UpdateOverTimeComponent} from './main/content/driver/view-over-time/update-over-time/update-over-time.component';
import {VehiclePoolComponent} from './main/content/security-officer/vehicle-pool/vehicle-pool.component';
//import { ViewApprovedTripDetailsComponent } from './main/content/security-officer/view-approved-trip-details/view-approved-trip-details.component';
// import { VehiclePoolComponent } from './main/content/security-officer/vehicle-pool/vehicle-pool.component';
import {ApplicantRegestrationComponent} from './main/content/applicant/applicant-regestration/applicant-regestration.component';
import {NotifierModule, NotifierOptions} from "angular-notifier";
import {ViewPassengerItemDeliveryComponent} from './main/content/transport-manager/view-passenger-item-delivery/view-passenger-item-delivery.component';
import {UpdatePassengerItemDeliveryComponent} from './main/content/transport-manager/view-passenger-item-delivery/update-passenger-item-delivery/update-passenger-item-delivery.component';
import {PassengerItemDeliveryComponent} from "./main/content/transport-manager/passenger-item-delivery/passenger-item-delivery.component";
import {EmailValidatorDirective} from "./_validator/email-validator.directive";
import {NicValidatorDirective} from './_validator/nic-validator.directive';
import {TextValidatorDirective} from './_validator/text-validator.directive';
import {TelephoneValidatorDirective} from "./_validator/telephone-validator.directive";
import {UpdateShiftComponent} from "./main/content/booking_management_clerk/view-shift/update-shift/update-shift.component";
import {UpdateBookingsComponent} from "./main/content/booking_management_clerk/view-bookings/update-bookings/update-bookings.component";
import {UpdateMaintenanceDetailsComponent} from './main/content/accident-maintenance-manager/update-maintenance-details/update-maintenance-details.component';
import {SpecialBookingComponent} from './main/content/booking_management_clerk/special-booking/special-booking.component';
import {ViewSpecialBookingComponent} from './main/content/booking_management_clerk/view-special-booking/view-special-booking.component';
import {UpdateSpecialBookingComponent} from './main/content/booking_management_clerk/view-special-booking/update-special-booking/update-special-booking.component';
import {VipBookingComponent} from './main/content/booking_management_clerk/vip-booking/vip-booking.component';
import {ViewVipBookingComponent} from './main/content/booking_management_clerk/view-vip-booking/view-vip-booking.component';
import {UpdateVipBookingComponent} from './main/content/booking_management_clerk/view-vip-booking/update-vip-booking/update-vip-booking.component';
import {CompletedTripsComponent} from "./main/content/security-officer/completed-trips/completed-trips.component";
import {DeliveryStatusComponent} from './main/content/security-officer/delivery-status/delivery-status.component';
import {UpdateItemTransportsComponent} from './main/content/applicant/available-transports/update-item-transports/update-item-transports.component';
import {VehicleNumberValidatorDirective} from './_validator/vehicle-number-validator.directive';
import {AlertBoxComponent} from "./alert-box/alert-box.component";
import {ProgramBookingComponent} from './main/content/booking_management_clerk/program-booking/program-booking.component';
import {ViewProgramBookingComponent} from './main/content/booking_management_clerk/view-program-booking/view-program-booking.component';
import {UpdateProgramBookingComponent} from './main/content/booking_management_clerk/view-program-booking/update-program-booking/update-program-booking.component';
import {TransportPassengerApplicationsComponent} from './main/content/transport-manager/transport-passenger-applications/transport-passenger-applications.component';
import {TransportItemApplicationsComponent} from './main/content/transport-manager/transport-item-applications/transport-item-applications.component';
import {EmployeeIdValidatorDirective} from './_validator/employee-id-validator.directive';
import {LicenseValidatorDirective} from './_validator/license-validator.directive';
import {UpdateDeliveryStatusComponent} from './main/content/security-officer/update-delivery-status/update-delivery-status.component';
import {DriverVehicleComponent} from './main/content/vehicleDriver-manager/driver-vehicle/driver-vehicle.component';
import {DriverConfirmComponent} from './main/content/vehicleDriver-manager/driver-confirm/driver-confirm.component';
import {DeliveryReportComponent} from './main/content/transport-manager/delivery-report/delivery-report.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {ItemPassengerComponent} from './main/content/applicant/item-passenger/item-passenger.component';
import {UpdateItemPassengerComponent} from './main/content/applicant/available-transports/update-item-passenger/update-item-passenger.component';
import {WeeklyReportComponent} from './main/content/transport-manager/delivery-report/weekly-report/weekly-report.component';
import {DailyReportComponent} from './main/content/transport-manager/delivery-report/daily-report/daily-report.component';
import {DetailReportComponent} from './main/content/transport-manager/delivery-report/detail-report/detail-report.component';
import {ShiftReportComponent} from './main/content/driver/shift-report/shift-report.component';
import {TransportReportComponent} from './main/content/general-manager/transport-report/transport-report.component';
import {UserAccountsReportComponent} from './main/content/general-manager/user-accounts-report/user-accounts-report.component';
import {BookingReportComponent} from './main/content/booking_management_clerk/booking-report/booking-report.component';

import {OtReportComponent} from './main/content/Driver/ot-report/ot-report.component';
import { WaitingReportComponent } from './main/content/applicant/waiting-report/waiting-report.component';



import { VipReportComponent } from './main/content/vehicleDriver-manager/vip-report/vip-report.component';


const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: "middle",
      distance: 5
    },
    vertical: {
      position: "top",
      distance: 10,
      gap: 10
    }
  },
  theme: "material",
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: "pauseAutoHide",
    showDismissButton: false,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: "slide",
      speed: 300,
      easing: "ease"
    },
    hide: {
      preset: "fade",
      speed: 300,
      easing: "ease",
      offset: 50
    },
    shift: {
      speed: 300,
      easing: "ease"
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    ItemDeliveryComponent,
    ViewItemDeliveryComponent,
    NavTransportManagerComponent,
    NavDriverComponent,
    DriverRegistrationComponent,
    OverTimeComponent,
    ShiftDetailsComponent,
    FuelUpdateComponent,
    ViewOverTimeComponent,
    DriverAccountComponent,
    ViewPassengerDeliveryComponent,
    PassengerDeliveryComponent,
    NavVehicleDriverManagerComponent,
    VehicleComponent,
    UpdateItemDeliveryComponent,
    UpdatePassengerDeliveryComponent,
    NavGeneralManagerComponent,
    CreateUserAccountComponent,
    UserAccountListComponent,
    AccountRequestsComponent,
    TransportRequestsComponent,
    NavApplicantComponent,
    AvailableTransportsComponent,
    CreateNewRequestComponent,
    ApplicationStatusComponent,
    NotificationsComponent,
    FeedbackComponent,
    NavAccidentMaintenanceManagerComponent,
    VehicleAccidentComponent,
    VehicleMaintenanceComponent,
    VehicleAccidentReportComponent,
    VehicleMaintenanceReportComponent,
    BookingsComponent,
    ViewBookingsComponent,
    UpdateBookingsComponent,
    ShiftComponent,
    UpdateShiftComponent,
    ViewShiftComponent,
    NavDriverComponent,
    NavSecurityOfficerComponent,
    TokenComponent,
    UpdateAvailableTransportsComponent,
    VehicleAccidentViewComponent,
    ViewVehiclesComponent,
    UpdateVehicleComponent,
    UpdateVehicleComponent,
    VipmemberComponent,
    ViewVipmembersComponent,
    UpdateVipmemberComponent,
    ArrivalDepartureLogPageComponent,
    MeterDetailComponent,
    UpdateDetailsComponent,
    ViewApprovedTripDetailsComponent,
    UpdateUserAccountComponent,
    TvProgramComponent,
    UpdateOverTimeComponent,
    UpdateUserAccountComponent,
    PassengerItemDeliveryComponent,
    ViewPassengerItemDeliveryComponent,
    UpdatePassengerItemDeliveryComponent,
    UpdateAccidentDetailsComponent,
    VehiclePoolComponent,
    // UpdateUserAccountComponent,
    UpdateDriverComponent,
    TvProgramComponent,
    UpdateOverTimeComponent,
    // UpdateUserAccountComponent,
    VehicleMaintenanceViewComponent,
//     VehiclePoolComponent,
    UpdateOverTimeComponent,
    UpdateOverTimeComponent,
    UpdateUserAccountComponent,
    UpdateDriverComponent,
    TvProgramComponent,
    UpdateOverTimeComponent,
    UpdateUserAccountComponent,
    UpdateUserAccountComponent,
    ApplicantRegestrationComponent,
    //UpdateUserAccountComponent,
    NavBookingManagerComponent,
    EmailValidatorDirective,
    NicValidatorDirective,
    TextValidatorDirective,
    TelephoneValidatorDirective,
    UpdateUserAccountComponent,
    NavBookingManagerComponent,
    UpdateUserAccountComponent,
    UpdateMaintenanceDetailsComponent,
    CompletedTripsComponent,
    DeliveryStatusComponent,
    SpecialBookingComponent,
    ViewSpecialBookingComponent,
    UpdateSpecialBookingComponent,
    VipBookingComponent,
    ViewVipBookingComponent,
    UpdateVipBookingComponent,
    CompletedTripsComponent,
    UpdateUserAccountComponent,
    UpdateUserAccountComponent,
    VehiclePoolComponent,
    DeliveryStatusComponent,
    UpdateItemTransportsComponent,
    VehicleNumberValidatorDirective,
    AlertBoxComponent,
    ProgramBookingComponent,
    ViewProgramBookingComponent,
    UpdateProgramBookingComponent,
    TransportPassengerApplicationsComponent,
    TransportItemApplicationsComponent,
    TransportItemApplicationsComponent,
    EmployeeIdValidatorDirective,
    LicenseValidatorDirective,
    DriverVehicleComponent,
    DriverConfirmComponent,
    UpdateDeliveryStatusComponent,
    DeliveryReportComponent,
    ItemPassengerComponent,
    UpdateItemPassengerComponent,





    WeeklyReportComponent,
    DailyReportComponent,
    DetailReportComponent,
    ShiftReportComponent,

    BookingReportComponent,
    OtReportComponent,
    TransportReportComponent,
    UserAccountsReportComponent,

    BookingReportComponent,

      WaitingReportComponent,

      VipReportComponent,



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule {
}
