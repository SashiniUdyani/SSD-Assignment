import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleMaintenanceService {

  maintenance;

  constructor(private http: HttpClient) { }

  //insert
  addMaintenance(maintenanceDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/maintenance/addVehicleMaintenance", maintenanceDetail);
  }

  chkVehicle(vehicleId): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/maintenance/chkVehicle/" + vehicleId);
  }

  //view
  getVehicleMaintenance(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/maintenance/getVehicleMaintenance");
  }

  //update
  updateVehicleMaintenance(maintenanceDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/maintenance/updateVehicleMaintenance/" + maintenanceDetail.maintenanceID, maintenanceDetail);
  }

  //delete
  deleteVehicleMaintenance(vehicleMaintenanceID): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/maintenance/deleteVehicleMaintenance/" +vehicleMaintenanceID);
  }

  //get maintenance ID
  getMaintenanceById(vehicleAccidentID): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/maintenance/getMaintenanceById/" + vehicleAccidentID);
  }


}
