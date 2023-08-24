package lk.fleet.repository;

import lk.fleet.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TokenRepository extends JpaRepository<Token,String> {

    @Query(value = "from Token where transportStatus=false")
    List<Token> getNotCompletedTokens();

    @Query(value = "from Token where transportStatus=true order by departureDateTime asc")
    List<Token> getAllCompletedTokens();

    @Query(value = "from Token where tokenID=?1")
    Token getTokenByID(String tokenID);

    @Query(value = "from Token where booking.destination=?1")
    Token getTokenByDestination(String destination);

    @Query(value = "from Token where booking.shift.driverVehicle.driver.driverID=?1")
    List <Token> getTokenByDriverID(String driverID);

}
