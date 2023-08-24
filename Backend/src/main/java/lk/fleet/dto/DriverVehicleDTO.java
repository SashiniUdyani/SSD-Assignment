package lk.fleet.dto;

import lk.fleet.entity.Driver;
import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.DriverVehiclePK;
import lk.fleet.entity.Vehicle;

public class DriverVehicleDTO {
    private DriverVehiclePK driverVehicleID;
    private String qty;
    private String type;
    private DriverDTO driver;
    private VehicleDTO vehicle;

    public DriverVehicleDTO(DriverVehicle driverVehicle) {
        if (driverVehicle != null) {
            this.driverVehicleID = driverVehicle.getDriverVehicleID();
            this.qty = driverVehicle.getQty();
            this.type = driverVehicle.getType();
        }
    }

    public DriverVehiclePK getDriverVehicleID() {
        return driverVehicleID;
    }

    public void setDriverVehicleID(DriverVehiclePK driverVehicleID) {
        this.driverVehicleID = driverVehicleID;
    }

    public String getQty() {
        return qty;
    }

    public void setQty(String qty) {
        this.qty = qty;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public DriverDTO getDriver() {
        return driver;
    }

    public void setDriver(DriverDTO driver) {
        this.driver = driver;
    }

    public VehicleDTO getVehicle() {
        return vehicle;
    }

    public void setVehicle(VehicleDTO vehicle) {
        this.vehicle = vehicle;
    }
}
