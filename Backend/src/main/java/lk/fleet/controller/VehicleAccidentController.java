package lk.fleet.controller;


import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.VehicleAccident;
import lk.fleet.service.VehicleAccidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "accident")
public class VehicleAccidentController {

    @Autowired
    private VehicleAccidentService vehicleAccidentService;

    //insert
    @PostMapping(value = "/addVehicleAccident")
    public ResponseEntity addAccident(@RequestBody VehicleAccident vehicleAccident) {
        return ResponseEntity.ok(vehicleAccidentService.addAccident(vehicleAccident));
    }

    //update
    @PutMapping(value = "/updateVehicleAccident/{vehicleAccidentID}")
    public ResponseEntity updateVehicleAccident(@PathVariable String vehicleAccidentID, @RequestBody VehicleAccident vehicleAccident) {
        return ResponseEntity.ok(vehicleAccidentService.updateVehicleAccident(vehicleAccidentID, vehicleAccident));
    }

    //delete
    @DeleteMapping(value = "/deleteVehicleAccident/{vehicleAccidentID}")
    public ResponseEntity deleteAccident(@PathVariable String vehicleAccidentID) {
        return ResponseEntity.ok(vehicleAccidentService.deleteAccident(vehicleAccidentID));
    }

    //view
    @GetMapping(value = "/getVehicleAccidents")
    public ResponseEntity getVehicleAccidents() {
        return ResponseEntity.ok(vehicleAccidentService.getVehicleAccidents());
    }

    //search
    @GetMapping(value = "/getAccidentById/{vehicleID}")
    public ResponseEntity getAccidentById(@PathVariable String vehicleID) {
        return ResponseEntity.ok(vehicleAccidentService.getAccidentById(vehicleID));
    }

    //vehicle id field validation
    @GetMapping(value = "/chkVehicle/{vehicleId}")
    public ResponseEntity chkVehicle(@PathVariable String vehicleId) {
        return ResponseEntity.ok(vehicleAccidentService.chkVehicle(vehicleId));
    }

    //driver id field validation
    @GetMapping(value = "/chkDriver/{vehicleId}/{driverId}")
    public ResponseEntity chkDriver(@PathVariable String vehicleId, @PathVariable String driverId) {
        return ResponseEntity.ok(vehicleAccidentService.chkDriver(vehicleId, driverId));
    }
}
