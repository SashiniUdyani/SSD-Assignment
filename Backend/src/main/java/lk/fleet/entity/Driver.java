package lk.fleet.entity;

import javax.persistence.*;

@Entity
public class Driver {

    @Id
    private String driverID;
    private String lisenseID;

    @OneToOne
    private UserAccount userAccount;

    public String getDriverID() {
        return driverID;
    }

    public void setDriverID(String driverID) {
        this.driverID = driverID;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }

    public String getLisenseID() {
        return lisenseID;
    }

    public void setLisenseID(String lisenseID) {
        this.lisenseID = lisenseID;
    }

}
