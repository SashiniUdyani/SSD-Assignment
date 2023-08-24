package lk.fleet.repository;

import lk.fleet.entity.VehicleAccident;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VehicleAccidentRepository extends JpaRepository<VehicleAccident,String> {

    @Query(value = "from VehicleAccident where driverVehicle.vehicle.vehicleId=?1")
    VehicleAccident getAccidentById(String vehicleID);
}

