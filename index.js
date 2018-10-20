/**
 * @file mofron-layout-hrzcenter/index.js
 * @brief horizon center layout
 * @author simpart
 */
const mf = require('mofron');

mf.layout.HrzCenter = class extends mf.Layout {
    /**
     * initialize horizon center layout
     * 
     * @param p1 (object) layout option
     * @param p1 (number) center rate
     * @param p2 (string) center type
     */
    constructor (po, p2) {
        try {
            super();
            this.name('HrzCenter');
            this.prmMap(['rate', 'type']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * layout contents
     *
     * @note private method
     */
    contents (idx, tgt) {
        try {
            if ('relative' === this.type()) {
                tgt.adom().style({
                    position : this.type(),
                    left     : (100 - this.rate())/2 + '%'
                });
            } else {
                let set_style = {};
                set_style[this.type() + '-left'] =  (100 - this.rate())/2 + '%';
                tgt.adom().style(set_style);
            }
            tgt.width(this.rate() + '%');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter center rate
     *
     * @param p1 (number) center rate 
     * @param p1 (undefined) call as getter
     * @return (number) center rate
     */
    rate (prm) {
        try {
            let ret = this.member('rate', 'number', prm, 80);
            if ( (undefined !== prm) &&
                 ( (0 > prm) || (100 < prm))) {
                throw new Error('invalid parameter');
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter center type
     *
     * @param p1 (string) center type
     * @param p1 (undefined) call as getter
     * @return (string) center type
     */
    type (prm) {
        try {
            return this.member('type', ['relative', 'margin', 'padding'], prm, 'relative');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.layout.HrzCenter;
/* end of file */
