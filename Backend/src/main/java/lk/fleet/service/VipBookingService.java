package lk.fleet.service;

import lk.fleet.dto.SpecialBookingDTO;
import lk.fleet.dto.VipBookingDTO;
import lk.fleet.dto.VipMemberDTO;
import lk.fleet.entity.SpecialBooking;
import lk.fleet.entity.VipBooking;

import java.util.List;

public interface VipBookingService {

    VipBookingDTO addVipBooking(VipBooking vipBooking);
    boolean deleteVipBooking(String vipBookingId);

    List<VipBookingDTO> getVipBooking();

    VipBookingDTO updateVipBooking(String vipBookingId, VipBooking vipBooking);

    List<VipBookingDTO> getVipBookingByVipBookingId(String vipBookingId);

    List<VipMemberDTO> getVipMember(String vipMemberId);
}
