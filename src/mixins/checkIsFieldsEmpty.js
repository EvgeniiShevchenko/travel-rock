export default {
  methods: {
    checkIsFieldsEmpty(data) {
      for (let item in data) {
        if (this.isEmpty(data[item])) return true;
      }

      return false;
    }
  }
};
