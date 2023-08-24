package lk.fleet.repository;

import lk.fleet.entity.SpecialBooking;
import lk.fleet.entity.VipBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VipBookingRepository extends JpaRepository<VipBooking, String> {
    @Query(value = "from VipBooking")
    List<VipBooking> getVipBooking();

    @Query(value = "from VipBooking where vipBookingId=?1")
    VipBooking getVipBookingByVipBookingId(String vipBookingId);

}
