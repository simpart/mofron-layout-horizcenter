/**
 * @file mofron-layout-hrzcenter/index.js
 * @author simpart
 */

/**
 * @class HrzCenter
 * @brief horizon center layout
 */
mofron.layout.HrzCenter = class extends mofron.Layout {
    
    constructor (po) {
        try {
            super();
            this.name('HrzCenter');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            if (null !== this.value()) {
                let type = this.type();
                if (null === type) {
                    tgt.adom().style({
                        position : 'relative',
                        left     : (100 - this.value())/2 + '%'
                    });
                } else {
                    var set_style = {};
                    set_style[type+'-left'] =  (100 - this.value())/2 + '%';
                    tgt.adom().style(set_style);
                }
                if ('function' === typeof tgt.width) {
                    tgt.width(this.value() + '%');
                } else {
                    tgt.adom().style({
                        width    : this.value() + '%',
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
    
    value (prm) {
        try {
            if ( (undefined !== prm) && ('number' !== typeof prm) ) {
                throw new Error('invalid parameter');
            }
            return super.value(prm);
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
module.exports = mofron.layout.HrzCenter;
