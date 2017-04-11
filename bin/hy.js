#!/usr/bin/env node

'use strict';

const program = require('commander')

program
    .version(require('../package').version)

program
    .usage('<command>')
    .description('输入不同的姓名称号，比如zcm或者全拼zhangchengming')

program
    .command('init')
    .alias('i')
    .description('初始化，进入傻瓜式选择中')
    .action(() => {
        require('../command/init')
    })

program
    .command('zhangchengming')
    .alias('zcm')
    .description('查看他对张诚铭的评价')
    .action(() => {
        require('../src/zcm')
    })
program
    .command('linwei')
    .alias('lw')
    .description('查看他对林维的评价')
    .action(() => {
        require('../src/lw')
    })
program
    .command('wangtao')
    .alias('wt')
    .description('查看他对王涛的评价')
    .action(() => {
        require('../src/wt')
    })
program.parse(process.argv)

if (!program.args.length) {
    program.help()
}
