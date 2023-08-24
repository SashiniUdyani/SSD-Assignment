package lk.fleet.entity;


import lk.fleet.dto.BookingApplicationDTO;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class BookingApplication {

    @Id
    private String bookingApplicationId;




    @OneToOne
    private Booking booking;

    @OneToOne
    private Application application;



    public String getBookingApplicationId() {
        return bookingApplicationId;
    }

    public void setBookingApplicationId(String bookingApplicationId) {
        this.bookingApplicationId = bookingApplicationId;
    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }


}