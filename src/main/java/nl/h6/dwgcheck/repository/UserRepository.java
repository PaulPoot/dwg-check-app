package nl.h6.dwgcheck.repository;

import nl.h6.dwgcheck.models.UserModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserModel, Integer> {

    UserModel findUserByUsername(String username);
}
