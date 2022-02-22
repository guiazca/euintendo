fs = require('fs');

let content = JSON.parse(fs.readFileSync('/Users/guiazca/Documents/Projects/euintendo/src/constants/cleanGames.json', 'utf8'));

content.map((_,i) => {
    content[i].ratings ? delete content[i].ratings : ""
    content[i].reactions ? delete content[i].reactions : ""
    content[i].added ? delete content[i].added : ""
    content[i].added_by_status ? delete content[i].added_by_status : ""
    content[i].stores ? delete content[i].stores : ""
    content[i].platforms ? delete content[i].platforms : ""

    console.log(content[i].name)
})

content.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})

fs.writeFileSync('/Users/guiazca/Documents/Projects/euintendo/src/constants/cleanGames.json', JSON.stringify(content, null, 2));
