<template>
    <div class="form">
        <!-- Person -->
        <div class="person d-flex justify-content-center">
            <lord-icon
                src="https://cdn.lordicon.com/nrtdaiif.json"
                trigger="loop"
                delay="2000"
                colors="primary:#000,secondary:#fff,tertiary:#e83a30"
                style="width:250px;height:250px">
            </lord-icon>
        </div>
        <!-- title -->
        <div class="title">
            <h2>{{ title.toUpperCase() }}</h2>
        </div>
        <!-- Form -->
        <form @submit.prevent="submit">
            <!-- Name -->
            <div class="text d-flex flex-column">
                <input type="text" placeholder="Name" v-model="state.form.name" />
                <small class="text-light" v-if="v$.form.name.$error">
                    {{ v$.form.name.$errors[0].$message }}
                </small>
            </div>
            <!-- Email -->
            <div class="email d-flex flex-column">
                <input type="email" placeholder="Email" v-model="state.form.email" />
                <small class="text-light" v-if="v$.form.email.$error">
                    {{ v$.form.email.$errors[0].$message }}
                </small>
            </div>
            <!-- Password -->
            <div class="password d-flex flex-column">
                <input type="password" placeholder="Password" id="password" v-model="state.form.password" />
                <font-awesome-icon icon="fa-solid fa-eye" v-show="show" @click="hidePassword"
                    style="position:absolute;right:10px;top:33%;cursor:pointer;" />
                <font-awesome-icon icon="fa-solid fa-eye-slash" v-show="hide" @click="showPassword"
                    style="position:absolute;right:10px;top:33%;cursor:pointer;" />
                <small class="text-light" v-if="v$.form.password.$error">
                    {{ v$.form.password.$errors[0].$message }}
                </small>
            </div>
            <!-- Password Confirmation -->
            <div class="password-confirm d-flex flex-column">
                <input type="password" placeholder="Password Confirmation" id="passwordConfirmation" v-model="state.form.passwordConfirmation" />
                <font-awesome-icon icon="fa-solid fa-eye" v-show="showConfirm" @click="hidePasswordConfirmation"
                    style="position:absolute;right:10px;top:32%;cursor:pointer;" />
                <font-awesome-icon icon="fa-solid fa-eye-slash" v-show="hideConfirm" @click="showPasswordConfirm"
                    style="position:absolute;right:10px;top:32%;cursor:pointer;" />
                <small class="text-light" v-if="v$.form.passwordConfirmation.$error">
                    {{ v$.form.passwordConfirmation.$errors[0].$message }}
                </small>
            </div>
            <!-- login -->
            <button type="submit">{{ Create }}</button>
            <!-- Haven't -->
            <div class="text-center mt-3">
                <p class="text-light">
                    {{ haventTitle }}
                    <a :href="loginUrl" class="text-dark">{{ Login }}</a>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default {
    name: "RegisterForm",
    data() {
        return {
            title: "Create Account",
            show: false,
            hide: true,
            showConfirm: false,
            hideConfirm: true,
            haventTitle: "Haven Account?",
            Login: "Login",
            Create: "Create Now",
            loginUrl: "/login",
            forget:"Forget Password?"
        }
    },
    setup() {
        const state = reactive({
            form: {
                name:"",
                email: "",
                password: "",
                passwordConfirmation:"",
                remember: false
            }
        });
        const rules = computed(() => {
            return {
                form: {
                    name:[required],
                    email: [required, email],
                    password: [required, minLength(8)],
                    passwordConfirmation:[required, sameAs(state.form.password)],
                },
            };
        });
        const v$ = useVuelidate(rules, state)
        return { state, rules, v$ }
    },

    methods: {
        submit() {
            this.v$.$validate();
            if (!this.v$.$error) {
                console.log(this.state.form);
            }
        },
        showPassword() {
            this.show = true
            this.hide = false
            let password = document.getElementById("password");
            if (password.type == "password") {
                password.type = "text"
            }
        },
        hidePassword() {
            this.show = false
            this.hide = true
            let password = document.getElementById("password");
            if (password.type == "text") {
                password.type = "password"
            }
        },
        showPasswordConfirm() {
            this.showConfirm = true
            this.hideConfirm = false
            let passwordConfirmation = document.getElementById("passwordConfirmation");
            if (passwordConfirmation.type == "password") {
                passwordConfirmation.type = "text"
            }
        },
        hidePasswordConfirmation() {
            this.showConfirm = false
            this.hideConfirm = true
            let passwordConfirmation = document.getElementById("passwordConfirmation");
            if (passwordConfirmation.type == "text") {
                passwordConfirmation.type = "password"
            }
        }
    }
}
</script>

<style scoped>
.form {
    background: linear-gradient(45deg, var(--main), #F2492C);
    padding: 0px 0px;
    width: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
    margin-top: 100px;
    background: rgba(242, 73, 43, 0.50);
    box-shadow: 0 0px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.3px);
    -webkit-backdrop-filter: blur(6.3px);
    border: 1px solid rgba(242, 73, 43, 0.29);
}

form {
    display: grid;
    grid-gap: 10px;
    justify-content: center;
    grid-template-columns: 80%;
}

form input {
    height: 50px;
    border: none;
    outline: none;
    padding: 0px 10px;
    padding-right: 35px;
    width: 100%;
}

h2 {
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
}

button {
    border: none;
    outline: none;
    padding: 15px 50px;
    margin: auto;
    background-color: #000;
    color: #fff;
}

input[type="password"] {
    padding-right: 35px;
}

.password, .password-confirm {
    position: relative;
}
@media screen and (max-width:767px) {
    .form {
        width: 80%;
    }
}

@media screen and (min-width:768px) and (max-width:992px) {
    .form {
        width: 60%;
    }
}</style>