package lk.fleet.repository;

import lk.fleet.entity.Application;
import lk.fleet.entity.PassengerPassengerApplication;
import lk.fleet.entity.PassengerPassengerApplicationPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

//Gayan//
public interface PassengerPassengerApplicationRepository extends JpaRepository<PassengerPassengerApplication, PassengerPassengerApplicationPK> {

//    @Query(value = "from PassengerPassengerApplication where passengerPassengerApplicationId=?1 ")
//    PassengerPassengerApplicationPK deleteById(String passengerApplicationID, String passengerID);

    @Query(value = "from PassengerPassengerApplication where passenger.passengerId=?1 order by passengerApplication.application.depatureDate desc")
    List<PassengerPassengerApplication> getAllByPassengerPassengerId(String passengerId);

    @Modifying
    @Transactional
    @Query(value = "delete from PassengerPassengerApplication where passengerApplication.passengerApplicationID=?1 and passenger.passengerId=?2")
    void deletePassengerFromApplication(String passengerApplicationID, String passengerId);
}
