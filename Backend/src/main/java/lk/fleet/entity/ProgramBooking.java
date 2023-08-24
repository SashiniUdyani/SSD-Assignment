package lk.fleet.entity;

import javax.persistence.*;

@Entity
public class ProgramBooking {
    @Id
    private String programBookingId;

    @OneToOne
    private Booking booking;

    @ManyToOne
    @JoinColumn(nullable = false)
    private TVProgram tvProgram;

    public String getProgramBookingId() {
        return programBookingId;
    }

    public void setProgramBookingId(String programBookingId) {
        this.programBookingId = programBookingId;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public TVProgram getTvProgram() {
        return tvProgram;
    }

    public void setTvProgram(TVProgram tvProgram) {
        this.tvProgram = tvProgram;
    }
}
