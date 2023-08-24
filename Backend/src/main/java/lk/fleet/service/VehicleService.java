package lk.fleet.service;

import lk.fleet.dto.DriverDTO;
import lk.fleet.dto.UserAccountDTO;
import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.Vehicle;

import java.util.List;

public interface VehicleService {

    VehicleDTO addVehicle(Vehicle vehicle);

    VehicleDTO updateVehicle(String vehicleID, Vehicle vehicle);

    boolean deleteVehicle(String vehicleID);

    List<VehicleDTO> getAllVehicles();

    VehicleDTO fualUpdate(String vehicleID, double fuelBalance);
    //SecurityOfficer
    VehicleDTO updateVehicleAvailability (String vehicleID, Vehicle vehicle);

    List<VehicleDTO> getVehicleByNumber(String vehicleNumber);

    List<UserAccountDTO> getDriverRequest();

    UserAccountDTO approveDriver(String driverID, boolean approval);

//    UserAccountDTO approveUserAccount(String employeeID, boolean approval);
}
