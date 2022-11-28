package celiae.relationship.network;

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
public class NetworkController {

    @Autowired
    private NetworkRepository repository;

    @GetMapping("/network/length")
    int length() {
        return repository.findAll().size();
    }

    @GetMapping("/network")
    List<Network> all() {
        return repository.findAll();
    }

    @PostMapping("/network")
    Network newNetwork(@RequestBody Network newNetwork) {
        return repository.save(newNetwork);
    }

    @GetMapping("/network/{id}")
    Network one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new NetworkNotFoundException(id));
    }

    @PutMapping("/network/{id}")
    Network replaceNetwork(@RequestBody Network newNetwork, @PathVariable Long id) {

        return repository.findById(id)
                .map(network -> {
                    network.setFirst_name(newNetwork.getFirst_name());
                    network.setLast_name(newNetwork.getLast_name());
                    network.setGender(newNetwork.getGender());
                    network.setDegree(newNetwork.getDegree());
                    network.setBirthday(newNetwork.getBirthday());
                    network.setEmail(newNetwork.getEmail());
                    network.setPhone(newNetwork.getPhone());
                    network.setQq(newNetwork.getQq());
                    network.setWechat(newNetwork.getWechat());
                    network.setAddress(newNetwork.getAddress());
                    network.setRelation(newNetwork.getRelation());
                    return repository.save(network);
                })
                .orElseGet(() -> {
                    newNetwork.setId(id);
                    return repository.save(newNetwork);
                });
    }

    @DeleteMapping("/network/{id}")
    void deleteNetwork(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
