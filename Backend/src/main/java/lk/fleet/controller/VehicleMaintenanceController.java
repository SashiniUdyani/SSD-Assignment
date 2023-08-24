package lk.fleet.controller;

import lk.fleet.entity.VehicleAccident;
import lk.fleet.entity.VehicleMaintenance;
import lk.fleet.service.VehicleMaintenanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping (value = "fleetmanagement/" + "maintenance")

public class VehicleMaintenanceController {

    @Autowired
    private VehicleMaintenanceService vehicleMaintenanceService;

    @PostMapping(value = "/addVehicleMaintenance")
    public ResponseEntity addMaintenance(@RequestBody VehicleMaintenance vehicleMaintenance){
        return ResponseEntity.ok(vehicleMaintenanceService.addMaintenance(vehicleMaintenance));
    }

    @PutMapping(value = "/updateVehicleMaintenance/{maintenanceID}")
    public ResponseEntity updateVehicleMaintenance (@PathVariable String maintenanceID, @RequestBody VehicleMaintenance vehicleMaintenance) {
        return ResponseEntity.ok(vehicleMaintenanceService.updateVehicleMaintenance(maintenanceID, vehicleMaintenance));
    }

    @DeleteMapping(value = "/deleteVehicleMaintenance/{maintenanceID}")
    public ResponseEntity deleteVehicleMaintenance(@PathVariable String maintenanceID) {
        return ResponseEntity.ok(vehicleMaintenanceService.deleteVehicleMaintenance(maintenanceID));
    }

    //view
    @GetMapping(value = "/getVehicleMaintenance")
    public ResponseEntity getVehicleMaintenance() {
        return ResponseEntity.ok(vehicleMaintenanceService.getVehicleMaintenance());
    }

    @GetMapping(value = "/getMaintenanceById/{vehicleID}")
    public ResponseEntity getMaintenanceById(@PathVariable String vehicleID) {
        return ResponseEntity.ok(vehicleMaintenanceService.getMaintenanceById(vehicleID));
    }

    @GetMapping(value = "/chkVehicle/{vehicleId}")
    public ResponseEntity chkVehicle(@PathVariable String vehicleId) {
        return ResponseEntity.ok(vehicleMaintenanceService.chkVehicle(vehicleId));
    }

}
