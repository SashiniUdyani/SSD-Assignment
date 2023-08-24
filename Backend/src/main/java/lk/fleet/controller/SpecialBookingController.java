package lk.fleet.controller;

import lk.fleet.dto.BookingDTO;
import lk.fleet.dto.SpecialBookingDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.SpecialBooking;
import lk.fleet.service.BookingService;
import lk.fleet.service.SpecialBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "specialBooking")
public class SpecialBookingController {

    @Autowired
    private SpecialBookingService specialBookingService;

    @PostMapping(value = "/addSpecialBooking")
    public ResponseEntity addSpecialBooking(@RequestBody SpecialBooking specialBooking) {
        return ResponseEntity.ok(specialBookingService.addSpecialBooking(specialBooking));
    }

    @GetMapping(value = "/getSpecialBooking")
    public List<SpecialBookingDTO> getSpecialBooking() {
        return specialBookingService.getSpecialBooking();
    }

    @PutMapping(value = "/updateSpecialBooking/{SpecialBookingId}")
    public ResponseEntity updateSpecialBooking(@PathVariable String SpecialBookingId, @RequestBody SpecialBooking specialBooking) {
        return ResponseEntity.ok(specialBookingService.updateSpecialBooking(SpecialBookingId, specialBooking));
    }

    @DeleteMapping(value = "/deleteSpecialBooking/{specialBookingId}")
    public ResponseEntity deleteSpecialBooking(@PathVariable String specialBookingId) {
        return ResponseEntity.ok(specialBookingService.deleteSpecialBooking(specialBookingId));
    }

    @GetMapping(value = "/getSpecialBookingBySpecialBookingId/{specialBookingId}")
    public ResponseEntity getSpecialBookingBySpecialBookingId(@PathVariable String specialBookingId) {
        return ResponseEntity.ok(specialBookingService.getSpecialBookingBySpecialBookingId(specialBookingId));
    }
//    @PutMapping(value = "/updateBooking/{bookingId}")
//    public ResponseEntity updateBooking(@PathVariable String bookingId, @RequestBody Booking booking){
//        return ResponseEntity.ok(bookingService.updateBooking(bookingId, booking));
//    }


}
