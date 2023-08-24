package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class OverTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long overTimeID;
    private LocalDate otDate;
    private int noOfShifts;
    private LocalTime startTime;
    private LocalTime endTime;
    private boolean approval;

    @ManyToOne
    private Driver driver;

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public long getOverTimeID() {
        return overTimeID;
    }

    public void setOverTimeID(long overTimeID) {
        this.overTimeID = overTimeID;
    }

    public LocalDate getOtDate() {
        return otDate;
    }

    public void setOtDate(LocalDate otDate) {
        this.otDate = otDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public int getNoOfShifts() {
        return noOfShifts;
    }

    public void setNoOfShifts(int noOfShifts) {
        this.noOfShifts = noOfShifts;
    }

    public boolean isApproval() {
        return approval;
    }

    public void setApproval(boolean approval) {
        this.approval = approval;
    }
}
