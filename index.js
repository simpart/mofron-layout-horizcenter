/**
 * @file mofron-layout-hrzcenter/index.js
 * @brief horizon center layout
 * @license MIT
 */

module.exports = class extends mofron.class.Layout {
    /**
     * initialize horizon center layout
     * 
     * @param (mixed) object: layout option
     *                number: center rate
     * @param (string) center type
     * @short rate,type
     * @type private
     */
    constructor (po, p2) {
        try {
            super();
            this.modname('HrzCenter');
            this.shortForm('rate', 'type');
            
            this.confmng().add('rate', { type: 'number', init: 80 });
            this.confmng().add('type', { type: 'string', select: ['relative', 'margin', 'padding'], init: 'relative' });
            
	    if (0 < arguments.length) {
                this.config(po, p2);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * layout contents
     *
     * @type private
     */
    contents (idx, tgt) {
        try {
	    let tdom = tgt.rootDom();
	    let pdom = tgt.rootDom()[0].parent();
            if ( (null !== pdom) && ("flex" === pdom.style("display")) ) {
                tdom = [tgt.rootDom()[0]];
	    }
            
            if ('relative' === this.type()) {
	        for (let tidx in tdom) {
                    tdom[tidx].style({
                        position : this.type(),
                        left     : (100 - this.rate())/2 + '%',
			width    : this.rate() + '%'
                    });
		}
            } else {
                let set_style = { width: this.rate() + '%' };
                set_style[this.type() + '-left'] =  (100 - this.rate())/2 + '%';
		for (let tidx in tdom) {
                    tdom[tidx].style(set_style);
		}
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter center rate
     *
     * @param (number) center rate 
     *                 undefined: call as getter
     * @return (number) center rate
     * @type parameter
     */
    rate (prm) {
        try {
            if ( (undefined !== prm) &&
                 ( (0 > prm) || (100 < prm))) {
                throw new Error('invalid parameter');
            }
            return this.confmng("rate", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter center type
     *
     * @param (string) center type
     *                 undefined: call as getter
     * @return (string) center type
     * @type parameter
     */
    type (prm) {
        try {
	    return this.confmng("type", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
