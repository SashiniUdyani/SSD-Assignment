package lk.fleet.dto;

import lk.fleet.entity.Item;
import lk.fleet.entity.ItemItemApplication;


public class ItemItemApplicationDTO {
    private Item item;

    public ItemItemApplicationDTO(ItemItemApplication itemItemApplication) {

    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

}
