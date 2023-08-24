package lk.fleet.controller;

import lk.fleet.dto.ProgramBookingDTO;
import lk.fleet.dto.VipBookingDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.ProgramBooking;
import lk.fleet.entity.UserAccount;
import lk.fleet.entity.VipBooking;
import lk.fleet.service.ProgramBookingService;
import lk.fleet.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "programBooking")
public class ProgramBookingController {

    @Autowired
    private ProgramBookingService programBookingService;


    @PostMapping(value = "/addProgramBooking")
    public ResponseEntity addProgramBooking(@RequestBody ProgramBooking programBooking) {
        return ResponseEntity.ok(programBookingService.addProgramBooking(programBooking));
    }

    @DeleteMapping(value = "/deleteProgramBooking/{programBookingId}")
    public ResponseEntity deleteProgramBooking(@PathVariable String programBookingId) {
        return ResponseEntity.ok(programBookingService.deleteProgramBooking(programBookingId));
    }

    @GetMapping(value = "/getProgramBooking")
    public List<ProgramBookingDTO> getProgramBooking() {
        return programBookingService.getProgramBooking();
    }

    @PutMapping(value = "/updateProgramBooking/{programBookingId}")
    public ResponseEntity updateProgramBooking(@PathVariable String programBookingId, @RequestBody ProgramBooking programBooking) {
        return ResponseEntity.ok(programBookingService.updateProgramBooking(programBookingId, programBooking));
    }

    @GetMapping(value = "/getProgramBookingByProgramBookingId/{programBookingId}")
    public ResponseEntity getProgramBookingByProgramBookingId(@PathVariable String programBookingId) {
        return ResponseEntity.ok(programBookingService.getProgramBookingByProgramBookingId(programBookingId));
    }

    @GetMapping(value = "/getTvProgram/{programID}")
    public ResponseEntity getTvProgram(@PathVariable String programID) {
        return ResponseEntity.ok(programBookingService.getTvProgram(programID));
    }
}
