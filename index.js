new Vue({
    
    el: "#app",

    data() {

        return {

            previous: null,
            current: "",
            operator: null,
            operatorClicked: false,

        }

    },

    methods: {

        clear() {

            this.current = "";
        },

        sign() {

            //  Note for later; ternary operator...I do not
            //  understand this code.
            this.current = this.current.charAt(0) === "-" ?
                this.current.slice(1) : `-${this.current}`;
        },

        percent() {
            
            this.current = `${ parseFloat(this.current) / 100 }`
        },

        append(number) {

            if (this.operatorClicked === true) {
                this.current = "";
                this.operatorClicked = false;
            }

            this.current = `${this.current}${number}`;

        },

        dot() {

            if(this.current.indexOf(".") === -1 ) {
                this.append(".");
            }
        },

        setPrevious() {
            this.previous = this.current;
            this.operatorClicked = true;
        },



        divide() {

            this.operator = (a,b) => a / b;
            this.setPrevious();
            

        },

        multiply() {

            this.operator = (a,b) => a * b;
            this.setPrevious();
        },

        subtract() {

            this.operator = (a,b) => a - b;
            this.setPrevious();
        },

        add() {

            this.operator = (a,b) => a + b;
            this.setPrevious();

        },

        equals() {

            this.current = `${this.operator(
                parseFloat(this.current),
                parseFloat(this.previous)
            )}`;

            this.previous = null;

        }



    }

});