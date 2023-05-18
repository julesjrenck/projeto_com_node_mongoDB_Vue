import { minLength, required } from 'vuelidate/lib/validators';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        name: null,
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    registerForm: {
      name: { required },
      email: { required },
      password: { required, minLength: minLength(6) },
    },
  },
  methods: {
    registerSubmitUserForm() {
      this.isSubmitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert('Sucesso!');
    },  
    async submitRegisterUser() {},
  },
};