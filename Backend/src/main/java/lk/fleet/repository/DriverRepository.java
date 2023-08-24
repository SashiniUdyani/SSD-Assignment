package lk.fleet.repository;

import lk.fleet.entity.Driver;
import lk.fleet.entity.OverTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DriverRepository extends JpaRepository<Driver,String> {

}
