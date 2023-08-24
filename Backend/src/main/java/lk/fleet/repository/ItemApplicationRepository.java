package lk.fleet.repository;

import lk.fleet.entity.ItemApplication;
import org.springframework.data.jpa.repository.JpaRepository;

//Gayan//
public interface ItemApplicationRepository extends JpaRepository<ItemApplication,String> {
//    ItemApplication getItemApplicationByID(String requestID);
}
