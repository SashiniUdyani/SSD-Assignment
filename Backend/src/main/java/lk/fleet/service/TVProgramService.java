package lk.fleet.service;

import lk.fleet.dto.TVProgramDTO;
import lk.fleet.entity.TVProgram;

import java.util.List;

public interface TVProgramService {
    TVProgramDTO addTVProgram(TVProgram tvProgram);

    TVProgramDTO updateTVProgram(String programID, TVProgram tvProgram);

    boolean deleteTVProgram(String programID);

    List<TVProgramDTO> getTvProgram();
}
