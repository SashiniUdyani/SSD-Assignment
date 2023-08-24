package lk.fleet.dto;

import lk.fleet.entity.Vehicle;

public class VehicleDTO {

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
//    private UserAccountDTO userAccountDTO;

//    public UserAccountDTO getUserAccountDTO() {
//        return userAccountDTO;
//    }
//
//    public void setUserAccountDTO(UserAccountDTO userAccountDTO) {
//        this.userAccountDTO = userAccountDTO;
//    }

    public VehicleDTO(Vehicle vehicle) {
        if (vehicle != null) {
            this.vehicleId = vehicle.getVehicleId();
            this.vehicleType = vehicle.getVehicleType();
            this.model = vehicle.getModel();
            this.noOfSeats = vehicle.getNoOfSeats();
            this.initialMeter = vehicle.getInitialMeter();
            this.serviceMeter = vehicle.getServiceMeter();
            this.fuelType = vehicle.getFuelType();
            this.occupied = vehicle.isOccupied();
            this.fuelConsumption = vehicle.getFuelConsumption();
            this.fuelBalance = vehicle.getFuelBalance();
        }
    }

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
}
