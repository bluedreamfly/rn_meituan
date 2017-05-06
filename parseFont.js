var fontCarrier = require('font-carrier')
var fs = require('fs');
var path = require('path');
var transFont = fontCarrier.transfer('./ios/iconfont.ttf')

// console.log(transFont.__glyphs)

let glyphs = transFont.__glyphs;

let obj = {}
for (let key in glyphs) {
  if (glyphs.hasOwnProperty(key)) {
    // console.log(key.replace('&#', '0'));
    obj[glyphs[key].options.name] = Number(key.replace('&#', 0).slice(0, -1));
  }
}

// var result = 

// var writer = fs.createWriteStream(path.resolve('./fonts/index.js'))
// writer.write(JSON.stringify(obj));

fs.writeFile(path.resolve('fonts/map.js'), `export default ${JSON.stringify(obj)}`, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
console.log(obj)