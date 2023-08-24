package lk.fleet.dto;

import lk.fleet.entity.MeterDetail;

import java.time.format.DateTimeFormatter;

public class MeterDetailDTO {
    private String meterId;
    private double inMeter;
    private double OutMeter;
    private double mileage;


    public MeterDetailDTO(MeterDetail meterDetail) {
        if (meterDetail != null) {
            this.meterId = meterDetail.getMeterId();
            this.inMeter = meterDetail.getInMeter();
            this.OutMeter = meterDetail.getOutMeter();
            this.mileage = meterDetail.getMileage();
        }
    }

    public String getMeterId() {
        return meterId;
    }

    public void setMeterId(String meterId) {
        this.meterId = meterId;
    }

    public double getInMeter() {
        return inMeter;
    }

    public void setInMeter(double inMeter) {
        this.inMeter = inMeter;
    }

    public double getOutMeter() {
        return OutMeter;
    }

    public void setOutMeter(double outMeter) {
        OutMeter = outMeter;
    }

    public double getMileage() {
        return mileage;
    }

    public void setMileage(double mileage) {
        this.mileage = mileage;
    }

}
