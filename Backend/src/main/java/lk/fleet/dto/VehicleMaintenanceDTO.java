package lk.fleet.dto;

import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.VehicleMaintenance;

import java.time.format.DateTimeFormatter;

public class VehicleMaintenanceDTO {

    private String maintenanceID;
    private String maintenanceDate;
    private String maintenanceType;
    private String companyName;
    private boolean maintenanceStatus;
    //private String vehicleID;
    private VehicleDTO vehicle;


    public VehicleMaintenanceDTO(VehicleMaintenance vehicleMaintenance) {
        if (vehicleMaintenance != null) {
            this.maintenanceID = vehicleMaintenance.getMaintenanceID();
            this.maintenanceDate = vehicleMaintenance.getMaintenanceDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            this.maintenanceType = vehicleMaintenance.getMaintenanceType();
            this.companyName = vehicleMaintenance.getCompanyName();
            this.maintenanceStatus = vehicleMaintenance.isMaintenanceStatus();
            //this.vehicleID=vehicleMaintenance.getDriverVehicle().getVehicle().getVehicleId();
        }
    }

    public String getMaintenanceID() {
        return maintenanceID;
    }

    public void setMaintenanceID(String maintenanceID) {
        this.maintenanceID = maintenanceID;
    }

    public String getMaintenanceDate() {
        return maintenanceDate;
    }

    public void setMaintenanceDate(String maintenanceDate) {
        this.maintenanceDate = maintenanceDate;
    }

    public String getMaintenanceType() {
        return maintenanceType;
    }

    public void setMaintenanceType(String maintenanceType) {
        this.maintenanceType = maintenanceType;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public boolean isMaintenanceStatus() {
        return maintenanceStatus;
    }

    public void setMaintenanceStatus(boolean maintenanceStatus) {
        this.maintenanceStatus = maintenanceStatus;
    }


    public VehicleDTO getVehicle() {
        return vehicle;
    }

    public void setVehicle(VehicleDTO vehicle) {
        this.vehicle = vehicle;
    }
}