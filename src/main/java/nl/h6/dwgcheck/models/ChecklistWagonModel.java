package nl.h6.dwgcheck.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "checklist_wagon")
public class ChecklistWagonModel {

    @Id @GeneratedValue
    private int id;
    private String wagonId;
    private boolean arrived;
    private String cardColor;
    private boolean validInspectionDate;
    private boolean goodShape;
    private boolean closed;
    private boolean isLeaking;
    private boolean hasDamage;
    private String note;

    @ManyToOne @JsonIgnore
    private ChecklistModel checklistModel;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWagonId() {
        return wagonId;
    }

    public void setWagonId(String wagonId) {
        this.wagonId = wagonId;
    }

    public boolean isArrived() {
        return arrived;
    }

    public void setArrived(boolean arrived) {
        this.arrived = arrived;
    }

    public String getCardColor() {
        return cardColor;
    }

    public void setCardColor(String cardColor) {
        this.cardColor = cardColor;
    }

    public boolean isValidInspectionDate() {
        return validInspectionDate;
    }

    public void setValidInspectionDate(boolean validInspectionDate) {
        this.validInspectionDate = validInspectionDate;
    }

    public boolean isGoodShape() {
        return goodShape;
    }

    public void setGoodShape(boolean goodShape) {
        this.goodShape = goodShape;
    }

    public boolean isClosed() {
        return closed;
    }

    public void setClosed(boolean closed) {
        this.closed = closed;
    }

    public boolean isLeaking() {
        return isLeaking;
    }

    public void setLeaking(boolean leaking) {
        isLeaking = leaking;
    }

    public boolean isHasDamage() {
        return hasDamage;
    }

    public void setHasDamage(boolean hasDamage) {
        this.hasDamage = hasDamage;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public ChecklistModel getChecklistModel() {
        return checklistModel;
    }

    public void setChecklistModel(ChecklistModel checklistModel) {
        this.checklistModel = checklistModel;
    }
}
