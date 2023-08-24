import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http: HttpClient,private datePipe: DatePipe) { }
  deliveryItem;
  addApp(application): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/application/newapplication", application);
  }
  addItemPassengers(application): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/application/addItemPassengers", application);
  }
  addPass(passenger): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/application/newapplication", passenger);
  }
  addItem(item): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/application/AddItem", item);
  }
  getAllApplication(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/application/getApplication");
  }
  getAllPassengers(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/application/getPassengers");
  }
  updateform(application): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/application/updateApplication/" + application.applicationID, application);
  }
  deleteForm(applicationID): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/application/deleteApplication/" + applicationID);
  }
  AddPassengerApp(ApplicationID,applicationID): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/application/AddPassengerApp/"+ApplicationID+"/"+applicationID);
  }
  AddItemApp(ApplicationID,itemId,Item): Observable<any> {
    console.log(Item)
    return this.http.post<any>(environment.backend_url + "/application/AddItemApp/"+ApplicationID+"/"+itemId, Item);
  }
  GetPassengerApp(ApplicationID): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/application/getApplicationID/"+ApplicationID);
  }
  GetItemApp(ApplicationID): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/application/getAItempplicationID/"+ApplicationID);
  }
  deletePassengerApp(ApplicationID,applicationID): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/application/deletePassengerApp/" +ApplicationID+"/"+applicationID);
  }
  deleteItemApp(applicationID,itemId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/application/deleteItemApp/" +applicationID+"/"+itemId);
  }
  RegisterApplicant(application): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/application/newApplication1", application);
  }
  getDriverVehicle(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/application/getdto");
  }
  updateItem(item): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/application/updateItem/" + item.itemID, item);
  }
  getAllItem(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/application/getItems");
  }
  getCurDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }
  getwaiting() {
    return this.http.get<any>(environment.backend_url + "/application/getWaitingReport");
  }

}
