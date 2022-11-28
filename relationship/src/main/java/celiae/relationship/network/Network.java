package celiae.relationship.network;

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
    private String first_name;
    private String last_name;
    private String gender;
    private String email;
    private Date birthday;
    private String phone;
    private String address;
    private String degree;
    private String qq;
    private String wechat;
    private String relation;
}
