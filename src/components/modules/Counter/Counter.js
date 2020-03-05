export default {
  name: 'Counter',
  data: function() {
    return {
      count: 0,
    }
  },
  props: {
    outputText: {
      type: String,
      default: 'fcgjgj',
    },
    minCount: {
      default: '0'
    },
    maxCount: {
      default: '9'
    }
  },
  methods: {
    decrement() {
      this.$emit('enumerator', this.count);
      this.count--;
    },
    increments() {
      this.$emit('enumerator', this.count);
      this.count++;
    },
  }
}

