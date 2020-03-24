export default {
  name: 'Counter',
  data: function() {
    return {
      count: 0,
    }
  },
  props: {
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
      this.count--;
      this.$emit('changeValue', this.count);

    },
    increment() {
      this.count++;
      this.$emit('changeValue', this.count);
    }
  },
  mounted() {
    if (this.count < this.minCount) {
      this.count = this.minCount;
    }
  }
}

