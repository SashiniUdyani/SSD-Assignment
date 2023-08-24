package lk.fleet.service.impl;

import lk.fleet.dto.DriverDTO;
import lk.fleet.dto.DriverVehicleDTO;
import lk.fleet.dto.UserAccountDTO;
import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.DriverVehiclePK;
import lk.fleet.repository.DriverVehicleRepository;
import lk.fleet.service.DriverVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DriverVehicleImpl implements DriverVehicleService {
    @Autowired
    private DriverVehicleRepository driverVehicleRepository;

    @Override
    public DriverVehicleDTO addDriverVehicle(DriverVehicle driverVehicle) {
        driverVehicle.setDriverVehicleID(new DriverVehiclePK(driverVehicle.getDriver().getDriverID(), driverVehicle.getVehicle().getVehicleId()));
        driverVehicle = driverVehicleRepository.save(driverVehicle);
        DriverVehicleDTO driverVehicleDTO = new DriverVehicleDTO(driverVehicleRepository.save(driverVehicle));
        driverVehicleDTO.setDriver(new DriverDTO(driverVehicle.getDriver(), new UserAccountDTO(driverVehicle.getDriver().getUserAccount())));
        driverVehicleDTO.setVehicle(new VehicleDTO(driverVehicle.getVehicle()));
        return driverVehicleDTO;
    }

    @Override
    public boolean deleteDriverVehicle(String driverId, String vehicleID) {
        driverVehicleRepository.deleteById(new DriverVehiclePK(driverId, vehicleID));
        return true;
    }

    @Override
    public List<DriverVehicleDTO> getDriverVehicles() {
        List<DriverVehicle> driverVehicles = driverVehicleRepository.findAll();
        List<DriverVehicleDTO> driverVehicleDTOS = new ArrayList<>();
        for (DriverVehicle driverVehicle : driverVehicles) {
            DriverVehicleDTO driverVehicleDTO = new DriverVehicleDTO(driverVehicle);
            driverVehicleDTO.setDriver(new DriverDTO(driverVehicle.getDriver(), new UserAccountDTO(driverVehicle.getDriver().getUserAccount())));
            driverVehicleDTO.setVehicle(new VehicleDTO(driverVehicle.getVehicle()));
            driverVehicleDTOS.add(driverVehicleDTO);
        }
        return driverVehicleDTOS;
    }


}
