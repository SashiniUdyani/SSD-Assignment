package lk.fleet.service.impl;

import lk.fleet.dto.OverTimeDTO;
import lk.fleet.entity.OverTime;
import lk.fleet.repository.OverTimeRepository;
import lk.fleet.service.OverTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OverTimeServiceImpl implements OverTimeService {

    @Autowired
    private OverTimeRepository overTimeRepository;

    @Override
    public Object addOT(OverTime overTime) {
        return overTimeRepository.save(overTime);
    }

    @Override
    public OverTimeDTO updateOT(long overTimeID, OverTime overTime) {
        Optional<OverTime> optionalOverTime = overTimeRepository.findById(overTimeID);
        if (optionalOverTime.isPresent()) {
            OverTime overTime1 = optionalOverTime.get();
            overTime1.setOtDate(overTime.getOtDate());
            overTime1.setNoOfShifts(overTime.getNoOfShifts());
            overTime1.setStartTime(overTime.getStartTime());
            overTime1.setEndTime(overTime.getEndTime());
            overTime1.setApproval(overTime.isApproval());

            return new OverTimeDTO(overTimeRepository.save(overTime1));
        }
        return null;
    }

    @Override
    public boolean deleteOT(long overTimeID) {
        overTimeRepository.deleteById(overTimeID);
        return true;
    }

    @Override
    public List<OverTimeDTO> getOT() {
        List<OverTime> overTimes = overTimeRepository.getAllLastOverTimes();
        List<OverTimeDTO> overTimeDTOS = new ArrayList<>();

        int count = 0;
        if (overTimes.size() < 10) {
            count = overTimes.size();
        } else {
            count = 10;
        }

        for (int i = 0; i < count; i++) {
            overTimeDTOS.add(new OverTimeDTO(overTimes.get(i)));
        }

        return overTimeDTOS;
    }

    @Override
    public List<OverTimeDTO> getAllLastOverTimesbyDriverID(String driverId) {
        List<OverTime> overTimes = overTimeRepository.getAllLastOverTimesbyDriverID(driverId);
        List<OverTimeDTO> overTimeDTOS = new ArrayList<>();

        int count = 0;
        if (overTimes.size() < 7) {
            count = overTimes.size();
        } else {
            count = 7;
        }

        for (int i = 0; i < count; i++) {
            overTimeDTOS.add(new OverTimeDTO(overTimes.get(i)));
        }

        return overTimeDTOS;
    }

    @Override
    public OverTimeDTO getOverTimeByID(String driverId) {
        List<OverTime> lastOverTime = overTimeRepository.getLastOverTime(driverId);
        if (lastOverTime.size() > 0) {
            OverTime overTimeNow = lastOverTime.get(0);
            return new OverTimeDTO(overTimeNow);
        }
        return null;
    }

}
