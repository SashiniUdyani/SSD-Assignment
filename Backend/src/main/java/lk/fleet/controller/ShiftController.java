package lk.fleet.controller;

import lk.fleet.dto.ShiftDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Shift;
import lk.fleet.service.BookingService;
import lk.fleet.service.ShiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "shift")
public class ShiftController {

    @Autowired
    private ShiftService shiftService;

    @PostMapping(value = "/addShift")
    public ResponseEntity addShift(@RequestBody Shift shift) {
        return ResponseEntity.ok(shiftService.addShift(shift));
    }

    @PutMapping(value = "/updateShift/{shiftId}")
    public ResponseEntity updateShift(@PathVariable String shiftId, @RequestBody Shift shift) {
        return ResponseEntity.ok(shiftService.updateShift(shiftId, shift));
    }

    @DeleteMapping(value = "/deleteShift/{shiftId}")
    public ResponseEntity deleteShift(@PathVariable String shiftId) {
        return ResponseEntity.ok(shiftService.deleteShift(shiftId));
    }

    @GetMapping(value = "/getShift")
    public ResponseEntity getShift() {
        return ResponseEntity.ok(shiftService.getShift());
    }

    @GetMapping(value = "/getShiftbyDriverID/{driverId}")
    public ResponseEntity getShiftByDriverID(@PathVariable String driverId) {
        return ResponseEntity.ok(shiftService.getShiftByDriverID(driverId));
    }

    @GetMapping(value = "/getDriverShiftsByDriverIdByCurrentDate/{driverId}")
    public ResponseEntity getDriverShiftsByDriverIdByCurrentDate(@PathVariable String driverId){
        return ResponseEntity.ok(shiftService.getDriverShiftsByDriverIdByCurrentDate(driverId));
    }

    @GetMapping(value = "/markAttendance/{driverID}/{attendance}")
    public ResponseEntity markAttendance(@PathVariable String driverID, @PathVariable boolean attendance) {
        return ResponseEntity.ok(shiftService.markAttendance(driverID, attendance));
    }

    @GetMapping(value = "/getAllShiftsbyDriverID/{driverId}")
    public ResponseEntity getAllShiftsbyDriverID(@PathVariable String driverId){
        return ResponseEntity.ok(shiftService.getAllShiftsbyDriverID(driverId));
    }
}
