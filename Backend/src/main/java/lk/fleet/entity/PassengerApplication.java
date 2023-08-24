package lk.fleet.entity;

import javax.persistence.*;
import java.util.Set;

//Gayan//
@Entity
public class PassengerApplication {
    @Id
    private String passengerApplicationID;
    private  int noOfPassengers;

    @OneToOne
    private  Application application;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "passengerApplication")
    private Set<PassengerPassengerApplication> passengerPassengerApplications;

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

    public Application getApplication() {
        return application;
    }

    public Set<PassengerPassengerApplication> getPassengerPassengerApplications() {
        return passengerPassengerApplications;
    }

    public void setPassengerPassengerApplications(Set<PassengerPassengerApplication> passengerPassengerApplications) {
        this.passengerPassengerApplications = passengerPassengerApplications;
    }

    public void setApplication(Application application) {
        this.application = application;
    }
}
