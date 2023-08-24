package lk.fleet.controller;

import lk.fleet.entity.Token;
import lk.fleet.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "token")
public class TokenController {

    @Autowired
    private TokenService tokenService;

    @PostMapping(value = "/addToken")
    public ResponseEntity addToken(@RequestBody Token token) {
        return ResponseEntity.ok(tokenService.addToken(token));
    }

    @PutMapping(value = "/updateToken/{tokenID}")
    public ResponseEntity updateToken (@PathVariable String tokenID, @RequestBody Token token) {
        return ResponseEntity.ok(tokenService.updateToken(tokenID, token));
    }

    @DeleteMapping(value = "/deleteToken/{tokenID}")
    public ResponseEntity deleteToken (@PathVariable String tokenID) {
        return ResponseEntity.ok(tokenService.deleteToken(tokenID));
    }

    @GetMapping(value = "/getAllTokens")
    public ResponseEntity getAllTokens() {
        return ResponseEntity.ok(tokenService.getAllTokens());
    }

    @GetMapping(value = "getAllCompletedTokens")
    public ResponseEntity getCompletedTokens() {
        return ResponseEntity.ok(tokenService.getCompletedTokens());
    }

    @GetMapping(value = "/getTokenByID/{tokenID}")
    public ResponseEntity getTokenByID(@PathVariable String tokenID) {
        return ResponseEntity.ok(tokenService.getTokenByID(tokenID));
    }

    @GetMapping(value = "/getTokenByDestination/{destination}")
    public ResponseEntity getTokenByDestination(@PathVariable String destination) {
        return ResponseEntity.ok(tokenService.getTokenByDestination(destination));
    }

    @GetMapping(value = "/getTokenByDriverID/{driverID}")
    public ResponseEntity getTokenByDriverID(@PathVariable String driverID) {
        return ResponseEntity.ok(tokenService.getTokenByDriverID(driverID));
    }

}
