export const useBodyActions = () => {
  const gridWrapper = customRef((track, trigger) => {
    let $gridWrapper = <null | HTMLDivElement>null;
    return {
      get() {
        track();
        return $gridWrapper;
      },
      set(value) {
        $gridWrapper = value;
        trigger();
      }
    };
  });
};
