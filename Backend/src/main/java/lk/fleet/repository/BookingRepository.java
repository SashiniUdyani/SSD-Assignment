package lk.fleet.repository;

import lk.fleet.entity.Booking;
import lk.fleet.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, String> {

    @Query(value = "from Booking order by bookingDateTime desc")
    List<Booking> getBookings();


    @Query(value = "from Booking where bookingId=?1 order by bookingDateTime desc")
    Booking getBookingsByBookingId(String bookingId);

    @Query(value = "from Booking where bookingManagementClerk.bookingManagementClerkId=?1 order by bookingDateTime desc")
    Booking getBookingsByBookingManagementClerkId(String bookingManagementClerkId);

    //securityOfficer
    @Query(value = "from Booking where destination=?1" )
    Booking getBookingByDestination(String destination);

}
