package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

@Entity
public class Shift {
    @Id
    private String shiftId;
    private LocalDate shiftDate;
    private LocalTime startingTime;
    private LocalTime endingTime;
    private boolean attendance;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "driverID", referencedColumnName = "driverID", updatable = false, nullable = false),
            @JoinColumn(name = "vehicleId", referencedColumnName = "vehicleId", updatable = false, nullable = false)
    })
    private DriverVehicle driverVehicle;

    @ManyToOne
//    @JoinColumn(nullable = false)
    private BookingManagementClerk bookingManagementClerk;

    @ManyToOne
    @JoinColumn(nullable = true)
    private OverTime overTime;

    public String getShiftId() {
        return shiftId;
    }

    public void setShiftId(String shiftId) {
        this.shiftId = shiftId;
    }

    public LocalDate getShiftDate() {
        return shiftDate;
    }

    public void setShiftDate(LocalDate shiftDate) {
        this.shiftDate = shiftDate;
    }

    public LocalTime getStartingTime() {
        return startingTime;
    }

    public void setStartingTime(LocalTime startingTime) {
        this.startingTime = startingTime;
    }

    public LocalTime getEndingTime() {
        return endingTime;
    }

    public void setEndingTime(LocalTime endingTime) {
        this.endingTime = endingTime;
    }

    public boolean isAttendance() {
        return attendance;
    }

    public void setAttendance(boolean attendance) {
        this.attendance = attendance;
    }

    public DriverVehicle getDriverVehicle() {
        return driverVehicle;
    }

    public void setDriverVehicle(DriverVehicle driverVehicle) {
        this.driverVehicle = driverVehicle;
    }

    public BookingManagementClerk getBookingManagementClerk() {
        return bookingManagementClerk;
    }

    public void setBookingManagementClerk(BookingManagementClerk bookingManagementClerk) {
        this.bookingManagementClerk = bookingManagementClerk;
    }

    public OverTime getOverTime() {
        return overTime;
    }

    public void setOverTime(OverTime overTime) {
        this.overTime = overTime;
    }

}
