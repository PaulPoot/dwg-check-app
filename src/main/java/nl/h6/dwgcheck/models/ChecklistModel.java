package nl.h6.dwgcheck.models;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "checklist")
public class ChecklistModel {

    @Id @GeneratedValue
    private int id;
    private String trainId;
    private Instant dateTime;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "checklistModel")
    private List<ChecklistWagonModel> wagons;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTrainId() {
        return trainId;
    }

    public void setTrainId(String trainId) {
        this.trainId = trainId;
    }

    public Instant getDateTime() {
        return dateTime;
    }

    public void setDateTime(Instant dateTime) {
        this.dateTime = dateTime;
    }

    public List<ChecklistWagonModel> getWagons() {
        return wagons;
    }

    public void setWagons(List<ChecklistWagonModel> wagons) {
        this.wagons = wagons;
    }

    @PrePersist
    public void updateChecklistWagons() {
        wagons.forEach(w -> w.setChecklistModel(this));
    }
}
