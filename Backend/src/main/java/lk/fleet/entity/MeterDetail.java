package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;

@Entity
public class MeterDetail {

    @Id
    private String meterId;
    private double inMeter;
    private double outMeter;
    private double mileage;

    @OneToOne
    private Token token;

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
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
        return outMeter;
    }

    public void setOutMeter(double outMeter) {
        this.outMeter = outMeter;
    }

    public double getMileage() {
        return mileage;
    }

    public void setMileage(double mileage) {
        this.mileage = mileage;
    }

}
