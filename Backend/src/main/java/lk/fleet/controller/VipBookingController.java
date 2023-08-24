package lk.fleet.controller;

import lk.fleet.dto.SpecialBookingDTO;
import lk.fleet.dto.VipBookingDTO;
import lk.fleet.entity.SpecialBooking;
import lk.fleet.entity.UserAccount;
import lk.fleet.entity.VipBooking;
import lk.fleet.service.SpecialBookingService;
import lk.fleet.service.UserAccountService;
import lk.fleet.service.VipBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "vipBooking")
public class VipBookingController {

    @Autowired
    private VipBookingService vipBookingService;

    @PostMapping(value = "/addVipBooking")
    public ResponseEntity addVipBooking(@RequestBody VipBooking vipBooking) {
        return ResponseEntity.ok(vipBookingService.addVipBooking(vipBooking));
    }

    @GetMapping(value = "/getVipBooking")
    public List<VipBookingDTO> getVipBooking() {
        return vipBookingService.getVipBooking();
    }

    @PutMapping(value = "/updateVipBooking/{VipBookingId}")
    public ResponseEntity updateVipBooking(@PathVariable String VipBookingId, @RequestBody VipBooking vipBooking) {
        return ResponseEntity.ok(vipBookingService.updateVipBooking(VipBookingId, vipBooking));
    }

    @DeleteMapping(value = "/deleteVipBooking/{vipBookingId}")
    public ResponseEntity deleteVipBooking(@PathVariable String vipBookingId) {
        return ResponseEntity.ok(vipBookingService.deleteVipBooking(vipBookingId));
    }

    @GetMapping(value = "/getVipBookingByVipBookingId/{vipBookingId}")
    public ResponseEntity getVipBookingByVipBookingId(@PathVariable String vipBookingId) {
        return ResponseEntity.ok(vipBookingService.getVipBookingByVipBookingId(vipBookingId));
    }

    @GetMapping(value = "/getVipMember/{vipMemberId}")
    public ResponseEntity getVipMember(@PathVariable String vipMemberId) {
        return ResponseEntity.ok(vipBookingService.getVipMember(vipMemberId));
    }
}
