export default {
  methods: {
    parseIataCodeFromString(selectRout) {
      if (!selectRout) return '';

      return selectRout.match(/[^()]+/gi).slice(-1)[0];
    }
  }
};
