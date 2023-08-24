package lk.fleet.service.impl;


import lk.fleet.dto.OverTimeDTO;
import lk.fleet.dto.ShiftDTO;
import lk.fleet.dto.UserAccountDTO;
import lk.fleet.entity.OverTime;
import lk.fleet.entity.Shift;
import lk.fleet.entity.UserAccount;
import lk.fleet.repository.OverTimeRepository;
import lk.fleet.repository.ShiftRepository;
import lk.fleet.service.ShiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ShiftServiceImpl implements ShiftService {

    @Autowired
    private ShiftRepository shiftRepository;

    @Override
    public ShiftDTO addShift(Shift shift) {
        return new ShiftDTO(shiftRepository.save(shift));
    }

    @Override
    public ShiftDTO updateShift(String shiftId, Shift shift) {
        Optional<Shift> optionalShift = shiftRepository.findById(shiftId);
        if (optionalShift.isPresent()) {
            Shift shiftObject = optionalShift.get();
            shiftObject.setAttendance(shift.isAttendance());
            shiftObject.setDriverVehicle(shift.getDriverVehicle());

            return new ShiftDTO(shiftRepository.save(shiftObject));
        }
        return null;
    }

    @Override
    public boolean deleteShift(String shiftId) {
        shiftRepository.deleteById(shiftId);
        return true;
    }

    @Override
    public Object getShift() {
        return null;
    }

    @Override
    public ShiftDTO getShiftByDriverID(String driverId) {
        List<Shift> shiftByDriverID = shiftRepository.getDriverShiftsByDriverId(driverId);
        if (shiftByDriverID.size() > 0) {
            Shift shift = shiftByDriverID.get(0);
            return new ShiftDTO(shift);
        }
        return null;
    }

    //Get the shift
    @Override
    public ShiftDTO getDriverShiftsByDriverIdByCurrentDate(String driverId) {
        List<Shift> shiftByDriverID = shiftRepository.getDriverShiftsByDriverIdByCurrentDate(driverId);
        if (shiftByDriverID.size() > 0) {
            Shift shift = shiftByDriverID.get(0);
            return new ShiftDTO(shift);
        }
        return null;
    }

    //mark attendance
    @Override
    public ShiftDTO markAttendance(String driverID, boolean attendance) {
        Optional<Shift> shiftOptional = shiftRepository.findById(driverID);
        if (shiftOptional.isPresent()) {
            Shift shift = shiftOptional.get();
            shift.setAttendance(attendance);
            return new ShiftDTO(shiftRepository.save(shift));
        }
        return null;
    }

    //Driver Attendaance
    @Override
    public List<ShiftDTO> getAllShiftsbyDriverID(String driverId) {
        List<Shift> shifts = shiftRepository.getAllShiftsbyDriverID(driverId);
        List<ShiftDTO> shiftDTOs = new ArrayList<>();

        int count = 0;
        if (shifts.size() < 30) {
            count = shifts.size();
        } else {
            count = 30;
        }

        for (int i = 0; i < count; i++) {
            shiftDTOs.add(new ShiftDTO(shifts.get(i)));
        }
        return shiftDTOs;
    }
}
