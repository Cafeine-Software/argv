<div align="center">

# Argv.js

![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
[![Npm](https://img.shields.io/badge/npm-red?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@cafeine-software/argv)

[![Tests](https://github.com/Cafeine-Software/argv/actions/workflows/main.yml/badge.svg)](https://github.com/Cafeine-Software/argv/actions/workflows/main.yml)


A simple and lightweight module to parse command line arguments

[Installation](#Installation) • [Usage](#Usage) • [License](#License) • [Contact](#Contact)

<br/>
</div>

## Installation

Install the package via npm:

```bash
npm i @cafeine-software/argv
```

## Usage

### Importing

```javascript
import Argv from '@cafeine-software/argv';
```

### Parse Example

If you run the following script:

```bash
node script.js --verbose -f config.json --debug --foo=bar --toto="true"
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
  foo:"var",
  toto:true
}
```

### Check Mandatory Args

Use `Argv.hasMandatoryArgs()` to ensure required options are present before running your logic:

```javascript
import Argv from '@cafeine-software/argv';

if (!Argv.hasMandatoryArgs(['config', 'verbose'])) {
  console.error('Missing required arguments: --config and --verbose');
  process.exit(1);
}

```

`hasMandatoryArgs` returns `true` only if every key you list exists in the parsed arguments object.

## License

[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/CC_BY-SA_icon.svg/320px-CC_BY-SA_icon.svg.png" width="25%"/>](https://creativecommons.org/licenses/by-sa/4.0/)

## Contact

Developed by **Quentin Lamamy**.

- **Email**: [contact@quentin-lamamy.fr](mailto:contact@quentin-lamamy.fr)
- **GitHub**: [github.com/quentin-lamamy](https://github.com/quentin-lamamy)
- **Cafeine Github**: [github.com/Cafeine-Software](https://github.com/Cafeine-Software)
