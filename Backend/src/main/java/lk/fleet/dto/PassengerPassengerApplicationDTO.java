package lk.fleet.dto;

import lk.fleet.entity.Passenger;
import lk.fleet.entity.PassengerPassengerApplication;

import java.util.List;

public class PassengerPassengerApplicationDTO {

    private Passenger passenger;

    public PassengerPassengerApplicationDTO(PassengerPassengerApplication passengerPassengerApplication) {

    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

}
