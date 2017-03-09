package nl.h6.dwgcheck.repository;

import nl.h6.dwgcheck.models.ChecklistModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ChecklistRepository extends CrudRepository<ChecklistModel, Integer> {

    List<ChecklistModel> findAll();
}
