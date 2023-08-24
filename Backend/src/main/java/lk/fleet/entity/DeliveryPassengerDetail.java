package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class DeliveryPassengerDetail {

    @Id
    private String passengerDetailId;
    private String passengerName;
    private String passengerNic;
    private String contactNumber;
    private String passengerType;

    @OneToOne
    private Delivery delivery;

    public String getPassengerDetailId() {
        return passengerDetailId;
    }

    public void setPassengerDetailId(String passengerDetailId) {
        this.passengerDetailId = passengerDetailId;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }

    public String getPassengerNic() {
        return passengerNic;
    }

    public void setPassengerNic(String passengerNic) {
        this.passengerNic = passengerNic;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getPassengerType() {
        return passengerType;
    }

    public void setPassengerType(String passengerType) {
        this.passengerType = passengerType;
    }

    public Delivery getDelivery() {
        return delivery;
    }

    public void setDelivery(Delivery delivery) {
        this.delivery = delivery;
    }
}
