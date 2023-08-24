package lk.fleet.service.impl;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.repository.*;
import lk.fleet.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ApplicationServiceimpl implements ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;
    @Autowired
    private PassengerPassengerApplicationRepository passengerPassengerApplicationRepository;

    @Override
    public ApplicationDTO updateApplication(String aplicationID, Application application) { //update application
        Optional<Application> applicationOptional = applicationRepository.findById(aplicationID);
        if (applicationOptional.isPresent()) {
            Application applicationobj = applicationOptional.get();
            applicationobj.setApproval(application.isApproval());
            applicationobj.setArrivaleDate(application.getArrivaleDate());
            applicationobj.setDepatureDate(application.getDepatureDate());
            applicationobj.setDestination(application.getDestination());
            applicationobj.setReason(application.getReason());
            applicationobj.setVehicleType(application.getVehicleType());

            return new ApplicationDTO(applicationRepository.save(applicationobj));
        }
        return null;
    }

    @Override
    public boolean deleteApplication(String aplicationID) { //delete application
        applicationRepository.deleteById(aplicationID);
        return true;
    }

    //Transport Manager - Start
    @Override
    public List<ApplicationDTO> getApprovedApplications(String type) {
        List<Application> applicationList = applicationRepository.getApplicationsByApprovalAndTypeOrderByDepatureDateDesc(true, type);
        return setApprovedApplications(applicationList, type);
    }

    @Override
    public List<ApplicationDTO> getApprovedApplicationsByDestination(String destination, String type) {
        List<Application> applicationList = applicationRepository.getApplicationsByApprovalAndDestinationAndTypeOrderByDepatureDateDesc(true, destination, type);
        return setApprovedApplications(applicationList, type);
    }

    @Override
    public List<ApplicationDTO> getApprovedApplicationsByPassenger(String passengerId) {
        List<PassengerPassengerApplication> allByPassengerPassengerId = passengerPassengerApplicationRepository.getAllByPassengerPassengerId(passengerId);
        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        for (PassengerPassengerApplication passengerPassengerApplication : allByPassengerPassengerId) {
            ApplicationDTO applicationDTO = new ApplicationDTO(passengerPassengerApplication.getPassengerApplication().getApplication());
            applicationDTO.setPassengerApplication(new PassengerApplicationDTO(passengerPassengerApplication.getPassengerApplication()));
            applicationDTOS.add(applicationDTO);
        }

        return applicationDTOS;
    }

    private List<ApplicationDTO> setApprovedApplications(List<Application> applicationList, String type) {
        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        for (Application application : applicationList) {
            ApplicationDTO applicationDTO = new ApplicationDTO(application);
            if (application.getBookingApplication() != null) {
                applicationDTO.setVehicle(new VehicleDTO(application.getBookingApplication().getBooking().getShift().getDriverVehicle().getVehicle()));
                applicationDTO.setDriver(new DriverDTO(application.getBookingApplication().getBooking().getShift().getDriverVehicle().getDriver()));
            }
            if (type.equals("P")) {
                if (application.getPassengerApplication() != null) {
                    setPassengerPassengerApplications(applicationDTO, application);
                    applicationDTOS.add(applicationDTO);
                }
            } else if (type.equals("I")) {

            } else if (type.equals("PI")) {
                if (application.getPassengerApplication() != null) {
                    setPassengerPassengerApplications(applicationDTO, application);
                    applicationDTOS.add(applicationDTO);
                }
            }
        }
        return applicationDTOS;
    }

    private void setPassengerPassengerApplications(ApplicationDTO applicationDTO, Application application) {
        PassengerApplicationDTO passengerApplicationDTO = new PassengerApplicationDTO();
        List<PassengerPassengerApplicationDTO> passengerPassengerApplicationDTOS = new ArrayList<>();
        for (PassengerPassengerApplication passengerPassengerApplication : application.getPassengerApplication().getPassengerPassengerApplications()) {
            PassengerPassengerApplicationDTO passengerPassengerApplicationDTO = new PassengerPassengerApplicationDTO(passengerPassengerApplication);
            passengerPassengerApplicationDTO.setPassenger(passengerPassengerApplication.getPassenger());
            passengerPassengerApplicationDTOS.add(passengerPassengerApplicationDTO);
        }
        passengerApplicationDTO.setPassengerApplicationID(application.getPassengerApplication().getPassengerApplicationID());
        passengerApplicationDTO.setPassengerPassengerApplications(passengerPassengerApplicationDTOS);
        applicationDTO.setPassengerApplication(passengerApplicationDTO);
    }

    @Override
    public PassengerPassengerApplicationDTO changePassengerApplication(String oldAppId, String newAppId, String passengerId) {
        passengerPassengerApplicationRepository.deletePassengerFromApplication(oldAppId, passengerId);

        PassengerPassengerApplication passengerPassengerApplication = new PassengerPassengerApplication();
        Passenger passenger = new Passenger();
        passenger.setPassengerId(passengerId);
        passengerPassengerApplication.setPassenger(passenger);
        PassengerApplication passengerApplication = new PassengerApplication();
        passengerApplication.setPassengerApplicationID(newAppId);
        passengerPassengerApplication.setPassengerApplication(passengerApplication);
        passengerPassengerApplication.setPassengerPassengerApplicationId(new PassengerPassengerApplicationPK(newAppId, passengerId));
        passengerPassengerApplication = passengerPassengerApplicationRepository.save(passengerPassengerApplication);
        PassengerPassengerApplicationDTO passengerPassengerApplicationDTO = new PassengerPassengerApplicationDTO(passengerPassengerApplication);
        passengerPassengerApplicationDTO.setPassenger(passengerPassengerApplication.getPassenger());
        return passengerPassengerApplicationDTO;
    }
    //Transport Manager - End

//    public List<PassengerApplicationDTO> getdto() {
//      //  List<Application> applicationDTOS = applicationRepository.findAll();
//        List<PassengerApplication> passengerApplications=passengerApplicationRepository.findAll();
//        List<ApplicationDTO> applicationDTOS1=new ArrayList<>();
////        for(Application application: applicationDTOS){
////            applicationDTOS1.add(new ApplicationDTO(application));
////        }
//        for(PassengerApplication passengerApplication: passengerApplications){
//            applicationDTOS1.add(new ApplicationDTO(passengerApplication));
//        }
//
//        return applicationDTOS1;
//    }
}
