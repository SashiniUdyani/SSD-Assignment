import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleDriverManagerService {

  vehicle;
  vipmember;

  constructor(private http: HttpClient) {
  }
//add vehicle
  addVehicle(vehicleDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/vehicle/addVehicle", vehicleDetail);
  }
//update vehicle
  updateVehicle(vehicleDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/vehicle/updateVehicle/" + vehicleDetail.vehicleId, vehicleDetail);
  }
//view vehicle
  getAllVehicles(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vehicle/getAllVehicles");
  }
//search
  getVehicleByNumber(vehicleNumber): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vehicle/getVehicleByNumber/" + vehicleNumber);
  }
//delete vehicle
  deleteVehicle(vehicleDetail): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/vehicle/deleteVehicle/" + vehicleDetail);
  }
// add vip
  addVipmember(vipmemberDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/vipMember/addVipMember", vipmemberDetail);

  }
//update vip
  updateVipMember(vipmemberDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/vipMember/updateVipMember/" + vipmemberDetail.vipMemberId, vipmemberDetail);
  }
//view vip
  getAllVipMembers(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vipMember/getAllVipMembers");
  }
//delete vip
  deleteVipMember(vipmemberDetail): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/vipMember/deleteVipMember/" + vipmemberDetail);
  }
//search vip
  getVipMemberByNumber(vipMemberNo): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vipMember/getVipMemberByNumber/" + vipMemberNo);
  }

  //add drivervehicle

  addDriverVehicle(driverVehicle): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/driverVehicle/addDriverVehicle", driverVehicle);
  }

  deleteDriverVehicle(driverVehicle): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/driverVehicle/deleteDriverVehicle/" + driverVehicle.driver.driverID + "/" + driverVehicle.vehicle.vehicleId);
  }
//view driver vehicle
  getDriverVehicles(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/driverVehicle/getDriverVehicles");
  }
//view driver requsets
  getDriverRequest():Observable<any>  {
    return this.http.get<any>(environment.backend_url + "/vehicle/getDriverRequest");

  }
//approval
  approveDriver(driverID, approval): Observable<any>  {
    return this.http.get<any>(environment.backend_url + "/vehicle/approveDriver/" + driverID + "/" + approval);

  }

}
