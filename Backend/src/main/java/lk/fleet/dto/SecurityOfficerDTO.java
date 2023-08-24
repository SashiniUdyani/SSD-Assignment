package lk.fleet.dto;

import lk.fleet.entity.SecurityOfficer;

public class SecurityOfficerDTO {

    private String securityOfficerId;
    private UserAccountDTO userAccount;

    public SecurityOfficerDTO(SecurityOfficer securityOfficer) {
        if (securityOfficer != null) {
            this.securityOfficerId = securityOfficer.getSecurityOfficerID();
        }
    }


    public SecurityOfficerDTO(SecurityOfficer securityOfficer, UserAccountDTO userAccount) {
        this(securityOfficer);
        this.userAccount = userAccount;
    }

    public String getSecurityOfficerId() {
        return securityOfficerId;
    }

    public void setSecurityOfficerId(String transportManagerId) {
        this.securityOfficerId = securityOfficerId;
    }

    public UserAccountDTO getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccountDTO userAccount) {
        this.userAccount = userAccount;
    }
}

