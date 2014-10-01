#!/usr/bin/env node
var program = require('commander');
var changeCase = require('change-case');
var input;

try {
  program
    .option('-c, --camel-case', 'camelCase')
    .option('-s, --snake-case', 'snake_case')
    .option('-p, --param-case', 'param-case')
    .option('-q, --quiet', 'Quiet, don\'t print errors')
    .parse(process.argv);

  input = program.args.join(' ');
  var func = changeCase.paramCase;
  if (program.snakeCase) {
    func = changeCase.snakeCase;
  } else if (program.paramCase) {
    func = changeCase.paramCase;
  }

  process.stdout.write(func(input));
  process.stdout.write('\n');
} catch (e) {
  if (!program.quiet) {
    throw e;
  }
}
