package lk.fleet.entity;

import javax.persistence.*;

@Entity
public class SecurityOfficer {

    @Id
    private String securityOfficerID;

    @OneToOne
    private UserAccount userAccount;

    public String getSecurityOfficerID() {
        return securityOfficerID;
    }

    public void setSecurityOfficerID(String securityOfficerID) {
        this.securityOfficerID = securityOfficerID;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }
}
