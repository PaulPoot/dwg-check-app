package nl.h6.dwgcheck.repository;

import nl.h6.dwgcheck.models.UserModel;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Repository
public class UserRepository {

    private EntityManager entityManager;

    public UserRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Transactional
    public void persistUser(UserModel userModel) {
        entityManager.persist(userModel);
    }

    public boolean userExists(UserModel userModel) {
        return entityManager.createQuery("SELECT u FROM UserModel u WHERE u.username = :userName")
                .setParameter("userName", userModel.getUsername())
                .getResultList().size() == 1;
    }
}
