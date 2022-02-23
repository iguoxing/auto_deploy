/*
 * @Author: ArdenZhao
 * @Date: 2022-02-23 17:10:13
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-23 18:08:17
 * @FilePath: /auto_deploy/deploy3001.js
 */
var shell = require('shelljs')
shell.echo('hello world');
shell.cd('/Users/zhaoarden/Documents/SpeechOcean/project/ocr/code/ocr/'); // 进入项目目录

if (shell.exec('npm run build').code !== 0) {//执行npm run build 命令
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}

//将项目上传到3001服务器对应的目录下
shell.exec('scp dist/index.html root@IP:/home/www/ocr_manage/ ')
shell.exec('scp -r dist/js root@IP:/home/www/ocr_manage/ ')
shell.exec('scp -r dist/static root@IP:/home/www/ocr_manage/ ')

// shell.exec('ls')
// shell.cp('-r', './dist/*', '../qindao_frontend_ui_dist');
// shell.cd('../qindao_frontend_ui_dist');
// shell.exec('git pull origin master');
// shell.exec('git add .');
// shell.exec("git commit -m 'autocommit'")
// shell.exec('git push origin master')
