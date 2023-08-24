package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class TransportManager {

    @Id
    private String transportManagerId;

    @OneToOne
    private UserAccount userAccount;

    public String getTransportManagerId() {
        return transportManagerId;
    }

    public void setTransportManagerId(String transportManagerId) {
        this.transportManagerId = transportManagerId;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }
}
