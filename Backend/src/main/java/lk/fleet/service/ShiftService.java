package lk.fleet.service;

import lk.fleet.dto.ShiftDTO;
import lk.fleet.entity.Shift;

import java.util.List;

public interface ShiftService {
    ShiftDTO addShift(Shift shift);

    ShiftDTO updateShift(String shiftId, Shift shift);

    boolean deleteShift(String shiftId);

    Object getShift();

    ShiftDTO getShiftByDriverID(String driverId);

    ShiftDTO getDriverShiftsByDriverIdByCurrentDate(String driverId);

    ShiftDTO markAttendance(String driverID, boolean attendance);

    List<ShiftDTO> getAllShiftsbyDriverID(String driverId);
}
