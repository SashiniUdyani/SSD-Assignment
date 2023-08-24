package lk.fleet.repository;

import lk.fleet.entity.PassengerApplication;
import lk.fleet.entity.PassengerPassengerApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//Gayan//
public interface PassengerApplicationRepository extends JpaRepository<PassengerApplication,String> {
  //  Optional<PassengerApplication> findById(Class<PassengerPassengerApplication> passengerPassengerApplicationClass, String aplicationID);
//    PassengerApplication getPassengerApplicationById(String requestId);
}
