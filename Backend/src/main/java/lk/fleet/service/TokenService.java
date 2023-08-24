package lk.fleet.service;

import lk.fleet.dto.TokenDTO;
import lk.fleet.entity.Token;

import java.util.List;

public interface TokenService {

    TokenDTO addToken (Token token);

    TokenDTO updateToken (String tokenID, Token token);

    boolean deleteToken (String tokenID);

    List<TokenDTO> getAllTokens();

    List<TokenDTO> getCompletedTokens();

    List<TokenDTO> getTokenByID(String tokenID);

    List<TokenDTO> getTokenByDestination(String destination);

    List<TokenDTO> getTokenByDriverID(String driverID);

}
