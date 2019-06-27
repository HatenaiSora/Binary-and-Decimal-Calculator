import { Calculator } from "./Calculator";


class DecCalculator extends Calculator {

    constructor(settings){
        super(settings);
        console.log(this.getName());
        
    }

    add(numArray1, numArray2) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numArray1.length - 1; i >= 0  ; i--) {
            let carryBit =  numArray1[i] + numArray2[i] + result[i];
            if(carryBit >= 10){
                result[i] = carryBit - 10;
                result[i -1] = 1;
            }else {
                result[i] = carryBit;
            }
        }
        return result;
    }

    changeNumber(root){
        root.find("span").replaceWith(`<input type="number" min="0" max="9">`);
        root.find("input").on("input", e => {

            let number = parseInt($(e.target).val());
            if(!isNaN(number)){
                console.log('Number rozny');
                $(e.target).replaceWith(`<span class="display-number__value--zero active">${$(e.target).val()}</span>`);
                this.checkNumber();
                 this.updateResult();
            }else {
                $(e.target).replaceWith(`<span class="display-number__value--zero active">0</span>`);
            }
                        
        })

    
    }

    updateResult() {
        let root =  this.$calculatorDOMElement;
        let $resultNumber = root.children(".group-number").children(".result-bit");
        this.resultNumberArray.forEach((el,index) =>{
            let valueResult = parseInt($resultNumber.eq(-index-1).text());
            if( this.resultNumberArray[index] != valueResult ){
                let element = $resultNumber.eq(-index-1).find('span');
                element.text(el);
                element.hide();
                element.slideDown(600);
            }

        })

   }

    
}

export {DecCalculator};