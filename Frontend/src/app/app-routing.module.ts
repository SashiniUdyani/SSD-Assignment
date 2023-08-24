import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {ItemDeliveryComponent} from "./main/content/transport-manager/item-delivery/item-delivery.component";
import {ViewItemDeliveryComponent} from "./main/content/transport-manager/view-item-delivery/view-item-delivery.component";
import {DriverAccountComponent} from "./main/content/driver/driver-account/driver-account.component";
import {DriverRegistrationComponent} from "./main/content/driver/driver-registration/driver-registration.component";
import {FuelUpdateComponent} from "./main/content/driver/fuel-update/fuel-update.component";
import {OverTimeComponent} from "./main/content/driver/over-time/over-time.component";
import {ShiftDetailsComponent} from "./main/content/driver/shift-details/shift-details.component";
import {PassengerDeliveryComponent} from "./main/content/transport-manager/passenger-delivery/passenger-delivery.component";
import {ViewPassengerDeliveryComponent} from "./main/content/transport-manager/view-passenger-delivery/view-passenger-delivery.component";
import {VehicleComponent} from "./main/content/vehicleDriver-manager/vehicle/vehicle.component";
import {CreateUserAccountComponent} from "./main/content/general-manager/create-user-account/create-user-account.component";
import {AvailableTransportsComponent} from "./main/content/applicant/available-transports/available-transports.component";
import {CreateNewRequestComponent} from "./main/content/applicant/create-new-request/create-new-request.component";
import {VehicleAccidentComponent} from "./main/content/accident-maintenance-manager/vehicle-accident/vehicle-accident.component";
import {VehicleMaintenanceComponent} from "./main/content/accident-maintenance-manager/vehicle-maintenance/vehicle-maintenance.component";
import {VehicleAccidentReportComponent} from "./main/content/accident-maintenance-manager/vehicle-accident-report/vehicle-accident-report.component";
import {VehicleMaintenanceReportComponent} from "./main/content/accident-maintenance-manager/vehicle-maintenance-report/vehicle-maintenance-report.component";
import {ApplicationStatusComponent} from "./main/content/applicant/application-status/application-status.component";
import {UpdatePassengerDeliveryComponent} from "./main/content/transport-manager/view-passenger-delivery/update-passenger-delivery/update-passenger-delivery.component";
import {UpdateItemDeliveryComponent} from "./main/content/transport-manager/view-item-delivery/update-item-delivery/update-item-delivery.component";
import {UserAccountListComponent} from "./main/content/general-manager/user-account-list/user-account-list.component";
import {UpdateUserAccountComponent} from "./main/content/general-manager/user-account-list/update-user-account/update-user-account.component";
import {TokenComponent} from "./main/content/security-officer/token/token.component";
import {UpdateAvailableTransportsComponent} from "./main/content/applicant/available-transports/update-available-transports/update-available-transports.component";
import {ViewVehiclesComponent} from "./main/content/vehicleDriver-manager/view-vehicles/view-vehicles.component";
import {UpdateVehicleComponent} from "./main/content/vehicleDriver-manager/update-vehicle/update-vehicle.component";
import {ViewVipmembersComponent} from "./main/content/vehicleDriver-manager/view-vipmembers/view-vipmembers.component";
import {VehicleAccidentViewComponent} from "./main/content/accident-maintenance-manager/vehicle-accident-view/vehicle-accident-view.component";
import {ViewOverTimeComponent} from "./main/content/driver/view-over-time/view-over-time.component";
import {ArrivalDepartureLogPageComponent} from "./main/content/security-officer/arrival-departure-log-page/arrival-departure-log-page.component";
import {MeterDetailComponent} from "./main/content/security-officer/meter-detail/meter-detail.component";
import {UpdateDetailsComponent} from "./main/content/security-officer/update-details/update-details.component";
import {NotificationsComponent} from "./main/content/applicant/notifications/notifications.component";
import {FeedbackComponent} from "./main/content/applicant/feedback/feedback.component";
import {AccountRequestsComponent} from "./main/content/general-manager/account-requests/account-requests.component";
import {TransportRequestsComponent} from "./main/content/general-manager/transport-requests/transport-requests.component";
import {UpdateVipmemberComponent} from "./main/content/vehicleDriver-manager/update-vipmember/update-vipmember.component";
import {UpdateAccidentDetailsComponent} from "./main/content/accident-maintenance-manager/update-accident-details/update-accident-details.component";
import {TvProgramComponent} from "./main/content/general-manager/tv-program/tv-program.component";
import {UpdateOverTimeComponent} from "./main/content/driver/view-over-time/update-over-time/update-over-time.component";
import {BookingsComponent} from "./main/content/booking_management_clerk/bookings/bookings.component";
import {UpdateBookingsComponent} from "./main/content/booking_management_clerk/view-bookings/update-bookings/update-bookings.component";
import {ViewBookingsComponent} from "./main/content/booking_management_clerk/view-bookings/view-bookings.component";
import {ShiftComponent} from "./main/content/booking_management_clerk/shift/shift.component";
import {UpdateShiftComponent} from "./main/content/booking_management_clerk/view-shift/update-shift/update-shift.component";
import {ViewShiftComponent} from "./main/content/booking_management_clerk/view-shift/view-shift.component";
import {PassengerItemDeliveryComponent} from "./main/content/transport-manager/passenger-item-delivery/passenger-item-delivery.component";
import {UpdatePassengerItemDeliveryComponent} from "./main/content/transport-manager/view-passenger-item-delivery/update-passenger-item-delivery/update-passenger-item-delivery.component";
import {ViewPassengerItemDeliveryComponent} from "./main/content/transport-manager/view-passenger-item-delivery/view-passenger-item-delivery.component";
import {UpdateDriverComponent} from "./main/content/driver/driver-account/update-driver/update-driver.component";
import {VehicleMaintenanceViewComponent} from "./main/content/accident-maintenance-manager/vehicle-maintenance-view/vehicle-maintenance-view.component";
import {SpecialBookingComponent} from "./main/content/booking_management_clerk/special-booking/special-booking.component";
import {UpdateSpecialBookingComponent} from "./main/content/booking_management_clerk/view-special-booking/update-special-booking/update-special-booking.component";
import {ViewSpecialBookingComponent} from "./main/content/booking_management_clerk/view-special-booking/view-special-booking.component";
import {VipBookingComponent} from "./main/content/booking_management_clerk/vip-booking/vip-booking.component";
import {UpdateVipBookingComponent} from "./main/content/booking_management_clerk/view-vip-booking/update-vip-booking/update-vip-booking.component";
import {ViewVipBookingComponent} from "./main/content/booking_management_clerk/view-vip-booking/view-vip-booking.component";
import {VehiclePoolComponent} from "./main/content/security-officer/vehicle-pool/vehicle-pool.component";
import {CompletedTripsComponent} from "./main/content/security-officer/completed-trips/completed-trips.component";
import {ViewApprovedTripDetailsComponent} from "./main/content/security-officer/view-approved-trip-details/view-approved-trip-details.component";
import {ApplicantRegestrationComponent} from "./main/content/applicant/applicant-regestration/applicant-regestration.component";
import {UpdateMaintenanceDetailsComponent} from "./main/content/accident-maintenance-manager/update-maintenance-details/update-maintenance-details.component";
import {DeliveryStatusComponent} from "./main/content/security-officer/delivery-status/delivery-status.component";
import {UpdateItemTransportsComponent} from "./main/content/applicant/available-transports/update-item-transports/update-item-transports.component";
import {VipmemberComponent} from "./main/content/vehicleDriver-manager/vipmember/vipmember.component";
import {TransportPassengerApplicationsComponent} from "./main/content/transport-manager/transport-passenger-applications/transport-passenger-applications.component";
import {TransportItemApplicationsComponent} from "./main/content/transport-manager/transport-item-applications/transport-item-applications.component";
import {SignupComponent} from "./signup/signup.component";
import {DriverVehicleComponent} from "./main/content/vehicleDriver-manager/driver-vehicle/driver-vehicle.component";
import {DriverConfirmComponent} from "./main/content/vehicleDriver-manager/driver-confirm/driver-confirm.component";
import {DeliveryReportComponent} from "./main/content/transport-manager/delivery-report/delivery-report.component";
import {ProgramBookingComponent} from "./main/content/booking_management_clerk/program-booking/program-booking.component";
import {UpdateProgramBookingComponent} from "./main/content/booking_management_clerk/view-program-booking/update-program-booking/update-program-booking.component";
import {ViewProgramBookingComponent} from "./main/content/booking_management_clerk/view-program-booking/view-program-booking.component";
import {ItemPassengerComponent} from "./main/content/applicant/item-passenger/item-passenger.component";
import {UpdateItemPassengerComponent} from "./main/content/applicant/available-transports/update-item-passenger/update-item-passenger.component";
import {WeeklyReportComponent} from "./main/content/transport-manager/delivery-report/weekly-report/weekly-report.component";
import {DailyReportComponent} from "./main/content/transport-manager/delivery-report/daily-report/daily-report.component";
import {ShiftReportComponent} from './main/content/driver/shift-report/shift-report.component';
import {DetailReportComponent} from "./main/content/transport-manager/delivery-report/detail-report/detail-report.component";
import {TransportReportComponent} from "./main/content/general-manager/transport-report/transport-report.component";
import {UserAccountsReportComponent} from "./main/content/general-manager/user-accounts-report/user-accounts-report.component";
import {BookingReportComponent} from "./main/content/booking_management_clerk/booking-report/booking-report.component";
import {OtReportComponent} from "./main/content/driver/ot-report/ot-report.component";
import {VipReportComponent} from "./main/content/vehicleDriver-manager/vip-report/vip-report.component";
import {UpdateDeliveryStatusComponent} from "./main/content/security-officer/update-delivery-status/update-delivery-status.component";
import {WaitingReportComponent} from "./main/content/applicant/waiting-report/waiting-report.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'driver_registration',
    component: DriverRegistrationComponent
  },
  {
    path: 'applicant_regestration',
    component: ApplicantRegestrationComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'item_delivery',
        component: ItemDeliveryComponent
      },
      {
        path: 'view_item_delivery',
        component: ViewItemDeliveryComponent
      },
      {
        path: 'passenger_delivery',
        component: PassengerDeliveryComponent
      },
      {
        path: 'view_passenger_delivery',
        component: ViewPassengerDeliveryComponent
      },
      {
        path: 'update_item_delivery',
        component: UpdateItemDeliveryComponent
      },
      {
        path: 'update_passenger_delivery',
        component: UpdatePassengerDeliveryComponent
      },
      {
        path: 'passenger_item_delivery',
        component: PassengerItemDeliveryComponent
      },
      {
        path: 'update_passenger_item_delivery',
        component: UpdatePassengerItemDeliveryComponent
      },
      {
        path: 'view_passenger_item_delivery',
        component: ViewPassengerItemDeliveryComponent
      },
      {
        path: 'delivery_report',
        component: DeliveryReportComponent,
        children: [
          {
            path: 'weekly_report',
            component: WeeklyReportComponent
          },
          {
            path: 'daily_report',
            component: DailyReportComponent
          },
        ]
      },
      {
        path: 'passenger_transport',
        component: TransportPassengerApplicationsComponent
      },
      {
        path: 'item_transport',
        component: TransportItemApplicationsComponent
      },
      {
        path: 'create_user_account',
        component: CreateUserAccountComponent
      },
      {
        path: 'user_account_list',
        component: UserAccountListComponent
      },
      {
        path: 'update_user_account',
        component: UpdateUserAccountComponent
      },
      {
        path: 'account_requests',
        component: AccountRequestsComponent
      },
      {
        path: 'transport_requests',
        component: TransportRequestsComponent
      },
      {
        path: 'tv_program',
        component: TvProgramComponent
      },
      {
        path: 'transport_report',
        component: TransportReportComponent
      },
      {
        path: 'user_accounts_report',
        component: UserAccountsReportComponent
      },
      {
        path: 'available_transports',
        component: AvailableTransportsComponent
      },
      {
        path: 'update_available_transports',
        component: UpdateAvailableTransportsComponent
      },
      {
        path: 'application_status',
        component: ApplicationStatusComponent
      },
      {
        path: 'create_new_request',
        component: CreateNewRequestComponent
      },
      {
        path: 'view_accidents',
        component: VehicleAccidentComponent
      },
      {
        path: 'vehicle_accident',
        component: VehicleAccidentComponent
      },
      {
        path: 'view_maintenance',
        component: VehicleMaintenanceViewComponent
      },
      {
        path: 'accident_report',
        component: VehicleAccidentReportComponent
      },
      {
        path: 'maintenance_reports',
        component: VehicleMaintenanceReportComponent
      },
      {
        path: 'driver_account',
        component: DriverAccountComponent
      },
      {
        path: 'fuel_update',
        component: FuelUpdateComponent
      },
      {
        path: 'over_time',
        component: OverTimeComponent
      },
      {
        path: 'shift_details',
        component: ShiftDetailsComponent
      },
      {
        path: 'shift_report',
        component: ShiftReportComponent
      },
      {
        path:'ot_report',
        component:OtReportComponent
      },
      {
        path: 'create_token',
        component: TokenComponent
      },
      {
        path: 'view_over_time',
        component: ViewOverTimeComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'feedback',
        component: FeedbackComponent
      },
      {
        path: 'update_over_time',
        component: UpdateOverTimeComponent
      },
      {
        path: 'arrival_departure_page',
        component: ArrivalDepartureLogPageComponent
      },
      {
        path: 'add_meter_detail',
        component: MeterDetailComponent
      },
      {
        path: 'update_details',
        component: UpdateDetailsComponent
      },
      {
        path: 'update_vehicle_pool',
        component: VehiclePoolComponent
      },
      {
        path: 'completed_trips',
        component: CompletedTripsComponent
      },
      {
        path: 'view_approved_trip_details',
        component: ViewApprovedTripDetailsComponent
      },
      {
        path: 'view_delivery_status',
        component: DeliveryStatusComponent
      },
      {
        path: 'update_delivery_status',
        component: UpdateDeliveryStatusComponent
      },
      {
        path: 'vehicle',
        component: VehicleComponent
      },
      {
        path: 'vehicle_accident_view',
        component: VehicleAccidentViewComponent
      },
      {
        path: 'update_vehicle',
        component: UpdateVehicleComponent
      },
      {
        path: 'vipmember',
        component: VipmemberComponent
      },
      {
        path: 'view_vipmembers',
        component: ViewVipmembersComponent
      },
      {
        path: 'view_vehicles',
        component: ViewVehiclesComponent
      },
      {
        path: 'update_vipmember',
        component: UpdateVipmemberComponent
      },
      // {
      //   path: 'bookings',
      //   component: BookingsComponent
      // },
      // {
      //   path: 'update_bookings',
      //   component: UpdateBookingsComponent
      // },
      // {
      //   path: 'view_bookings',
      //   component: ViewBookingsComponent
      // },
      {
        path: 'booking_report',
        component: BookingReportComponent
      },
      {
        path: 'booking_application',
        component: BookingsComponent
      },
      {
        path: 'update_booking_application',
        component: UpdateBookingsComponent
      },
      {
        path: 'view_booking_application',
        component: ViewBookingsComponent
      },
      {
        path: 'special_booking',
        component: SpecialBookingComponent
      },
      {
        path: 'update_special_booking',
        component: UpdateSpecialBookingComponent
      },
      {
        path: 'view_special_booking',
        component: ViewSpecialBookingComponent
      },
      {
        path: 'vip_booking',
        component: VipBookingComponent
      },
      {
        path: 'update_vip_booking',
        component: UpdateVipBookingComponent
      },
      {
        path: 'view_vip_booking',
        component: ViewVipBookingComponent
      },
      {
        path: 'program_booking',
        component: ProgramBookingComponent
      },
      {
        path: 'update_program_booking',
        component: UpdateProgramBookingComponent
      },
      {
        path: 'view_program_booking',
        component: ViewProgramBookingComponent
      },
      {
        path: 'shift',
        component: ShiftComponent
      },
      {
        path: 'update_shift',
        component: UpdateShiftComponent
      },
      {
        path: 'view_shifts',
        component: ViewShiftComponent
      },
      {
        path: 'update_accident_details',
        component: UpdateAccidentDetailsComponent
      },
      {
        path: 'update_driver',
        component: UpdateDriverComponent
      },
      {
        path: 'vehicle_maintenance',
        component: VehicleMaintenanceComponent
      },
      {
        path: 'update_item_transports',
        component: UpdateItemTransportsComponent
      },
      {
        path: 'update_maintenance_details',
        component: UpdateMaintenanceDetailsComponent
      },
      {
        path: 'driver_vehicle',
        component: DriverVehicleComponent
      },
      {
        path: 'driver_confirm',
        component: DriverConfirmComponent
      },
      {
        path: 'Item_passenger',
        component: ItemPassengerComponent
      },
      {
        path: 'update_item_passenger_transports',
        component: UpdateItemPassengerComponent
      },
      {

        path: 'waiting',
        component: WaitingReportComponent
      },
      {
        path: 'vip_Report',
        component: VipReportComponent

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
