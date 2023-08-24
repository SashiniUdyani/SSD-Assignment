package lk.fleet.service;

import lk.fleet.dto.DriverDTO;
import lk.fleet.entity.Driver;

public interface DriverService {

    Object addDriver(Driver driver);

    Object updateDriver(String driverID, Driver driver);

    boolean deleteDriver(String driverID);

    DriverDTO getDriver(String driverId);
}
