package lk.fleet.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
public class BookingManagementClerk {
    @Id
    private String bookingManagementClerkId;

    @OneToOne
    private UserAccount userAccount;

    public String getBookingManagementClerkId() {
        return bookingManagementClerkId;
    }

    public void setBookingManagementClerkId(String bookingManagementClerkId) {
        this.bookingManagementClerkId = bookingManagementClerkId;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }
}
