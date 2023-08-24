package lk.fleet.repository;

import lk.fleet.entity.Booking;
import lk.fleet.entity.SpecialBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SpecialBookingRepository extends JpaRepository<SpecialBooking, String> {
    @Query(value = "from SpecialBooking")
    List<SpecialBooking> getSpecialBooking();

    @Query(value = "from SpecialBooking where specialBookingId=?1")
    SpecialBooking getSpecialBookingBySpecialBookingId(String specialBookingId);

}
