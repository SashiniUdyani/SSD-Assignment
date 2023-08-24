package lk.fleet.repository;

import lk.fleet.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface DeliveryRepository extends JpaRepository<Delivery, String> {

    @Query(value = "from Delivery where deliveryType=?1 order by deliveryDateTime asc")
    List<Delivery> getAllDeliveriesDesc(String deliveryType);

    @Query(value = "from Delivery where deliveryType=?1 and date(deliveryDateTime)=?2 order by deliveryDateTime asc")
    List<Delivery> getAllDeliveriesByDate(String deliveryType, Date date);

    @Query(value = "from Delivery where deliveryType=?1 and companyName=?2 order by deliveryDateTime asc")
    List<Delivery> getAllDeliveriesByCompany(String deliveryType, String companyName);

    @Query(value = "from Delivery where week(deliveryDateTime)=?1")
    List<Delivery> getDeliveriesReportWeekly(int weeks);
}
