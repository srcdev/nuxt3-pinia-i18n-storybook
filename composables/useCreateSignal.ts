// import { shallowRef, triggerRef } from "vue";

export function createSignal(value: any, options: any) {
  console.log("createSignal()");
  const ref = shallowRef(value);
  const get = () => ref.value;
  const set = (v: any) => {
    ref.value = typeof v === "function" ? v(ref.value) : v;
    if (options?.equals === false) triggerRef(ref);
  };
  return [get, set];
}
