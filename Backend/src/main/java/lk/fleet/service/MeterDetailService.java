package lk.fleet.service;

import lk.fleet.dto.MeterDetailDTO;
import lk.fleet.entity.MeterDetail;

public interface MeterDetailService {

    MeterDetailDTO addMeterDetail (MeterDetail meterDetail);

    MeterDetailDTO updateMeterDetail (String meterId, MeterDetail meterDetail);

    boolean deleteMeterDetail (String meterId);

}