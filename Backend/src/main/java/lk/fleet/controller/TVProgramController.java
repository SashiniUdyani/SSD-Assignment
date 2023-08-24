package lk.fleet.controller;


import lk.fleet.dto.TVProgramDTO;
import lk.fleet.entity.TVProgram;
import lk.fleet.service.TVProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "tvProgram")
public class TVProgramController {

    @Autowired
    private TVProgramService tvProgramService;

    @PostMapping(value = "/addTVProgram")
    public ResponseEntity addTVProgram(@RequestBody TVProgram tvProgram) {
        return ResponseEntity.ok(tvProgramService.addTVProgram(tvProgram));
    }

    @PutMapping(value = "/updateTVProgram/{programID}")
    public ResponseEntity updateTVProgram(@PathVariable String programID, @RequestBody TVProgram tvProgram) {
        return ResponseEntity.ok(tvProgramService.updateTVProgram(programID, tvProgram));
    }

    @DeleteMapping(value = "/deleteTVProgram/{programID}")
    public ResponseEntity deleteTVProgram(@PathVariable String programID) {
        return ResponseEntity.ok(tvProgramService.deleteTVProgram(programID));
    }

    @GetMapping(value = "/getTvProgram")
    public List<TVProgramDTO> getTvProgram() {
        return tvProgramService.getTvProgram();
    }


}
