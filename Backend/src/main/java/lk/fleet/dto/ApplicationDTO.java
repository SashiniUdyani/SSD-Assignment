package lk.fleet.dto;

import lk.fleet.entity.Application;
import lk.fleet.entity.Shift;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationDTO {
    private String applicationID;
    private String destination;
    private String vehicleType;
    private boolean approval;
    private String depatureDate;
    private LocalDateTime depatureDateActual;
    private String arrivaleDate;
    private LocalDateTime arrivaleDateActual;
    private String reason;
    private String type;

    private VehicleDTO vehicle;
    private DriverDTO driver;
    private TokenDTO token;

    private PassengerApplicationDTO passengerApplication;
    private ItemApplicationDTO itemApplication;
    private TokenDTO tokenDTO;


    public ApplicationDTO(Application application) {
        if (application != null) {
            this.applicationID = application.getApplicationID();
            this.destination = application.getDestination();
            this.vehicleType = application.getVehicleType();
            this.approval = application.isApproval();
            this.depatureDateActual = application.getDepatureDate();
            this.arrivaleDateActual = application.getArrivaleDate();
            this.depatureDate = application.getDepatureDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm a"));
            this.arrivaleDate = application.getArrivaleDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm a"));
            this.reason = application.getReason();
            this.type = application.getType();
        }
    }


    public TokenDTO getTokenDTO() {
        return tokenDTO;
    }

    public void setTokenDTO(TokenDTO tokenDTO) {
        this.tokenDTO = tokenDTO;
    }

    public String getApplicationID() {
        return applicationID;
    }

    public void setApplicationID(String applicationID) {
        this.applicationID = applicationID;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public boolean isApproval() {
        return approval;
    }

    public void setApproval(boolean approval) {
        this.approval = approval;
    }

    public String getDepatureDate() {
        return depatureDate;
    }

    public void setDepatureDate(String depatureDate) {
        this.depatureDate = depatureDate;
    }

    public LocalDateTime getDepatureDateActual() {
        return depatureDateActual;
    }

    public void setDepatureDateActual(LocalDateTime depatureDateActual) {
        this.depatureDateActual = depatureDateActual;
    }

    public String getArrivaleDate() {
        return arrivaleDate;
    }

    public void setArrivaleDate(String arrivaleDate) {
        this.arrivaleDate = arrivaleDate;
    }

    public LocalDateTime getArrivaleDateActual() {
        return arrivaleDateActual;
    }

    public void setArrivaleDateActual(LocalDateTime arrivaleDateActual) {
        this.arrivaleDateActual = arrivaleDateActual;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public VehicleDTO getVehicle() {
        return vehicle;
    }

    public void setVehicle(VehicleDTO vehicle) {
        this.vehicle = vehicle;
    }

    public DriverDTO getDriver() {
        return driver;
    }

    public void setDriver(DriverDTO driver) {
        this.driver = driver;
    }

    public PassengerApplicationDTO getPassengerApplication() {
        return passengerApplication;
    }

    public void setPassengerApplication(PassengerApplicationDTO passengerApplication) {
        this.passengerApplication = passengerApplication;
    }

    public ItemApplicationDTO getItemApplication() {
        return itemApplication;
    }

    public void setItemApplication(ItemApplicationDTO itemApplication) {
        this.itemApplication = itemApplication;
    }

    public TokenDTO getToken() {
        return token;
    }

    public void setToken(TokenDTO token) {
        this.token = token;
    }
}
