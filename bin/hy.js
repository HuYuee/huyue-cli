#!/usr/bin/env node
'use strict';

const program = require('commander')

program
    .version(require('../package').version)

program
    .usage('<command>')
    .description('输入不同的姓名称号，来获取来自huyue不同的评价吧！')

program
    .command('zhangchengming')
    .alias('zcm')
    .description('查看他对张诚铭的评价')
    .action(() => {
        require('../command/zcm')()
    })
program
    .command('linwei')
    .alias('lw')
    .description('查看他对林维的评价')
    .action(() => {
        require('../command/lw')()
    })
program.parse(process.argv)

if (!program.args.length) {
    program.help()
}
