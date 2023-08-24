package lk.fleet.entity;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class PassengerPassengerApplicationPK implements Serializable {


    private String passengerApplicationID;
    private String passengerId;

    public PassengerPassengerApplicationPK(String passengerApplicationID, String passengerId) {
        this.passengerApplicationID = passengerApplicationID;
        this.passengerId = passengerId;
    }

    public PassengerPassengerApplicationPK() {

    }

    public String getPassengerApplicationID() {
        return passengerApplicationID;
    }

    public void setPassengerApplicationID(String passengerApplicationID) {
        this.passengerApplicationID = passengerApplicationID;
    }

    public String getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(String passengerId) {
        this.passengerId = passengerId;
    }
}
