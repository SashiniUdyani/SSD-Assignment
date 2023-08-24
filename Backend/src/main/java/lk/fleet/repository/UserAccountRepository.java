package lk.fleet.repository;

import lk.fleet.dto.UserAccountDTO;
import lk.fleet.entity.Delivery;
import lk.fleet.entity.UserAccount;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserAccountRepository extends JpaRepository<UserAccount, String> {

    UserAccount findAllByEmailAndPasswordAndApproved(String email, String password, boolean approved);

    @Query(value = "from UserAccount where employeeID=?1 ")
    UserAccount getUserAccountByID(String employeeID);

    @Query(value = "from UserAccount where accountType='AP'")
    List<UserAccount> getUserAccountsForApplicants();


    //
//    @Query(value = "from UserAccount where accountType=?1 order by registeredDate asc")
//    List<UserAccount> getAllUserAccountDesc(String accountType);
}
