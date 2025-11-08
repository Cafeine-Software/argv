// test/argv.test.js
import assert from 'assert'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

import Argv from '../argv.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Simple helper to simulate process.argv.
 * Temporarily replaces process.argv and restores it after the callback.
 */
function withArgs(args, fn) {
  const original = process.argv
  process.argv = ['node', 'script.js', ...args]
  try {
    return fn()
  } finally {
    process.argv = original
  }
}

// ---------- Tests ----------

console.log('Running Argv tests...')

// Test 1: basic flag parsing
withArgs(['--debug'], () => {
  const parsed = Argv.parse()
  assert.strictEqual(parsed.debug, true, '--debug should set true')
})

// Test 2: long option with value
withArgs(['--output=dist'], () => {
  const parsed = Argv.parse()
  assert.strictEqual(parsed.output, 'dist', '--output=dist should parse value')
})

// Test 3: short flag with value
withArgs(['-o', 'build'], () => {
  const parsed = Argv.parse()
  assert.strictEqual(parsed.o, 'build', '-o build should parse value')
})

// Test 4: boolean normalization
withArgs(['--cache=false', '--verbose=true'], () => {
  const parsed = Argv.parse()
  assert.strictEqual(parsed.cache, false, '--cache=false should be false')
  assert.strictEqual(parsed.verbose, true, '--verbose=true should be true')
})

// Test 5: mixed arguments
withArgs(['--mode=dev', '-p', '8080', '--watch'], () => {
  const parsed = Argv.parse()
  assert.deepStrictEqual(parsed, { mode: 'dev', p: '8080', watch: true })
})

// Test 6: mandatory arguments
withArgs(['--config', 'app.conf', '--env=prod'], () => {
  assert.strictEqual(Argv.hasMandatoryArgs(['config']), true)
  assert.strictEqual(Argv.hasMandatoryArgs(['missing']), false)
})

console.log('All tests passed ✅')