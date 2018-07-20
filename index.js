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
            
            this.getParam().check(
                /* rate */
                (rt) => {
                    try {
                        if ('number' !== typeof rt) {
                            throw new Error('invalid parameter');
                        }
                        if ((0 > rt) || (100 < rt)) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                /* type */
                (tp) => {
                    try {
                        if (undefined === tp) {
                            return 'relative';
                        }
                        if ('string' !== typeof tp) {
                            throw new Error('invalid parameter');
                        }
                        if (('relative' !== tp) && ('margin' !== tp) && ('padding' !== tp)) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
            );
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            let rate = this.value()[0];
            let type = this.value()[1];
            
            if ('relative' === type) {
                tgt.adom().style({
                    position : type,
                    left     : (100 -rate)/2 + '%'
                });
            } else {
                let set_style = {};
                set_style[type+'-left'] =  (100 - rate)/2 + '%';
                tgt.adom().style(set_style);
            }
            
            tgt.width(rate + '%');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.HrzCenter;
/* end of file */
