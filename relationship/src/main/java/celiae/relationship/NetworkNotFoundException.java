package celiae.relationship;

public class NetworkNotFoundException extends RuntimeException {
    NetworkNotFoundException(Long id) {
        super("Could not find Network " + id);
    }
}
