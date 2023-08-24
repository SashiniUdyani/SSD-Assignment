package lk.fleet.dto;

import lk.fleet.entity.DeliveryPassengerDetail;

public class DeliveryPassengerDetailDTO {

    private String passengerDetailId;
    private String passengerName;
    private String passengerNic;
    private String contactNumber;
    private String passengerType;

    public DeliveryPassengerDetailDTO(DeliveryPassengerDetail deliveryPassengerDetail) {
        if (deliveryPassengerDetail != null) {
            this.passengerDetailId = deliveryPassengerDetail.getPassengerDetailId();
            this.passengerName = deliveryPassengerDetail.getPassengerName();
            this.passengerNic = deliveryPassengerDetail.getPassengerNic();
            this.contactNumber = deliveryPassengerDetail.getContactNumber();
            this.passengerType = deliveryPassengerDetail.getPassengerType();
        }
    }

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
}
