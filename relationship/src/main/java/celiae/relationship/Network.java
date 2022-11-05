package celiae.relationship;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import lombok.Data;

@Entity
@Data
public class Network {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String gender;
    private String education;
    private Date birthday;
    private String email;
    private String phone;
    private String qq;
    private String wechat;
    private String address;
    // private String relation_type;
    private String relation;
    private Boolean isFamily;

}
