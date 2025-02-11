/**
 * Utility class for parsing command-line arguments into an object.
 * @author Quentin Lamamy <contact@quentin-lamamy.fr>
 * @version 1.1.0
 */
class Argv {

  /**
   * Parses `process.argv` into an object.
   * Handles arguments prefixed with `--` or `-` and maps values accordingly.
   * @returns {Object} Parsed arguments as key-value pairs.
   */
  static parse() {
    const args = process.argv.slice(2); // Remove the first two default elements
    const argvObject = {};

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];

      if (arg.startsWith('--')) {
        const key = arg.slice(2); // Remove '--'
        argvObject[key] = true; // Default value for flags
      } else if (arg.startsWith('-')) {
        const key = arg.slice(1); // Remove '-'
        const value = args[i + 1] && !args[i + 1].startsWith('-') ? args[++i] : true; // Assign value or true
        argvObject[key] = value;
      }
    }

    return argvObject;
  }
}

export default Argv;