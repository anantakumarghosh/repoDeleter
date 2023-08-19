const fs = require("fs")
const spawn = require('cross-spawn');

/**
 * @todo
 * run the below command in this project
 * gh repo list <your-user-name> --json name --limit 100 > allrepolist.json
 */

let arr = JSON.parse(fs.readFileSync('./allrepolist.json'));
let newArr = arr.map(obj => obj.name);
console.log(newArr);
console.log(newArr.length);
newArr.forEach(element => {
    console.log('deleting '+ element + 'repository ...')
    let deleteRepo = spawn.sync('gh', ['repo','delete', 'anantakumarghosh/'+element,'--yes'], {
        stdio: 'inherit',
        encoding: 'utf-8'
    });
    if (deleteRepo.status ===0){
    console.log('deleted '+ element + 'repository \n');
    }
    else{
        console.log("fail");
    }
});
