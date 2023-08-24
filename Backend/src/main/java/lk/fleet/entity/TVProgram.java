package lk.fleet.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.Set;

@Entity
public class TVProgram {

    @Id
    private String programID;
    private String programName;
    private LocalDate startingDate;
    private LocalDate endingDate;
    private double transportCost;
    private String producer;


    public String getProgramID() {
        return programID;
    }

    public void setProgramID(String programID) {
        this.programID = programID;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public LocalDate getStartingDate() {
        return startingDate;
    }

    public void setStartingDate(LocalDate startingDate) {
        this.startingDate = startingDate;
    }

    public LocalDate getEndingDate() {
        return endingDate;
    }

    public void setEndingDate(LocalDate endingDate) {
        this.endingDate = endingDate;
    }

    public double getTransportCost() {
        return transportCost;
    }

    public void setTransportCost(double transportCost) {
        this.transportCost = transportCost;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

}
