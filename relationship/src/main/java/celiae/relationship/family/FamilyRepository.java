package celiae.relationship.family;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

interface FamilyRepository extends JpaRepository<Family, Long> {
    // @Query("SELECT u FROM Family u WHERE name=:name")
    // Family findAllByName(@Param("name") String name);

}
