package lk.fleet.service;

import lk.fleet.dto.VehicleAccidentDTO;
import lk.fleet.dto.VehicleMaintenanceDTO;
import lk.fleet.entity.VehicleMaintenance;

import java.util.List;

public interface VehicleMaintenanceService {

    VehicleMaintenanceDTO addMaintenance(VehicleMaintenance vehicleMaintenance);

    boolean chkVehicle(String vehicleId);

    VehicleMaintenanceDTO updateVehicleMaintenance(String maintenanceID, VehicleMaintenance vehicleMaintenance);

    boolean deleteVehicleMaintenance(String maintenanceID);

    List<VehicleMaintenanceDTO> getVehicleMaintenance();

    List<VehicleMaintenanceDTO> getMaintenanceById(String vehicleID);
}

