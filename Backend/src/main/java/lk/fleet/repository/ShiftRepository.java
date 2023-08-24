package lk.fleet.repository;

import lk.fleet.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.Month;
import java.util.List;

public interface ShiftRepository extends JpaRepository<Shift, String> {

    @Query(value = "from Shift where driverVehicle.driver.driverID=?1 order by shiftDate desc")
    List<Shift> getDriverShiftsByDriverId(String driverId);

    @Query(value = "from Shift where driverVehicle.vehicle.vehicleType=?1 order by shiftDate desc")
    List<Shift> getDriverShiftsByVehicleType(String vehicleType);

    @Query(value = "from Shift order by shiftDate desc")
    List<Shift> getDriverShifts();

    //Get the current shift
    @Query(value = "from Shift where driverVehicle.driver.driverID=?1 and shiftDate = current_date and current_time >=startingTime and current_time <=endingTime ")
    List<Shift> getDriverShiftsByDriverIdByCurrentDate(String driverId);

    //Driver attendance report
    @Query(value = "from Shift where driverVehicle.driver.driverID=?1 and attendance=true order by shiftDate desc")
    List<Shift> getAllShiftsbyDriverID(String driverId);
}
