package lk.fleet.dto;

import lk.fleet.entity.SpecialBooking;
import lk.fleet.entity.VipBooking;

import java.time.LocalDate;

public class VipBookingDTO {

    private String vipBookingId;
    private double approvedFuelAmount;
    private LocalDate timePeriod;
    private String purpose;
    private boolean approval;
    private BookingDTO booking;
    private VehicleDTO vehicle;
    private DriverDTO driver;
    private VipMemberDTO vipMember;

    public VipBookingDTO(VipBooking vipBooking) {
        this.vipBookingId = vipBooking.getVipBookingId();
        this.approvedFuelAmount = vipBooking.getApprovedFuelAmount();
        this.timePeriod = vipBooking.getTimePeriod();
        this.purpose = vipBooking.getPurpose();
        this.approval = vipBooking.isApproval();
    }
    public VipBookingDTO(VipBooking vipBooking, BookingDTO booking) {
        this(vipBooking);
        this.booking = booking;
    }

    public VipMemberDTO getVipMember() {
        return vipMember;
    }

    public void setVipMember(VipMemberDTO vipMember) {
        this.vipMember = vipMember;
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

    public String getVipBookingId() {
        return vipBookingId;
    }

    public void setVipBookingId(String vipBookingId) {
        this.vipBookingId = vipBookingId;
    }

    public double getApprovedFuelAmount() {
        return approvedFuelAmount;
    }

    public void setApprovedFuelAmount(double approvedFuelAmount) {
        this.approvedFuelAmount = approvedFuelAmount;
    }

    public LocalDate getTimePeriod() {
        return timePeriod;
    }

    public void setTimePeriod(LocalDate timePeriod) {
        this.timePeriod = timePeriod;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public boolean isApproval() {
        return approval;
    }

    public void setApproval(boolean approval) {
        this.approval = approval;
    }

    public BookingDTO getBooking() {
        return booking;
    }

    public void setBooking(BookingDTO booking) {
        this.booking = booking;
    }
}
