package lk.fleet.dto;

import lk.fleet.entity.OverTime;

import java.time.LocalDate;
import java.time.LocalTime;

public class OverTimeDTO {
    private long overTimeID;
    private LocalDate otDate;
    private int noOfShifts;
    private LocalTime startTime;
    private LocalTime endTime;
    private boolean approval;
    private DriverDTO driver;

    public OverTimeDTO(OverTime overTime) {
        if (overTime != null) {
            this.overTimeID = overTime.getOverTimeID();
            this.otDate = overTime.getOtDate();
            this.noOfShifts = overTime.getNoOfShifts();
            this.startTime = overTime.getStartTime();
            this.endTime = overTime.getEndTime();
            this.approval = overTime.isApproval();
        }
    }

    public long getOverTimeID() {
        return overTimeID;
    }

    public void setOverTimeID(long overTimeID) {
        this.overTimeID = overTimeID;
    }

    public int getNoOfShifts() {
        return noOfShifts;
    }

    public void setNoOfShifts(int noOfShifts) {
        this.noOfShifts = noOfShifts;
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

    public boolean isApproval() {
        return approval;
    }

    public void setApproval(boolean approval) {
        this.approval = approval;
    }

    public DriverDTO getDriver() {
        return driver;
    }

    public void setDriver(DriverDTO driver) {
        this.driver = driver;
    }
}
