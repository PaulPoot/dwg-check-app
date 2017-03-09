package nl.h6.dwgcheck.webservice;

import nl.h6.dwgcheck.models.ChecklistModel;
import nl.h6.dwgcheck.services.ChecklistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/checklist")
public class ChecklistWebService {

    private ChecklistService checklistService;

    public ChecklistWebService(ChecklistService checklistService){
        this.checklistService = checklistService;
    }

    @GetMapping
    public List<ChecklistModel> getChecklists(){
        return checklistService.getChecklists();
    }
    @PostMapping
    public ResponseEntity createChecklist(@RequestBody ChecklistModel checklistModel){
        return checklistService.createUser(checklistModel);
    }
}
