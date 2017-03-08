package nl.h6.dwgcheck.webservice;

import nl.h6.dwgcheck.models.UserModel;
import nl.h6.dwgcheck.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserWebService {
    private UserService userService;

    public UserWebService(UserService userService){
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<String> getUser(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity createUser(@RequestBody UserModel userModel){
        return userService.createUser(userModel);
    }

    @PutMapping()
    public ResponseEntity putUser(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity deleteUser(){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
