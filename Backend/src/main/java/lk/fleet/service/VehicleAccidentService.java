package lk.fleet.service;

import lk.fleet.dto.VehicleAccidentDTO;
import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.VehicleAccident;

import java.util.List;

public interface VehicleAccidentService {

    VehicleAccidentDTO addAccident(VehicleAccident vehicleAccident);

    VehicleAccidentDTO updateVehicleAccident (String vehicleAccidentID, VehicleAccident vehicleAccident);

    boolean deleteAccident (String vehicleAccidentID);

    List<VehicleAccidentDTO> getVehicleAccidents();

    boolean chkVehicle(String vehicleId);

    boolean chkDriver(String vehicleId,String driverId);

    List<VehicleAccidentDTO>  getAccidentById(String vehicleID);

}

