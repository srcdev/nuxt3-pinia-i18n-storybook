// shims-volar.d.ts
import { RouterLink, RouterView, useLink, RouteLocationNormalized } from "vue-router";
import { UnwrapRef, VNode } from "vue";

declare global {
  interface __VLS_GlobalComponents {
    RouterLink: typeof RouterLink & {
      __VLS_slots: {
        default: UnwrapRef<ReturnType<typeof useLink>>;
      };
    };
    RouterView: typeof RouterView & {
      __VLS_slots: {
        default: {
          Component: VNode;
          route: RouteLocationNormalized & { href: string };
        };
      };
    };
  }
}
