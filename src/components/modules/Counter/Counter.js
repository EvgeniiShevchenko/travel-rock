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
      default: '',
    },
    minCount: {
      type: Number,
      default: 0
    },
    maxCount: {
      type: Number,
      default: 9
    }
  },
  methods: {
    decrement() {
      this.$emit('changeValue', this.count);
      this.count--;
    },
    increment() {
      this.$emit('changeValue', this.count);
      this.count++;
    },
  }
}

