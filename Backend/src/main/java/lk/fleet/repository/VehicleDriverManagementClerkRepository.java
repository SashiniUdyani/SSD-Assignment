package lk.fleet.repository;

import lk.fleet.entity.VehicleDriverManagementClerk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleDriverManagementClerkRepository extends JpaRepository<VehicleDriverManagementClerk, String> {
//    VehicleDriverManagementClerk getVehicleDriverManagementClerkByVehicleDriverManagementId(String vehicleDriverManagementId);

}
