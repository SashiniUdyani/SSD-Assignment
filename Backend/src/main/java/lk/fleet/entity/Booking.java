package lk.fleet.entity;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
public class Booking {

    @Id
    private String bookingId;
    private LocalDateTime bookingDateTime;
    private String destination;
    private boolean bookingStatus;

    @ManyToOne
    @JoinColumn(nullable = false)
    private BookingManagementClerk bookingManagementClerk;

    @OneToOne
    private Shift shift;

    @OneToOne(mappedBy = "booking")
    private Token token;

    public Shift getShift() {
        return shift;
    }

    public void setShift(Shift shift) {
        this.shift = shift;
    }

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public LocalDateTime getBookingDateTime() {
        return bookingDateTime;
    }

    public void setBookingDateTime(LocalDateTime bookingDateTime) {
        this.bookingDateTime = bookingDateTime;
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

    public BookingManagementClerk getBookingManagementClerk() {
        return bookingManagementClerk;
    }

    public void setBookingManagementClerk(BookingManagementClerk bookingManagementClerk) {
        this.bookingManagementClerk = bookingManagementClerk;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
}
