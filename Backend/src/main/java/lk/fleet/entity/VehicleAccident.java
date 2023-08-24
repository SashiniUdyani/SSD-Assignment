package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
public class VehicleAccident {

  @Id
  private String vehicleAccidentID;
  private LocalDate accidentDate;
  private LocalTime accidentTime;
  private String insuranceNo;
  private boolean insuranceStatus;


    @ManyToOne
    private AccidentMaintenanceManager accidentMaintenanceManager;

    @ManyToOne
    private DriverVehicle driverVehicle;


    public String getVehicleAccidentID() {
        return vehicleAccidentID;
    }

    public void setVehicleAccidentID(String vehicleAccidentID) {
        this.vehicleAccidentID = vehicleAccidentID;
    }

    public LocalDate getAccidentDate() {
        return accidentDate;
    }

    public void setAccidentDate(LocalDate accidentDate) {
        this.accidentDate = accidentDate;
    }

    public LocalTime getAccidentTime() {
        return accidentTime;
    }

    public void setAccidentTime(LocalTime accidentTime) {
        this.accidentTime = accidentTime;
    }

    public String getInsuranceNo() {
        return insuranceNo;
    }

    public void setInsuranceNo(String insuranceNo) {
        this.insuranceNo = insuranceNo;
    }

    public boolean isInsuranceStatus() {
        return insuranceStatus;
    }

    public void setInsuranceStatus(boolean insuranceStatus) {
        this.insuranceStatus = insuranceStatus;
    }

    public AccidentMaintenanceManager getAccidentMaintenanceManager() {
        return accidentMaintenanceManager;
    }

    public void setAccidentMaintenanceManager(AccidentMaintenanceManager accidentMaintenanceManager) {
        this.accidentMaintenanceManager = accidentMaintenanceManager;
    }

    public DriverVehicle getDriverVehicle() {
        return driverVehicle;
    }

    public void setDriverVehicle(DriverVehicle driverVehicle) {
        this.driverVehicle = driverVehicle;
    }
}
