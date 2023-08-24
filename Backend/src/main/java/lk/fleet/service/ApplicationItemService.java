package lk.fleet.service;

import lk.fleet.dto.ApplicationDTO;
import lk.fleet.entity.Application;
import lk.fleet.entity.ItemItemApplication;

public interface ApplicationItemService {


    //    PassengerApplication addPassengerApplication(PassengerApplication application);
    //ItemItemApplication addItemItemApplication (ItemItemApplication itemApplication);
    ApplicationDTO addItemApplication(Application application);

}
