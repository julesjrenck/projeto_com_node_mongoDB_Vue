import { required } from 'vuelidate/lib/validators';

export default {
  name: 'LoginComponent',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    loginForm: {
      email: { required },
      password: { required },
    },
  },
  methods: {
    loginSubmitUserForm() {
      this.isSubmitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert('Sucesso!');
    },

    async submitLoginUser() {},
  },
};
