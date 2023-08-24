package lk.fleet.service;

import lk.fleet.dto.ProgramBookingDTO;
import lk.fleet.dto.TVProgramDTO;
import lk.fleet.dto.VipBookingDTO;
import lk.fleet.dto.VipMemberDTO;
import lk.fleet.entity.ProgramBooking;
import lk.fleet.entity.VipBooking;

import java.util.List;

public interface ProgramBookingService {

    ProgramBookingDTO addProgramBooking(ProgramBooking programBooking);
    boolean deleteProgramBooking(String programBookingId);

    List<ProgramBookingDTO> getProgramBooking();


    ProgramBookingDTO updateProgramBooking(String programBookingId, ProgramBooking programBooking);

    List<ProgramBookingDTO> getProgramBookingByProgramBookingId(String programBookingId);

    List<TVProgramDTO> getTvProgram(String programId);
}
