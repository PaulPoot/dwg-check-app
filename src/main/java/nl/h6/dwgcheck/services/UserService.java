package nl.h6.dwgcheck.services;

import nl.h6.dwgcheck.models.UserModel;
import nl.h6.dwgcheck.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ResponseEntity createUser(UserModel userModel) {
        if (userRepository.findUserByUsername(userModel.getUsername()) == null) {
            userRepository.save(userModel);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
