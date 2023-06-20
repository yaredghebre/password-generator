const {createApp} = Vue

createApp({
    data() {
        return {
            showAlertBox: false,
            showPassword: false,
            allowReps: false,
            allowLetters: true,
            allowNumbers: false,
            allowSymbols: false,
            password: "",
            passwordLength: 12,
        }
    },
    methods: {

        generatePassword() {
            const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const numbers = "0123456789";
            const symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

            let chars = "";

            if (this.allowLetters) {
                chars += letters;
                this.showPassword = true;
            }

            if (this.allowNumbers === true) {
                chars += numbers;
                this.showPassword = true;
            }

            if (this.allowSymbols === true) {
                chars += symbols;
                this.showPassword = true;
            }

            if (!this.allowLetters && !this.allowNumbers && !this.allowSymbols) {
                this.showAlertBox = true;
                this.showPassword = false;
            }


            let password = "";
            const charsLength = chars.length
            
            for (let i = 0; i < this.passwordLength; i++) {
                const rndPassword = Math.floor(Math.random() * charsLength);
                password += chars[rndPassword];
            }
            
            this.password = password;

            console.log(password);
        }
    }
}).mount("#app")