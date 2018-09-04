/**
 * @file mofron-layout-hrzcenter/index.js
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class HrzCenter
 * @brief horizon center layout
 */
mf.layout.HrzCenter = class extends mf.Layout {
    
    constructor (po, p2) {
        try {
            super();
            this.name('HrzCenter');
            this.prmMap('rate', 'type');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            if ('relative' === this.type()) {
                tgt.adom().style({
                    position : this.type(),
                    left     : (100 - this.rate().value())/2 + '%'
                });
            } else {
                let set_style = {};
                set_style[this.type() + '-left'] =  (100 - this.rate().value())/2 + '%';
                tgt.adom().style(set_style);
            }
            tgt.width(this.rate());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    rate (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_rate) ? '80%' : this.m_rate;
            }
            /* setter */
            this.m_rate = mf.func.getSizeObj(
                ('number' === typeof prm) ? prm + '%' : prm
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_type) ? 'relative' : this.m_type;
            }
            /* setter */
            if ('string' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            if (('relative' !== prm) && ('margin' !== prm) && ('padding' !== prm)) {
                throw new Error('invalid parameter');
            }
            this.m_type = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.layout.HrzCenter;
/* end of file */
