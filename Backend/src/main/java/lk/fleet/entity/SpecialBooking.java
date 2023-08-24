package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class SpecialBooking {
    @Id
    private String specialBookingId;
    private int noOfPassengers;
    private double approvedFuelAmount;
    private String description;

    @OneToOne
    private Booking booking;

    public String getSpecialBookingId() {
        return specialBookingId;
    }

    public void setSpecialBookingId(String specialBookingId) {
        this.specialBookingId = specialBookingId;
    }

    public int getNoOfPassengers() {
        return noOfPassengers;
    }

    public void setNoOfPassengers(int noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }

    public double getApprovedFuelAmount() {
        return approvedFuelAmount;
    }

    public void setApprovedFuelAmount(double approvedFuelAmount) {
        this.approvedFuelAmount = approvedFuelAmount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
