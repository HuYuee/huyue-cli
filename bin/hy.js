#!/usr/bin/env node
'use strict';

const program = require('commander')

program
    .version(require('../package').version)

program
    .usage('<command>')
    .description('输入不同的姓名称号，来获取来自huyue不同的评价吧！')

if (!program.args.length) {
    program.help()
}
