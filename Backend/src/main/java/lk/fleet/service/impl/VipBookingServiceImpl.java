package lk.fleet.service.impl;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.repository.BookingRepository;
import lk.fleet.repository.SpecialBookingRepository;
import lk.fleet.repository.VipBookingRepository;
import lk.fleet.repository.VipMemberRepository;
import lk.fleet.service.VipBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VipBookingServiceImpl implements VipBookingService {

    @Autowired
    private VipBookingRepository vipBookingRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private VipMemberRepository vipMemberRepository;

    @Override
    public VipBookingDTO addVipBooking(VipBooking vipBooking) {
        vipBooking.getBooking().setBookingId("B" + vipBooking.getBooking().getBookingDateTime().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss")));
        vipBooking.setVipBookingId((vipBooking.getBooking().getBookingId()));
        bookingRepository.save(vipBooking.getBooking());
        return new VipBookingDTO(vipBookingRepository.save(vipBooking), new BookingDTO(vipBooking.getBooking()));
    }


    @Override
    public VipBookingDTO updateVipBooking(String vipBookingId, VipBooking vipBooking) {

        Optional<VipBooking> optionalVipBooking = vipBookingRepository.findById(vipBookingId);
        if (optionalVipBooking.isPresent()) {
            VipBooking vipBookingObj = optionalVipBooking.get();

            vipBookingObj.getBooking().setBookingDateTime(vipBooking.getBooking().getBookingDateTime());
            vipBookingObj.getBooking().setBookingStatus(vipBooking.getBooking().isBookingStatus());
            vipBookingObj.getBooking().setDestination(vipBooking.getBooking().getDestination());
            vipBookingObj.setPurpose(vipBooking.getPurpose());
            vipBookingObj.setTimePeriod(vipBooking.getTimePeriod());
            vipBookingObj.setApprovedFuelAmount(vipBooking.getApprovedFuelAmount());
            vipBookingObj.setApproval(vipBooking.isApproval());

            bookingRepository.save(vipBookingObj.getBooking());
            return new VipBookingDTO(vipBookingRepository.save(vipBookingObj));
        }
        return null;
    }


    @Override
    public boolean deleteVipBooking(String vipBookingId) {
        vipBookingRepository.deleteById(vipBookingId);
        bookingRepository.deleteById(vipBookingId);
        return true;
    }

    @Override
    public List<VipBookingDTO> getVipBooking() {
        List<VipBookingDTO> vipBookingDTOS = new ArrayList<>();
        List<VipBooking> vipBookings = vipBookingRepository.findAll();
        for (VipBooking vipBooking : vipBookings) {
            VipBookingDTO vipBookingDTO = new VipBookingDTO(vipBooking);
            vipBookingDTO.setDriver(new DriverDTO(vipBooking.getBooking().getShift().getDriverVehicle().getDriver()));

            vipBookingDTO.setVehicle(new VehicleDTO(vipBooking.getBooking().getShift().getDriverVehicle().getVehicle()));
            vipBookingDTO.setVipMember(new VipMemberDTO(vipBooking.getVipMember()));
            vipBookingDTO.setBooking(new BookingDTO(vipBooking.getBooking()));
            vipBookingDTOS.add(vipBookingDTO);
        }
        return vipBookingDTOS;
    }

    @Override
    public List<VipBookingDTO> getVipBookingByVipBookingId(String vipBookingId) {
        VipBooking vipBookingByID = vipBookingRepository.getVipBookingByVipBookingId(vipBookingId);
        List<VipBookingDTO> vipBookingDTOS = new ArrayList<>();
        VipBookingDTO vipBookingDTO = new VipBookingDTO(vipBookingByID);
        vipBookingDTO.setDriver(new DriverDTO(vipBookingByID.getBooking().getShift().getDriverVehicle().getDriver()));

        vipBookingDTO.setVehicle(new VehicleDTO(vipBookingByID.getBooking().getShift().getDriverVehicle().getVehicle()));
        vipBookingDTO.setVipMember(new VipMemberDTO(vipBookingByID.getVipMember()));

        vipBookingDTO.setBooking(new BookingDTO(vipBookingByID.getBooking()));
        vipBookingDTOS.add(vipBookingDTO);
        return vipBookingDTOS;
    }

    @Override
    public List<VipMemberDTO> getVipMember(String vipMemberId) {
        List<VipMember> vipMembers = vipMemberRepository.getVipMemberByVipMemberId(vipMemberId);
        List<VipMemberDTO> vipMemberDTOS = new ArrayList<>();

        for (VipMember vipMember : vipMembers) {
            vipMemberDTOS.add(new VipMemberDTO(vipMember));
        }
        return vipMemberDTOS;
    }


}
