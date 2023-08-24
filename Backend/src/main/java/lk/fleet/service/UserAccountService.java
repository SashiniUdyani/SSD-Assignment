package lk.fleet.service;


import lk.fleet.dto.BookingManagementClerkDTO;
import lk.fleet.dto.TransportManagerDTO;
import lk.fleet.dto.UserAccountDTO;
import lk.fleet.dto.VehicleDriverManagementClerkDTO;

import lk.fleet.dto.*;

import lk.fleet.entity.*;

import java.util.List;

public interface UserAccountService {

    UserAccountDTO addGeneralManagerUserAccount(UserAccount userAccount);

    TransportManagerDTO addTransportManagerUserAccount(TransportManager transportManager);

    BookingManagementClerkDTO addBookingManagementClerkUserAccount(BookingManagementClerk bookingManagementClerk);

    SecurityOfficerDTO addSecurityOfficerUserAccount(SecurityOfficer securityOfficer);

    VehicleDriverManagementClerkDTO addVehicleDiverManagementClerkUserAccount(VehicleDriverManagementClerk vehicleDriverManagementClerk);

    Object addAccidentMaintenanceManagerUserAccount(AccidentMaintenanceManager accidentMaintenanceManager);

    UserAccountDTO updateUserAccount(String employeeID, UserAccount userAccount);

    UserAccountDTO login(UserAccount userAccount);

    List<UserAccountDTO> getUserAccounts();

    List<UserAccountDTO> getUserAccountsForApplicants();

    boolean deleteUserAccount(String employeeID);

    List<UserAccountDTO> getUserAccountByID(String employeeID);

    List<ApplicationDTO> getTransportApplication();

    List<PassengerPassengerApplicationDTO> getTransportRequests();

    UserAccountDTO approveUserAccount(String employeeID, boolean approval);

    ApplicationDTO approveTransport(String applicationID, boolean approval);

    List<ApplicationDTO> getTransportByID(String applicationID);

    List<ApplicationDTO> getAllTransports();

    Object getTransportReportWeekly(int weeks);

    List<ApplicationDTO> getTransportApplicationforReport();

//    List<PassengerApplicationDTO> getTransport();

    //UserAccountDTO updateGeneralManagerUserAccount(String employeeID, UserAccount userAccount);
    //TransportManagerDTO updateTransportManagerAccount(String transportManagerId, TransportManager transportManager);
    //BookingManagementClerkDTO updateBookingManagementClerkAccount(String bookingManagementClerkId, BookingManagementClerk bookingManagementClerk);//
    //VehicleDriverManagementClerkDTO updateVehicleDiverManagementClerkAccount(String vehicleDriverManagementId, VehicleDriverManagementClerk vehicleDriverManagementClerk);//
    //SecurityOfficerDTO updateSecurityOfficerAccount(String securityOfficerId, SecurityOfficer securityOfficer);
    //UserAccountDTO getAllUserAccounts(String accountType);
}
