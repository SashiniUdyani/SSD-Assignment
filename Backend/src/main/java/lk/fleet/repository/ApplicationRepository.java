package lk.fleet.repository;


import lk.fleet.dto.ApplicationDTO;
import lk.fleet.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

//Gayan//
public interface ApplicationRepository extends JpaRepository<Application, String> {

    @Query(value = "from Application where applicationID=?1 ")
    Application getAapplicationByID(String applicationID);

    List<Application> getApplicationsByApprovalAndTypeOrderByDepatureDateDesc(boolean approval, String type);

    List<Application> getApplicationsByApprovalAndDestinationAndTypeOrderByDepatureDateDesc(boolean approval, String destination, String type);

}
