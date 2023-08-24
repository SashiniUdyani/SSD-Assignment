package lk.fleet.repository;

import lk.fleet.entity.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;
//Gayan
public interface PassengerRepo extends JpaRepository<Passenger,String> {
}
