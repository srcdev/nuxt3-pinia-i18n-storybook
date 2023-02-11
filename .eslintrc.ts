module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-recommended", "prettier"],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  // globals: {
  //   defineProps: "readonly",
  //   defineEmits: "readonly",
  //   defineExpose: "readonly",
  //   withDefaults: "readonly",
  // },
};
