package lk.fleet.dto;

import lk.fleet.entity.PassengerApplication;
import lk.fleet.entity.PassengerPassengerApplication;

import java.util.List;
import java.util.Set;

public class PassengerApplicationDTO {

    private String passengerApplicationID;
    private int noOfPassengers;

    private List<PassengerPassengerApplicationDTO> passengerPassengerApplications;

    public PassengerApplicationDTO() {
    }

    public PassengerApplicationDTO(PassengerApplication passengerApplication) {
        if (passengerApplication != null) {
            this.passengerApplicationID = passengerApplication.getPassengerApplicationID();
            this.noOfPassengers = passengerApplication.getNoOfPassengers();
        }
    }

    public List<PassengerPassengerApplicationDTO> getPassengerPassengerApplications() {
        return passengerPassengerApplications;
    }

    public void setPassengerPassengerApplications(List<PassengerPassengerApplicationDTO> passengerPassengerApplications) {
        this.passengerPassengerApplications = passengerPassengerApplications;
    }

    public String getPassengerApplicationID() {
        return passengerApplicationID;
    }

    public void setPassengerApplicationID(String passengerApplicationID) {
        this.passengerApplicationID = passengerApplicationID;
    }

    public int getNoOfPassengers() {
        return noOfPassengers;
    }

    public void setNoOfPassengers(int noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }
}