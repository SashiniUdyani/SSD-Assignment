package lk.fleet.repository;

import lk.fleet.entity.BookingApplication;
import lk.fleet.entity.ProgramBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookingApplicationRepository extends JpaRepository<BookingApplication, String> {
    @Query(value = "from BookingApplication")
    List<BookingApplication> getBookingApplication();

    @Query(value = "from BookingApplication where bookingApplicationId=?1")
    BookingApplication getBookingApplicationByBookingApplicationId(String bookingApplicationId);
}
