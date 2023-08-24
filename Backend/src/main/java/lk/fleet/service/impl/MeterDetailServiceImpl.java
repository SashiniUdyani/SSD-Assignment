package lk.fleet.service.impl;


import lk.fleet.dto.MeterDetailDTO;
import lk.fleet.dto.TokenDTO;
import lk.fleet.entity.MeterDetail;
import lk.fleet.entity.Token;
import lk.fleet.repository.MeterDetailRepository;
import lk.fleet.service.MeterDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
public class MeterDetailServiceImpl implements MeterDetailService {

    @Autowired
    private MeterDetailRepository meterDetailRepository;

    @Override
    public MeterDetailDTO addMeterDetail(MeterDetail meterDetail) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        meterDetail.setMeterId("MTR" + dateTime);
        meterDetail.getMeterId();
        return new MeterDetailDTO(meterDetailRepository.save(meterDetail));
    }

    @Override
    public MeterDetailDTO updateMeterDetail(String meterId, MeterDetail meterDetail) {
        Optional <MeterDetail> optionalMeterDetail = meterDetailRepository.findById(meterId);
        if (optionalMeterDetail.isPresent()) {
            MeterDetail meterDetailObj = optionalMeterDetail.get();
            meterDetailObj.setMeterId(meterDetail.getMeterId());
            meterDetailObj.setOutMeter(meterDetail.getOutMeter());
            meterDetailObj.setInMeter(meterDetail.getInMeter());
            meterDetailObj.setMileage(meterDetail.getMileage());
            return new MeterDetailDTO(meterDetailRepository.save(meterDetailObj));
        }
        return null;
    }

    @Override
    public boolean deleteMeterDetail(String meterId) {
        meterDetailRepository.deleteById(meterId);
        return true;
    }


}
