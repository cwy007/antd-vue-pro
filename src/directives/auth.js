import { check } from "../utils/auth";

function install(Vue, options = {}) {
  Vue.directive(options.name || "auth", {
    // 声明周期方法 inserted
    inserted(el, binding) {
      // 没有权限时，则将元素 el 从dom中移除
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    },
  });
}

export default { install };
