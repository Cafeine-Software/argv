/**
 * @summary Command-line arguments parser utility.
 * @description Utility class for parsing command-line arguments into an object.
 * @author Quentin Lamamy <contact@quentin-lamamy.fr>
 * @version 1.1.1
 */

/**
 * @summary Argument parser class.
 * @description Provides methods to parse command-line arguments and check mandatory parameters.
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

        const [rawKey, value] = arg.slice(2).split('=');
        if (value === undefined) {
          argvObject[rawKey] = true;
        } else if (value === 'true') {
          argvObject[rawKey] = true;
        } else if (value === 'false') {
          argvObject[rawKey] = false;
        } else {
          argvObject[rawKey] = value;
        }

      } else if (arg.startsWith('-')) {
        const key = arg.slice(1); // Remove '-'
        const value = args[i + 1] && !args[i + 1].startsWith('-') ? args[++i] : true; // Assign value or true
        argvObject[key] = value;
      }
    }

    return argvObject;
  }

  /**
   * @summary Checks if all mandatory arguments are present.
   * @description This method verifies that all specified string from the array exist in the parsed arguments object.
   * @param {string[]} mandatoryArgs 
   * @returns {Boolean} True if all mandatory arguments are present, false otherwise.
   */
  static hasMandatoryArgs(mandatoryArgs) {
    const parsedArgs = Argv.parse();
    for (const arg of mandatoryArgs) {
      if (!(arg in parsedArgs)) {
        return false;
      }
    }
    return true;
  }

}

export default Argv;