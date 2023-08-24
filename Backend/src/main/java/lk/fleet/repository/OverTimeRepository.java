package lk.fleet.repository;

import lk.fleet.entity.OverTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface OverTimeRepository extends JpaRepository<OverTime, Long> {

    @Query(value = "from OverTime where driver.driverID=?1 order by otDate desc")
    List<OverTime> getLastOverTime(String driverId);

    @Query(value = "from OverTime order by otDate desc")
    List<OverTime> getAllLastOverTimes();

    Optional<OverTime> findById(Long overTimeID);

    @Query(value = "from OverTime where driver.driverID=?1 order by otDate desc")
    List<OverTime> getAllLastOverTimesbyDriverID(String driverId);
}
