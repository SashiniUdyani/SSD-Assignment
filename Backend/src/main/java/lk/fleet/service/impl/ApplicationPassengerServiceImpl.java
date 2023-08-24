package lk.fleet.service.impl;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.repository.*;
import lk.fleet.service.ApplicationPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ApplicationPassengerServiceImpl implements ApplicationPassengerService {
    @Autowired
    private ApplicationRepository applicationRepository;
    @Autowired
    private PassengerApplicationRepository passengerApplicationRepository;
    @Autowired
    private PassengerRepository passengerRepository;
    @Autowired
    private PassengerPassengerApplicationRepository passengerPassengerApplicationRepository;
    @Autowired
    private UserAccountRepository userAccountRepository;
    @Autowired
    private BookingApplicationRepository bookingApplicationRepository;
    @Autowired
    private PassengerRepo passengerRepo;
    @Autowired
    private ItemItemApplicationRepository itemItemApplicationRepository;
    @Autowired
    ItemRepository itemRepository;

    @Override
    public ApplicationDTO addApplication(Application application) { //add passenger app
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        application.setApplicationID("App" + dateTime);

        PassengerApplication passengerApplication = application.getPassengerApplication();
        passengerApplication.setPassengerApplicationID("PassApp" + dateTime);
        passengerApplication.setApplication(application);

        for (PassengerPassengerApplication passengerPassengerApplication : application.getPassengerApplication().getPassengerPassengerApplications()) {
            passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(application.getPassengerApplication().getPassengerApplicationID(), passengerPassengerApplication.getPassenger().getPassengerId()));
        }
        return new ApplicationDTO(applicationRepository.save(application)); //Insert
    }

    public ApplicationDTO addApplicationItemPass(Application application) { //add Item passenger app
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));

        application.setApplicationID("App" + dateTime);

        PassengerApplication passengerApplication =application.getPassengerApplication();

        if (passengerApplication != null){
        passengerApplication.setPassengerApplicationID("PassApp" + dateTime);
        passengerApplication.setApplication(application);

            for(PassengerPassengerApplication passengerPassengerApplication: application.getPassengerApplication().getPassengerPassengerApplications()){
                passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(application.getPassengerApplication().getPassengerApplicationID(),passengerPassengerApplication.getPassenger().getPassengerId()));

            }

        }
        ItemApplication itemApplication =application.getItemApplication();
        if (itemApplication != null){
            itemApplication.setItemApplicationId("ItemApp"+dateTime);
            itemApplication.setApplication(application);

            for(ItemItemApplication itemItemApplication: application.getItemApplication().getItemItemApplications()){
                itemRepository.save(itemItemApplication.getItem());
                itemItemApplication.setItemItemApplicationId(new ItemItemApplicationPK(itemItemApplication.getItem().getItemID(),application.getItemApplication().getItemApplicationId()));

            }
        }

        return   new ApplicationDTO(applicationRepository.save(application)); //Jarawa epaa
    }


//    public Application application(String aplicationID,Application application){
//        Optional<Application> applicationOptional = applicationRepository.findById(aplicationID);
//        if(applicationOptional.isPresent()){
//            Application applicationobj =applicationOptional.get();
//            for(PassengerPassengerApplication passengerPassengerApplication: application.getPassengerApplication().getPassengerPassengerApplications()){
//               applicationobj.getPassengerApplication().g
//                 }
//            applicationobj.(passengerPassengerApplication.getPassenger());
//            return passengerPassengerApplicationRepository.save(applicationobj);
//        }
//
//
//        return null;
//    }


//    @Override
//    public PassengerPassengerApplication addPassengerpassenger(PassengerPassengerApplication passengerPassengerApplication) {
//
//        return passengerPassengerApplicationRepository.save(passengerPassengerApplication);
//    }
//
//    @Override
//    public PassengerApplication addPassengerApplication(PassengerApplication passengerApplication) {
//        passengerApplication.setPassengerApplicationID(passengerApplication.getApplication().getApplicationID());
//            applicationRepository.save(passengerApplication.getApplication());
//        return passengerApplicationRepository.save(passengerApplication);
//    }


    @Override
    public Passenger addPassenger(Passenger passenger) { //add passenger
        passenger.setPassengerId(passenger.getUserAccount().getEmployeeID());

        userAccountRepository.save(passenger.getUserAccount());

        return passengerRepository.save(passenger);
    }


//    public UserAccount addApplicant(UserAccount userAccount) {
//        userAccount.setPassenger(userAccount.getPassenger());
//        userAccount.getPassenger().setPassengerId(userAccount.getEmployeeID());
//
//        return userAccountRepository.save(userAccount);
//    }


    public List<PassengerDTO> getPassengers() {  //get all passengers
        List<PassengerDTO> passengerDTOS = new ArrayList<>();
        List<Passenger> passengers = passengerRepo.findAll();
        for (Passenger passenger : passengers) {
            UserAccountDTO userAccountDTO = new UserAccountDTO(passenger.getUserAccount());
            PassengerDTO passengerDTO = new PassengerDTO(passenger);
            passengerDTO.setUserAccount(userAccountDTO);
            passengerDTOS.add(passengerDTO);
        }

        return passengerDTOS;
    }


    public boolean deletePassengerApp(String passengerApplicationID, String passengerID) { //delete Passenger application

        passengerPassengerApplicationRepository.deleteById(new PassengerPassengerApplicationPK(passengerApplicationID, passengerID));
        return true;
    }

    public boolean deleteItemApp(String itemApplicationID, String itemID) { //delete Item application

        itemItemApplicationRepository.deleteById(new ItemItemApplicationPK(itemID, itemApplicationID));
        return true;
    }


//    @Override
//    public PassengerPassengerApplication addPassengerPassengerApplication(PassengerPassengerApplication passengerPassengerApplication) {
//        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
//        applicationRepository.save(passengerPassengerApplication.getPassengerApplication().getApplication());
//        passengerPassengerApplication.getPassengerApplication().setPassengerApplicationID("Pass" + 0 + dateTime);
//        passengerApplicationRepository.save(passengerPassengerApplication.getPassengerApplication());
//        passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(passengerPassengerApplication.getPassengerApplication().getPassengerApplicationID(), passengerPassengerApplication.getPassenger().getPassengerId()));
//
//        int count = 0;
//        for (Passenger passenger : passengerPassengerApplication.getPassengers()) {
//            passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(passengerPassengerApplication.getPassengerApplication().getPassengerApplicationID(),passenger.getPassengerId()));
//            passengerPassengerApplication.setPassenger(passenger);
//        }
//
//        return passengerPassengerApplicationRepository.save(passengerPassengerApplication);
//    }


    public PassengerPassengerApplication passengerApplication(String passengerApplicationID, String passengerID) { //add passengers to pass app
        Optional<Passenger> passengerOptional = passengerRepository.findById(passengerID);
        if (passengerOptional.isPresent()) {
            PassengerPassengerApplication passengerPassengerApplication = new PassengerPassengerApplication();
            passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(passengerApplicationID, passengerID));
            passengerPassengerApplicationRepository.save(passengerPassengerApplication);
            return passengerPassengerApplication;
        }
        return null;
    }

    public Item updateItem(String itemID, Item item) { //update Item
        Optional<Item> itemOptional = itemRepository.findById(itemID);
        if (itemOptional.isPresent()) {
            Item itemobj = itemOptional.get();
            itemobj.setItemID(item.getItemID());
            itemobj.setItemName(item.getItemName());
            itemobj.setQty(item.getQty());
            return itemRepository.save(itemobj);
        }
        return item;
    }

    public ItemItemApplication itemApplication(String itemID, String itemApplicationID, Item item) { //add Item to item app
        ItemItemApplication itemItemApplication = new ItemItemApplication();
        itemRepository.save(item);
        itemItemApplication.setItemItemApplicationId(new ItemItemApplicationPK(itemID, itemApplicationID));
        itemItemApplication.setItem(item);
        itemItemApplicationRepository.save(itemItemApplication);
        return itemItemApplication;
    }


    public List<ApplicationDTO> getPassengerApp() { //get all application

        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        List<Application> applications = applicationRepository.findAll();
        for (Application application : applications) {
            ApplicationDTO applicationDTO = new ApplicationDTO(application);

            PassengerApplicationDTO passengerApplicationDTO = new PassengerApplicationDTO(application.getPassengerApplication());
            PassengerApplication passengerApplication = application.getPassengerApplication();
            if (passengerApplication != null) {
                List<PassengerPassengerApplicationDTO> passengerPassengerApplications = new ArrayList<>();
                for (PassengerPassengerApplication passengerPassengerApplication : passengerApplication.getPassengerPassengerApplications()) {
                    PassengerPassengerApplicationDTO passengerPassengerApplicationDTO = new PassengerPassengerApplicationDTO(passengerPassengerApplication);
                    passengerPassengerApplicationDTO.setPassenger(passengerPassengerApplication.getPassenger());
                    passengerPassengerApplications.add(passengerPassengerApplicationDTO);
                }

                passengerApplicationDTO.setPassengerPassengerApplications(passengerPassengerApplications);
            }

            ItemApplicationDTO itemApplicationDTO = new ItemApplicationDTO(application.getItemApplication());
            ItemApplication itemApplication = application.getItemApplication();
            if (itemApplication != null) {
                List<ItemItemApplicationDTO> itemItemApplicationDTOS = new ArrayList<>();
                for (ItemItemApplication itemItemApplication : itemApplication.getItemItemApplications()) {
                    ItemItemApplicationDTO itemItemApplicationDTO = new ItemItemApplicationDTO(itemItemApplication);
                    itemItemApplicationDTO.setItem(itemItemApplication.getItem());
                    itemItemApplicationDTOS.add(itemItemApplicationDTO);
                }
                itemApplicationDTO.setItemItemApplicationDTOS(itemItemApplicationDTOS);
            }

            if(application.getBookingApplication()!= null){
                TokenDTO tokenDTO=new TokenDTO(application.getBookingApplication().getBooking().getToken());
                applicationDTO.setTokenDTO(tokenDTO);
            }
            applicationDTO.setPassengerApplication(passengerApplicationDTO);
            applicationDTO.setItemApplication(itemApplicationDTO);
            applicationDTOS.add(applicationDTO);


        }

        return applicationDTOS;
    }

    public List<BookingApplicationDTO> gatPassengerAppData() { //get booked details
        List<BookingApplication> bookingApplications = bookingApplicationRepository.findAll();
        List<BookingApplicationDTO> bookingApplicationDTOS = new ArrayList<>();
        for (BookingApplication bookingApplication : bookingApplications) {
            BookingApplicationDTO bookingApplicationDTO = new BookingApplicationDTO(bookingApplication);
            bookingApplicationDTO.setApplication(new ApplicationDTO(bookingApplication.getApplication()));
            bookingApplicationDTO.setDriver(new DriverDTO(bookingApplication.getBooking().getShift().getDriverVehicle().getDriver()));
            bookingApplicationDTO.getDriver().setUserAccount(new UserAccountDTO(bookingApplication.getBooking().getShift().getDriverVehicle().getDriver().getUserAccount()));
            bookingApplicationDTO.setVehicle(new VehicleDTO(bookingApplication.getBooking().getShift().getDriverVehicle().getVehicle()));
            bookingApplicationDTOS.add(bookingApplicationDTO);
            //  passengerApplicationDTOS.add(new PassengerApplicationDTO(bookingApplication));
        }

        return bookingApplicationDTOS;
    }


//    @Override
//    public List<PassengerApplication> getAPassengerApp() {
//        return passengerApplicationRepository.findAll();
//    }

    public ApplicationDTO getPassengerApp(String ID) { //get ID application

        Application application = applicationRepository.getAapplicationByID(ID);

        ApplicationDTO applicationDTOS = new ApplicationDTO(application);
        PassengerApplicationDTO passengerApplicationDTO = new PassengerApplicationDTO(application.getPassengerApplication());

        List<PassengerPassengerApplicationDTO> passengerPassengerApplications = new ArrayList<>();
        for (PassengerPassengerApplication passengerPassengerApplication : application.getPassengerApplication().getPassengerPassengerApplications()) {
            PassengerPassengerApplicationDTO passengerPassengerApplicationDTO = new PassengerPassengerApplicationDTO(passengerPassengerApplication);
            passengerPassengerApplicationDTO.setPassenger(passengerPassengerApplication.getPassenger());
            passengerPassengerApplications.add(passengerPassengerApplicationDTO);
        }
        passengerApplicationDTO.setPassengerPassengerApplications(passengerPassengerApplications);
        applicationDTOS.setPassengerApplication(passengerApplicationDTO);

        return applicationDTOS;
    }


    public ApplicationDTO getItemApp(String ID) { //get ID application

        Application application = applicationRepository.getAapplicationByID(ID);

        ApplicationDTO applicationDTOS = new ApplicationDTO(application);
        ItemApplicationDTO itemApplicationDTO = new ItemApplicationDTO(application.getItemApplication());

        List<ItemItemApplicationDTO> itemItemApplicationDTOS = new ArrayList<>();
        for (ItemItemApplication itemItemApplication : application.getItemApplication().getItemItemApplications()) {
            ItemItemApplicationDTO itemItemApplicationDTO = new ItemItemApplicationDTO(itemItemApplication);
            itemItemApplicationDTO.setItem(itemItemApplication.getItem());
            itemItemApplicationDTOS.add(itemItemApplicationDTO);
        }
        itemApplicationDTO.setItemItemApplicationDTOS(itemItemApplicationDTOS);
        applicationDTOS.setItemApplication(itemApplicationDTO);

        return applicationDTOS;
    }

    public List<Item> getAllItem() {
        return itemRepository.findAll();
    }

    public List<ApplicationDTO> getWaitingReport() { //get all report

        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        List<Application> applications = applicationRepository.findAll();
        for (Application application : applications) {
            ApplicationDTO applicationDTO = new ApplicationDTO(application);

            PassengerApplicationDTO passengerApplicationDTO = new PassengerApplicationDTO(application.getPassengerApplication());
            PassengerApplication passengerApplication = application.getPassengerApplication();
            if (passengerApplication != null) {
                List<PassengerPassengerApplicationDTO> passengerPassengerApplications = new ArrayList<>();
                for (PassengerPassengerApplication passengerPassengerApplication : passengerApplication.getPassengerPassengerApplications()) {
                    PassengerPassengerApplicationDTO passengerPassengerApplicationDTO = new PassengerPassengerApplicationDTO(passengerPassengerApplication);
                    passengerPassengerApplicationDTO.setPassenger(passengerPassengerApplication.getPassenger());
                    passengerPassengerApplications.add(passengerPassengerApplicationDTO);
                }

                passengerApplicationDTO.setPassengerPassengerApplications(passengerPassengerApplications);
            }


            applicationDTO.setPassengerApplication(passengerApplicationDTO);
            applicationDTOS.add(applicationDTO);
        }

        return applicationDTOS;
    }


}
