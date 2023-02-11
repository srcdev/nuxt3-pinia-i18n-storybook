export const rootActions = {
  updateSomeString(payload: string) {
    console.log(`updateSomeString()`);
    this.someString = payload;
  },
};
