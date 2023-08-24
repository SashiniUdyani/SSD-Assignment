package lk.fleet.dto;

import lk.fleet.entity.VipMember;

public class VipMemberDTO {

    private String vipMemberId;
    private String firstName;
    private String lastName;
    private String contactNumber;
    private String address;
    private String position;

    public VipMemberDTO(VipMember vipMember) {
        if (vipMember != null) {
            this.vipMemberId = vipMember.getVipMemberId();
            this.firstName = vipMember.getFirstName();
            this.lastName = vipMember.getLastName();
            this.contactNumber = vipMember.getContactNumber();
            this.address = vipMember.getAddress();
            this.position = vipMember.getPosition();
        }
    }

    public String getVipMemberId() {
        return vipMemberId;
    }

    public void setVipMemberId(String vipMemberId) {
        this.vipMemberId = vipMemberId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }


}
