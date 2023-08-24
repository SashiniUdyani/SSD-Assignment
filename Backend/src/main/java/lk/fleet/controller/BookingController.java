package lk.fleet.controller;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;


//    @PostMapping(value = "/addBooking")
//    public ResponseEntity addBooking(@RequestBody Booking booking){
//        return ResponseEntity.ok(bookingService.addBooking(booking));
//    }


    @PostMapping(value = "/addBookingApplication")
    public ResponseEntity addBookingApplication(@RequestBody BookingApplication bookingApplication) {
        return ResponseEntity.ok(bookingService.addBookingApplication(bookingApplication));
    }


//    @PutMapping(value = "/updateBooking/{bookingId}")
//    public ResponseEntity updateBooking(@PathVariable String bookingId, @RequestBody Booking booking){
//        return ResponseEntity.ok(bookingService.updateBooking(bookingId, booking));
//    }

//    @DeleteMapping(value = "/deleteBooking/{bookingId}")
//    public ResponseEntity deleteBooking(@PathVariable String bookingId){
//        return ResponseEntity.ok(bookingService.deleteBooking(bookingId));
//    }


    //    @DeleteMapping(value = "/deleteBookingApplication/{bookingApplicationId}")
//    public ResponseEntity deleteBookingApplication(@PathVariable String bookingApplicationId){
//        return ResponseEntity.ok(bookingService.deleteBookingApplication(bookingApplicationId));
//    }
    @GetMapping(value = "/getBookingApplication")
    public List<BookingApplicationDTO> getBookingApplication() {
        return bookingService.getBookingApplication();
    }

    @PutMapping(value = "/updateBookingApplication/{bookingApplicationId}")
    public ResponseEntity updateBookingApplication(@PathVariable String bookingApplicationId, @RequestBody BookingApplication bookingApplication) {
        return ResponseEntity.ok(bookingService.updateBookingApplication(bookingApplicationId, bookingApplication));
    }

    @GetMapping(value = "/getBookingApplicationByBookingApplicationId/{bookingApplicationId}")
    public ResponseEntity getBookingApplicationByBookingApplicationId(@PathVariable String bookingApplicationId) {
        return ResponseEntity.ok(bookingService.getBookingApplicationByBookingApplicationId(bookingApplicationId));
    }


    @GetMapping(value = "/getApplication")
    public List<ApplicationDTO> getApplication() {
        return bookingService.getApplication();
    }


    @GetMapping(value = "/getApplicationById/{applicationID}")
    public ResponseEntity getApplicationById(@PathVariable String applicationID) {
        return ResponseEntity.ok(bookingService.getApplicationById(applicationID));
    }


    @GetMapping(value = "/getAllBookings")
    public ResponseEntity getAllBookings() {
        return ResponseEntity.ok(bookingService.getAllBookings());
    }

    @GetMapping(value = "/getBookings")
    public List<BookingDTO> getBookings() {
        return bookingService.getBookings();
    }

    @GetMapping(value = "/getBookingsByBookingId/{bookingId}")
    public ResponseEntity getBookingsByBookingId(@PathVariable String bookingId) {
        return ResponseEntity.ok(bookingService.getBookingsByBookingId(bookingId));
    }


    @GetMapping(value = "/getOt")
    public List<OverTimeDTO> getOt() {
        return bookingService.getOt();
    }

    //approve ot request
    @GetMapping(value = "/approveOt/{overTimeID}/{approval}")
    public ResponseEntity approveOt(@PathVariable Long overTimeID, @PathVariable boolean approval) {
        return ResponseEntity.ok(bookingService.approveOt(overTimeID, approval));
    }

    @PostMapping(value = "/addDriverShift")
    public ResponseEntity addDriverShift(@RequestBody Shift shift) {
        return ResponseEntity.ok(bookingService.addDriverShift(shift));
    }

    @PutMapping(value = "/updateDriverShift/{shiftId}")
    public ResponseEntity updateDriverShift(@PathVariable String shiftId, @RequestBody Shift shift) {
        return ResponseEntity.ok(bookingService.updateDriverShift(shiftId, shift));
    }

    @DeleteMapping(value = "/deleteDriverShift/{shiftId}")
    public ResponseEntity deleteDriverShift(@PathVariable String shiftId) {
        return ResponseEntity.ok(bookingService.deleteDriverShift(shiftId));
    }

    @GetMapping(value = "/getDriverVehicles/{driverId}")
    public ResponseEntity getDriver(@PathVariable String driverId) {
        return ResponseEntity.ok(bookingService.getDriverVehicles(driverId));
    }

    @GetMapping(value = "/getAllDriverVehicles")
    public List<DriverVehicleDTO> getAllDriverVehicles() {
        return bookingService.getAllDriverVehicles();
    }

    @GetMapping(value = "/getDriverShifts")
    public ResponseEntity getDriverShifts() {
        return ResponseEntity.ok(bookingService.getDriverShifts());
    }

    @GetMapping(value = "/getDriverShiftsByDriverId/{driverId}")
    public ResponseEntity getDriverShiftsByDriverId(@PathVariable String driverId) {
        return ResponseEntity.ok(bookingService.getDriverShiftsByDriverId(driverId));

    }

    @GetMapping(value = "/getDriverShiftsByVehicleType/{vehicleType}")
    public ResponseEntity getDriverShiftsByVehicleId(@PathVariable String vehicleType) {
        return ResponseEntity.ok(bookingService.getDriverShiftsByVehicleType(vehicleType));

    }


    //security officer
    @GetMapping(value = "/getBookingByDestination/{destination}")
    public ResponseEntity getBookingByDestination(@PathVariable String destination) {
        return ResponseEntity.ok(bookingService.getBookingByDestination(destination));
    }

}

