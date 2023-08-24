package lk.fleet.controller;

import lk.fleet.entity.Driver;
import lk.fleet.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/"+"driverAccount")
public class DriverController {

    @Autowired
    private DriverService driverService;

    @PostMapping(value = "/addDriver")
    public ResponseEntity addDriver(@RequestBody Driver driver){
        return  ResponseEntity.ok(driverService.addDriver(driver));
    }

    @PutMapping(value = "/updateDriver/{driverID}")
    public ResponseEntity updateDriver(@PathVariable String driverID, @RequestBody Driver driver){
        return ResponseEntity.ok(driverService.updateDriver(driverID,driver));
    }

    @DeleteMapping(value = "/deleteDriver/{driverID}")
    public ResponseEntity deleteDriver(@PathVariable String driverID){
        return ResponseEntity.ok(driverService.deleteDriver(driverID));
    }

    @GetMapping(value = "/getDriver/{driverId}")
    public ResponseEntity getDriver(@PathVariable String driverId) {
        return ResponseEntity.ok(driverService.getDriver(driverId));
    }

}
