package lk.fleet.repository;

import lk.fleet.entity.VehicleAccident;
import lk.fleet.entity.VehicleMaintenance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VehicleMaintenanceRepository extends JpaRepository<VehicleMaintenance, String> {

    @Query(value = "from VehicleMaintenance where vehicle.vehicleId=?1")
    VehicleMaintenance getMaintenanceById(String vehicleID);
}
