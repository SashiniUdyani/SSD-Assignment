package lk.fleet.dto;

import lk.fleet.entity.Application;
import lk.fleet.entity.Item;
import lk.fleet.entity.ItemApplication;
import lk.fleet.entity.PassengerApplication;

import java.time.LocalDateTime;
import java.util.List;

public class ItemApplicationDTO {


    private String itemApplicationID;
    private int noOfItems;

    private List<ItemItemApplicationDTO> itemItemApplication;

    public ItemApplicationDTO(ItemApplication itemApplication) {
        if (itemApplication != null) {
            this.itemApplicationID = itemApplication.getItemApplicationId();
            this.noOfItems = itemApplication.getNoOfItems();
        }
    }


    public String getItemApplicationID() {
        return itemApplicationID;
    }

    public void setItemApplicationID(String itemApplicationID) {
        this.itemApplicationID = itemApplicationID;
    }

    public int getNoOfItems() {
        return noOfItems;
    }

    public void setNoOfItems(int noOfItems) {
        this.noOfItems = noOfItems;
    }

    public List<ItemItemApplicationDTO> getItemItemApplicationDTOS() {
        return itemItemApplication;
    }

    public void setItemItemApplicationDTOS(List<ItemItemApplicationDTO> itemItemApplicationDTOS) {
        this.itemItemApplication = itemItemApplicationDTOS;
    }
}
