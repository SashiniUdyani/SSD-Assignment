package lk.fleet.entity;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import java.io.Serializable;

//Gayan//
@Embeddable
public class ItemItemApplicationPK implements Serializable {

    private String itemID;
    private String itemApplicationId;

    public ItemItemApplicationPK(String itemID, String itemApplicationId) {
        this.itemID = itemID;
        this.itemApplicationId = itemApplicationId;
    }

    public ItemItemApplicationPK() {

    }

    public String getItemID() {
        return itemID;
    }

    public void setItemID(String itemID) {
        this.itemID = itemID;
    }

    public String getItemApplicationId() {
        return itemApplicationId;
    }

    public void setItemApplicationId(String itemApplicationId) {
        this.itemApplicationId = itemApplicationId;
    }
}
