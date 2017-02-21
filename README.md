# mofron-layout-horizcenter
 Horizon Center Layout for mofron component.
please see [here](https://github.com/simpart/mofron) about an overview of mofron.

# Install

```bash
npm install mofron-layout-hrzcenter
```

# sample
```javascript
let Mof    = require('mofron');
let Frame  = require('mofron-comp-frame');
let Button = require('mofron-comp-button');
let Center = require('mofron-layout-hrzcenter');

new Frame({
    param   : [150,300],
    child   : [
                  new Button('Test 1'),
                  new Button('Test 2')
              ],
    layout  : new Center(70),
    visible : true
});
```
