package lk.fleet.dto;

import lk.fleet.entity.ProgramBooking;
import lk.fleet.entity.VipBooking;

public class ProgramBookingDTO {

    private String programBookingId;
    private BookingDTO booking;
    private VehicleDTO vehicle;
    private DriverDTO driver;
    private TVProgramDTO tvProgram;

    public ProgramBookingDTO(ProgramBooking programBooking) {
        if (programBooking != null) {
            this.programBookingId = programBooking.getProgramBookingId();
        }
    }

    public ProgramBookingDTO(ProgramBooking programBooking, BookingDTO booking) {
        this(programBooking);
        this.booking = booking;
    }

    public TVProgramDTO getTvProgram() {
        return tvProgram;
    }

    public void setTvProgram(TVProgramDTO tvProgram) {
        this.tvProgram = tvProgram;
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

    public String getProgramBookingId() {
        return programBookingId;
    }

    public void setProgramBookingId(String programBookingId) {
        this.programBookingId = programBookingId;
    }

    public BookingDTO getBooking() {
        return booking;
    }

    public void setBooking(BookingDTO booking) {
        this.booking = booking;
    }
}
