package lk.fleet.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
public class AccidentMaintenanceManager {

    @Id
    private String employeeID;


    @OneToOne
    private UserAccount userAccount;



    public String getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(String employeeID) {
        this.employeeID = employeeID;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }
}
