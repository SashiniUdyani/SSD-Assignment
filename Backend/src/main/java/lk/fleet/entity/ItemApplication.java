package lk.fleet.entity;

import javax.persistence.*;
import java.util.Set;

//Gayan//
@Entity
public class ItemApplication {
    @Id
    private String itemApplicationId;
    private  int noOfItems;

    @OneToOne
    private Application application;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "itemApplication")
    private Set<ItemItemApplication> itemItemApplications;

    public String getItemApplicationId() {
        return itemApplicationId;
    }

    public void setItemApplicationId(String itemApplicationId) {
        this.itemApplicationId = itemApplicationId;
    }

    public int getNoOfItems() {
        return noOfItems;
    }

    public void setNoOfItems(int noOfItems) {
        this.noOfItems = noOfItems;
    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }

    public Set<ItemItemApplication> getItemItemApplications() {
        return itemItemApplications;
    }

    public void setItemItemApplications(Set<ItemItemApplication> itemItemApplications) {
        this.itemItemApplications = itemItemApplications;
    }
}
