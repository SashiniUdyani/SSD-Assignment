package lk.fleet.service.impl;

import lk.fleet.dto.*;
// import lk.fleet.entity.Booking;
// import lk.fleet.entity.Driver;
// import lk.fleet.entity.Token;
// import lk.fleet.entity.UserAccount;
import lk.fleet.entity.*;
import lk.fleet.repository.*;
import lk.fleet.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private BookingApplicationRepository bookingApplicationRepository;
    @Autowired
    private DriverVehicleRepository driverVehicleRepository;
    @Autowired
    private ShiftRepository shiftRepository;
    @Autowired
    private ApplicationRepository applicationRepository;
    @Autowired
    private OverTimeRepository overTimeRepository;


//    @Override
//    public Booking addBooking(Booking booking) {
//        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
//        booking.setBookingId("B" + dateTime);
//        booking.setBookingManagementClerk(booking.getBookingManagementClerk());
//        return bookingRepository.save(booking);
//    }

    @Override
    public BookingApplicationDTO addBookingApplication(BookingApplication bookingApplication) {
        bookingApplication.getBooking().setBookingId("B" + bookingApplication.getBooking().getBookingDateTime().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss")));
        bookingApplication.setBookingApplicationId((bookingApplication.getBooking().getBookingId()));
        bookingRepository.save(bookingApplication.getBooking());
        return new BookingApplicationDTO(bookingApplicationRepository.save(bookingApplication), new BookingDTO(bookingApplication.getBooking()));
    }


    @Override
    public BookingApplicationDTO updateBookingApplication(String bookingApplicationId, BookingApplication bookingApplication) {

        Optional<BookingApplication> optionalBookingApplication = bookingApplicationRepository.findById(bookingApplicationId);
        if (optionalBookingApplication.isPresent()) {
            BookingApplication bookingApplicationObj = optionalBookingApplication.get();

            bookingApplicationObj.getBooking().setBookingDateTime(bookingApplication.getBooking().getBookingDateTime());
            bookingApplicationObj.getBooking().setBookingStatus(bookingApplication.getBooking().isBookingStatus());
            bookingApplicationObj.getBooking().setDestination(bookingApplication.getBooking().getDestination());

            bookingRepository.save(bookingApplicationObj.getBooking());
            return new BookingApplicationDTO(bookingApplicationRepository.save(bookingApplicationObj));
        }
        return null;
    }


//    @Override
//    public boolean deleteBookingApplication(String bookingApplicationId) {
//        bookingApplicationRepository.deleteById(bookingApplicationId);
//        bookingRepository.deleteById(bookingApplicationId);
//        return true;
//    }

    @Override
    public List<BookingApplicationDTO> getBookingApplication() {
        List<BookingApplicationDTO> bookingApplicationDTOS = new ArrayList<>();
        List<BookingApplication> bookingApplications = bookingApplicationRepository.findAll();
        for (BookingApplication bookingApplication : bookingApplications) {
            BookingApplicationDTO bookingApplicationDTO = new BookingApplicationDTO(bookingApplication);

            bookingApplicationDTO.setDriver(new DriverDTO(bookingApplication.getBooking().getShift().getDriverVehicle().getDriver()));

            bookingApplicationDTO.setVehicle(new VehicleDTO(bookingApplication.getBooking().getShift().getDriverVehicle().getVehicle()));
            bookingApplicationDTO.setApplication(new ApplicationDTO(bookingApplication.getApplication()));
            bookingApplicationDTO.setBooking(new BookingDTO(bookingApplication.getBooking()));
            bookingApplicationDTOS.add(bookingApplicationDTO);
        }
        return bookingApplicationDTOS;
    }

    @Override
    public List<BookingApplicationDTO> getBookingApplicationByBookingApplicationId(String bookingApplicationId) {
        BookingApplication bookingApplicationByID = bookingApplicationRepository.getBookingApplicationByBookingApplicationId(bookingApplicationId);
        List<BookingApplicationDTO> bookingApplicationDTOS = new ArrayList<>();
        BookingApplicationDTO bookingApplicationDTO = new BookingApplicationDTO(bookingApplicationByID);
        bookingApplicationDTO.setDriver(new DriverDTO(bookingApplicationByID.getBooking().getShift().getDriverVehicle().getDriver()));

        bookingApplicationDTO.setVehicle(new VehicleDTO(bookingApplicationByID.getBooking().getShift().getDriverVehicle().getVehicle()));
        bookingApplicationDTO.setApplication(new ApplicationDTO(bookingApplicationByID.getApplication()));

        bookingApplicationDTO.setBooking(new BookingDTO(bookingApplicationByID.getBooking()));
        bookingApplicationDTOS.add(bookingApplicationDTO);
        return bookingApplicationDTOS;
    }

    @Override
    public List<ApplicationDTO> getApplication() {
        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        List<Application> applications = applicationRepository.findAll();
        for (Application application : applications) {
            if (application.getBookingApplication() == null) {
                ApplicationDTO applicationDTO = new ApplicationDTO(application);

                applicationDTO.setPassengerApplication(new PassengerApplicationDTO(application.getPassengerApplication()));
                applicationDTOS.add(applicationDTO);
            }
        }

        return applicationDTOS;
    }


    @Override
    public List<ApplicationDTO> getApplicationById(String applicationID) {
        Application applicationByID = applicationRepository.getAapplicationByID(applicationID);

        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        ApplicationDTO applicationDTO = new ApplicationDTO(applicationByID);
        applicationDTO.setPassengerApplication(new PassengerApplicationDTO(applicationByID.getPassengerApplication()));
        applicationDTOS.add(applicationDTO);
        return applicationDTOS;
    }


    @Override
    public BookingDTO updateBooking(String bookingId, Booking booking) {

        Optional<Booking> optionalBooking = bookingRepository.findById(bookingId);
        if (optionalBooking.isPresent()) {
            Booking bookingObject = optionalBooking.get();

            bookingObject.setBookingDateTime(booking.getBookingDateTime());
            bookingObject.setBookingStatus(booking.isBookingStatus());
            bookingObject.setDestination(booking.getDestination());

            return new BookingDTO(bookingRepository.save(bookingObject));
        }
        return null;
    }


    @Override
    public boolean deleteBooking(String bookingId) {
        bookingRepository.deleteById(bookingId);
        return true;
    }

    //securityOfficer
    @Override
    public List<BookingDTO> getAllBookings() {
        List<Booking> bookings = bookingRepository.findAll();
        List<BookingDTO> bookingDTOS = new ArrayList<>();
        for (Booking booking : bookings) {
            if (booking.getToken() == null) {
                BookingDTO bookingDTO = new BookingDTO(booking);
                bookingDTO.setVehicle(new VehicleDTO(booking.getShift().getDriverVehicle().getVehicle()));
                Driver driver = booking.getShift().getDriverVehicle().getDriver();
                bookingDTO.setDriver(new DriverDTO(driver, new UserAccountDTO(driver.getUserAccount())));
                bookingDTO.setToken(new TokenDTO(booking.getToken()));
                bookingDTOS.add(bookingDTO);
            }
        }
        return bookingDTOS;
    }

    public List<BookingDTO> getBookings() {
        List<BookingDTO> bookingDTOS = new ArrayList<>();
        List<Booking> bookings = bookingRepository.findAll();
        for (Booking booking : bookings) {
            BookingDTO bookingDTO = new BookingDTO(booking);
            bookingDTO.setDriver(new DriverDTO(booking.getShift().getDriverVehicle().getDriver()));

            bookingDTO.setVehicle(new VehicleDTO(booking.getShift().getDriverVehicle().getVehicle()));

            bookingDTOS.add(bookingDTO);
        }
        return bookingDTOS;
    }


    @Override
    public List<BookingDTO> getBookingsByBookingId(String bookingId) {
        Booking bookingByID = bookingRepository.getBookingsByBookingId(bookingId);
        List<BookingDTO> bookingDTOS = new ArrayList<>();
        bookingDTOS.add(new BookingDTO(bookingByID));
        return bookingDTOS;
    }

    //securityOfficer
    @Override
    public List<BookingDTO> getBookingByDestination(String destination) {
        Booking bookingByDestination = bookingRepository.getBookingByDestination(destination);
        List<BookingDTO> bookingDTOS = new ArrayList<>();
        BookingDTO bookingDTO = new BookingDTO(bookingByDestination);
        bookingDTO.setVehicle(new VehicleDTO(bookingByDestination.getShift().getDriverVehicle().getVehicle()));
        bookingDTO.setDriver(new DriverDTO(bookingByDestination.getShift().getDriverVehicle().getDriver(), new UserAccountDTO(bookingByDestination.getShift().getDriverVehicle().getDriver().getUserAccount())));
        bookingDTOS.add(bookingDTO);
        return bookingDTOS;
    }


    @Override
    public List<DriverVehicleDTO> getDriverVehicles(String driverId) {
        List<DriverVehicle> driverVehicles = driverVehicleRepository.getDriverVehicleByDriverDriverID(driverId);
        List<DriverVehicleDTO> driverVehicleDTOS = new ArrayList<>();
        for (DriverVehicle driverVehicle : driverVehicles) {
            DriverVehicleDTO driverVehicleDTO = new DriverVehicleDTO(driverVehicle);
            driverVehicleDTO.setVehicle(new VehicleDTO(driverVehicle.getVehicle()));
            driverVehicleDTO.setDriver(new DriverDTO(driverVehicle.getDriver(), new UserAccountDTO(driverVehicle.getDriver().getUserAccount())));
            driverVehicleDTOS.add(driverVehicleDTO);
        }
        return driverVehicleDTOS;
    }

    @Override
    public List<DriverVehicleDTO> getAllDriverVehicles() {
        List<DriverVehicleDTO> driverVehicleDTOS = new ArrayList<>();
        List<DriverVehicle> driverVehicles = driverVehicleRepository.findAll();
        for (DriverVehicle driverVehicle : driverVehicles) {
            DriverVehicleDTO driverVehicleDTO = new DriverVehicleDTO(driverVehicle);
            driverVehicleDTO.setVehicle(new VehicleDTO(driverVehicle.getVehicle()));
            driverVehicleDTO.setDriver(new DriverDTO(driverVehicle.getDriver(), new UserAccountDTO(driverVehicle.getDriver().getUserAccount())));
            driverVehicleDTOS.add(driverVehicleDTO);
        }
        return driverVehicleDTOS;
    }


    @Override
    public ShiftDTO addDriverShift(Shift shift) {
        shift.setShiftId("SH" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss")));
        if (shift.getOverTime().getOverTimeID() == 0) {
            shift.setOverTime(null);
        }
        return new ShiftDTO(shiftRepository.save(shift));
    }

    @Override
    public ShiftDTO updateDriverShift(String shiftId, Shift shift) {
        Optional<Shift> optionalShift = shiftRepository.findById(shiftId);
        if (optionalShift.isPresent()) {
            Shift shiftObj = optionalShift.get();
            shiftObj.setDriverVehicle(shift.getDriverVehicle());
            shiftObj.setShiftDate(shift.getShiftDate());
            shiftObj.setAttendance(shift.isAttendance());
            shiftObj.setStartingTime(shift.getStartingTime());
            shiftObj.setEndingTime(shift.getEndingTime());
            shiftObj.setBookingManagementClerk(shift.getBookingManagementClerk());
            shiftObj.setOverTime(shift.getOverTime());
            return new ShiftDTO(shiftRepository.save(shiftObj));
        }
        return null;
    }

    @Override
    public List<ShiftDTO> getDriverShifts() {
        List<Shift> driverShifts = shiftRepository.getDriverShifts();
        List<ShiftDTO> shiftDTOS = new ArrayList<>();
        for (Shift driverShift : driverShifts) {
            ShiftDTO shiftDTO = new ShiftDTO(driverShift);
            DriverVehicleDTO driverVehicleDTO = new DriverVehicleDTO(driverShift.getDriverVehicle());
            driverVehicleDTO.setVehicle(new VehicleDTO(driverShift.getDriverVehicle().getVehicle()));
            driverVehicleDTO.setDriver(new DriverDTO(driverShift.getDriverVehicle().getDriver(), new UserAccountDTO(driverShift.getDriverVehicle().getDriver().getUserAccount())));
            shiftDTO.setDriverVehicle(driverVehicleDTO);
            shiftDTOS.add(shiftDTO);
        }
        return shiftDTOS;
    }

    @Override
    public List<ShiftDTO> getDriverShiftsByDriverId(String driverId) {
        List<Shift> driverShiftsByDriverId = shiftRepository.getDriverShiftsByDriverId(driverId);
        List<ShiftDTO> shiftDTOS = new ArrayList<>();
        for (Shift driverShift : driverShiftsByDriverId) {
            ShiftDTO shiftDTO = new ShiftDTO(driverShift);
            DriverVehicleDTO driverVehicleDTO = new DriverVehicleDTO(driverShift.getDriverVehicle());
            driverVehicleDTO.setVehicle(new VehicleDTO(driverShift.getDriverVehicle().getVehicle()));
            driverVehicleDTO.setDriver(new DriverDTO(driverShift.getDriverVehicle().getDriver(), new UserAccountDTO(driverShift.getDriverVehicle().getDriver().getUserAccount())));
            shiftDTO.setDriverVehicle(driverVehicleDTO);
            shiftDTOS.add(shiftDTO);
        }
        return shiftDTOS;
    }

    @Override
    public List<ShiftDTO> getDriverShiftsByVehicleType(String vehicleType) {
        List<Shift> driverShiftsByVehicleType = shiftRepository.getDriverShiftsByVehicleType(vehicleType);
        List<ShiftDTO> shiftDTOS = new ArrayList<>();
        for (Shift driverShift : driverShiftsByVehicleType) {
            ShiftDTO shiftDTO = new ShiftDTO(driverShift);
            DriverVehicleDTO driverVehicleDTO = new DriverVehicleDTO(driverShift.getDriverVehicle());
            driverVehicleDTO.setVehicle(new VehicleDTO(driverShift.getDriverVehicle().getVehicle()));
            driverVehicleDTO.setDriver(new DriverDTO(driverShift.getDriverVehicle().getDriver(), new UserAccountDTO(driverShift.getDriverVehicle().getDriver().getUserAccount())));
            shiftDTO.setDriverVehicle(driverVehicleDTO);
            shiftDTOS.add(shiftDTO);
        }
        return shiftDTOS;
    }

    @Override
    public boolean deleteDriverShift(String shiftId) {
        shiftRepository.deleteById(shiftId);
        return true;
    }

    @Override
    public List<OverTimeDTO> getOt() {

        List<OverTimeDTO> overTimeDTOS = new ArrayList<>();
        List<OverTime> overTimes = overTimeRepository.findAll();
        for (OverTime overTime : overTimes) {
            OverTimeDTO overTimeDTO = new OverTimeDTO(overTime);
            overTimeDTO.setDriver(new DriverDTO(overTime.getDriver()));
            overTimeDTOS.add(overTimeDTO);
        }

        return overTimeDTOS;
    }

    @Override
    public OverTimeDTO approveOt(Long overTimeID, boolean approval) {
        Optional<OverTime> optionalOverTime = overTimeRepository.findById(overTimeID);
        if (optionalOverTime.isPresent()) {
            OverTime overTime = optionalOverTime.get();
            overTime.setApproval(approval);
            return new OverTimeDTO(overTimeRepository.save(overTime));
        }

        return null;
    }

}
