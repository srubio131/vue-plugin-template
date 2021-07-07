import MySuperClass from "./MySuperClass";

export default {
  install: (app, { name = "myName" } = {}) => {
    const isVue2 = "prototype" in app;
    const prototype = isVue2 ? app.prototype : app.config.globalProperties;

    Object.defineProperty(prototype, `$${name}`, {
      value: new MySuperClass(),
    });
  },
};
