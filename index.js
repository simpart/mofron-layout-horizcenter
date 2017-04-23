/**
 * @file mofron-layout-hrzcenter/index.js
 * @author simpart
 */
require('mofron-event-common');

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
            tgt.style({
                position : 'relative'
            });
            
            if (null !== this.rate()) {
                tgt.style({
                    width : this.rate() + '%',
                    left  : (100 - this.rate())/2 + '%'
                });
            } else if (null !== this.width()) {
                this.target().prmOpt({
                    addChild : new mofron.Param(
                                   new mofron.Component({
                                       addChild : tgt,
                                       style    : {
                                             width    : '50%',
                                             position : 'relative',
                                             left     : '50%'
                                       }
                                   }),
                                   tgt.visible(),
                                   (0 === this.target().child().length) ? 0 : idx
                               )
                });
                tgt.style({
                    left : '-' + this.width()/2 + 'px'
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
}
mofron.layout.hrzcenter = {};
module.exports = mofron.layout.HrzCenter;
