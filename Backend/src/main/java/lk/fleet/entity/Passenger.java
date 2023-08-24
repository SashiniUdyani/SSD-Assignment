package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

//Gayan//
@Entity
public class Passenger {
    @Id
    private String passengerId;

    @OneToOne
    private UserAccount userAccount;

    public String getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(String passengerId) {
        this.passengerId = passengerId;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }

}
