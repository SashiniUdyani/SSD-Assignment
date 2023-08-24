package lk.fleet.service;

import lk.fleet.dto.*;
import lk.fleet.entity.*;

import java.util.List;

import java.util.List;

public interface BookingService {

    List<DriverVehicleDTO> getDriverVehicles(String driverId);

    ShiftDTO addDriverShift(Shift shift);

    ShiftDTO updateDriverShift(String shiftId, Shift shift);

    List<ShiftDTO> getDriverShifts();

    List<ShiftDTO> getDriverShiftsByDriverId(String driverId);

    boolean deleteDriverShift(String shiftId);

    //Booking addBooking(Booking booking);
    //BookingApplicationDTO addBooking(BookingApplication bookingApplication);
    BookingDTO updateBooking(String bookingId, Booking booking);

    boolean deleteBooking(String bookingId);

    List<BookingDTO> getAllBookings();

    List<BookingDTO> getBookings();




    List<BookingDTO> getBookingsByBookingId(String bookingId);

    List<ShiftDTO> getDriverShiftsByVehicleType(String vehicleType);


    //VipBooking addVipBooking(VipBooking vipBooking);

    List<BookingDTO> getBookingByDestination(String destination);

    BookingApplicationDTO addBookingApplication(BookingApplication bookingApplication);


    List<BookingApplicationDTO> getBookingApplication();


//    boolean deleteBookingApplication(String bookingApplicationId);




    BookingApplicationDTO updateBookingApplication(String bookingApplicationId, BookingApplication bookingApplication);


    List<ApplicationDTO> getApplicationById(String applicationID);

    List <BookingApplicationDTO>getBookingApplicationByBookingApplicationId(String bookingApplicationId);

    List<ApplicationDTO> getApplication();

   OverTimeDTO approveOt(Long overTimeID, boolean approval);

    List<OverTimeDTO> getOt();

    List<DriverVehicleDTO> getAllDriverVehicles();
}
