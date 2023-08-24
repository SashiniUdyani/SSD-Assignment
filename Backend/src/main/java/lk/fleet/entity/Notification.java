package lk.fleet.entity;

import javax.persistence.*;

@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long notificationID;
    private String message;
    private boolean messageSeen;

    @OneToOne
    private UserAccount sentBy;

    @OneToOne
    private UserAccount receivedBy;

    public long getNotificationID() {
        return notificationID;
    }

    public void setNotificationID(long notificationID) {
        this.notificationID = notificationID;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isMessageSeen() {
        return messageSeen;
    }

    public void setMessageSeen(boolean messageSeen) {
        this.messageSeen = messageSeen;
    }

    public UserAccount getSentBy() {
        return sentBy;
    }

    public void setSentBy(UserAccount sentBy) {
        this.sentBy = sentBy;
    }

    public UserAccount getReceivedBy() {
        return receivedBy;
    }

    public void setReceivedBy(UserAccount receivedBy) {
        this.receivedBy = receivedBy;
    }
}
