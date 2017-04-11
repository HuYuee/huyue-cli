const inquirer = require('inquirer');
const json = {
    "huyue":"大帅哥一枚",
    "wangtao":"美女一枝"
}

module.exports = function() {
    console.log('you can use arrow up or down to select');
    var repoNameData = ['huyue', 'wangtao'];
    inquirer.prompt([{
        type: 'list',
        name: 'selectRepo',
        message: 'Please select : ',
        choices: repoNameData
    }]).then(function(answers) {
        var name = answers.selectRepo;
        inquirer.prompt([{
            type: 'confirm',
            message: '想要好的评价还是不好的?',
            name: 'ok'
        }]).then(function(res) {
            var type = '';
            if(res.ok){
                type = 'good';
                console.log(name+'是'+json[name])
            }else{
                type = 'bad';
                console.log(name+'是'+json[name])
            }
            inquirer.prompt([{
                type: 'input',
                name: 'guide_name',
                message: '请填下你的名字:',
                default: function() {
                    return '匿名';
                }
            }]).then(function(answers) {
                var guide_name = answers.guide_name;
                inquirer.prompt([{
                    type: 'input',
                    name: 'feel',
                    message: '请填下你的感觉:',
                    default: function() {
                        return 'good！';
                    }
                }]).then(function(answers) {
                    var feel = answers.feel;
                    console.log(guide_name+'感觉'+feel)
                })
            })


        })
    })
};
