package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Vehicle {

    @Id
    private String vehicleId;
    private String vehicleType;
    private String model;
    private int noOfSeats;
    private double initialMeter;
    private double serviceMeter;
    private String fuelType;
    private boolean occupied;
    private double fuelConsumption;
    private double fuelBalance;


    public String getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getNoOfSeats() {
        return noOfSeats;
    }

    public void setNoOfSeats(int noOfSeats) {
        this.noOfSeats = noOfSeats;
    }

    public double getInitialMeter() {
        return initialMeter;
    }

    public void setInitialMeter(double initialMeter) {
        this.initialMeter = initialMeter;
    }

    public double getServiceMeter() {
        return serviceMeter;
    }

    public void setServiceMeter(double serviceMeter) {
        this.serviceMeter = serviceMeter;
    }

    public double getFuelConsumption() {
        return fuelConsumption;
    }

    public void setFuelConsumption(double fuelConsumption) {
        this.fuelConsumption = fuelConsumption;
    }

    public double getFuelBalance() {
        return fuelBalance;
    }

    public void setFuelBalance(double fuelBalance) {
        this.fuelBalance = fuelBalance;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public boolean isOccupied() {
        return occupied;
    }

    public void setOccupied(boolean occupied) {
        this.occupied = occupied;
    }
//approval ain karanan
    public void setApproved(boolean approval) {

    }
}
