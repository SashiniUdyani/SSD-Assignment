package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

//Gayan//
@Entity
public class Application {
    @Id
    private String applicationID;
    private String destination;
    private String vehicleType;
    private boolean approval;
    private LocalDateTime depatureDate;
    private LocalDateTime arrivaleDate;
    private String reason;
    private String type;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "application")
    private PassengerApplication passengerApplication;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "application")
    private ItemApplication itemApplication;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "application")
    private BookingApplication bookingApplication;

    public BookingApplication getBookingApplication() {
        return bookingApplication;
    }

    public void setBookingApplication(BookingApplication bookingApplication) {
        this.bookingApplication = bookingApplication;
    }

    public String getApplicationID() {
        return this.applicationID;
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

    public void setApproval(boolean approval) { this.approval = approval; }

    public LocalDateTime getDepatureDate() {
        return depatureDate;
    }

    public void setDepatureDate(LocalDateTime depatureDate) {
        this.depatureDate = depatureDate;
    }

    public LocalDateTime getArrivaleDate() {
        return arrivaleDate;
    }

    public void setArrivaleDate(LocalDateTime arrivaleDate) {
        this.arrivaleDate = arrivaleDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public PassengerApplication getPassengerApplication() {
        return passengerApplication;
    }

    public void setPassengerApplication(PassengerApplication passengerApplication) {
        this.passengerApplication = passengerApplication;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public ItemApplication getItemApplication() {
        return itemApplication;
    }

    public void setItemApplication(ItemApplication itemApplication) {
        this.itemApplication = itemApplication;
    }
}
