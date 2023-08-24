package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class DeliveryItemDetail {

    @Id
    private String itemDetailId;
    private String itemName;
    private String itemType;
    private int itemQty;

    @ManyToOne
    private Delivery delivery;

    public String getItemDetailId() {
        return itemDetailId;
    }

    public void setItemDetailId(String itemDetailId) {
        this.itemDetailId = itemDetailId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemType() {
        return itemType;
    }

    public void setItemType(String itemType) {
        this.itemType = itemType;
    }

    public Delivery getDelivery() {
        return delivery;
    }

    public void setDelivery(Delivery delivery) {
        this.delivery = delivery;
    }

    public int getItemQty() {
        return itemQty;
    }

    public void setItemQty(int itemQty) {
        this.itemQty = itemQty;
    }
}
