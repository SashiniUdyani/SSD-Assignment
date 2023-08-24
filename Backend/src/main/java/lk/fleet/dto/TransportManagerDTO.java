package lk.fleet.dto;

import lk.fleet.entity.TransportManager;
import lk.fleet.entity.UserAccount;

import javax.persistence.OneToOne;

public class TransportManagerDTO {

    private String transportManagerId;
    private UserAccountDTO userAccount;

    public TransportManagerDTO(TransportManager transportManager) {
        if (transportManager != null) {
            this.transportManagerId = transportManager.getTransportManagerId();
        }
    }

    public TransportManagerDTO(TransportManager transportManager, UserAccountDTO userAccount) {
        this(transportManager);
        this.userAccount = userAccount;
    }

    public String getTransportManagerId() {
        return transportManagerId;
    }

    public void setTransportManagerId(String transportManagerId) {
        this.transportManagerId = transportManagerId;
    }

    public UserAccountDTO getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccountDTO userAccount) {
        this.userAccount = userAccount;
    }
}
