package lk.fleet.service.impl;

import lk.fleet.dto.DriverDTO;
import lk.fleet.dto.VehicleAccidentDTO;
import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.DriverVehiclePK;
import lk.fleet.entity.Vehicle;
import lk.fleet.entity.VehicleAccident;
import lk.fleet.repository.DriverVehicleRepository;
import lk.fleet.repository.VehicleAccidentRepository;
import lk.fleet.repository.VehicleRepository;
import lk.fleet.service.VehicleAccidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VehicleAccidentServiceImpl implements VehicleAccidentService {

    @Autowired
    private VehicleAccidentRepository vehicleAccidentRepository;
    @Autowired
    private DriverVehicleRepository driverVehicleRepository;
    @Autowired
    private VehicleRepository vehicleRepository;


    @Override
    public VehicleAccidentDTO addAccident(VehicleAccident vehicleAccident) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        vehicleAccident.setVehicleAccidentID("VCM" + dateTime);
        return new VehicleAccidentDTO(vehicleAccidentRepository.save(vehicleAccident));
    }

    @Override
    public VehicleAccidentDTO updateVehicleAccident(String vehicleAccidentID, VehicleAccident vehicleAccident) {
        Optional<VehicleAccident> optionalVehicleAccident = vehicleAccidentRepository.findById(vehicleAccidentID);
        if (optionalVehicleAccident.isPresent()) {
            VehicleAccident vehicleAccidentObj = optionalVehicleAccident.get();
            vehicleAccidentObj.setVehicleAccidentID(vehicleAccident.getVehicleAccidentID());
            vehicleAccidentObj.setAccidentDate(vehicleAccident.getAccidentDate());
            vehicleAccidentObj.setAccidentTime(vehicleAccident.getAccidentTime());
            vehicleAccidentObj.setInsuranceStatus(vehicleAccident.isInsuranceStatus());
            vehicleAccidentObj.setInsuranceNo(vehicleAccident.getInsuranceNo());
            return new VehicleAccidentDTO(vehicleAccidentRepository.save(vehicleAccidentObj));
        }
        return null;
    }

    @Override
    public boolean deleteAccident(String vehicleAccidentID) {
        vehicleAccidentRepository.deleteById(vehicleAccidentID);
        return true;
    }


    @Override
    public List<VehicleAccidentDTO> getVehicleAccidents() {
        List<VehicleAccident> vehicleAccidents = vehicleAccidentRepository.findAll();
        List<VehicleAccidentDTO> vehicleAccidentDTOS = new ArrayList<>();
        for (VehicleAccident vehicleAccident : vehicleAccidents) {
            VehicleAccidentDTO vehicleAccidentDTO = new VehicleAccidentDTO(vehicleAccident);
            vehicleAccidentDTO.setDriver(new DriverDTO(vehicleAccident.getDriverVehicle().getDriver()));
            vehicleAccidentDTO.setVehicle(new VehicleDTO(vehicleAccident.getDriverVehicle().getVehicle()));
            vehicleAccidentDTOS.add(vehicleAccidentDTO);
        }
        return vehicleAccidentDTOS;
    }

    @Override
    public boolean chkVehicle(String vehicleId) {
        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(vehicleId);
        return optionalVehicle.isPresent();
    }

    @Override
    public boolean chkDriver(String vehicleId, String driverId) {
        Optional<DriverVehicle> optionalVehicle = driverVehicleRepository.findById(new DriverVehiclePK(driverId, vehicleId));
        return optionalVehicle.isPresent();
    }

    @Override
    public List<VehicleAccidentDTO> getAccidentById(String vehicleID) {
        VehicleAccident vehicleAccident = vehicleAccidentRepository.getAccidentById(vehicleID);
        List<VehicleAccidentDTO> vehicleAccidentDTOS=new ArrayList<>();
        VehicleAccidentDTO vehicleAccidentDTO = new VehicleAccidentDTO(vehicleAccident);
        vehicleAccidentDTO.setDriver(new DriverDTO(vehicleAccident.getDriverVehicle().getDriver()));
        vehicleAccidentDTO.setVehicle(new VehicleDTO(vehicleAccident.getDriverVehicle().getVehicle()));
        vehicleAccidentDTOS.add(vehicleAccidentDTO);
        return vehicleAccidentDTOS;
    }

}
