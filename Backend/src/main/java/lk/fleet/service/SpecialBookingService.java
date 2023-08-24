package lk.fleet.service;

import lk.fleet.dto.BookingDTO;
import lk.fleet.dto.SpecialBookingDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.SpecialBooking;

import java.util.List;

public interface SpecialBookingService {
    SpecialBookingDTO addSpecialBooking(SpecialBooking specialBooking);
    boolean deleteSpecialBooking(String specialBookingId);

    List<SpecialBookingDTO> getSpecialBooking();

    SpecialBookingDTO updateSpecialBooking(String specialBookingId, SpecialBooking specialBooking);

    List<SpecialBookingDTO> getSpecialBookingBySpecialBookingId(String specialBookingId);
}
