package lk.fleet.repository;

import lk.fleet.entity.TVProgram;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TVProgramRepository extends JpaRepository<TVProgram, String> {

    List<TVProgram> getTvProgramByProgramID(String programID);
}
