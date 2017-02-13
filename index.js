/**
 * @file hrzcenter.js
 */
mofron.layout.HrzCenter = class extends mofron.Layout {
    constructor (rt) {
        try {
            super();
            this.rate = (rt === undefined) ? 80 : rt;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            tgt.style('width', '100%');
            if ('fixed' === tgt.style('position')) {
                tgt.style('position');
            }
            tgt.style('width'   , this.rate + '%');
            tgt.style('position', 'relative');
            tgt.style('left'    , (100 - this.rate)/2 + '%');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
