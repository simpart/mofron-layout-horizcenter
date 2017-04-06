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
            this.rate(rt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            tgt.style({
                'width'    : this.rate() + '%',
                'position' : 'relative',
                'left'     : (100 - this.rate())/2 + '%'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    rate (rt) {
        try {
            if (undefined === rt) {
                /* getter */
                return (undefined === this.m_rate) ? 80 : this.m_rate;
            }
            /* setter */
            if (('number' !== typeof rt) || (0 > rt)) {
                throw new Error('invalid parameter');
            }
            this.m_rate = rt;
            if ((null !== this.target()) && (true === this.target().vdom().isPushed())) {
                this.execute();
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.HrzCenter;
