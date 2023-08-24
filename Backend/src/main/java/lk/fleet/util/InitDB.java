package lk.fleet.util;

import lk.fleet.entity.UserAccount;
import lk.fleet.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class InitDB {

    @Autowired
    private UserAccountRepository userAccountRepository;

    @EventListener
    public void appReady(ApplicationReadyEvent event) {
        if (userAccountRepository.findAll().size() == 0) {
            UserAccount userAccount = new UserAccount();
            userAccount.setEmployeeID("10000");
            userAccount.setName("Sashini");
            userAccount.setNameWithInitials("A.B.Sashini");
            userAccount.setEmail("sashini@gmail.com");
            userAccount.setAccountType("GM");
            userAccount.setContactNo("076-4105422");
            userAccount.setDob(LocalDate.parse("1995-08-12"));
            userAccount.setNic("956742089V");
            userAccount.setAddress("Bandarawela");
            userAccount.setRegisteredDate(LocalDate.now());
            userAccount.setPassword("admin");
            userAccount.setApproved(true);
            userAccountRepository.save(userAccount);
        }
    }

}

