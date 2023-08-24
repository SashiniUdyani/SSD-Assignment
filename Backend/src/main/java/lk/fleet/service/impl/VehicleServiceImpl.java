package lk.fleet.service.impl;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.repository.DriverRepository;
import lk.fleet.repository.UserAccountRepository;
import lk.fleet.repository.VehicleRepository;
import lk.fleet.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;
    @Autowired
    private DriverRepository driverRepository;
    @Autowired
    private UserAccountRepository userAccountRepository;

    @Override
    public VehicleDTO addVehicle(Vehicle vehicle) {
//        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
//        vehicle.setVehicleId("Veh" + dateTime);
        return new VehicleDTO(vehicleRepository.save(vehicle));
    }

    @Override
    public VehicleDTO updateVehicle(String vehicleID, Vehicle vehicle) {
        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(vehicleID);
        if (optionalVehicle.isPresent()) {
            Vehicle vehicleObj = optionalVehicle.get();
            vehicleObj.setVehicleId(vehicle.getVehicleId());
            vehicleObj.setVehicleType(vehicle.getVehicleType());
            vehicleObj.setModel(vehicle.getModel());
            vehicleObj.setNoOfSeats(vehicle.getNoOfSeats());
            vehicleObj.setInitialMeter(vehicle.getInitialMeter());
            vehicleObj.setServiceMeter(vehicle.getServiceMeter());
            vehicleObj.setFuelType(vehicle.getFuelType());
            vehicleObj.setOccupied(vehicle.isOccupied());
            vehicleObj.setFuelConsumption(vehicle.getFuelConsumption());
            vehicleObj.setFuelBalance(vehicle.getFuelBalance());
            return new VehicleDTO(vehicleRepository.save(vehicleObj));
        }
        return null;
    }

    //SecurityOfficer
    @Override
    public VehicleDTO updateVehicleAvailability(String vehicleID, Vehicle vehicle) {
        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(vehicleID);
        if (optionalVehicle.isPresent()) {
            Vehicle vehicleObj = optionalVehicle.get();
            vehicleObj.setOccupied(vehicle.isOccupied());
            return new VehicleDTO(vehicleRepository.save(vehicleObj));
        }
        return null;
    }

    @Override
    public boolean deleteVehicle(String vehicleID) {
        vehicleRepository.deleteById(vehicleID);
        return true;
    }

    //View all vehicles
    @Override
    public List<VehicleDTO> getAllVehicles() {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        List<VehicleDTO> vehicleDTOS = new ArrayList<>();
        for (Vehicle vehicle : vehicles) {
            vehicleDTOS.add(new VehicleDTO(vehicle));
        }
        return vehicleDTOS;
    }

    //Fuel Update
    @Override
    public VehicleDTO fualUpdate(String vehicleID, double fuelBalance) {
        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(vehicleID);
        if (optionalVehicle.isPresent()) {
            Vehicle vehicleObj = optionalVehicle.get();
            vehicleObj.setFuelBalance(fuelBalance);
            return new VehicleDTO(vehicleRepository.save(vehicleObj));
        }
        return null;
    }

    //Search by vehicle number
    @Override
    public List<VehicleDTO> getVehicleByNumber(String vehicleNumber) {
        Vehicle getVehicleByNumber = vehicleRepository.getVehicleByNumber(vehicleNumber);
        List<VehicleDTO> vehicleDTOS = new ArrayList<>();
        if (getVehicleByNumber != null) {
            vehicleDTOS.add(new VehicleDTO(getVehicleByNumber));
        }
        return vehicleDTOS;
    }

    //get drivers
    @Override
    public List<UserAccountDTO> getDriverRequest() {

        List<UserAccount> userAccounts = vehicleRepository.getDriverRequest();
        List<UserAccountDTO> userAccountDTOS = new ArrayList<>();

        for (UserAccount userAccount : userAccounts) {
            userAccountDTOS.add(new UserAccountDTO(userAccount));
        }

        return userAccountDTOS;

    }
//
    @Override
    public UserAccountDTO approveDriver(String driverID, boolean approval) {
        Optional<UserAccount> optionalUserAccount = userAccountRepository.findById(driverID);
        if (optionalUserAccount.isPresent()) {
//            VehicleDTO vehicleDTO=new VehicleDTO(optionalVehicle);
            UserAccount userAccount = optionalUserAccount.get();
            userAccount.setApproved(approval);
            return new UserAccountDTO(userAccountRepository.save(userAccount));
        }

        return null;
    }
//    @Override
//    public VehicleDTO approveDriver(String driverID, boolean approval) {
//        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(driverID);
//        if (optionalVehicle.isPresent()) {
//            Vehicle driverObj = optionalVehicle.get();
//            driverObj.setApproved(approval);
//            return new VehicleDTO(vehicleRepository.save(driverObj));
//        }
//
//        return null;
//    }
//    @Override
//    public UserAccountDTO approveDriver(String employeeID, boolean approval) {
//        Optional<UserAccount> optionalUserAccount = userAccountRepository.findById(employeeID);
//        if (optionalUserAccount.isPresent()) {
//            UserAccount userAccountObj = optionalUserAccount.get();
//            userAccountObj.setApproved(approval);
//            return new UserAccountDTO(userAccountRepository.save(userAccountObj));
//        }
//        return null;
//    }
}
