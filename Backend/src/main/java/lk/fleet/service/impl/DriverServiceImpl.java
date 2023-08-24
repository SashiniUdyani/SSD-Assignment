package lk.fleet.service.impl;

import lk.fleet.dto.DriverDTO;
import lk.fleet.dto.UserAccountDTO;
import lk.fleet.entity.Driver;
import lk.fleet.repository.DriverRepository;
import lk.fleet.repository.DriverVehicleRepository;
import lk.fleet.repository.UserAccountRepository;
import lk.fleet.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Autowired
    private DriverVehicleRepository driverVehicleRepository;

    @Override
    public DriverDTO addDriver(Driver driver) {
        driver.setDriverID(driver.getUserAccount().getEmployeeID());
        userAccountRepository.save(driver.getUserAccount());
        return new DriverDTO(driverRepository.save(driver), new UserAccountDTO(driver.getUserAccount()));
    }

    @Override
    public Object updateDriver(String driverID, Driver driver) {
        Optional<Driver> optionalDriver = driverRepository.findById(driverID);
        if (optionalDriver.isPresent()) {
            Driver driver1 = optionalDriver.get();
            driver1.getUserAccount().setName(driver.getUserAccount().getName());
            driver1.getUserAccount().setAddress(driver.getUserAccount().getAddress());
            driver1.getUserAccount().setDob(driver.getUserAccount().getDob());
            driver1.getUserAccount().setEmail(driver.getUserAccount().getEmail());
            driver1.getUserAccount().setNic(driver.getUserAccount().getNic());
            driver1.getUserAccount().setNameWithInitials(driver.getUserAccount().getNameWithInitials());
            driver1.setLisenseID(driver.getLisenseID());
            driver1.getUserAccount().setApproved(driver.getUserAccount().isApproved());

            userAccountRepository.save(driver1.getUserAccount());
            return new DriverDTO(driverRepository.save(driver1));
        }
        return null;
    }

    @Override
    public boolean deleteDriver(String driverID) {
        driverRepository.deleteById(driverID);
        userAccountRepository.deleteById(driverID);
        return true;
    }

    @Override
    public DriverDTO getDriver(String driverId) {
        Optional<Driver> driverOptional = driverRepository.findById(driverId);
        if (driverOptional.isPresent()) {
            Driver driver = driverOptional.get();
            return new DriverDTO(driver, new UserAccountDTO(driver.getUserAccount()));
        }
        return null;
    }

}
