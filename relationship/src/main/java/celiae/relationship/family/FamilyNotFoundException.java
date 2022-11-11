package celiae.relationship.family;

public class FamilyNotFoundException extends RuntimeException {
    FamilyNotFoundException(Long id) {
        super("Could not find Family " + id);
    }
}
