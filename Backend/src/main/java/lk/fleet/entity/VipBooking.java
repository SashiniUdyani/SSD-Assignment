package lk.fleet.entity;


import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class VipBooking {
    @Id
    private String vipBookingId;
    private double approvedFuelAmount;
    private LocalDate timePeriod;
    private String purpose;
    private boolean approval;

    @OneToOne
    private Booking booking;

    @ManyToOne
    @JoinColumn(nullable = false)
    private VipMember vipMember;

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

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public VipMember getVipMember() {
        return vipMember;
    }

    public void setVipMember(VipMember vipMember) {
        this.vipMember = vipMember;
    }
}
