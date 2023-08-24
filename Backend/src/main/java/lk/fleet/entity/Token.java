package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Token {

    @Id
    private String tokenID;
    private LocalDateTime departureDateTime;
    private LocalDateTime arrivalDateTime;
    private boolean transportStatus;

    @OneToOne
    private Booking booking;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "token")
    private MeterDetail meterDetail;

    @ManyToOne
    private SecurityOfficer securityOfficer;

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public SecurityOfficer getSecurityOfficer() {
        return securityOfficer;
    }

    public void setSecurityOfficer(SecurityOfficer securityOfficer) {
        this.securityOfficer = securityOfficer;
    }

    public String getTokenID() {
        return tokenID;
    }

    public void setTokenID(String tokenID) {
        this.tokenID = tokenID;
    }

    public LocalDateTime getDepartureDateTime() {
        return departureDateTime;
    }

    public void setDepartureDateTime(LocalDateTime departureDateTime) {
        this.departureDateTime = departureDateTime;
    }

    public LocalDateTime getArrivalDateTime() {
        return arrivalDateTime;
    }

    public void setArrivalDateTime(LocalDateTime arrivalDateTime) {
        this.arrivalDateTime = arrivalDateTime;
    }

    public boolean isTransportStatus() {
        return transportStatus;
    }

    public void setTransportStatus(boolean transportStatus) {
        this.transportStatus = transportStatus;
    }

    public MeterDetail getMeterDetail() {
        return meterDetail;
    }

    public void setMeterDetail(MeterDetail meterDetail) {
        this.meterDetail = meterDetail;
    }
}
