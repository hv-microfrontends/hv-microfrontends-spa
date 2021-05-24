import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@hvs/nav",
  app: () => System.import("http://localhost:9001/hvs-nav.js"),
  activeWhen: ["/"],
  customProps: { domElementGetter: () => document.getElementById("hvs-nav") },
});

registerApplication({
  name: "@hvs/main",
  app: () => System.import("http://localhost:9002/hvs-main.js"),
  activeWhen: ["/#/map"],
  customProps: {
    domElementGetter: () => document.getElementById("hvs-content"),
  },
});

registerApplication({
  name: "@hvs/wis",
  app: () => System.import("http://localhost:9003/hvs-wis.js"),
  activeWhen: ["/#/settings"],
  customProps: {
    domElementGetter: () => document.getElementById("hvs-content"),
  },
});

start({
  urlRerouteOnly: true,
});
