package nl.h6.dwgcheck.services;

import nl.h6.dwgcheck.models.ChecklistModel;
import nl.h6.dwgcheck.repository.ChecklistRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChecklistService {
    private ChecklistRepository checklistRepository;

    public ChecklistService(ChecklistRepository checklistRepository){
        this.checklistRepository = checklistRepository;
    }

    public ChecklistModel getChecklist(int id){
        return checklistRepository.findOne(id);
    }

    public List<ChecklistModel> getChecklists(){
        return checklistRepository.findAll();
    }

    public ResponseEntity createUser(ChecklistModel checklistModel){
        checklistRepository.save(checklistModel);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
