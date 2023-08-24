package lk.fleet.dto;

import lk.fleet.entity.TVProgram;

import java.time.LocalDate;

public class TVProgramDTO {

    private String programID;
    private String programName;
    private LocalDate startingDate;
    private LocalDate endingDate;
    private double transportCost;
    private String producer;

    public TVProgramDTO(TVProgram tvProgram) {
        if (tvProgram != null) {
            this.programID = tvProgram.getProgramID();
            this.programName = tvProgram.getProgramName();
            this.startingDate = tvProgram.getStartingDate();
            this.endingDate = tvProgram.getEndingDate();
            this.transportCost = tvProgram.getTransportCost();
            this.producer = tvProgram.getProducer();
        }
    }


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
