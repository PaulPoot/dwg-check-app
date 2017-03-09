package nl.h6.dwgcheck.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "checklist_wagon")
public class ChecklistWagonModel {

    @Id @GeneratedValue
    private int id;
    private String wagonId;

    @ManyToOne @JsonIgnore
    private ChecklistModel checklistModel;

    public String getWagonId() {
        return wagonId;
    }

    public void setWagonId(String wagonId) {
        this.wagonId = wagonId;
    }

    public ChecklistModel getChecklistModel() {
        return checklistModel;
    }

    public void setChecklistModel(ChecklistModel checklistModel) {
        this.checklistModel = checklistModel;
    }
}
