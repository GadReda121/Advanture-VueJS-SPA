<template>
    <div class="form mt-5">
        <!-- Person -->
        <div class="person d-flex justify-content-center">
            <lord-icon
                src="https://cdn.lordicon.com/zthozvfn.json"
                trigger="loop"
                delay="1500"
                colors="primary:#e83a30,secondary:#242424,tertiary:#f9c9c0,quaternary:#ebe6ef"
                style="width:250px;height:250px;">
            </lord-icon>
        </div>
        <!-- title -->
        <div class="title">
            <h2>{{ title.toUpperCase() }}</h2>
        </div>
        <!-- Form -->
        <form  @submit.prevent="submit">
            <!-- Email -->
            <div class="email d-flex flex-column">
                <input type="email" placeholder="Email" v-model="state.form.email"/>
                <small class="text-light" v-if="v$.form.email.$error">
                    {{ v$.form.email.$errors[0].$message }}
                </small>
            </div>
            <!-- Password -->
            <div class="password d-flex flex-column">
                <input type="password" placeholder="Password" id="password" v-model="state.form.password"/>
                <font-awesome-icon icon="fa-solid fa-eye" v-show="show" @click="hidePassword" style="position:absolute;right:10px;top:32%;cursor:pointer;" />
                <font-awesome-icon icon="fa-solid fa-eye-slash" v-show="hide" @click="showPassword" style="position:absolute;right:10px;top:32%;cursor:pointer;" />
                <small class="text-light" v-if="v$.form.password.$error">
                    {{ v$.form.password.$errors[0].$message }}
                </small>
            </div>
            <!-- Remember & Forget -->
            <div class="d-flex justify-content-between align-items-center flex-wrap">
                <!-- Remember -->
                <label class="d-flex align-items-center gap-1 text-light">
                    <input type="checkbox" v-model="state.form.remember"/>
                    {{ rememberTitle }}
                </label>
                <!-- Forget -->
                <div class="forget">
                    <a :href="forgetUrl" class="text-light">{{ forget }}</a>
                </div>
            </div>
            <!-- login -->
            <button type="submit">{{ login }}</button>
            <!-- Haven't -->
            <div class="text-center mt-3">
                <p class="text-light">
                    {{ haventTitle }}
                    <a :href="registerUrl" class="text-dark">{{ register }}</a>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default{
    name: "LoginForm",
    data() {
        return {
            title: "Log In",
            show: false,
            hide: true,
            rememberTitle: "Remember Me",
            haventTitle: "Haven't Account?",
            register: "Register Now",
            login: "Login",
            registerUrl: "/register",
            forget: "Forget Password",
            forgetUrl:"/forgetPassword",
        }
    },
    setup() {
        const state = reactive({
            form: {
                email: "",
                password: "",
                remember: false
            }
        });
        const rules = computed(() => {
            return {
                form: {
                    email: [required, email],
                    password: [required, minLength(8)],
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
                this.$router.push("/")
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
    }
}
</script>

<style scoped>
.form{
    background:linear-gradient(45deg , var(--main), #F2492C);
    padding:0px 0px;
    width:40%;
    margin:auto;
    display:flex;
    flex-direction: column;
    justify-content:center;
    border-radius: 10px;
    box-shadow:0px 0px 10px rgba(0,0,0,.1);
}
form{
    display:grid;
    grid-gap: 10px;
    justify-content: center;
    grid-template-columns: 80%;
}
form input{
    height: 50px;
    border:none;
    outline: none;
    padding: 0px 10px;
    padding-right:35px;
    width:100%;
}
h2{
    color:#fff;
    text-align: center;
    margin-bottom: 20px;
}
button{
    border:none;
    outline:none;
    padding:15px 50px;
    margin: auto;
    background-color: #000;
    color:#fff;
}
input[type="password"]{
    padding-right:35px;
}
input[type="checkbox"]{
    accent-color: #000;
    outline: none;
    border:none;
    width: 15px;
    cursor: pointer;
}
.password{
    position: relative;
}

@media screen and (max-width:767px){
    .form{
        width:80%;
    }
}
@media screen and (min-width:768px) and (max-width:992px){
    .form{
        width:60%;
    }
}
</style>