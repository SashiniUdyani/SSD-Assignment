package lk.fleet.repository;

import lk.fleet.entity.ProgramBooking;
import lk.fleet.entity.VipBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProgramBookingRepository extends JpaRepository<ProgramBooking, String> {
    @Query(value = "from ProgramBooking")
    List<ProgramBooking> getProgramBooking();

    @Query(value = "from ProgramBooking where programBookingId=?1")
    ProgramBooking getProgramBookingByProgramBookingId(String programBookingId);
}
