package lk.fleet.controller;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.BookingApplicationDTO;
import lk.fleet.dto.PassengerApplicationDTO;
import lk.fleet.dto.PassengerDTO;
import lk.fleet.entity.*;
import lk.fleet.service.ApplicationItemService;
import lk.fleet.service.ApplicationPassengerService;
import lk.fleet.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "application")
public class ApplicationController {
    @Autowired
    private ApplicationPassengerService applicationPassengerService;
    @Autowired
    private ApplicationItemService applicationItemService;
    @Autowired
    private ApplicationService applicationService;

    @PostMapping(value = "/newapplication")
    public ResponseEntity addApplication(@RequestBody Application application) {
        return ResponseEntity.ok(applicationPassengerService.addApplication(application));
    }

    //        @PostMapping(value ="/newApplication")
//        public PassengerApplication addPassengerApplication(@RequestBody PassengerApplication application){
//             return applicationService.addPassengerApplication(application);
//         }
//    @PostMapping(value = "/addPassengers")
//    public ResponseEntity addPassengerpassenger(@RequestBody PassengerPassengerApplication passengerPassengerApplication) {
//        return ResponseEntity.ok(applicationPassengerService.addPassengerpassenger(passengerPassengerApplication));
//    }

    @PostMapping(value = "/addItemPassengers")
    public ResponseEntity addApplicationItemPass(@RequestBody Application application) {
        return ResponseEntity.ok(applicationPassengerService.addApplicationItemPass(application));
    }


    @GetMapping(value = "/getPassengers")
    public List<PassengerDTO> getPassengers() {
        return applicationPassengerService.getPassengers();
    }


    @PostMapping(value = "/AddItem")
    public ResponseEntity addItem(@RequestBody Application application) {
        return ResponseEntity.ok(applicationItemService.addItemApplication(application));
    }

    @GetMapping(value = "/AddPassengerApp/{ApplicationID}/{applicationID}")
    public ResponseEntity passengerApplication(@PathVariable String ApplicationID, @PathVariable String applicationID) {
        return ResponseEntity.ok(applicationPassengerService.passengerApplication(ApplicationID, applicationID));
    }

    @PostMapping(value = "/AddItemApp/{applicationID}/{itemID}")
    public ResponseEntity itemApplication(@PathVariable String applicationID, @PathVariable String itemID, @RequestBody Item item) {
        return ResponseEntity.ok(applicationPassengerService.itemApplication(itemID, applicationID, item));
    }

    @PostMapping(value = "/newApplication1")
    public ResponseEntity addPassengerApplication1(@RequestBody Passenger passenger) {
        return ResponseEntity.ok(applicationPassengerService.addPassenger(passenger));
    }

//    @PostMapping(value = "/Insertall")
//    public ResponseEntity addPassengerPassengerApplication(@RequestBody PassengerPassengerApplication passengerPassengerApplication) {
//        return ResponseEntity.ok(applicationPassengerService.addPassengerPassengerApplication(passengerPassengerApplication));
//    }

//    @PostMapping(value = "/InserItall")
//    public ResponseEntity addItemItemApplication(@RequestBody ItemItemApplication itemApplication) {
//        return ResponseEntity.ok(applicationItemService.addItemItemApplication(itemApplication));
//    }

    @DeleteMapping(value = "/deleteApplication/{applicationID}")
    public ResponseEntity deleteBooking(@PathVariable String applicationID) {
        return ResponseEntity.ok(applicationService.deleteApplication(applicationID));
    }

    @PutMapping(value = "/updateApplication/{applicationID}")
    public ResponseEntity<ApplicationDTO> updateApplication(@PathVariable String applicationID, @RequestBody Application application) {
        return ResponseEntity.ok(applicationService.updateApplication(applicationID, application));
    }

//    @PutMapping(value = "/updatePassengerPassenger/{applicationID}")
//    public ResponseEntity PassengerPassengerApplication(@PathVariable String applicationID, @RequestBody  PassengerPassengerApplication passengerPassengerApplication){
//        return ResponseEntity.ok(applicationPassengerService.UpdatePassengerApp(applicationID, passengerPassengerApplication));
//    }

//    @PostMapping(value ="/AddNewApplicant")
//    public ResponseEntity addPassengerApplication1(@RequestBody UserAccount passenger){
//        return ResponseEntity.ok(applicationPassengerService.addApplicant(passenger));
//    }

    @GetMapping(value = "/getApplication")
    public List<ApplicationDTO> getPassengerApp() {
        return applicationPassengerService.getPassengerApp();
    }

    @GetMapping(value = "/getApplicationID/{applicationID}")
    public ApplicationDTO getPassengerApp(@PathVariable String applicationID) {
        return applicationPassengerService.getPassengerApp(applicationID);
    }

    @GetMapping(value = "/getAItempplicationID/{applicationID}")
    public ApplicationDTO getItemApp(@PathVariable String applicationID) {
        return applicationPassengerService.getItemApp(applicationID);
    }

//    @GetMapping(value = "/getPassengerApplication")
//    public List<PassengerApplication> getAPassengerApp() {
//        return applicationPassengerService.getAPassengerApp();
//    }

    @GetMapping(value = "/getdto")
    public List<BookingApplicationDTO> gatPassengerAppData() {
        return applicationPassengerService.gatPassengerAppData();
    }
    //    @GetMapping(value = "/getdto")
//    public List<ApplicationDTO> getdto(){
//        return applicationService.getdto();
//    }


    @DeleteMapping(value = "/deletePassengerApp/{ApplicationID}/{applicationID}")
    public ResponseEntity deleteBooking(@PathVariable String ApplicationID, @PathVariable String applicationID) {
        return ResponseEntity.ok(applicationPassengerService.deletePassengerApp(ApplicationID, applicationID));
    }

    @DeleteMapping(value = "/deleteItemApp/{ApplicationID}/{itemID}")
    public ResponseEntity deleteItemApp(@PathVariable String ApplicationID, @PathVariable String itemID) {
        return ResponseEntity.ok(applicationPassengerService.deleteItemApp(ApplicationID, itemID));
    }

    @PutMapping(value = "/updateItem/{applicationID}")
    public ResponseEntity<Item> updateItem(@PathVariable String applicationID, @RequestBody Item item) {
        return ResponseEntity.ok(applicationPassengerService.updateItem(applicationID, item));
    }

    @GetMapping(value = "/getItems")
    public List<Item> getAllItem() {
        return applicationPassengerService.getAllItem();
    }

    //Tr
    @GetMapping(value = "/getApprovedApplications/{type}")
    public ResponseEntity getApprovedApplications(@PathVariable String type) {
        return ResponseEntity.ok(applicationService.getApprovedApplications(type));
    }

    @GetMapping(value = "/getApprovedApplicationsByDestination/{destination}/{type}")
    public ResponseEntity getApprovedApplicationsByDestination(@PathVariable String destination, @PathVariable String type) {
        return ResponseEntity.ok(applicationService.getApprovedApplicationsByDestination(destination, type));
    }

    @GetMapping(value = "/getApprovedApplicationsByPassenger/{passengerId}")
    public ResponseEntity getApprovedApplicationsByPassenger(@PathVariable String passengerId) {
        return ResponseEntity.ok(applicationService.getApprovedApplicationsByPassenger(passengerId));
    }

    @GetMapping(value = "/changePassengerApplication/{oldAppId}/{newAppId}/{passengerId}")
    public ResponseEntity changePassengerApplication(@PathVariable String oldAppId, @PathVariable String newAppId, @PathVariable String passengerId) {
        return ResponseEntity.ok(applicationService.changePassengerApplication(oldAppId, newAppId, passengerId));
    }
    //

    @GetMapping(value = "/getWaitingReport")
    public List<ApplicationDTO> getWaitingReport() {
        return applicationPassengerService.getWaitingReport();
    }

}