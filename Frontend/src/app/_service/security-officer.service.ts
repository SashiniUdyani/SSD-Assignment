import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SecurityOfficerService {

  token;
  tokenDetail;
  meter;
  meterDetail;
  vehicle;
  booking;

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getCurDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

  addToken(tokenDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/token/addToken", tokenDetail);
  }

  updateToken(tokenDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/token/updateToken/" + tokenDetail.tokenID, tokenDetail);
  }

  deleteToken(tokenDetailID): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/token/deleteToken/" + tokenDetailID);
  }

  addMeterDetail(meterDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/meterDetail/addMeterDetail", meterDetail);
  }

  updateMeterDetail(meterDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/meterDetail/updateMeterDetail/" + meterDetail.meterId, meterDetail);
  }

  getAllTokens(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/token/getAllTokens");
  }

  getCompletedTokens(): Observable<any> {
    return this.http.get<any>(environment.backend_url+"/token/getAllCompletedTokens");
  }

  getTokenByID(tokenID): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/token/getTokenByID/" + tokenID);
  }

  getAllBookings(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getAllBookings");
  }

  getBookingByDestination(destination): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getBookingByDestination/" + destination);
  }

  getAllVehicles(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vehicle/getAllVehicles")
  }

  updateVehicleAvailability(vehicleDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/vehicle/updateVehicleAvailability/" + vehicleDetail.vehicleId, vehicleDetail);
  }

  getVehicleByNumber(vehicleNumber): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vehicle/getVehicleByNumber/" + vehicleNumber);
  }

  getTokenByDestination(destination): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/token/getTokenByDestination/" + destination);
  }

  getTokenByDriverID(driverID): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/token/getTokenByDriverID/" + driverID);
  }



}
