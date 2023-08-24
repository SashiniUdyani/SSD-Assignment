package lk.fleet.repository;

import lk.fleet.entity.ItemApplication;
import lk.fleet.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
//Gayan//
public interface ItemRepository extends JpaRepository<Item,String> {
//    Item getItemsById(String itemID);
}
