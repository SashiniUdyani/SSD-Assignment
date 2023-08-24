package lk.fleet.service.impl;

import lk.fleet.dto.VehicleAccidentDTO;
import lk.fleet.dto.VehicleDTO;
import lk.fleet.dto.VehicleMaintenanceDTO;
import lk.fleet.entity.Vehicle;
import lk.fleet.entity.VehicleAccident;
import lk.fleet.entity.VehicleMaintenance;
import lk.fleet.repository.DriverVehicleRepository;
import lk.fleet.repository.VehicleMaintenanceRepository;
import lk.fleet.repository.VehicleRepository;
import lk.fleet.service.VehicleMaintenanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VehicleMaintenanceServiceImpl implements VehicleMaintenanceService {

    @Autowired
    public VehicleMaintenanceRepository vehicleMaintenanceRepository;

    @Autowired
    private VehicleRepository vehicleRepository;


    @Override
    public VehicleMaintenanceDTO addMaintenance(VehicleMaintenance vehicleMaintenance) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        vehicleMaintenance.setMaintenanceID("VCM" + dateTime);
        return new VehicleMaintenanceDTO(vehicleMaintenanceRepository.save(vehicleMaintenance));
    }

    @Override
    public VehicleMaintenanceDTO updateVehicleMaintenance(String maintenanceID, VehicleMaintenance vehicleMaintenance) {
        Optional<VehicleMaintenance> optionalVehicleMaintenance = vehicleMaintenanceRepository.findById(maintenanceID);
        if (optionalVehicleMaintenance.isPresent()) {
            VehicleMaintenance vehicleMaintenanceObj = optionalVehicleMaintenance.get();
            vehicleMaintenanceObj.setMaintenanceID(vehicleMaintenance.getMaintenanceID());
            vehicleMaintenanceObj.setMaintenanceDate(vehicleMaintenance.getMaintenanceDate());
            vehicleMaintenanceObj.setMaintenanceType(vehicleMaintenance.getMaintenanceType());
            vehicleMaintenanceObj.setCompanyName(vehicleMaintenance.getCompanyName());
            vehicleMaintenanceObj.setMaintenanceStatus(vehicleMaintenance.isMaintenanceStatus());
            return new VehicleMaintenanceDTO(vehicleMaintenanceRepository.save(vehicleMaintenanceObj));
        }
        return null;
    }

    @Override
    public boolean deleteVehicleMaintenance(String maintenanceID) {
        vehicleMaintenanceRepository.deleteById(maintenanceID);
        return true;
    }

    @Override
    public List<VehicleMaintenanceDTO> getVehicleMaintenance() {
        List<VehicleMaintenance> vehicleMaintenances = vehicleMaintenanceRepository.findAll();
        List<VehicleMaintenanceDTO> vehicleMaintenanceDTOS = new ArrayList<>();
        for (VehicleMaintenance vehicleMaintenance : vehicleMaintenances) {
            VehicleMaintenanceDTO vehicleMaintenanceDTO = new VehicleMaintenanceDTO(vehicleMaintenance);
            vehicleMaintenanceDTO.setVehicle(new VehicleDTO(vehicleMaintenance.getVehicle()));
            vehicleMaintenanceDTOS.add(vehicleMaintenanceDTO);
        }
        return vehicleMaintenanceDTOS;
    }

    @Override
    public List<VehicleMaintenanceDTO> getMaintenanceById(String vehicleID) {
        VehicleMaintenance vehicleMaintenance = vehicleMaintenanceRepository.getMaintenanceById(vehicleID);
        List<VehicleMaintenanceDTO> vehicleMaintenanceDTOS = new ArrayList<>();
        VehicleMaintenanceDTO vehicleMaintenanceDTO = new VehicleMaintenanceDTO(vehicleMaintenance);
        vehicleMaintenanceDTO.setVehicle(new VehicleDTO(vehicleMaintenance.getVehicle()));
        vehicleMaintenanceDTOS.add(vehicleMaintenanceDTO);
        return vehicleMaintenanceDTOS;
    }

    @Override
    public boolean chkVehicle(String vehicleId) {
        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(vehicleId);
        return optionalVehicle.isPresent();
    }

}
