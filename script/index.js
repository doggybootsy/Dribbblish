const manifest = require('./theme.json');
const fs = require('fs');
function Root() {if (manifest.root) {const vars = Object.keys(manifest.root).map(e => `    --${e}: ${manifest.root[e]};`).join(`\n`);return `:root{\n${vars}\n}`}else {return ``}}
const theme = {
    BetterDiscord: {0: `./support/${manifest.name}.theme.css`, 1: `/**\n * @name ${manifest.name}\n * @author  ${manifest.author} \n * @version ${manifest.version} \n * @description ${manifest.description} \n * @source ${manifest.source} \n * @website ${manifest.website}\n */\n\n@import url('${manifest.website}${manifest.name}/${manifest.theme.replace('./', '')}');\n\n${Root()}`},
    Stylus: {0: `./support/index.user.css`, 1: `@-moz-document domain("discord.com") {\n    /* ==UserStyle==\n    @name           ${manifest.name}\n    @namespace      ${manifest.source}\n    @version        ${manifest.version}\n    @description    ${manifest.description}\n    @author         ${manifest.author}\n    ==/UserStyle== */\n\n    @import url('${manifest.website}${manifest.name}/${manifest.theme.replace('./', '')}');\n\n${Root()}\n}`},
    Powercord: {0: `./powercord_manifest.json`, 1: `{\n    "name": "${manifest.name}",\n    "description": "${manifest.description}",   \n    "version": "${manifest.version}",   \n    "author": "${manifest.author}",   \n    "theme": "${manifest.theme}",   \n    "license": "${manifest.license}"\n}`},
    Visality: {0: `./manifest.json`, 1: `{\n    "name": "${manifest.name}",\n    "description": "${manifest.description}",   \n    "version": "${manifest.version}",   \n    "author": "${manifest.author}",   \n    "theme": "${manifest.theme}",   \n    "license": "${manifest.license}"\n}`}
}
if (!fs.existsSync(`./support`)) fs.mkdirSync(`./support`);
Object.keys(theme).forEach(e => {fs.writeFile(theme[e][0], theme[e][1], function(err) {if(err) return console.log(err)});})