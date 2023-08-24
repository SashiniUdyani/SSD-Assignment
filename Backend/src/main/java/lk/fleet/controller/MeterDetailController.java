package lk.fleet.controller;

import lk.fleet.entity.MeterDetail;
import lk.fleet.service.MeterDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "meterDetail")
public class MeterDetailController {

    @Autowired
    private MeterDetailService meterDetailService;

    @PostMapping(value = "/addMeterDetail")
    public ResponseEntity addMeterDetail(@RequestBody MeterDetail meterDetail) {
        return ResponseEntity.ok(meterDetailService.addMeterDetail(meterDetail));
    }

    @PutMapping(value = "/updateMeterDetail/{meterId}")
    public ResponseEntity updateMeterDetail (@PathVariable String meterId, @RequestBody MeterDetail meterDetail) {
        return ResponseEntity.ok(meterDetailService.updateMeterDetail(meterId, meterDetail));
    }

    @DeleteMapping(value = "/deleteMeterDetail/{meterId}")
    public ResponseEntity deleteMeterDetail (@PathVariable String meterId) {
        return ResponseEntity.ok(meterDetailService.deleteMeterDetail(meterId));
    }


}
