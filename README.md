<div align="center">

# Argv.js

![node](https://img.shields.io/badge/Node-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)

A simple and lightweight module to parse command line arguments

[Installation](#Installation) • [Usage](#Usage) • [License](#License) • [Contact](#Contact)

<br/>
</div>

## Installation

Install the package via npm:

```bash
npm install argv.js
```

## Usage

### Importing

```javascript
import Argv from 'argv.js';
```

### Basic Example

If you run the following script:

```bash
node script.js --verbose -f config.json --debug
```

The code:

```javascript
const args = Argv.parse();
console.log(args);
```

Will output:

```javascript
{
  verbose: true,
  f: 'config.json',
  debug: true
}
```

## License

[![CC BY-SA 4.0](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/CC_BY-SA_icon.svg/320px-CC_BY-SA_icon.svg.png)](https://creativecommons.org/licenses/by-sa/4.0/)

## Contact

Developed by **Quentin Lamamy**.

- **Email**: [contact@quentin-lamamy.fr](mailto:contact@quentin-lamamy.fr)
- **GitHub**: [github.com/quentin-lamamy](https://github.com/quentin-lamamy)
- **Cafeine Github**: [github.com/Cafeine-Software](https://github.com/Cafeine-Software)