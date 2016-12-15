/**
 * @file HorizCenter.js
 */
module.exports = class extends mofron.layout.Base {
    constructor (rt) {
        try {
            super();
            var _rt = (rt === undefined) ? 80 : rt;
            this.rate = _rt;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutFunc (idx, tgt) {
        try {
            tgt.getVdom().setStyle('width'   , this.rate + '%');
            tgt.getVdom().setStyle('position', 'relative');
            tgt.getVdom().setStyle('left'    , (100 - this.rate)/2 + '%');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
