package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

//Gayan//
@Entity
public class Item {
    @Id
    private String itemID;
    private  String itemName;
    private  int qty;

    public String getItemID() {
        return itemID;
    }

    public void setItemID(String itemID) {
        this.itemID = itemID;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }
}
