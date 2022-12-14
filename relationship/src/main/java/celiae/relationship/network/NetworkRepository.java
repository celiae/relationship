package celiae.relationship.network;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

interface NetworkRepository extends JpaRepository<Network, Long> {
    @Query("SELECT u FROM Network u WHERE name=:name")
    Network findAllByName(@Param("name") String name);
}
