package lk.fleet.dto;

import lk.fleet.entity.BookingApplication;
import lk.fleet.entity.BookingManagementClerk;

public class BookingApplicationDTO {

    private String bookingApplicationId;
    private BookingDTO booking;
    private ApplicationDTO application;
    private DriverDTO driver;
    private VehicleDTO vehicle;

    public BookingApplicationDTO(BookingApplication bookingApplication) {
        if (bookingApplication != null) {
            this.bookingApplicationId = bookingApplication.getBookingApplicationId();
        }
    }


    public BookingApplicationDTO(BookingApplication bookingApplication, BookingDTO booking) {
        this(bookingApplication);
        this.booking = booking;
    }

    public String getBookingApplicationId() {
        return bookingApplicationId;
    }

    public void setBookingApplicationId(String bookingApplicationId) {
        this.bookingApplicationId = bookingApplicationId;
    }

    public BookingDTO getBooking() {
        return booking;
    }

    public void setBooking(BookingDTO booking) {
        this.booking = booking;
    }

    public ApplicationDTO getApplication() {
        return application;
    }

    public void setApplication(ApplicationDTO application) {
        this.application = application;
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
