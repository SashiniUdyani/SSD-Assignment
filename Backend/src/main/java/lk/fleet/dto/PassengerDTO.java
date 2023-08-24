package lk.fleet.dto;

import lk.fleet.entity.Passenger;

public class PassengerDTO {
    private String PassengerId;
    private UserAccountDTO userAccount;

    public PassengerDTO(Passenger passenger) {
        this.PassengerId = passenger.getPassengerId();
    }

    public UserAccountDTO getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccountDTO userAccount) {
        this.userAccount = userAccount;
    }

    public String getPassengerId() {
        return PassengerId;
    }

    public void setPassengerId(String passengerId) {
        PassengerId = passengerId;
    }
}
