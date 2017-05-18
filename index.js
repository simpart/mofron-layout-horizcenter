/**
 * @file mofron-layout-hrzcenter/index.js
 * @author simpart
 */

/**
 * @class HrzCenter
 * @brief horizon center layout
 */
mofron.layout.HrzCenter = class extends mofron.Layout {
    
    constructor (op) {
        try {
            super();
            this.name('HrzCenter');
            this.prmOpt(op);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            if (null !== this.rate()) {
                let type = this.type();
                if (null === type) {
                    tgt.vdom().style({
                        position : 'relative',
                        left     : (100 - this.rate())/2 + '%'
                    });
                } else {
                    var set_style = {};
                    set_style[type+'-left'] =  (100 - this.rate())/2 + '%';
                    tgt.vdom().style(set_style);
                }
                if ('function' === typeof tgt.width) {
                    tgt.width(this.rate() + '%');
                } else {
                    tgt.vdom().style({
                        width    : this.rate() + '%',
                    });
                }
            } else if (null !== this.width()) {
                tgt.style({
                    position       : 'relative',
                    'margin-left'  : 'auto',
                    'margin-right' : 'auto'
                });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    rate (rt) {
        try {
            if (undefined === rt) {
                /* getter */
                return (undefined === this.m_rate) ? null : this.m_rate;
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
    
    width (wid) {
        try {
            if (undefined === wid) {
                /* getter */
                return (undefined === this.m_width) ? null : this.m_width;
            }
            /* setter */
            if (('number' !== typeof wid) && ('string' !== typeof wid)) {
                throw new Error('invalid parameter');
            }
            this.m_width = wid;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (tp) {
        try {
            if (undefined === tp) {
                /* getter */
                return (undefined === this.m_type) ? null : this.m_type;
            }
            /* setter */
            if ( ('string' !== typeof tp) ||
                 !(('padding' === tp) || ('margin' === tp)) ) {
                throw new Error('invalid parameter');
            }
            this.m_type = tp;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.layout.hrzcenter = {};
module.exports = mofron.layout.HrzCenter;
