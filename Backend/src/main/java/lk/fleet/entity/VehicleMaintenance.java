package lk.fleet.entity;


import lk.fleet.dto.BookingDTO;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import java.time.LocalDate;

@Entity
public class VehicleMaintenance {

    @Id
    private String maintenanceID;
    private LocalDate maintenanceDate;
    private String maintenanceType;
    private String companyName;
    private boolean maintenanceStatus;


    @ManyToOne
    private AccidentMaintenanceManager accidentMaintenanceManager; //(fk) object reference from accidentMaintenanceManager

    @OneToOne
    private Vehicle vehicle;


    public String getMaintenanceID() {
        return maintenanceID;
    }

    public void setMaintenanceID(String maintenanceID) {
        this.maintenanceID = maintenanceID;
    }

    public LocalDate getMaintenanceDate() {
        return maintenanceDate;
    }

    public void setMaintenanceDate(LocalDate maintenanceDate) {
        this.maintenanceDate = maintenanceDate;
    }

    public String getMaintenanceType() {
        return maintenanceType;
    }

    public void setMaintenanceType(String maintenanceType) {
        this.maintenanceType = maintenanceType;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public boolean isMaintenanceStatus() {
        return maintenanceStatus;
    }

    public void setMaintenanceStatus(boolean maintenanceStatus) {
        this.maintenanceStatus = maintenanceStatus;
    }

    public AccidentMaintenanceManager getAccidentMaintenanceManager() {
        return accidentMaintenanceManager;
    }

    public void setAccidentMaintenanceManager(AccidentMaintenanceManager accidentMaintenanceManager) {
        this.accidentMaintenanceManager = accidentMaintenanceManager;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}