import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookingManagerService {

  shift;
  booking;
  specialBooking;
  vipBooking;
  programBooking;
  bookingApplication;


  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getCurDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

  addShift(shiftDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/booking/addDriverShift", shiftDetail);
  }

  updateShift(shiftDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/booking/updateDriverShift/" + shiftDetail.shiftId, shiftDetail);
  }

  deleteDriverShift(shiftId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/booking/deleteDriverShift/" + shiftId);
  }

  getDriveVehicles(driverId): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverVehicles/" + driverId);
  }

  getAllDriverVehicles(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getAllDriverVehicles");
  }

  getAllShifts(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverShifts");
  }

  getAllShiftsByDriver(driverId): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverShiftsByDriverId/" + driverId);
  }

  getAllShiftsByVehicle(vehicleType): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverShiftsByVehicleType/" + vehicleType);
  }

  // getShift(shiftId: any) {
  //   return this.http.get<any>(environment.backend_url + "/booking/getShift/" + shiftId);
  //
  // }


  addBooking(BookingDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/booking/addBooking", BookingDetail);
  }

  updateBooking(BookingDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/booking/updateBooking/" + BookingDetail.bookingId, BookingDetail);
  }

  deleteBooking(bookingId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/booking/deleteBooking/" + bookingId);
  }

  getAllBookings(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getBookings");
  }

  getBookingsByBookingId(bookingId): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getBookingsByBookingId/" + bookingId);
  }


  getBookingsByBookingManagementClerkId(bookingManagementClerkId: any) {
    return this.http.get<any>(environment.backend_url + "/booking/getBookingsByBookingManagementClerkId/" + bookingManagementClerkId);
  }

  addSpecialBooking(SpecialBookingDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/specialBooking/addSpecialBooking", SpecialBookingDetail);
  }

  updateSpecialBooking(SpecialBookingDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/specialBooking/updateSpecialBooking/" + SpecialBookingDetail.specialBookingId, SpecialBookingDetail);
  }

  deleteSpecialBooking(specialBookingId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/specialBooking/deleteSpecialBooking/" + specialBookingId);
  }

  getAllSpecialBooking(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/specialBooking/getSpecialBooking");
  }

  getSpecialBookingBySpecialBookingId(specialBookingId: any) {
    return this.http.get<any>(environment.backend_url + "/specialBooking/getSpecialBookingBySpecialBookingId/" + specialBookingId);
  }

  addVipBooking(VipBookingDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/vipBooking/addVipBooking", VipBookingDetail);
  }

  updateVipBooking(VipBookingDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/vipBooking/updateVipBooking/" + VipBookingDetail.vipBookingId, VipBookingDetail);
  }

  deleteVipBooking(vipBookingId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/vipBooking/deleteVipBooking/" + vipBookingId);
  }

  getAllVipBooking(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vipBooking/getVipBooking");
  }


  getVipBookingByVipBookingId(vipBookingId: any) {
    return this.http.get<any>(environment.backend_url + "/vipBooking/getVipBookingByVipBookingId/" + vipBookingId);
  }

  getVipMember(vipMemberId: any) {
    return this.http.get<any>(environment.backend_url + "/vipBooking/getVipMember/" + vipMemberId);

  }

  getTvProgram(programID: any) {
    return this.http.get<any>(environment.backend_url + "/programBooking/getTvProgram/" + programID);

  }

  addProgramBooking(ProgramBookingDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/programBooking/addProgramBooking", ProgramBookingDetail);
  }

  updateProgramBooking(ProgramBookingDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/programBooking/updateProgramBooking/" + ProgramBookingDetail.programBookingId, ProgramBookingDetail);
  }

  deleteProgramBooking(programBookingId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/programBooking/deleteProgramBooking/" + programBookingId);
  }

  getAllProgramBooking(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/programBooking/getProgramBooking");
  }


  getProgramBookingByProgramBookingId(programBookingId: any) {
    return this.http.get<any>(environment.backend_url + "/programBooking/getProgramBookingByProgramBookingId/" + programBookingId);
  }


  getApplication(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getApplication");
  }

  getApplicationById(applicationID): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getApplicationById/" + applicationID);
  }

  addBookingApplication(BookingApplicationDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/booking/addBookingApplication", BookingApplicationDetail);
  }


  updateBookingApplication(BookingApplicationDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/booking/updateBookingApplication/" + BookingApplicationDetail.bookingApplicationId, BookingApplicationDetail);
  }

  deleteBookingApplication(bookingApplicationId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/booking/deleteBookingApplication/" + bookingApplicationId);
  }

  getAllBookingApplication(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getBookingApplication");
  }


  getBookingApplicationByBookingApplicationId(bookingApplicationId: any) {
    return this.http.get<any>(environment.backend_url + "/booking/getBookingApplicationByBookingApplicationId/" + bookingApplicationId);
  }

  approveOt(overTimeID, approval): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/approveOt/" + overTimeID + "/" + approval);
  }

  getOt(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getOt");
  }

  getAllVipMembers(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vipMember/getAllVipMembers");
  }

  getAllTvPrograms(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/tvProgram/getTvProgram");
  }
}
