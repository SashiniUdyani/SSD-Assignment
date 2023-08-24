package lk.fleet.dto;

import lk.fleet.entity.BookingManagementClerk;

public class BookingManagementClerkDTO {
    private String bookingManagementClerkId;
    private UserAccountDTO userAccount;


    public BookingManagementClerkDTO(BookingManagementClerk bookingManagementClerk) {
        if (bookingManagementClerk != null) {
            this.bookingManagementClerkId = bookingManagementClerk.getBookingManagementClerkId();
        }
    }

    public BookingManagementClerkDTO(BookingManagementClerk bookingManagementClerk, UserAccountDTO userAccount) {
        this(bookingManagementClerk);
        this.userAccount = userAccount;
    }

    public String getBookingManagementClerkId() {
        return bookingManagementClerkId;
    }

    public void setBookingManagementClerkId(String bookingManagementClerkId) {
        this.bookingManagementClerkId = bookingManagementClerkId;
    }

    public UserAccountDTO getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccountDTO userAccount) {
        this.userAccount = userAccount;
    }


}
