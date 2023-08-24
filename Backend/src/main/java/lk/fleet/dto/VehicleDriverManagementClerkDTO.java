package lk.fleet.dto;

import lk.fleet.entity.VehicleDriverManagementClerk;

public class VehicleDriverManagementClerkDTO {

    private String vehicleDriverManagementId;
    private UserAccountDTO userAccount;

    public VehicleDriverManagementClerkDTO(VehicleDriverManagementClerk vehicleDriverManagementClerk) {
        if (vehicleDriverManagementClerk != null) {
            this.vehicleDriverManagementId = vehicleDriverManagementClerk.getVehicleDriverManagementId();
        }
    }

    public VehicleDriverManagementClerkDTO(VehicleDriverManagementClerk vehicleDriverManagementClerk, UserAccountDTO userAccount) {
        this(vehicleDriverManagementClerk);
        this.userAccount = userAccount;
    }


    public String getVehicleDriverManagementId() {
        return vehicleDriverManagementId;
    }

    public void setVehicleDriverManagementId(String vehicleDriverManagementId) {
        this.vehicleDriverManagementId = vehicleDriverManagementId;
    }

    public UserAccountDTO getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccountDTO userAccount) {
        this.userAccount = userAccount;
    }
}
