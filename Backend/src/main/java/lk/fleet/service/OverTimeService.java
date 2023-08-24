package lk.fleet.service;

import lk.fleet.dto.OverTimeDTO;
import lk.fleet.entity.OverTime;

import java.util.List;

public interface OverTimeService {
    Object addOT(OverTime overTime);

    OverTimeDTO updateOT(long overTimeID, OverTime overTime);

    boolean deleteOT(long overTimeID);

    List<OverTimeDTO> getOT();

    OverTimeDTO getOverTimeByID(String driverId);

    List<OverTimeDTO> getAllLastOverTimesbyDriverID(String driverId);
}
