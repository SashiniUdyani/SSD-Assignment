package lk.fleet.service.impl;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.repository.*;
import lk.fleet.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserAccountServiceImpl implements UserAccountService {

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Autowired
    private TransportManagerRepository transportManagerRepository;

    @Autowired
    private BookingManagementClerkRepository bookingManagementClerkRepository;

    @Autowired
    private VehicleDriverManagementClerkRepository vehicleDriverManagementClerkRepository;

    @Autowired
    private AccidentMaintenanceManagerRepository accidentMaintenanceManagerRepository;

    @Autowired
    private SecurityOfficerRepository securityOfficerRepository;

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    BookingApplicationRepository bookingApplicationRepository;


    @Override
    public UserAccountDTO addGeneralManagerUserAccount(UserAccount userAccount) {
        // LocalDateTime localDateTime = LocalDateTime.now();//current date
        //  userAccount.setEmployeeID("GM" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));

        userAccount.setApproved(true);
        return new UserAccountDTO(userAccountRepository.save(userAccount));
    }

    @Override
    public TransportManagerDTO addTransportManagerUserAccount(TransportManager transportManager) {
        // LocalDateTime localDateTime = LocalDateTime.now();//current date
        if (transportManager.getUserAccount().getAccountType().equals("Transport Manager")) {
            //transportManager.setTransportManagerId("TM" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
            transportManager.setTransportManagerId(transportManager.getUserAccount().getEmployeeID());
            transportManager.getUserAccount().setAccountType("TM");
        }

        transportManager.getUserAccount().setApproved(true);
        userAccountRepository.save(transportManager.getUserAccount());
        transportManagerRepository.save(transportManager);
        return new TransportManagerDTO(transportManager, new UserAccountDTO(transportManager.getUserAccount()));
    }

    @Override
    public BookingManagementClerkDTO addBookingManagementClerkUserAccount(BookingManagementClerk bookingManagementClerk) {
        // LocalDateTime localDateTime = LocalDateTime.now();//current date
        if (bookingManagementClerk.getUserAccount().getAccountType().equals("Booking Management Clerk")) {
            //bookingManagementClerk.setBookingManagementClerkId("BMC" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
            bookingManagementClerk.setBookingManagementClerkId(bookingManagementClerk.getUserAccount().getEmployeeID());
            bookingManagementClerk.getUserAccount().setAccountType("BMC");
        }

        bookingManagementClerk.getUserAccount().setApproved(true);
        userAccountRepository.save(bookingManagementClerk.getUserAccount());
        bookingManagementClerkRepository.save(bookingManagementClerk);
        return new BookingManagementClerkDTO(bookingManagementClerk, new UserAccountDTO(bookingManagementClerk.getUserAccount()));
    }

    @Override
    public VehicleDriverManagementClerkDTO addVehicleDiverManagementClerkUserAccount(VehicleDriverManagementClerk vehicleDriverManagementClerk) {
        // LocalDateTime localDateTime = LocalDateTime.now();//current date
        if (vehicleDriverManagementClerk.getUserAccount().getAccountType().equals("Vehicle and Driver Management Clerk")) {
            // vehicleDriverManagementClerk.setVehicleDriverManagementId("VMC" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
            vehicleDriverManagementClerk.setVehicleDriverManagementId(vehicleDriverManagementClerk.getUserAccount().getEmployeeID());
            vehicleDriverManagementClerk.getUserAccount().setAccountType("VDM");
        }

        vehicleDriverManagementClerk.getUserAccount().setApproved(true);
        userAccountRepository.save(vehicleDriverManagementClerk.getUserAccount());
        vehicleDriverManagementClerkRepository.save(vehicleDriverManagementClerk);
        return new VehicleDriverManagementClerkDTO(vehicleDriverManagementClerk, new UserAccountDTO(vehicleDriverManagementClerk.getUserAccount()));
    }


    @Override
    public Object addAccidentMaintenanceManagerUserAccount(AccidentMaintenanceManager accidentMaintenanceManager) {
        if (accidentMaintenanceManager.getUserAccount().getAccountType().equals("Accident and Maintenance Clerk")) {
            // vehicleDriverManagementClerk.setVehicleDriverManagementId("VMC" + localDateTime.format(DateTimeFormatter.ofPattern("hhmmss")));
            accidentMaintenanceManager.setEmployeeID(accidentMaintenanceManager.getUserAccount().getEmployeeID());
            accidentMaintenanceManager.getUserAccount().setAccountType("VMC");
        }

        accidentMaintenanceManager.getUserAccount().setApproved(true);
        userAccountRepository.save(accidentMaintenanceManager.getUserAccount());
        accidentMaintenanceManagerRepository.save(accidentMaintenanceManager);
        return new AccidentMaintenanceManagerDTO(accidentMaintenanceManager, new UserAccountDTO(accidentMaintenanceManager.getUserAccount()));


    }

    @Override
    public SecurityOfficerDTO addSecurityOfficerUserAccount(SecurityOfficer securityOfficer) {
        if (securityOfficer.getUserAccount().getAccountType().equals("Security Officer")) {
            securityOfficer.setSecurityOfficerID(securityOfficer.getUserAccount().getEmployeeID());
            securityOfficer.getUserAccount().setAccountType("SO");
        }

        securityOfficer.getUserAccount().setApproved(true);
        userAccountRepository.save(securityOfficer.getUserAccount());
        securityOfficerRepository.save(securityOfficer);
        return new SecurityOfficerDTO(securityOfficer, new UserAccountDTO(securityOfficer.getUserAccount()));
    }

    @Override
    public UserAccountDTO updateUserAccount(String employeeID, UserAccount userAccount) {

        Optional<UserAccount> optionalUserAccount = userAccountRepository.findById(employeeID);
        if (optionalUserAccount.isPresent()) {
            UserAccount userAccountObject = optionalUserAccount.get();
            userAccountObject.setName(userAccount.getName());
            userAccountObject.setAddress(userAccount.getAddress());
            userAccountObject.setContactNo(userAccount.getContactNo());
            userAccountObject.setEmail(userAccount.getEmail());
            userAccountObject.setNameWithInitials(userAccount.getNameWithInitials());

            return new UserAccountDTO(userAccountRepository.save(userAccountObject));
        }
        return null;
    }

    @Override
    public boolean deleteUserAccount(String employeeID) {
        userAccountRepository.deleteById(employeeID);
        return true;
    }

    @Override
    public List<UserAccountDTO> getUserAccountByID(String employeeID) {
        UserAccount userAccountByID = userAccountRepository.getUserAccountByID(employeeID);
        List<UserAccountDTO> userAccountDTOS = new ArrayList<>();
        userAccountDTOS.add(new UserAccountDTO(userAccountByID));
        return userAccountDTOS;
    }


    @Override
    public List<ApplicationDTO> getTransportApplication() {

        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        List<Application> applications = applicationRepository.findAll();
        for (Application application : applications) {
            ApplicationDTO applicationDTO = new ApplicationDTO(application);

          // applicationDTO.setToken(new TokenDTO(application.getBookingApplication().getBooking().getToken()));

            applicationDTO.setPassengerApplication(new PassengerApplicationDTO(application.getPassengerApplication()));
            applicationDTOS.add(applicationDTO);
        }

        return applicationDTOS;
    }

    @Override
    public List<ApplicationDTO> getTransportApplicationforReport() {

        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        List<Application> applications = applicationRepository.findAll();
        for (Application application : applications) {
            ApplicationDTO applicationDTO = new ApplicationDTO(application);

            if(application.getBookingApplication()!= null){
                TokenDTO tokenDTO=new TokenDTO(application.getBookingApplication().getBooking().getToken());
                applicationDTO.setToken(tokenDTO);
            }


//            if(application.getBookingApplication() != null) {
//                applicationDTO.setToken(new TokenDTO(application.getBookingApplication().getBooking().getToken()));
//            }
            applicationDTO.setPassengerApplication(new PassengerApplicationDTO(application.getPassengerApplication()));
            applicationDTOS.add(applicationDTO);
        }

        return applicationDTOS;
    }


    @Override
    public List<PassengerPassengerApplicationDTO> getTransportRequests() {
        return null;
    }

    @Override
    public UserAccountDTO approveUserAccount(String employeeID, boolean approval) {
        Optional<UserAccount> optionalUserAccount = userAccountRepository.findById(employeeID);
        if (optionalUserAccount.isPresent()) {
            UserAccount userAccountObj = optionalUserAccount.get();
            userAccountObj.setApproved(approval);
            return new UserAccountDTO(userAccountRepository.save(userAccountObj));
        }
        return null;
    }

    @Override
    public ApplicationDTO approveTransport(String applicationID, boolean approval) {
        Optional<Application> optionalApplication = applicationRepository.findById(applicationID);
        if (optionalApplication.isPresent()) {
            Application applicationObj = optionalApplication.get();
            applicationObj.setApproval(approval);
            return new ApplicationDTO(applicationRepository.save(applicationObj));
        }

        return null;
    }

    @Override
    public List<ApplicationDTO> getTransportByID(String applicationID) {
        Application applicationByID = applicationRepository.getAapplicationByID(applicationID);

        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        ApplicationDTO applicationDTO = new ApplicationDTO(applicationByID);
        applicationDTO.setPassengerApplication(new PassengerApplicationDTO(applicationByID.getPassengerApplication()));
        applicationDTOS.add(applicationDTO);
        return applicationDTOS;
    }


    @Override
    public List<ApplicationDTO> getAllTransports() {
        List<Application> applications = applicationRepository.findAll();
        List<ApplicationDTO> applicationDTOS = new ArrayList<>();

        for (Application application : applications) {
            applicationDTOS.add(new ApplicationDTO(application));
        }
        return applicationDTOS;
    }

    @Override
    public Object getTransportReportWeekly(int weeks) {
        return null;
    }

    @Override
    public List<UserAccountDTO> getUserAccounts() {
        List<UserAccount> userAccounts = userAccountRepository.findAll();
        List<UserAccountDTO> userAccountDTOS = new ArrayList<>();

        for (UserAccount userAccount : userAccounts) {
            userAccountDTOS.add(new UserAccountDTO(userAccount));
        }

        return userAccountDTOS;
    }

    @Override
    public List<UserAccountDTO> getUserAccountsForApplicants() {
        List<UserAccount> userAccounts = userAccountRepository.getUserAccountsForApplicants();
        List<UserAccountDTO> userAccountDTOS = new ArrayList<>();

        for (UserAccount userAccount : userAccounts) {
            userAccountDTOS.add(new UserAccountDTO(userAccount));
        }

        return userAccountDTOS;
    }

    @Override
    public UserAccountDTO login(UserAccount userAccount) {
        UserAccount userAccountObj = userAccountRepository.findAllByEmailAndPasswordAndApproved(userAccount.getEmail(), userAccount.getPassword(), true);
        return new UserAccountDTO(userAccountObj);
    }

//    @Override
//    public List<PassengerApplicationDTO> getTransport() {
//        List<BookingApplication> bookingApplications = bookingApplicationRepository.findAll();
//        List<PassengerApplicationDTO> passengerApplicationDTOS=new ArrayList<>();
//        for(BookingApplication bookingApplication: bookingApplications){
//            passengerApplicationDTOS.add(new PassengerApplicationDTO(bookingApplication));
//        }
//
//        return passengerApplicationDTOS;
//    }


//    @Override
//    public TransportManagerDTO updateTransportManagerAccount(String transportManagerId, TransportManager transportManager) {
//
//        Optional<TransportManager> optionalTransportManager = transportManagerRepository.findById(transportManagerId);
//        if (optionalTransportManager.isPresent()) {
//            TransportManager transportManagerObject = optionalTransportManager.get();
//            transportManagerObject.getUserAccount().setName(transportManager.getUserAccount().getName());
//            transportManagerObject.getUserAccount().setAddress(transportManager.getUserAccount().getAddress());
//            transportManagerObject.getUserAccount().setContactNo(transportManager.getUserAccount().getContactNo());
//            transportManagerObject.getUserAccount().setEmail(transportManager.getUserAccount().getEmail());
//
//
//            userAccountRepository.save(transportManagerObject.getUserAccount());
//            return new TransportManagerDTO(transportManagerRepository.save(transportManagerObject));
//        }
//        return null;
//    }

//    @Override
//    public BookingManagementClerkDTO updateBookingManagementClerkAccount(String bookingManagementClerkId, BookingManagementClerk bookingManagementClerk) {
//
//        Optional<BookingManagementClerk> optionalBookingManagementClerk = bookingManagementClerkRepository.findById(bookingManagementClerkId);
//        if (optionalBookingManagementClerk.isPresent()) {
//            BookingManagementClerk bookingManagementClerkObject = optionalBookingManagementClerk.get();
//            bookingManagementClerkObject.getUserAccount().setName(bookingManagementClerk.getUserAccount().getName());
//            bookingManagementClerkObject.getUserAccount().setAddress(bookingManagementClerk.getUserAccount().getAddress());
//            bookingManagementClerkObject.getUserAccount().setContactNo(bookingManagementClerk.getUserAccount().getContactNo());
//            bookingManagementClerkObject.getUserAccount().setEmail(bookingManagementClerk.getUserAccount().getEmail());
//
//
//            userAccountRepository.save(bookingManagementClerkObject.getUserAccount());
//            return new BookingManagementClerkDTO(bookingManagementClerkRepository.save(bookingManagementClerkObject));
//        }
//        return null;
//    }
//
//    @Override
//    public VehicleDriverManagementClerkDTO updateVehicleDiverManagementClerkAccount(String vehicleDriverManagementId, VehicleDriverManagementClerk vehicleDriverManagementClerk) {
//
//        Optional<VehicleDriverManagementClerk> optionalVehicleDriverManagementClerk = vehicleDriverManagementClerkRepository.findById(vehicleDriverManagementId);
//        if (optionalVehicleDriverManagementClerk.isPresent()) {
//            VehicleDriverManagementClerk vehicleDriverManagementClerkObject = optionalVehicleDriverManagementClerk.get();
//            vehicleDriverManagementClerkObject.getUserAccount().setName(vehicleDriverManagementClerk.getUserAccount().getName());
//            vehicleDriverManagementClerkObject.getUserAccount().setAddress(vehicleDriverManagementClerk.getUserAccount().getAddress());
//            vehicleDriverManagementClerkObject.getUserAccount().setContactNo(vehicleDriverManagementClerk.getUserAccount().getContactNo());
//            vehicleDriverManagementClerkObject.getUserAccount().setEmail(vehicleDriverManagementClerk.getUserAccount().getEmail());
//
//
//            userAccountRepository.save(vehicleDriverManagementClerkObject.getUserAccount());
//            return new VehicleDriverManagementClerkDTO(vehicleDriverManagementClerkRepository.save(vehicleDriverManagementClerkObject));
//        }
//
//        return null;
//    }
//
//    @Override
//    public UserAccountDTO updateGeneralManagerUserAccount(String employeeID, UserAccount userAccount) {
//        Optional<UserAccount> optionalUserAccount = userAccountRepository.findById(employeeID);
//        if (optionalUserAccount.isPresent()) {
//            UserAccount userAccountObj = optionalUserAccount.get();
//            userAccountObj.setName(userAccount.getName());
//            userAccountObj.setAddress(userAccount.getAddress());
//            userAccountObj.setContactNo(userAccount.getContactNo());
//            userAccountObj.setEmail(userAccount.getEmail());
//
//            return new UserAccountDTO(userAccountRepository.save(userAccountObj));
//        }
//
//        return null;
//    }
//
//    @Override
//    public SecurityOfficerDTO updateSecurityOfficerAccount(String securityOfficerId, SecurityOfficer securityOfficer) {
//
//        Optional<SecurityOfficer> optionalSecurityOfficer = securityOfficerRepository.findById(securityOfficerId);
//            if (optionalSecurityOfficer.isPresent()) {
//            SecurityOfficer securityOfficerObject = optionalSecurityOfficer.get();
//            securityOfficerObject.getUserAccount().setName(securityOfficer.getUserAccount().getName());
//            securityOfficerObject.getUserAccount().setAddress(securityOfficer.getUserAccount().getAddress());
//            securityOfficerObject.getUserAccount().setContactNo(securityOfficer.getUserAccount().getContactNo());
//            securityOfficerObject.getUserAccount().setEmail(securityOfficer.getUserAccount().getEmail());
//
//
//            userAccountRepository.save(securityOfficerObject.getUserAccount());
//            return new SecurityOfficerDTO(securityOfficerRepository.save(securityOfficerObject));
//        }
//            return null;
//    }


//    @Override
//    public List<VehicleAccidentDTO> getVehicleAccidents() {
//        List<VehicleAccident> vehicleAccidents = vehicleAccidentRepository.findAll();
//        List<VehicleAccidentDTO> vehicleAccidentDTOS = new ArrayList<>();
//        for (VehicleAccident vehicleAccident : vehicleAccidents) {
//            vehicleAccidentDTOS.add(new VehicleAccidentDTO(vehicleAccident));
//        }
//        return vehicleAccidentDTOS;
//    }

}
