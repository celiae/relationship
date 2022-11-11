package celiae.relationship.family;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FamilyController {

    @Autowired
    private FamilyRepository repository;

    @GetMapping("/family/length")
    int length() {
        return repository.findAll().size();
    }

    @GetMapping("/family")
    List<Family> all() {
        return repository.findAll();
    }

    @PostMapping("/family")
    Family newFamily(@RequestBody Family newFamily) {
        return repository.save(newFamily);
    }

    @GetMapping("/family/{id}")
    Family one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new FamilyNotFoundException(id));
    }

    @PutMapping("/family/{id}")
    Family replaceFamily(@RequestBody Family newFamily, @PathVariable Long id) {

        return repository.findById(id)
                .map(family -> {
                    family.setFirstname(newFamily.getFirstname());
                    family.setLastname(newFamily.getLastname());
                    family.setGender(newFamily.getGender());
                    family.setEducation(newFamily.getEducation());
                    family.setBirthday(newFamily.getBirthday());
                    family.setEmail(newFamily.getEmail());
                    family.setPhone(newFamily.getPhone());
                    family.setQq(newFamily.getQq());
                    family.setWechat(newFamily.getWechat());
                    family.setAddress(newFamily.getAddress());
                    family.setRelation(newFamily.getRelation());
                    return repository.save(family);
                })
                .orElseGet(() -> {
                    newFamily.setId(id);
                    return repository.save(newFamily);
                });
    }

    @DeleteMapping("/family/{id}")
    void deleteFamily(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
