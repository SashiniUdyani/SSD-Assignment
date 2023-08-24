package lk.fleet.service.impl;


import lk.fleet.dto.ApplicationDTO;
import lk.fleet.entity.*;
import lk.fleet.repository.*;
import lk.fleet.service.ApplicationItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class ApplicationItemServiceImpl implements ApplicationItemService {

    @Autowired
    ApplicationRepository applicationRepository;
    @Autowired
    ItemApplicationRepository itemApplicationRepository;
    @Autowired
    ItemRepository itemRepository;
    @Autowired
    ItemItemApplicationRepository itemItemApplicationRepository;
    @Autowired
    PassengerApplicationRepository passengerApplicationRepository;


//    @Override
//    public ItemItemApplication addItemItemApplication(ItemItemApplication itemItemApplication) {
//        itemRepository.save(itemItemApplication.getItem());
//        applicationRepository.save(itemItemApplication.getItemApplication().getApplication());
//        itemItemApplication.getItemApplication().setItemApplicationId(itemItemApplication.getItemApplication().getApplication().getApplicationID());
//        itemApplicationRepository.save(itemItemApplication.getItemApplication());
//        itemItemApplication.setItemItemApplicationId(new ItemItemApplicationPK(itemItemApplication.getItem().getItemID(),itemItemApplication.getItemApplication().getItemApplicationId()));
//
//
//        return itemItemApplicationRepository.save(itemItemApplication);
//    }

    public ApplicationDTO addItemApplication(Application application){

        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        application.setApplicationID("App" + dateTime);

        ItemApplication itemApplication =application.getItemApplication();
        itemApplication.setItemApplicationId("ItemApp" + dateTime);
        itemApplication.setApplication(application);

        int count=0;
        for(ItemItemApplication itemItemApplication: application.getItemApplication().getItemItemApplications()){
            itemRepository.save(itemItemApplication.getItem());
            itemItemApplication.setItemItemApplicationId(new ItemItemApplicationPK(itemItemApplication.getItem().getItemID(),application.getItemApplication().getItemApplicationId()));

        }

        return    new ApplicationDTO(applicationRepository.save(application));
    }



}
