package lk.fleet.repository;

import lk.fleet.entity.Vehicle;
import lk.fleet.entity.VipMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VipMemberRepository extends JpaRepository<VipMember,String> {


    List<VipMember> getVipMemberByVipMemberId(String vipMemberId);


    @Query(value = "from VipMember where vipMemberId=?1" )
    VipMember getVipMemberByNumber(String vipMemberNo);

//    VipMember getVipMemberByVipMemberId(String vipMemberId);

}
