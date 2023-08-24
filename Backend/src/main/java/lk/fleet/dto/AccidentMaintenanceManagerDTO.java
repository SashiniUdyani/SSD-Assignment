package lk.fleet.dto;

import lk.fleet.entity.AccidentMaintenanceManager;
import lk.fleet.entity.BookingManagementClerk;

public class AccidentMaintenanceManagerDTO {

    private String employeeID;
    private UserAccountDTO userAccount;

    public AccidentMaintenanceManagerDTO(AccidentMaintenanceManager accidentMaintenanceManager) {
        if (accidentMaintenanceManager != null) {
            this.employeeID = accidentMaintenanceManager.getEmployeeID();
        }
    }

    public AccidentMaintenanceManagerDTO(AccidentMaintenanceManager accidentMaintenanceManager, UserAccountDTO userAccount) {
        this(accidentMaintenanceManager);
        this.userAccount = userAccount;
    }


    public String getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(String employeeID) {
        this.employeeID = employeeID;
    }

    public UserAccountDTO getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccountDTO userAccount) {
        this.userAccount = userAccount;
    }
}
