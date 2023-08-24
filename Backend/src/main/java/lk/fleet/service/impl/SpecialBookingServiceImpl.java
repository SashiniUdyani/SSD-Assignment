package lk.fleet.service.impl;

import lk.fleet.dto.BookingDTO;
import lk.fleet.dto.DriverDTO;
import lk.fleet.dto.SpecialBookingDTO;
import lk.fleet.dto.VehicleDTO;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Driver;
import lk.fleet.entity.SpecialBooking;
import lk.fleet.repository.BookingRepository;
import lk.fleet.repository.SpecialBookingRepository;
import lk.fleet.service.SpecialBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SpecialBookingServiceImpl implements SpecialBookingService {

    @Autowired
    private SpecialBookingRepository specialBookingRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public SpecialBookingDTO addSpecialBooking(SpecialBooking specialBooking) {
        specialBooking.getBooking().setBookingId("B" + specialBooking.getBooking().getBookingDateTime().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss")));
        specialBooking.setSpecialBookingId((specialBooking.getBooking().getBookingId()));
        bookingRepository.save(specialBooking.getBooking());
        return new SpecialBookingDTO(specialBookingRepository.save(specialBooking), new BookingDTO(specialBooking.getBooking()));
    }


    @Override
    public SpecialBookingDTO updateSpecialBooking(String specialBookingId, SpecialBooking specialBooking) {

        Optional<SpecialBooking> optionalSpecialBooking = specialBookingRepository.findById(specialBookingId);
        if (optionalSpecialBooking.isPresent()) {
            SpecialBooking specialBookingObj = optionalSpecialBooking.get();

            specialBookingObj.getBooking().setBookingDateTime(specialBooking.getBooking().getBookingDateTime());
            specialBookingObj.getBooking().setBookingStatus(specialBooking.getBooking().isBookingStatus());
            specialBookingObj.getBooking().setDestination(specialBooking.getBooking().getDestination());
            specialBookingObj.setDescription(specialBooking.getDescription());
            specialBookingObj.setNoOfPassengers(specialBooking.getNoOfPassengers());
            specialBookingObj.setApprovedFuelAmount(specialBooking.getApprovedFuelAmount());

            bookingRepository.save(specialBookingObj.getBooking());
            return new SpecialBookingDTO(specialBookingRepository.save(specialBookingObj));
        }
        return null;
    }


    @Override
    public boolean deleteSpecialBooking(String specialBookingId) {
        specialBookingRepository.deleteById(specialBookingId);
        bookingRepository.deleteById(specialBookingId);
        return true;
    }

    @Override
    public List<SpecialBookingDTO> getSpecialBooking() {
        List<SpecialBookingDTO> specialBookingDTOS = new ArrayList<>();
        List<SpecialBooking> specialBookings = specialBookingRepository.findAll();
        for (SpecialBooking specialBooking : specialBookings) {
            SpecialBookingDTO specialBookingDTO = new SpecialBookingDTO(specialBooking);
            specialBookingDTO.setDriver(new DriverDTO(specialBooking.getBooking().getShift().getDriverVehicle().getDriver()));

            specialBookingDTO.setVehicle(new VehicleDTO(specialBooking.getBooking().getShift().getDriverVehicle().getVehicle()));

            specialBookingDTO.setBooking(new BookingDTO(specialBooking.getBooking()));
            specialBookingDTOS.add(specialBookingDTO);
        }
        return specialBookingDTOS;
    }

    @Override
    public List<SpecialBookingDTO> getSpecialBookingBySpecialBookingId(String specialBookingId) {
        SpecialBooking specialBookingByID = specialBookingRepository.getSpecialBookingBySpecialBookingId(specialBookingId);
        List<SpecialBookingDTO> specialBookingDTOS = new ArrayList<>();
        SpecialBookingDTO specialBookingDTO = new SpecialBookingDTO(specialBookingByID);
        specialBookingDTO.setDriver(new DriverDTO(specialBookingByID.getBooking().getShift().getDriverVehicle().getDriver()));

        specialBookingDTO.setVehicle(new VehicleDTO(specialBookingByID.getBooking().getShift().getDriverVehicle().getVehicle()));

        specialBookingDTO.setBooking(new BookingDTO(specialBookingByID.getBooking()));
        specialBookingDTOS.add(specialBookingDTO);
        return specialBookingDTOS;
    }


}
