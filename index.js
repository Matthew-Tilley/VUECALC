new Vue({
    
    el: "#app",

    data() {

        return {

            previous: null,
            current: "",
            operator: null

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

            this.current = `${this.current}${number}`;

        },

        dot() {

            if(this.current.indexOf(".") === -1 ) {
                this.append(".");
            }
        },

        divide() {

            this.operator = (a,b) => a / b;

        },

        multiply() {

            this.operator = (a,b) => a * b;

        },

        subtract() {

            this.operator = (a,b) => a - b;

        },

        add() {

            this.operator = (a,b) => a + b;

        },

        equals() {

            

        }



    }

});