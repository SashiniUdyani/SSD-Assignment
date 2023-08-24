package lk.fleet.dto;

import lk.fleet.entity.Booking;
import lk.fleet.entity.Token;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class BookingDTO {

    private String bookingId;
    private String bookingDate;
    private String bookingTime;
    private String bookingTimeActual;
    private String destination;
    private boolean bookingStatus;
    private VehicleDTO vehicle;
    private DriverDTO driver;
    private TokenDTO token;

    public BookingDTO(Booking booking) {
        if (booking != null) {
            this.bookingId = booking.getBookingId();
            if (booking.getBookingDateTime() != null) {
                this.bookingDate = booking.getBookingDateTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
                this.bookingTime = booking.getBookingDateTime().format(DateTimeFormatter.ofPattern("hh:mm a"));
                this.bookingTimeActual = booking.getBookingDateTime().format(DateTimeFormatter.ofPattern("HH:mm"));
            }
            this.destination = booking.getDestination();
            this.bookingStatus = booking.isBookingStatus();
        }
    }


    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public String getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
    }

    public String getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(String bookingTime) {
        this.bookingTime = bookingTime;
    }

    public String getBookingTimeActual() {
        return bookingTimeActual;
    }

    public void setBookingTimeActual(String bookingTimeActual) {
        this.bookingTimeActual = bookingTimeActual;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public boolean isBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(boolean bookingStatus) {
        this.bookingStatus = bookingStatus;
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

    public TokenDTO getToken() {
        return token;
    }

    public void setToken(TokenDTO token) {
        this.token = token;
    }
}





