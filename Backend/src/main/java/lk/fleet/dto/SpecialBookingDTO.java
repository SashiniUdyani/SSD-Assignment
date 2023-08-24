package lk.fleet.dto;

import lk.fleet.entity.Booking;
import lk.fleet.entity.SpecialBooking;

public class SpecialBookingDTO {

    private String specialBookingId;
    private int noOfPassengers;
    private double approvedFuelAmount;
    private String description;
    private BookingDTO booking;
    private DriverDTO driver;
    private VehicleDTO vehicle;



    public SpecialBookingDTO(SpecialBooking specialBooking){
        if(specialBooking != null) {
            this.specialBookingId=specialBooking.getSpecialBookingId();
            this.noOfPassengers=specialBooking.getNoOfPassengers();
            this.approvedFuelAmount=specialBooking.getApprovedFuelAmount();
            this.description=specialBooking.getDescription();
        }
    }
    public SpecialBookingDTO(SpecialBooking specialBooking, BookingDTO booking) {
            this(specialBooking);
            this.booking = booking;
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

    public BookingDTO getBooking() {
        return booking;
    }

    public void setBooking(BookingDTO booking) {
        this.booking = booking;
    }
}
