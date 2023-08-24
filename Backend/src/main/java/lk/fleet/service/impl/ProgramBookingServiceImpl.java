package lk.fleet.service.impl;


import lk.fleet.dto.*;
import lk.fleet.entity.ProgramBooking;
import lk.fleet.entity.TVProgram;
import lk.fleet.entity.VipBooking;
import lk.fleet.entity.VipMember;
import lk.fleet.repository.BookingRepository;
import lk.fleet.repository.ProgramBookingRepository;
import lk.fleet.repository.TVProgramRepository;
import lk.fleet.service.ProgramBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class ProgramBookingServiceImpl implements ProgramBookingService {

    @Autowired
    private ProgramBookingRepository programBookingRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private TVProgramRepository tvProgramRepository;

    @Override
    public ProgramBookingDTO addProgramBooking(ProgramBooking programBooking) {
        programBooking.getBooking().setBookingId("B" + programBooking.getBooking().getBookingDateTime().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss")));
        programBooking.setProgramBookingId((programBooking.getBooking().getBookingId()));
        bookingRepository.save(programBooking.getBooking());
        return new ProgramBookingDTO(programBookingRepository.save(programBooking), new BookingDTO(programBooking.getBooking()));
    }


    @Override
    public ProgramBookingDTO updateProgramBooking(String programBookingId, ProgramBooking programBooking) {

        Optional<ProgramBooking> optionalProgramBooking = programBookingRepository.findById(programBookingId);
        if (optionalProgramBooking.isPresent()) {
            ProgramBooking programBookingObj = optionalProgramBooking.get();

            programBookingObj.getBooking().setBookingDateTime(programBooking.getBooking().getBookingDateTime());
            programBookingObj.getBooking().setBookingStatus(programBooking.getBooking().isBookingStatus());
            programBookingObj.getBooking().setDestination(programBooking.getBooking().getDestination());

            bookingRepository.save(programBookingObj.getBooking());
            return new ProgramBookingDTO(programBookingRepository.save(programBookingObj));
        }
        return null;
    }


    @Override
    public boolean deleteProgramBooking(String programBookingId) {
        programBookingRepository.deleteById(programBookingId);
        bookingRepository.deleteById(programBookingId);
        return true;
    }

    @Override
    public List<ProgramBookingDTO> getProgramBooking() {
        List<ProgramBookingDTO> programBookingDTOS = new ArrayList<>();
        List<ProgramBooking> programBookings = programBookingRepository.findAll();
        for (ProgramBooking programBooking : programBookings) {
            ProgramBookingDTO programBookingDTO = new ProgramBookingDTO(programBooking);
            programBookingDTO.setDriver(new DriverDTO(programBooking.getBooking().getShift().getDriverVehicle().getDriver()));

            programBookingDTO.setVehicle(new VehicleDTO(programBooking.getBooking().getShift().getDriverVehicle().getVehicle()));
            programBookingDTO.setTvProgram(new TVProgramDTO(programBooking.getTvProgram()));
            programBookingDTO.setBooking(new BookingDTO(programBooking.getBooking()));
            programBookingDTOS.add(programBookingDTO);
        }
        return programBookingDTOS;
    }

    @Override
    public List<ProgramBookingDTO> getProgramBookingByProgramBookingId(String programBookingId) {
        ProgramBooking programBookingByID = programBookingRepository.getProgramBookingByProgramBookingId(programBookingId);
        List<ProgramBookingDTO> programBookingDTOS = new ArrayList<>();
        ProgramBookingDTO programBookingDTO = new ProgramBookingDTO(programBookingByID);
        programBookingDTO.setDriver(new DriverDTO(programBookingByID.getBooking().getShift().getDriverVehicle().getDriver()));

        programBookingDTO.setVehicle(new VehicleDTO(programBookingByID.getBooking().getShift().getDriverVehicle().getVehicle()));
        programBookingDTO.setTvProgram(new TVProgramDTO(programBookingByID.getTvProgram()));
        programBookingDTO.setBooking(new BookingDTO(programBookingByID.getBooking()));
        programBookingDTOS.add(programBookingDTO);
        return programBookingDTOS;
    }

    @Override
    public List<TVProgramDTO> getTvProgram(String programID) {
        List<TVProgram> tvPrograms = tvProgramRepository.getTvProgramByProgramID(programID);
        List<TVProgramDTO> tvProgramDTOS = new ArrayList<>();

        for (TVProgram tvProgram : tvPrograms) {
            tvProgramDTOS.add(new TVProgramDTO(tvProgram));
        }
        return tvProgramDTOS;
    }


}
