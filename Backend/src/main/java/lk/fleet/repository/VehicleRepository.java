package lk.fleet.repository;

import lk.fleet.entity.Token;
import lk.fleet.entity.UserAccount;
import lk.fleet.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VehicleRepository extends JpaRepository<Vehicle,String> {


    @Query(value = "from Vehicle where vehicleId=?1")
    Vehicle getVehicleByNumber(String vehicleID);

    @Query(value = "from UserAccount where accountType='DR'")
    List<UserAccount> getDriverRequest();


//    Vehicle getVehicleByVehicleId(String vehicleId);
}
