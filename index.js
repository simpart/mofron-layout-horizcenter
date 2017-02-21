/**
 * @file mofron-layout-hrzcenter/index.js
 * @author simpart
 */

/**
 * @class HrzCenter
 * @brief horizon center layout
 */
mofron.layout.HrzCenter = class extends mofron.Layout {
    
    constructor (rt) {
        try {
            super();
            this.name('HrzCenter');
            this.m_rate = null;
            this.rate(rt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            tgt.style('width'   , this.rate() + '%');
            tgt.style('position', 'relative');
            tgt.style('left'    , (100 - this.rate())/2 + '%');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    rate (rt) {
        try {
            if (undefined === rt) {
                /* getter */
                return this.m_rate;
            }
            /* setter */
            if ('number' !== typeof rt) {
                throw new Error('invalid parameter');
            }
            if (0 > rt) {
                throw new Error('invalid prameter');
            }
            this.m_rate = rt;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.HrzCenter;
