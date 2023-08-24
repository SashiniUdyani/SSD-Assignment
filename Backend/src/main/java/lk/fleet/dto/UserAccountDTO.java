package lk.fleet.dto;

import lk.fleet.entity.BookingManagementClerk;
import lk.fleet.entity.UserAccount;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class UserAccountDTO {

    private String employeeID;
    private String accountType;
    private String nic;
    private String dob;
    private String name;
    private String address;
    private String contactNo;
    private String email;
    private String registeredDate;
    private String nameWithInitials;
    private String password;
    private boolean approved;
    private BookingManagementClerkDTO bookingManagementClerkDTO;


    public UserAccountDTO(UserAccount userAccount) {
        if (userAccount != null) {
            this.employeeID = userAccount.getEmployeeID();
            this.accountType = userAccount.getAccountType();
            this.nic = userAccount.getNic();
            this.dob = userAccount.getDob().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            this.name = userAccount.getName();
            this.address = userAccount.getAddress();
            this.contactNo = userAccount.getContactNo();
            this.email = userAccount.getEmail();
            this.registeredDate = userAccount.getRegisteredDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            this.nameWithInitials = userAccount.getNameWithInitials();
            this.approved = userAccount.isApproved();
//            this.password = userAccount.getPassword();
        }
    }


    public String getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(String employeeID) {
        this.employeeID = employeeID;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(String registeredDate) {
        this.registeredDate = registeredDate;
    }

    public String getNameWithInitials() {
        return nameWithInitials;
    }

    public void setNameWithInitials(String nameWithInitials) {
        this.nameWithInitials = nameWithInitials;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public BookingManagementClerkDTO getBookingManagementClerkDTO() {
        return bookingManagementClerkDTO;
    }

    public void setBookingManagementClerkDTO(BookingManagementClerkDTO bookingManagementClerkDTO) {
        this.bookingManagementClerkDTO = bookingManagementClerkDTO;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }
}
