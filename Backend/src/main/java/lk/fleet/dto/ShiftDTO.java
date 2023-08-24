package lk.fleet.dto;

import lk.fleet.entity.Shift;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class ShiftDTO {

    private String shiftId;
    private String shiftDate;
    private String startingTime;
    private String startingTimeActual;
    private String endingTime;
    private String endingTimeActual;
    private boolean attendance;
    private DriverVehicleDTO driverVehicle;


    public ShiftDTO(Shift shift) {
        if (shift != null) {
            this.shiftId = shift.getShiftId();
            if (shift.getShiftDate() != null) {
                this.shiftDate = shift.getShiftDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            }
            if (shift.getStartingTime() != null) {
                this.startingTime = shift.getStartingTime().format(DateTimeFormatter.ofPattern("hh:mm a"));
                this.startingTimeActual = shift.getStartingTime().format(DateTimeFormatter.ofPattern("HH:mm"));
            }
            if (shift.getEndingTime() != null) {
                this.endingTime = shift.getEndingTime().format(DateTimeFormatter.ofPattern("hh:mm a"));
                this.endingTimeActual = shift.getEndingTime().format(DateTimeFormatter.ofPattern("HH:mm"));
            }
            this.attendance = shift.isAttendance();
        }

    }

    public String getShiftId() {
        return shiftId;
    }

    public void setShiftId(String shiftId) {
        this.shiftId = shiftId;
    }

    public String getShiftDate() {
        return shiftDate;
    }

    public void setShiftDate(String shiftDate) {
        this.shiftDate = shiftDate;
    }

    public String getStartingTime() {
        return startingTime;
    }

    public void setStartingTime(String startingTime) {
        this.startingTime = startingTime;
    }

    public String getStartingTimeActual() {
        return startingTimeActual;
    }

    public void setStartingTimeActual(String startingTimeActual) {
        this.startingTimeActual = startingTimeActual;
    }

    public String getEndingTime() {
        return endingTime;
    }

    public void setEndingTime(String endingTime) {
        this.endingTime = endingTime;
    }

    public String getEndingTimeActual() {
        return endingTimeActual;
    }

    public void setEndingTimeActual(String endingTimeActual) {
        this.endingTimeActual = endingTimeActual;
    }

    public boolean isAttendance() {
        return attendance;
    }

    public void setAttendance(boolean attendance) {
        this.attendance = attendance;
    }

    public DriverVehicleDTO getDriverVehicle() {
        return driverVehicle;
    }

    public void setDriverVehicle(DriverVehicleDTO driverVehicle) {
        this.driverVehicle = driverVehicle;
    }
}
