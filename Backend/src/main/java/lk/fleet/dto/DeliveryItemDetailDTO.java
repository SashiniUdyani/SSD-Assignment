package lk.fleet.dto;

import lk.fleet.entity.DeliveryItemDetail;

public class DeliveryItemDetailDTO {

    private String itemDetailId;
    private String itemName;
    private String itemType;
    private int itemQty;

    public DeliveryItemDetailDTO(DeliveryItemDetail deliveryItemDetail) {
        if (deliveryItemDetail != null) {
            this.itemDetailId = deliveryItemDetail.getItemDetailId();
            this.itemName = deliveryItemDetail.getItemName();
            this.itemType = deliveryItemDetail.getItemType();
            this.itemQty = deliveryItemDetail.getItemQty();
        }
    }

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

    public int getItemQty() {
        return itemQty;
    }

    public void setItemQty(int itemQty) {
        this.itemQty = itemQty;
    }
}
