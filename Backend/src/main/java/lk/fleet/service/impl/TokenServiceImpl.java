package lk.fleet.service.impl;


import lk.fleet.dto.*;
import lk.fleet.entity.Booking;
import lk.fleet.entity.Delivery;
import lk.fleet.entity.DriverVehicle;
import lk.fleet.entity.Token;
import lk.fleet.repository.TokenRepository;
import lk.fleet.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TokenServiceImpl implements TokenService {

    @Autowired
    private TokenRepository tokenRepository;

    @Override
    public TokenDTO addToken(Token token) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        token.setTokenID("TK" + dateTime);
//        token.getTokenID();
        return new TokenDTO(tokenRepository.save(token));
    }

    @Override
    public TokenDTO updateToken(String tokenID, Token token) {
        Optional<Token> optionalToken = tokenRepository.findById(tokenID);
        if (optionalToken.isPresent()) {
            Token tokenObj = optionalToken.get();
            tokenObj.setTokenID(token.getTokenID());
            tokenObj.setDepartureDateTime(token.getDepartureDateTime());
            tokenObj.setArrivalDateTime(token.getArrivalDateTime());
            tokenObj.setTransportStatus(token.isTransportStatus());
            return new TokenDTO(tokenRepository.save(tokenObj));
        }
        return null;
    }

    @Override
    public boolean deleteToken(String tokenID) {
        tokenRepository.deleteById(tokenID);
        return true;
    }

    @Override
    public List<TokenDTO> getAllTokens() {
        List<Token> tokens = tokenRepository.getNotCompletedTokens();
        List<TokenDTO> tokenDTOS = new ArrayList<>();
        for (Token token : tokens) {
            tokenDTOS.add(new TokenDTO(token, new MeterDetailDTO(token.getMeterDetail())));
        }
        return tokenDTOS;
    }

    public List<TokenDTO> getCompletedTokens() {
        List<Token> tokens = tokenRepository.getAllCompletedTokens();
        List<TokenDTO> tokenDTOS = new ArrayList<>();
        for (Token token : tokens) {
            TokenDTO tokenDTO = new TokenDTO(token, new MeterDetailDTO(token.getMeterDetail()));
            DriverVehicle driverVehicle = token.getBooking().getShift().getDriverVehicle();
            tokenDTO.setDriver(new DriverDTO(driverVehicle.getDriver(), new UserAccountDTO(driverVehicle.getDriver().getUserAccount())));
            tokenDTO.setVehicle(new VehicleDTO(driverVehicle.getVehicle()));
            tokenDTO.setBooking(new BookingDTO(token.getBooking()));
            tokenDTOS.add(tokenDTO);
        }
        return tokenDTOS;
    }

    @Override
    public List<TokenDTO> getTokenByID(String tokenID) {
        Token TokenByID = tokenRepository.getTokenByID(tokenID);
        List<TokenDTO> tokenDTOS = new ArrayList<>();
        TokenDTO tokenDTO = new TokenDTO(TokenByID);
        DriverVehicle driverVehicle = TokenByID.getBooking().getShift().getDriverVehicle();
        tokenDTO.setDriver(new DriverDTO(driverVehicle.getDriver(), new UserAccountDTO(driverVehicle.getDriver().getUserAccount())));
        tokenDTO.setVehicle(new VehicleDTO(driverVehicle.getVehicle()));
        tokenDTO.setBooking(new BookingDTO(TokenByID.getBooking()));
        tokenDTO.setMeterDetail(new MeterDetailDTO(TokenByID.getMeterDetail()));
        tokenDTOS.add(tokenDTO);
        return tokenDTOS;
    }

    @Override
    public List<TokenDTO> getTokenByDestination(String destination) {
        Token TokenByID = tokenRepository.getTokenByDestination(destination);
        List<TokenDTO> tokenDTOS = new ArrayList<>();
        TokenDTO tokenDTO = new TokenDTO(TokenByID);
        DriverVehicle driverVehicle = TokenByID.getBooking().getShift().getDriverVehicle();
        tokenDTO.setDriver(new DriverDTO(driverVehicle.getDriver(), new UserAccountDTO(driverVehicle.getDriver().getUserAccount())));
        tokenDTO.setVehicle(new VehicleDTO(driverVehicle.getVehicle()));
        tokenDTO.setBooking(new BookingDTO(TokenByID.getBooking()));
        tokenDTO.setMeterDetail(new MeterDetailDTO(TokenByID.getMeterDetail()));
        tokenDTOS.add(tokenDTO);
        return tokenDTOS;
    }

    @Override
    public List<TokenDTO> getTokenByDriverID(String driverID) {
        List<Token> tokens = tokenRepository.getTokenByDriverID(driverID);
        List<TokenDTO> tokenDTOS = new ArrayList<>();
        for (Token token : tokens) {
            TokenDTO tokenDTO = new TokenDTO(token);
            DriverVehicle driverVehicle = token.getBooking().getShift().getDriverVehicle();
            tokenDTO.setDriver(new DriverDTO(driverVehicle.getDriver()));
            tokenDTO.setVehicle(new VehicleDTO(driverVehicle.getVehicle()));
            tokenDTO.setBooking(new BookingDTO(token.getBooking()));
            tokenDTO.setMeterDetail(new MeterDetailDTO(token.getMeterDetail()));
            tokenDTOS.add(tokenDTO);
        }
        return tokenDTOS;
    }

}
