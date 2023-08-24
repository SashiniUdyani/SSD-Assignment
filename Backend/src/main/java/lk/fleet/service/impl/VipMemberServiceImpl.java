package lk.fleet.service.impl;


import lk.fleet.dto.VehicleDTO;
import lk.fleet.dto.VipMemberDTO;
import lk.fleet.entity.Vehicle;
import lk.fleet.entity.VipMember;
import lk.fleet.repository.VipMemberRepository;
import lk.fleet.service.VipMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VipMemberServiceImpl implements VipMemberService {

    @Autowired
    private VipMemberRepository vipMemberRepository;

    @Override
    public VipMemberDTO addVipmember(VipMember vipMember) {
//        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
//        vehicle.setVehicleId("Veh" + dateTime);
        return new VipMemberDTO(vipMemberRepository.save(vipMember));
    }


    @Override
    public VipMemberDTO addVipMember(VipMember vipMember){
        return new VipMemberDTO(vipMemberRepository.save(vipMember));
    }

    @Override
    public VipMemberDTO updateVipMember(String vipMemberId, VipMember vipMember) {
        Optional<VipMember> optionalVipMember = vipMemberRepository.findById(vipMemberId);
        if (optionalVipMember.isPresent()) {
            VipMember vipMemberObj = optionalVipMember.get();
            vipMemberObj.setVipMemberId(vipMember.getVipMemberId());
            vipMemberObj.setFirstName(vipMember.getFirstName());
            vipMemberObj.setLastName(vipMember.getLastName());
            vipMemberObj.setContactNumber(vipMember.getContactNumber());
            vipMemberObj.setAddress(vipMember.getAddress());
            vipMemberObj.setPosition(vipMember.getPosition());

            return new VipMemberDTO(vipMemberRepository.save(vipMemberObj));
        }
        return null;
    }
    @Override
    public List<VipMemberDTO> getAllVipMembers() {
        List<VipMember> vipMembers = vipMemberRepository.findAll();
        List<VipMemberDTO> vipMemberDTOS = new ArrayList<>();
        for (VipMember vipMember : vipMembers) {
            vipMemberDTOS.add(new VipMemberDTO(vipMember));
        }
        return vipMemberDTOS;
    }
    @Override
    public boolean deleteVipMember(String vipMemberId) {
        vipMemberRepository.deleteById(vipMemberId);
        return true;
    }
    @Override
    public List<VipMemberDTO> getVipMemberByNumber(String vipMemberNo){
        VipMember getVipMemberByNumber = vipMemberRepository.getVipMemberByNumber(vipMemberNo);
        List<VipMemberDTO> vipMemberDTOS=new ArrayList<>();
        if ( getVipMemberByNumber!= null) {
            vipMemberDTOS.add(new VipMemberDTO(getVipMemberByNumber));
        }

        return vipMemberDTOS;
    }

}
