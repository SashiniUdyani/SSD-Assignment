package lk.fleet.service;

import lk.fleet.dto.DriverVehicleDTO;
import lk.fleet.entity.DriverVehicle;

import java.util.List;

public interface DriverVehicleService {
    DriverVehicleDTO addDriverVehicle(DriverVehicle driverVehicle);

    boolean deleteDriverVehicle(String driverId, String vehicleID);

    List<DriverVehicleDTO> getDriverVehicles();
}
