package lk.fleet.controller;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.dto.DriverDTO;
import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.TVProgram;
import lk.fleet.entity.UserAccount;
import lk.fleet.entity.Vehicle;
import lk.fleet.service.TVProgramService;
import lk.fleet.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "vehicle")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping(value = "/addVehicle")
    public ResponseEntity addVehicle(@RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(vehicleService.addVehicle(vehicle));
    }

    @PutMapping(value = "/updateVehicle/{vehicleID}")
    public ResponseEntity updateVehicle(@PathVariable String vehicleID, @RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(vehicleService.updateVehicle(vehicleID, vehicle));
    }

    @DeleteMapping(value = "/deleteVehicle/{vehicleID}")
    public ResponseEntity deleteVehicle(@PathVariable String vehicleID) {
        return ResponseEntity.ok(vehicleService.deleteVehicle(vehicleID));
    }

    @GetMapping(value = "/getAllVehicles")
    public ResponseEntity getAllVehicles() {
        return ResponseEntity.ok(vehicleService.getAllVehicles());
    }

    @GetMapping(value = "/fuelUpdate/{vehicleID}/{fuelBalance}")
    public ResponseEntity fualUpdate(@PathVariable String vehicleID, @PathVariable double fuelBalance) {
        return ResponseEntity.ok(vehicleService.fualUpdate(vehicleID, fuelBalance));
    }

    //SecurityOfficer
    @PutMapping(value = "/updateVehicleAvailability/{vehicleID}")
    public ResponseEntity updateVehicleAvailability(@PathVariable String vehicleID, @RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(vehicleService.updateVehicleAvailability(vehicleID, vehicle));
    }

    @GetMapping(value = "/getVehicleByNumber/{vehicleNumber}")
    public ResponseEntity getVehicleByNumber(@PathVariable String vehicleNumber) {
        return ResponseEntity.ok(vehicleService.getVehicleByNumber(vehicleNumber));
    }

    //----Driver Requests----//
    //get driver requests
//    @GetMapping(value = "/getDriverRequest")
//    public List<DriverDTO> getDriverRequest() {
//        return vehicleService.getDriverRequest();
//    }
    //search driver request by id
//    @GetMapping(value = "/getDriverByID/{applicationID}")
//    public ResponseEntity getDriverByID(@PathVariable String applicationID) {
//        return ResponseEntity.ok(vehicleService.getDriverByID(applicationID));
//    }
    @GetMapping(value = "/getDriverRequest")
    public ResponseEntity getDriverRequest() {
        return ResponseEntity.ok(vehicleService.getDriverRequest());
    }


    //approve driver request
    @GetMapping(value = "/approveDriver/{driverID}/{approval}")
    public ResponseEntity approveDriver(@PathVariable String driverID, @PathVariable boolean approval) {
        return ResponseEntity.ok(vehicleService.approveDriver(driverID, approval));
    }


    //approve account request
//    @GetMapping(value = "/approveUserAccount/{employeeID}/{approval}")
//    public ResponseEntity approveUserAccount(@PathVariable String employeeID, @PathVariable boolean approval) {
//        return ResponseEntity.ok(userAccountService.approveUserAccount(employeeID, approval));
//    }


    //search transport request by id
//    @GetMapping(value = "/getTransportByID/{applicationID}")
//    public ResponseEntity getTransportByID(@PathVariable String applicationID) {
//        return ResponseEntity.ok(userAccountService.getTransportByID(applicationID));
//    }
//
//    //approve transport request
//    @GetMapping(value = "/approveTransport/{applicationID}/{approval}")
//    public ResponseEntity approveTransport(@PathVariable String applicationID, @PathVariable boolean approval) {
//        return ResponseEntity.ok(userAccountService.approveTransport(applicationID, approval));
//    }
//
//
//    @PostMapping(value = "/login")
//    public ResponseEntity login(@RequestBody UserAccount userAccount) {
//        return ResponseEntity.ok(userAccountService.login(userAccount));
//    }
}
