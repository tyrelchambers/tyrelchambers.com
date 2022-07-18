var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
}, __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React, init_react = __esm({
  "node_modules/@remix-run/dev/dist/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: !0,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: !0,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: !0,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: !0,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: !0,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: !0,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: !0,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: !0,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: !0,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: !0,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: !0,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: !0,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: !0,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: !0,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: !0,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: !0,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: !0,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: !0,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: !0,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: !0,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: !0,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: !0,
      get: function() {
        return react.useTransition;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: !0,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: !0,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: !0,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: !0,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: !0,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: !0,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: !0,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: !0,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: !0,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: !0,
      get: function() {
        return react.useSearchParams;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server"), import_react = require("@remix-run/react");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_react3 = require("@remix-run/react");

// app/utils/supabase-client.js
init_react();
var import_react2 = __toESM(require("react")), SupabaseContext = import_react2.default.createContext(), SupabaseProvider = ({ supabase: supabase3, children }) => /* @__PURE__ */ import_react2.default.createElement(SupabaseContext.Provider, {
  value: supabase3
}, children), useSupabase = () => import_react2.default.useContext(SupabaseContext);

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/root.jsx
var import_supabase_js = require("@supabase/supabase-js");

// styles/editor.css
var editor_default = "/build/_assets/editor-55DNWN2R.css";

// styles/global.css
var global_default = "/build/_assets/global-GGBMI5UI.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-N2PIIUMO.css";

// app/session.server.js
init_react();
var import_remix = __toESM(require_dist()), import_node = require("@remix-run/node"), import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var sessionStorage = (0, import_remix.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !0
  }
});
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
var USER_SESSION_KEY = "userId";
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function verifyLogin(password) {
  return password ? password === process.env.PASSWORD : null;
}
async function requireUserId(request) {
  let userId = await getUserId(request);
  if (!userId)
    throw (0, import_node.redirect)("/");
  return userId;
}
async function requireUser(request) {
  let user = await requireUserId(request) === process.env.USER_KEY;
  if (user)
    return user;
  throw await logout(request);
}

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/root.jsx
async function loader({ request }) {
  return {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    user: await getUserId(request) === process.env.USER_KEY
  };
}
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: editor_default }
  ];
}
function meta() {
  return { title: "Tyrel Chambers" };
}
function App() {
  let data = (0, import_react3.useLoaderData)(), supabase3 = (0, import_supabase_js.createClient)(data.SUPABASE_URL, data.SUPABASE_KEY);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement(import_react3.Links, null), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap",
    rel: "stylesheet"
  })), /* @__PURE__ */ React.createElement("body", {
    className: "body"
  }, /* @__PURE__ */ React.createElement(SupabaseProvider, {
    supabase: supabase3
  }, /* @__PURE__ */ React.createElement(import_react3.Outlet, null), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement("script", {
    defer: !0,
    "data-domain": "tyrelchambers.com",
    src: "https://plausible.io/js/plausible.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://kit.fontawesome.com/5f8ee45a20.js",
    crossOrigin: "anonymous",
    defer: !0
  }), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null))));
}

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/post/$id/index.jsx
var id_exports = {};
__export(id_exports, {
  action: () => action,
  default: () => id_default,
  loader: () => loader2
});
init_react();
var import_react12 = require("@remix-run/react");

// app/layouts/AdminHeader.jsx
init_react();

// app/layouts/AdminMobileNav.jsx
init_react();
var import_react4 = __toESM(require("react")), import_react5 = require("@remix-run/react"), AdminMobileNav = () => /* @__PURE__ */ import_react4.default.createElement("nav", {
  className: "mt-4 w-full tablet:mt-0 tablet:hidden"
}, /* @__PURE__ */ import_react4.default.createElement("ul", {
  className: "flex flex-col border-t-2 border-gray-600"
}, /* @__PURE__ */ import_react4.default.createElement("li", {
  className: "border-b-2 border-gray-600 "
}, /* @__PURE__ */ import_react4.default.createElement(import_react5.Link, {
  to: "/",
  className: "mobile-nav-link p-4 py-6",
  end: !0
}, "Home")), /* @__PURE__ */ import_react4.default.createElement("li", {
  className: "border-b-2 border-gray-600 "
}, /* @__PURE__ */ import_react4.default.createElement(import_react5.NavLink, {
  to: "/admin",
  className: "mobile-nav-link p-4 py-6",
  end: !0
}, "Admin")), /* @__PURE__ */ import_react4.default.createElement("li", {
  className: "border-b-2 border-gray-600 "
}, /* @__PURE__ */ import_react4.default.createElement(import_react5.NavLink, {
  to: "/admin/post/new",
  className: "mobile-nav-link p-4 py-6"
}, "New Post")), /* @__PURE__ */ import_react4.default.createElement("li", {
  className: "border-b-2 border-gray-600 "
}, /* @__PURE__ */ import_react4.default.createElement(import_react5.NavLink, {
  to: "/admin/posts",
  className: "mobile-nav-link p-4 py-6"
}, "Posts")))), AdminMobileNav_default = AdminMobileNav;

// app/layouts/AdminNav.jsx
init_react();
var import_react6 = require("@remix-run/react"), import_react7 = __toESM(require("react"));
var AdminNav = () => {
  let supabase3 = useSupabase(), handleSignout = () => {
    supabase3.auth.signOut().then(() => {
      submit(null, { method: "post", action: "/signout" });
    });
  };
  return /* @__PURE__ */ import_react7.default.createElement("nav", {
    className: "mt-4 hidden tablet:mt-0 tablet:flex"
  }, /* @__PURE__ */ import_react7.default.createElement("ul", {
    className: "flex  gap-10"
  }, /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement(import_react6.Link, {
    to: "/",
    className: "nav-link",
    end: "true",
    prefetch: "intent"
  }, "Home")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement(import_react6.NavLink, {
    to: "/admin",
    className: "nav-link",
    end: !0,
    prefetch: "intent"
  }, "Admin")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement(import_react6.NavLink, {
    to: "/admin/post/new",
    className: "nav-link",
    prefetch: "intent"
  }, "New Post")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement(import_react6.NavLink, {
    to: "/admin/posts",
    className: "nav-link",
    prefetch: "intent"
  }, "Posts")), supabase3.auth.session() && /* @__PURE__ */ import_react7.default.createElement("li", {
    className: "w-fit"
  }, /* @__PURE__ */ import_react7.default.createElement(import_react6.Form, {
    action: "/signout",
    method: "post"
  }, /* @__PURE__ */ import_react7.default.createElement("button", {
    type: "submit",
    className: "nav-link w-fit"
  }, "Sign out")))));
}, AdminNav_default = AdminNav;

// app/layouts/AdminHeader.jsx
var import_react9 = __toESM(require("react"));

// app/hooks/useMobileNav.js
init_react();
var import_react8 = require("react"), useMobileNav = () => {
  let [isMobileNavOpen, setIsMobileNavOpen] = (0, import_react8.useState)(!1);
  return { isMobileNavOpen, toggleMobileNav: () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  } };
};

// app/layouts/AdminHeader.jsx
var AdminHeader = () => {
  let { isMobileNavOpen, toggleMobileNav } = useMobileNav();
  return /* @__PURE__ */ import_react9.default.createElement("header", {
    className: "flex justify-between px-4"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex w-full items-center justify-between"
  }, /* @__PURE__ */ import_react9.default.createElement("h1", {
    className: "h3"
  }, "Admin dashboard"), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "mobile-toggle flex h-[25px] w-[35px] flex-col justify-between tablet:hidden",
    onClick: () => toggleMobileNav()
  }, /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "h-[3px] w-full bg-gray-400"
  }), /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "h-[3px] w-full bg-gray-400"
  }), /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "h-[3px] w-full bg-gray-400"
  }))), /* @__PURE__ */ import_react9.default.createElement(AdminNav_default, null), isMobileNavOpen && /* @__PURE__ */ import_react9.default.createElement(AdminMobileNav_default, null));
}, AdminHeader_default = AdminHeader;

// app/components/MarkdownRender.jsx
init_react();
var import_react10 = __toESM(require("react")), import_client = require("mdx-bundler/client"), MarkdownRender = ({ markdown, html }) => {
  let Component = markdown ? import_react10.default.useMemo(() => (0, import_client.getMDXComponent)(markdown), [markdown]) : null;
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "prose prose-h1:font-normal prose-h1:text-white prose-h2:font-thin prose-h2:text-white prose-h3:font-thin prose-h3:text-white prose-h4:text-white prose-p:text-gray-400 prose-a:text-yellow-300 prose-a:underline prose-strong:text-white prose-code:text-white prose-li:text-gray-400"
  }, /* @__PURE__ */ import_react10.default.createElement(Component, null));
}, MarkdownRender_default = MarkdownRender;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/post/$id/index.jsx
var import_react13 = __toESM(require("react"));

// app/blogPosts.server.js
init_react();
var import_mdx_bundler = require("mdx-bundler"), import_react11 = require("react");

// app/supabase.server.js
init_react();
var import_supabase_js2 = require("@supabase/supabase-js"), import_remix2 = __toESM(require_dist()), import_dotenv2 = __toESM(require("dotenv"));
import_dotenv2.default.config();
var supabaseUrl = process.env.SUPABASE_URL, supabaseKey = process.env.SUPABASE_KEY, supabase = (0, import_supabase_js2.createClient)(supabaseUrl, supabaseKey);
function createDatabaseSessionStorage({ cookie }) {
  let db = supabase.from("sessions");
  return (0, import_remix2.createSessionStorage)({
    cookie,
    async createData(data, expires) {
      let { data: test } = await db.insert(data);
      return test;
    },
    async readData(obj) {
      let { data, error } = await db.select().eq("access_token", obj[0].access_token);
      return data && data.length > 0 ? data[data.length - 1] : null;
    },
    async updateData(id, data, expires) {
      await db.update(id, data);
    },
    async deleteData(data) {
      await db.delete().eq("id", data[0].id);
    }
  });
}
var { getSession: getSession2, commitSession, destroySession } = createDatabaseSessionStorage({
  cookie: {
    name: "__session",
    sameSite: "lax",
    secrets: ["JOUUG97gyviF*^F"]
  }
});

// app/blogPosts.server.js
async function getPost(slug) {
  let { body: post, error } = await supabase.from("posts").select().eq("slug", slug).single(), { code } = await (0, import_mdx_bundler.bundleMDX)({
    source: post.markdown
  });
  return {
    post,
    error,
    markdown: code
  };
}
async function getPostById(id) {
  let { body: post, error } = await supabase.from("posts").select().eq("id", id).single(), { code } = await (0, import_mdx_bundler.bundleMDX)({
    source: post.markdown
  });
  return __spreadProps(__spreadValues({}, post), { error, markdown: code });
}
async function getPosts() {
  let { body: posts, error } = await supabase.from("posts").select().eq("published", !0).order("created_at", {
    ascending: !1
  });
  return { posts, error };
}
async function triggerView(id) {
  let { data } = await supabase.from("posts").select().eq("id", id).single();
  await supabase.from("posts").update({
    views: data.views + 1
  }).eq("id", id);
}

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/post/$id/index.jsx
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/utils/supabase.js
init_react();
var import_supabase_js3 = require("@supabase/supabase-js"), supabase2 = (0, import_supabase_js3.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/post/$id/index.jsx
var import_node2 = require("@remix-run/node");
var loader2 = async ({ params, request }) => (requireUser(request), (0, import_tiny_invariant.default)(params.id, "expected params.slug"), { post: await getPostById(params.id), id: params.id }), action = async ({ request, params }) => {
  let form = await request.formData();
  if (form.get("_method") !== "delete")
    throw new Response(`The _method ${form.get("_method")} is not supported`, {
      status: 400
    });
  let { data } = await supabase2.from("posts").select().eq("id", params.id);
  if (!data[0])
    throw new Response("Can't delete what does not exist", {
      status: 404
    });
  return await supabase2.from("posts").delete().eq("id", params.id), (0, import_node2.redirect)("/admin/posts");
}, $slug = () => {
  var _a;
  let post = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "ml-auto mr-auto mt-10 max-w-screen-2xl"
  }, /* @__PURE__ */ import_react13.default.createElement(AdminHeader_default, null), /* @__PURE__ */ import_react13.default.createElement("main", {
    className: "mt-14 flex flex-col-reverse gap-10 tablet:flex-row"
  }, /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "flex w-full max-w-2xl flex-col p-4 "
  }, /* @__PURE__ */ import_react13.default.createElement("h3", {
    className: "h3 coloured mb-6"
  }, post.post.title), /* @__PURE__ */ import_react13.default.createElement(MarkdownRender_default, {
    html: post.post.markdown
  }), /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "mt-8 flex flex-wrap items-center gap-4"
  }, ((_a = post.post.tags) == null ? void 0 : _a.map((tag, i) => /* @__PURE__ */ import_react13.default.createElement("p", {
    className: "flex w-fit items-center justify-center rounded-full bg-slate-700 px-4 py-2 text-sm text-white",
    key: i
  }, tag.name))) || null)), /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "sticky top-10  m-4 flex h-fit flex-col gap-6 rounded-lg border-2 border-gray-700 p-4 tablet:w-[200px]"
  }, /* @__PURE__ */ import_react13.default.createElement(import_react12.Link, {
    to: `/admin/post/${post.id}/edit`,
    className: "link-button small primary w-full"
  }, "Edit article"), /* @__PURE__ */ import_react13.default.createElement(import_react12.Form, {
    method: "post",
    className: "w-full"
  }, /* @__PURE__ */ import_react13.default.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ import_react13.default.createElement("button", {
    type: "submit",
    className: "link-button small danger w-full"
  }, "Delete")), post.post.published ? /* @__PURE__ */ import_react13.default.createElement("p", {
    className: " text-green-300"
  }, "published") : /* @__PURE__ */ import_react13.default.createElement("p", {
    className: " text-orange-300"
  }, "draft"))));
}, id_default = $slug;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/post/$id/edit.jsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action2,
  default: () => edit_default,
  loader: () => loader3
});
init_react();
var import_react15 = require("@remix-run/react");

// app/components/CustomSelect.jsx
init_react();
var import_react14 = __toESM(require("react")), import_react_select = __toESM(require("react-select")), CustomSelect = (_a) => {
  var _b = _a, { isMulti, options, name } = _b, props = __objRest(_b, ["isMulti", "options", "name"]);
  return /* @__PURE__ */ import_react14.default.createElement(import_react_select.default, __spreadValues({
    isMulti,
    options,
    className: "custom-select",
    name,
    styles: {
      option: (base, state) => __spreadProps(__spreadValues({}, base), {
        backgroundColor: state.isFocused ? "rgb(63 63 70)" : ""
      })
    }
  }, props));
}, CustomSelect_default = CustomSelect;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/post/$id/edit.jsx
var import_react_textarea_autosize = __toESM(require("react-textarea-autosize")), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/constants/blogTags.js
init_react();
var tags = [
  {
    label: "JavaScript",
    value: "javascript"
  },
  {
    label: "React",
    value: "react"
  },
  {
    label: "Node.js",
    value: "nodejs"
  },
  {
    label: "CSS",
    value: "css"
  },
  {
    label: "Beginner",
    value: "beginner"
  },
  {
    label: "HTML",
    value: "html"
  },
  {
    label: "Personal Development",
    value: "personal-development"
  },
  {
    label: "Career",
    value: "career"
  },
  {
    label: "Remix",
    value: "remix"
  },
  {
    label: "Web Development",
    value: "web-development"
  },
  {
    label: "Testing",
    value: "testing"
  }
];

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/post/$id/edit.jsx
var import_react16 = require("react");
var loader3 = async ({ params, request }) => {
  requireUser(request), (0, import_tiny_invariant2.default)(params.id, "expected params.id");
  let { data: post } = await supabase.from("posts").select().eq("id", params.id).single();
  return { post, id: params.id };
}, action2 = async ({ request }) => {
  let formData = await request.formData(), title = formData.get("title"), description = formData.get("description"), cover_img = formData.get("cover_img"), markdown = formData.get("markdown"), tags2 = formData.get("tags"), id = formData.get("id"), published = formData.get("published"), slug = title.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-]/g, "").toLowerCase(), formattedTags = JSON.parse(tags2).map((tag) => ({
    value: tag.value,
    label: tag.label
  })), { error } = await supabase.from("posts").update({
    title,
    slug,
    markdown,
    tags: formattedTags,
    cover_img,
    description,
    published
  }).eq("id", id).single();
  return error ? json({ error }) : redirect("/admin/posts");
}, edit = () => {
  var _a;
  let data = (0, import_react15.useLoaderData)(), [state, setState] = (0, import_react16.useState)(__spreadValues({}, data.post)), fetcher = (0, import_react15.useFetcher)(), submitHandler = async (e) => {
    fetcher.submit(__spreadProps(__spreadValues({}, state), {
      tags: JSON.stringify(state.tags),
      id: data.id
    }), { method: "post" });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "ml-auto mr-auto mt-10 max-w-screen-2xl"
  }, /* @__PURE__ */ React.createElement(AdminHeader_default, null), /* @__PURE__ */ React.createElement("main", {
    className: "mt-10 max-w-3xl p-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2"
  }, "Editing - ", /* @__PURE__ */ React.createElement("span", {
    className: "text-blue-200"
  }, data.post.title)), /* @__PURE__ */ React.createElement(fetcher.Form, {
    className: "mt-8 flex flex-col gap-10",
    onSubmit: submitHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title",
    className: "text-xl  text-yellow-300"
  }, "Title"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-gray-400"
  }, "This title is used for cross-posting to other platforms"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    className: "w-full rounded-lg bg-zinc-700 p-4 text-white",
    placeholder: "Post title",
    onChange: (e) => setState(__spreadProps(__spreadValues({}, state), { title: e.target.value })),
    value: state.title
  }), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-sm font-thin text-gray-300"
  }, "https://tyrelchambers.com/blog/", state.title.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-]/g, "").toLowerCase())), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title",
    className: "text-xl  text-yellow-300"
  }, "Description"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-gray-400"
  }, "A brief summary of what this article is about"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "description",
    className: "w-full rounded-lg bg-zinc-700 p-4 text-white",
    placeholder: "Post description",
    onChange: (e) => setState(__spreadProps(__spreadValues({}, state), { description: e.target.value })),
    value: state.description
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "cover_img",
    className: "text-xl  text-yellow-300"
  }, "Cover image URL"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-gray-400"
  }, "This is the image that will be used as the cover image for your post"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "cover_img",
    className: "w-full rounded-lg bg-zinc-700 p-4 text-white",
    placeholder: "Cover image url",
    onChange: (e) => setState(__spreadProps(__spreadValues({}, state), { cover_img: e.target.value })),
    value: state.cover_img
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown",
    className: "text-xl  text-yellow-300"
  }, "Markdown"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-gray-400"
  }, "Your markdown"), /* @__PURE__ */ React.createElement(import_react_textarea_autosize.default, {
    minRows: 10,
    className: "w-full max-w-3xl rounded-lg bg-zinc-700 p-2 text-white",
    name: "markdown",
    placeholder: "Markdown",
    onChange: (e) => setState(__spreadProps(__spreadValues({}, state), { markdown: e.target.value })),
    value: state.markdown
  })), console.log(tags), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 flex flex-col gap-2"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "tags",
    className: "text-xl text-yellow-300"
  }, "Tags"), /* @__PURE__ */ React.createElement(CustomSelect_default, {
    options: tags,
    isMulti: !0,
    onChange: (e) => setState(__spreadProps(__spreadValues({}, state), { tags: e })),
    value: ((_a = state.tags) == null ? void 0 : _a.map((tag) => __spreadValues({}, tag))) || null
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 flex items-center gap-6"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "link-button primary small",
    type: "submit",
    disabled: fetcher.state === "submitting"
  }, fetcher.state === "submitting" ? "Updating post..." : " Update post"), /* @__PURE__ */ React.createElement("label", {
    className: "text-gray-400"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    name: "published",
    className: "mr-2",
    onClick: (e) => setState(__spreadProps(__spreadValues({}, state), { published: e.target.checked })),
    checked: state.published
  }), "Publish now")))));
}, edit_default = edit;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/posts/index.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default,
  loader: () => loader4
});
init_react();
var import_react17 = require("@remix-run/react");
var import_react18 = __toESM(require("react"));

// app/utils/truncateString.js
init_react();
var truncateString = (str, length) => str ? str.length > length ? str.substring(0, length) + "..." : str : "";

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/posts/index.jsx
var loader4 = async ({ request }) => {
  await requireUser(request);
  let { body: posts, error } = await supabase.from("posts").select().order("created_at", {
    ascending: !1
  });
  return error ? { error } : posts;
}, index = () => {
  let posts = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "ml-auto mr-auto mt-10 max-w-screen-2xl"
  }, /* @__PURE__ */ import_react18.default.createElement(AdminHeader_default, null), /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "mt-10 grid grid-cols-1 gap-10 p-4 tablet:grid-cols-2 desktop:grid-cols-3"
  }, posts.length > 0 && posts.map((post) => /* @__PURE__ */ import_react18.default.createElement(import_react17.Link, {
    to: `/admin/post/${post.id}`,
    className: "flex flex-col items-center gap-4 rounded-lg border-2 border-gray-500 p-4 large:flex-row large:items-start",
    key: post.id
  }, /* @__PURE__ */ import_react18.default.createElement("img", {
    src: post.cover_img,
    className: "aspect-[4/6] w-32 rounded-lg object-cover",
    alt: ""
  }), /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "flex flex-col gap-2"
  }, /* @__PURE__ */ import_react18.default.createElement("h4", {
    className: "h4 text-center large:text-left"
  }, post.title), /* @__PURE__ */ import_react18.default.createElement("p", {
    className: "text-center text-gray-400 large:text-left"
  }, truncateString(post.description, 100)), post.published ? /* @__PURE__ */ import_react18.default.createElement("p", {
    className: " text-green-300"
  }, "published") : /* @__PURE__ */ import_react18.default.createElement("p", {
    className: " text-orange-300"
  }, "draft"))))));
}, posts_default = index;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/case-study/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  loader: () => loader5
});
init_react();

// app/layouts/Header.jsx
init_react();
var import_react24 = __toESM(require("react")), import_react25 = require("@remix-run/react");

// app/components/SocialList.jsx
init_react();
var import_react19 = __toESM(require("react"));

// app/constants/socials.js
init_react();
var socials = [
  {
    label: "Twitter",
    url: "https://twitter.com/imtyrelchambers",
    icon: ({ className = "" }) => /* @__PURE__ */ React.createElement("i", {
      className: `fa-brands fa-twitter ${className}`
    })
  },
  {
    label: "Github",
    url: "https://github.com/tyrelchambers",
    icon: ({ className = "" }) => /* @__PURE__ */ React.createElement("i", {
      className: `fa-brands fa-github ${className}`
    })
  },
  {
    label: "Dev.to",
    url: "https://dev.to/imtyrelchambers",
    icon: ({ className = "" }) => /* @__PURE__ */ React.createElement("i", {
      className: `fa-brands fa-dev ${className}`
    })
  },
  {
    label: "Hashnode",
    url: "https://hashnode.com/@tyrelchambers",
    icon: ({ className = "" }) => /* @__PURE__ */ React.createElement("i", {
      className: `fa-brands fa-hashnode ${className}`
    })
  },
  {
    label: "Instagram",
    url: "https://instagram.com/tyrelchambers",
    icon: ({ className = "" }) => /* @__PURE__ */ React.createElement("i", {
      className: `fa-brands fa-instagram ${className}`
    })
  }
];

// app/components/SocialList.jsx
var SocialList = ({ className = "" }) => /* @__PURE__ */ import_react19.default.createElement("ul", {
  className: `flex items-center gap-6 ${className}`
}, socials.map((social) => /* @__PURE__ */ import_react19.default.createElement("li", {
  className: "text-xl",
  key: social.label
}, /* @__PURE__ */ import_react19.default.createElement("a", {
  href: social.url,
  target: "_blank",
  rel: "noopenner noreferrer"
}, social.icon({
  className: "opacity-50 hover:opacity-100 transition-all text-white"
}))))), SocialList_default = SocialList;

// app/layouts/MobileNav.jsx
init_react();
var import_react20 = __toESM(require("react")), import_react21 = require("@remix-run/react"), MobileNav = () => /* @__PURE__ */ import_react20.default.createElement("nav", {
  className: "mobile-nav mt-6 w-full "
}, /* @__PURE__ */ import_react20.default.createElement("ul", {
  className: "flex flex-col  border-t-2 border-gray-600"
}, /* @__PURE__ */ import_react20.default.createElement("li", {
  className: "border-b-2 border-gray-600 "
}, /* @__PURE__ */ import_react20.default.createElement(import_react21.NavLink, {
  to: "/",
  className: "mobile-nav-link p-4 py-6"
}, "Home")), /* @__PURE__ */ import_react20.default.createElement("li", {
  className: "border-b-2 border-gray-600 "
}, /* @__PURE__ */ import_react20.default.createElement(import_react21.NavLink, {
  to: "/blog",
  className: "mobile-nav-link p-4 py-6"
}, "Blog")), /* @__PURE__ */ import_react20.default.createElement("li", {
  className: "border-b-2 border-gray-600 "
}, /* @__PURE__ */ import_react20.default.createElement(import_react21.NavLink, {
  to: "/resources",
  className: "mobile-nav-link p-4 py-6"
}, "Resources")), /* @__PURE__ */ import_react20.default.createElement("li", {
  className: "border-b-2 border-gray-600 "
}, /* @__PURE__ */ import_react20.default.createElement(import_react21.NavLink, {
  to: "/about",
  className: "mobile-nav-link p-4 py-6"
}, "About")))), MobileNav_default = MobileNav;

// app/layouts/Nav.jsx
init_react();
var import_react22 = require("@remix-run/react"), import_react23 = __toESM(require("react")), Nav = () => /* @__PURE__ */ import_react23.default.createElement("nav", {
  className: "nav hidden desktop:flex"
}, /* @__PURE__ */ import_react23.default.createElement("ul", {
  className: "flex items-center gap-6"
}, /* @__PURE__ */ import_react23.default.createElement("li", null, /* @__PURE__ */ import_react23.default.createElement(import_react22.NavLink, {
  to: "/",
  className: "nav-link",
  prefetch: "intent"
}, "Home")), /* @__PURE__ */ import_react23.default.createElement("li", null, /* @__PURE__ */ import_react23.default.createElement(import_react22.NavLink, {
  to: "/blog",
  className: "nav-link",
  prefetch: "intent"
}, "Blog")), /* @__PURE__ */ import_react23.default.createElement("li", null, /* @__PURE__ */ import_react23.default.createElement(import_react22.NavLink, {
  to: "/resources",
  className: "nav-link",
  prefetch: "intent"
}, "Resources")), /* @__PURE__ */ import_react23.default.createElement("li", null, /* @__PURE__ */ import_react23.default.createElement(import_react22.NavLink, {
  to: "/about",
  className: "nav-link",
  prefetch: "intent"
}, "About")))), Nav_default = Nav;

// app/layouts/Header.jsx
var Header = () => {
  let user = useSupabase().auth.currentUser, { isMobileNavOpen, toggleMobileNav } = useMobileNav();
  return /* @__PURE__ */ import_react24.default.createElement("header", {
    className: "ml-auto mr-auto flex w-full max-w-screen-2xl flex-col items-center justify-between p-4 tablet:py-8"
  }, /* @__PURE__ */ import_react24.default.createElement("section", {
    className: "flex w-full flex-col items-center justify-between tablet:flex-row"
  }, /* @__PURE__ */ import_react24.default.createElement("div", {
    className: "flex w-full items-center justify-between px-4 tablet:w-fit tablet:px-0"
  }, /* @__PURE__ */ import_react24.default.createElement("h1", {
    className: "mb-4 mt-4 text-2xl text-white sm:mb-0 sm:mt-0"
  }, "Tyrel Chambers"), /* @__PURE__ */ import_react24.default.createElement("div", {
    className: "mobile-toggle flex h-[25px] w-[35px] flex-col justify-between tablet:hidden",
    onClick: () => toggleMobileNav()
  }, /* @__PURE__ */ import_react24.default.createElement("span", {
    className: "h-[3px] w-full bg-gray-400"
  }), /* @__PURE__ */ import_react24.default.createElement("span", {
    className: "h-[3px] w-full bg-gray-400"
  }), /* @__PURE__ */ import_react24.default.createElement("span", {
    className: "h-[3px] w-full bg-gray-400"
  }))), /* @__PURE__ */ import_react24.default.createElement(Nav_default, null), /* @__PURE__ */ import_react24.default.createElement("div", {
    className: "flex items-center gap-4"
  }, /* @__PURE__ */ import_react24.default.createElement(SocialList_default, null)), /* @__PURE__ */ import_react24.default.createElement("div", {
    className: "mobile-toggle hidden h-[25px] w-[35px] flex-col justify-between tablet:flex desktop:hidden",
    onClick: () => toggleMobileNav()
  }, /* @__PURE__ */ import_react24.default.createElement("span", {
    className: "h-[3px] w-full bg-gray-400"
  }), /* @__PURE__ */ import_react24.default.createElement("span", {
    className: "h-[3px] w-full bg-gray-400"
  }), /* @__PURE__ */ import_react24.default.createElement("span", {
    className: "h-[3px] w-full bg-gray-400"
  }))), isMobileNavOpen && /* @__PURE__ */ import_react24.default.createElement(MobileNav_default, null));
}, Header_default = Header;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/case-study/$slug.jsx
var import_react26 = __toESM(require("react"));

// app/case-study.server.js
init_react();
var import_fs = __toESM(require("fs")), import_path = __toESM(require("path")), import_mdx_bundler2 = require("mdx-bundler"), caseStudyiesPath = import_path.default.join(__dirname, "../", "app", "/case-studies-md"), getCaseStudy = async (slug) => {
  let filepath = import_path.default.join(caseStudyiesPath, slug + ".mdx"), file = await import_fs.default.readFileSync(filepath, "utf-8"), { code, frontmatter } = await (0, import_mdx_bundler2.bundleMDX)({
    source: file,
    cwd: caseStudyiesPath
  });
  return { slug, title: frontmatter.title, code };
};

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/case-study/$slug.jsx
var import_react27 = require("@remix-run/react"), import_client2 = require("mdx-bundler/client"), loader5 = async () => ({ caseStudy: await getCaseStudy("reddex") }), $slug2 = () => {
  let { caseStudy } = (0, import_react27.useLoaderData)(), Component = import_react26.default.useMemo(() => (0, import_client2.getMDXComponent)(caseStudy.code), [caseStudy.code]);
  return /* @__PURE__ */ import_react26.default.createElement("div", null, /* @__PURE__ */ import_react26.default.createElement(Header_default, null), /* @__PURE__ */ import_react26.default.createElement("main", {
    className: "ml-auto mr-auto mt-10 max-w-screen-xl p-4"
  }, /* @__PURE__ */ import_react26.default.createElement("div", {
    className: "prose prose-h1:font-normal prose-h1:text-white prose-h2:font-thin prose-h2:text-white prose-h3:font-thin prose-h3:text-white prose-h4:text-white prose-p:text-gray-400 prose-a:text-yellow-300 prose-a:underline prose-strong:text-white prose-code:text-white prose-li:text-gray-400"
  }, /* @__PURE__ */ import_react26.default.createElement(Component, null))));
}, slug_default = $slug2;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/post/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action3,
  default: () => new_default,
  loader: () => loader6
});
init_react();
var import_react29 = require("@remix-run/react");

// app/components/Gap.jsx
init_react();
var import_react28 = __toESM(require("react")), Gap = ({ height = "h-12 desktop:h-48", className = "" }) => /* @__PURE__ */ import_react28.default.createElement("div", {
  className: `w-full ${height} ${className}`
}), Gap_default = Gap;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/post/new.jsx
var import_react_textarea_autosize2 = __toESM(require("react-textarea-autosize"));
var import_react30 = require("react");
var loader6 = ({ request }) => requireUser(request), action3 = async ({ request }) => {
  let formData = await request.formData(), title = formData.get("title"), description = formData.get("description"), cover_img = formData.get("cover_img"), markdown = formData.get("markdown"), tags2 = formData.get("tags"), published = formData.get("published"), slug = title.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-]/g, "").toLowerCase(), formattedTags = JSON.parse(tags2).map((tag) => ({
    value: tag.value,
    label: tag.label
  })), { error } = await supabase2.from("posts").insert({
    title,
    slug,
    markdown,
    tags: formattedTags,
    cover_img,
    description,
    published
  });
  return error ? (console.log(error), { error }) : { ok: !0 };
}, newPost = () => {
  let [state, setState] = (0, import_react30.useState)({
    title: "",
    tags: [],
    description: "",
    cover_img: "",
    markdown: "",
    published: !1
  }), fetcher = (0, import_react29.useFetcher)(), submitHandler = async (e) => {
    fetcher.submit(__spreadProps(__spreadValues({}, state), {
      tags: JSON.stringify(state.tags)
    }), { method: "post" });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "ml-auto mr-auto mt-10 max-w-screen-2xl"
  }, /* @__PURE__ */ React.createElement(AdminHeader_default, null), /* @__PURE__ */ React.createElement(Gap_default, {
    height: "h-12"
  }), /* @__PURE__ */ React.createElement("main", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 w-full max-w-2xl"
  }, /* @__PURE__ */ React.createElement(fetcher.Form, {
    className: "flex flex-col gap-10",
    onSubmit: submitHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title",
    className: "text-xl  text-yellow-300"
  }, "Title"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-gray-400"
  }, "This title is used for cross-posting to other platforms"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    className: "w-full rounded-lg bg-zinc-700 p-4 text-white",
    placeholder: "Post title",
    onChange: (e) => setState(__spreadProps(__spreadValues({}, state), { title: e.target.value })),
    value: state.title
  }), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-sm font-thin text-gray-300"
  }, "https://tyrelchambers.com/blog/", state.title.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-]/g, "").toLowerCase())), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description",
    className: "text-xl  text-yellow-300"
  }, "Description"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-gray-400"
  }, "A brief summary of what this article is about"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "description",
    className: "w-full rounded-lg bg-zinc-700 p-4 text-white",
    placeholder: "Post description",
    onChange: (e) => setState(__spreadProps(__spreadValues({}, state), { description: e.target.value })),
    value: state.description
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "cover_img",
    className: "text-xl  text-yellow-300"
  }, "Cover image URL"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-gray-400"
  }, "This is the image that will be used as the cover image for your post"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "cover_img",
    className: "w-full rounded-lg bg-zinc-700 p-4 text-white",
    placeholder: "Cover image url",
    onChange: (e) => setState(__spreadProps(__spreadValues({}, state), { cover_img: e.target.value })),
    value: state.cover_img
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown",
    className: "text-xl  text-yellow-300"
  }, "Markdown"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-gray-400"
  }, "Your markdown"), /* @__PURE__ */ React.createElement(import_react_textarea_autosize2.default, {
    minRows: 10,
    className: "w-full max-w-3xl rounded-lg bg-zinc-700 p-2 text-white",
    name: "markdown",
    placeholder: "Markdown",
    onChange: (e) => setState(__spreadProps(__spreadValues({}, state), { markdown: e.target.value })),
    value: state.markdown
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 flex flex-col gap-2"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "tags",
    className: "text-xl text-yellow-300"
  }, "Tags"), /* @__PURE__ */ React.createElement(CustomSelect_default, {
    options: tags.map((tag) => __spreadProps(__spreadValues({}, tag), {
      label: tag.name
    })),
    isMulti: !0,
    onChange: (e) => setState(__spreadProps(__spreadValues({}, state), { tags: e }))
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 flex items-center gap-6"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "link-button primary small ",
    type: "submit",
    disabled: fetcher.state === "submitting"
  }, fetcher.state === "submitting" ? "Creating post..." : "Create post"), /* @__PURE__ */ React.createElement("label", {
    className: "text-gray-400"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    name: "published",
    className: "mr-2",
    onClick: (e) => setState(__spreadProps(__spreadValues({}, state), { published: e.target.checked })),
    checked: state.published
  }), "Publish now"))))));
}, new_default = newPost;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/admin/index.jsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default,
  loader: () => loader7
});
init_react();
var import_react31 = __toESM(require("react"));
var loader7 = ({ request }) => requireUser(request), admin = () => /* @__PURE__ */ import_react31.default.createElement("div", {
  className: "ml-auto mr-auto mt-10 max-w-screen-2xl"
}, /* @__PURE__ */ import_react31.default.createElement(AdminHeader_default, null)), admin_default = admin;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/blog/$slug.jsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => slug_default2,
  loader: () => loader8,
  meta: () => meta2
});
init_react();
var import_react41 = require("@remix-run/react");

// app/components/Divider.jsx
init_react();
var import_react32 = __toESM(require("react")), Divider = () => /* @__PURE__ */ import_react32.default.createElement("div", {
  className: "h-[1px] w-full max-w-[30px] rounded-lg bg-gray-500"
}), Divider_default = Divider;

// app/layouts/Footer.jsx
init_react();
var import_react35 = require("@remix-run/react"), import_react36 = __toESM(require("react"));

// app/utils/index.js
init_react();
var import_react33 = require("@remix-run/react"), import_react34 = require("react");
function useMatchesData(id) {
  let matchingRoutes = (0, import_react33.useMatches)(), route = (0, import_react34.useMemo)(() => matchingRoutes.find((route2) => route2.id === id), [matchingRoutes, id]);
  return route == null ? void 0 : route.data;
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!!data.user)
    return data.user;
}

// app/layouts/Footer.jsx
var Footer = () => {
  let supabase3 = useSupabase(), user = useOptionalUser();
  return /* @__PURE__ */ import_react36.default.createElement("footer", {
    className: "border-t-[1px] border-zinc-600 bg-zinc-800 py-10 sm:py-20"
  }, /* @__PURE__ */ import_react36.default.createElement("div", {
    className: "ml-auto mr-auto grid max-w-screen-md grid-cols-1 gap-10 p-4 sm:grid-cols-2 sm:gap-20"
  }, /* @__PURE__ */ import_react36.default.createElement("div", {
    className: "flex flex-col "
  }, /* @__PURE__ */ import_react36.default.createElement("h3", {
    className: "h3"
  }, "Tyrel Chambers"), /* @__PURE__ */ import_react36.default.createElement("p", {
    className: "mt-6 mb-6 text-gray-400"
  }, "Building software and teaching people about what I love the most"), /* @__PURE__ */ import_react36.default.createElement(SocialList_default, null)), /* @__PURE__ */ import_react36.default.createElement("div", {
    className: "flex gap-10"
  }, /* @__PURE__ */ import_react36.default.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ import_react36.default.createElement("h4", {
    className: "h4"
  }, "Contact"), /* @__PURE__ */ import_react36.default.createElement("ul", {
    className: "mt-4"
  }, /* @__PURE__ */ import_react36.default.createElement("li", {
    className: "w-fit"
  }, /* @__PURE__ */ import_react36.default.createElement("a", {
    href: "mailto:tychambers3@gmail.com",
    className: "nav-link w-fit"
  }, "Email me")))), /* @__PURE__ */ import_react36.default.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ import_react36.default.createElement("h4", {
    className: "h4"
  }, "Admin"), /* @__PURE__ */ import_react36.default.createElement("ul", {
    className: "mt-4"
  }, user ? /* @__PURE__ */ import_react36.default.createElement("li", {
    className: "w-fit"
  }, /* @__PURE__ */ import_react36.default.createElement(import_react35.Form, {
    method: "delete",
    action: "/signout"
  }, /* @__PURE__ */ import_react36.default.createElement("button", {
    type: "submit",
    className: "nav-link w-fit"
  }, "Sign out"))) : /* @__PURE__ */ import_react36.default.createElement("li", {
    className: "w-fit"
  }, /* @__PURE__ */ import_react36.default.createElement(import_react35.Link, {
    to: "/login",
    className: "nav-link w-fit"
  }, "Login")), user && /* @__PURE__ */ import_react36.default.createElement("li", {
    className: "w-fit"
  }, /* @__PURE__ */ import_react36.default.createElement(import_react35.Link, {
    to: "/admin",
    className: "nav-link w-fit"
  }, "Admin")))))), /* @__PURE__ */ import_react36.default.createElement("p", {
    className: "mt-6 text-center text-gray-500"
  }, "All rights reserved \xA9 ", new Date(Date.now()).getFullYear(), ". Tyrel Chambers."));
}, Footer_default = Footer;

// app/layouts/PostFooter.jsx
init_react();

// app/components/AuthorCard.jsx
init_react();
var import_react37 = __toESM(require("react"));
var AuthorCard = () => /* @__PURE__ */ import_react37.default.createElement("div", {
  className: "w-full rounded-3xl border-2 border-zinc-700 p-4 tablet:p-10"
}, /* @__PURE__ */ import_react37.default.createElement("div", {
  className: "flex flex-col gap-20 tablet:flex-row"
}, /* @__PURE__ */ import_react37.default.createElement("img", {
  src: "https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/images/me.webp",
  alt: "",
  className: "w-full max-w-[200px] rounded-lg object-cover shadow-lg"
}), /* @__PURE__ */ import_react37.default.createElement("div", {
  className: "flex flex-col"
}, /* @__PURE__ */ import_react37.default.createElement("h3", {
  className: "h3"
}, "Tyrel Chambers"), /* @__PURE__ */ import_react37.default.createElement("p", {
  className: "mt-4 mb-10 text-xl text-gray-400"
}, "I'm a software engineer and indie developer living in Ontario, Canada. I love day-dreaming new ideas and using my free time to bring them to life."), /* @__PURE__ */ import_react37.default.createElement(SocialList_default, null)))), AuthorCard_default = AuthorCard;

// app/layouts/PostFooter.jsx
var import_react38 = __toESM(require("react")), PostFooter = ({ postTitle, slug }) => /* @__PURE__ */ import_react38.default.createElement("div", {
  className: "ml-auto mr-auto w-full max-w-screen-lg p-4"
}, /* @__PURE__ */ import_react38.default.createElement("div", {
  className: "tablrt:px-10 flex flex-col gap-4 p-4 tablet:flex-row tablet:justify-between tablet:py-5"
}, /* @__PURE__ */ import_react38.default.createElement("a", {
  href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"I just read ${postTitle}" \u{1F973} by @imtyrelchambers 

`)}&url=${encodeURIComponent(`https://tyrelchambers/blog/${slug}`)}`,
  className: " text-lg text-yellow-300 opacity-80 transition-all hover:opacity-100"
}, "Tweet this article"), /* @__PURE__ */ import_react38.default.createElement("a", {
  href: "https://www.github.com/tyrelchambers/tyrelchambers.com",
  className: " text-lg text-yellow-300 opacity-80 transition-all hover:opacity-100"
}, "See an issue? Open one on Github.")), /* @__PURE__ */ import_react38.default.createElement(AuthorCard_default, null)), PostFooter_default = PostFooter;

// app/components/PostItem.jsx
init_react();
var import_react39 = require("@remix-run/react"), import_react40 = __toESM(require("react"));
var PostItem = ({ post }) => /* @__PURE__ */ import_react40.default.createElement("div", {
  className: "post-item"
}, /* @__PURE__ */ import_react40.default.createElement("img", {
  src: post.cover_img,
  alt: "",
  className: "h-full w-full object-cover transition-all"
}), /* @__PURE__ */ import_react40.default.createElement("div", {
  className: "post-item-body  absolute z-10 flex h-[250px] w-full flex-col justify-start p-6"
}, /* @__PURE__ */ import_react40.default.createElement("h3", {
  className: "h3 post-item-title transition-all"
}, post.title), /* @__PURE__ */ import_react40.default.createElement("p", {
  className: "post-item-description mt-4 text-gray-400  opacity-0"
}, truncateString(post.description, 50)), /* @__PURE__ */ import_react40.default.createElement(import_react39.Link, {
  to: `/blog/${post.slug}`,
  className: "link-button small secondary post-item-cta mt-8 opacity-0",
  prefetch: "intent"
}, "Read post ", /* @__PURE__ */ import_react40.default.createElement("i", {
  className: "fa-solid fa-arrow-right-long"
}))), /* @__PURE__ */ import_react40.default.createElement("div", {
  className: "gradient"
})), PostItem_default = PostItem;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/blog/$slug.jsx
var import_react42 = __toESM(require("react")), import_date_fns = require("date-fns");

// app/utils/getArticleSuggestions.js
init_react();

// app/utils/randomInt.js
init_react();
function getRandomInt(min, max) {
  return min = Math.ceil(min), max = Math.floor(max), Math.floor(Math.random() * (max - min + 1)) + min;
}

// app/utils/getArticleSuggestions.js
var getArticleSuggestions = ({
  articles: articles2,
  count = 2,
  recent = !1
}) => {
  let articlePool = articles2, randArticles = [];
  if (recent)
    return articlePool.slice(articlePool.length - 3);
  for (let i = 0; i < count; i++) {
    let randomIndex = getRandomInt(0, articlePool.length - 1), art = articlePool.splice(randomIndex, 1)[0];
    randArticles.push(art);
  }
  return randArticles;
};

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/blog/$slug.jsx
var import_tiny_invariant3 = __toESM(require("tiny-invariant")), meta2 = ({ data }) => data ? {
  title: data.post.title,
  description: data.post.description,
  "og:image": data.post.cover_img,
  "og:url": `https://tyrelchambers.com/blog/${data.post.slug}`,
  "twitter:card": data.post.cover_img ? "summary_large_image" : "summary",
  "twitter:title": data.post.title,
  "twitter:description": data.post.description,
  "twitter:image": data.post.cover_img,
  "twitter:site": "@imtyrelchambers",
  "twitter:creator": "@imtyrelchambers",
  "og:site_name": "Tyrel Chambers",
  "og:locale": "en_US",
  "og:type": "article",
  "og:title": data.post.title,
  "og:description": data.post.description
} : {
  title: "No post found",
  description: "No post found"
}, loader8 = async ({ params }) => {
  (0, import_tiny_invariant3.default)(params.slug, "expected params.slug");
  let { posts } = await getPosts(), { post, markdown } = await getPost(params.slug);
  if (await triggerView(post.id), !post)
    throw new Response("Not Found", {
      status: 404
    });
  let suggestions = getArticleSuggestions({ articles: posts, count: 3 });
  return { post, suggestions, markdown };
}, PostSlug = () => {
  let { post, suggestions, markdown } = (0, import_react41.useLoaderData)();
  return /* @__PURE__ */ import_react42.default.createElement("div", null, /* @__PURE__ */ import_react42.default.createElement(Header_default, null), /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "ml-auto mr-auto mt-20 max-w-screen-md p-4"
  }, /* @__PURE__ */ import_react42.default.createElement(import_react41.Link, {
    to: "/blog",
    className: "text-white"
  }, /* @__PURE__ */ import_react42.default.createElement("i", {
    className: "fa-solid fa-arrow-left-long mr-8"
  }), "Back to blogs"), /* @__PURE__ */ import_react42.default.createElement(Gap_default, {
    height: "h-20"
  }), /* @__PURE__ */ import_react42.default.createElement("img", {
    src: post.cover_img,
    alt: "",
    className: "mb-10 h-[500px] w-full rounded-lg object-cover shadow-lg"
  }), /* @__PURE__ */ import_react42.default.createElement("h1", {
    className: "h1 "
  }, post.title), /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "mb-10 flex items-center gap-4 "
  }, /* @__PURE__ */ import_react42.default.createElement("p", {
    className: "text-teal-400"
  }, (0, import_date_fns.format)(new Date(post.created_at), "MMMM do, yyyy")), /* @__PURE__ */ import_react42.default.createElement(Divider_default, null), /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "flex items-center gap-2"
  }, /* @__PURE__ */ import_react42.default.createElement("i", {
    className: "fa-solid fa-face-grin-hearts text-yellow-500"
  }), /* @__PURE__ */ import_react42.default.createElement("p", {
    className: "text-gray-300"
  }, post.views))), /* @__PURE__ */ import_react42.default.createElement(MarkdownRender_default, {
    markdown
  })), /* @__PURE__ */ import_react42.default.createElement(Gap_default, {
    height: "h-12"
  }), /* @__PURE__ */ import_react42.default.createElement(PostFooter_default, {
    postTitle: post.title,
    slug: post.slug
  }), /* @__PURE__ */ import_react42.default.createElement(Gap_default, null), /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "ml-auto mr-auto flex max-w-screen-xl flex-col p-4"
  }, /* @__PURE__ */ import_react42.default.createElement("h2", {
    className: "h2"
  }, "If you enjoyed this article"), /* @__PURE__ */ import_react42.default.createElement("p", {
    className: "subtitle"
  }, "You might enjoy one of these suggestions"), /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3"
  }, suggestions.map((post2) => /* @__PURE__ */ import_react42.default.createElement(PostItem_default, {
    key: post2.slug,
    post: post2
  })))), /* @__PURE__ */ import_react42.default.createElement(Gap_default, null), /* @__PURE__ */ import_react42.default.createElement(Footer_default, null));
}, slug_default2 = PostSlug;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/blog/index.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default,
  loader: () => loader9,
  meta: () => meta3
});
init_react();
var import_react45 = require("@remix-run/react");

// app/components/BlogPosts.jsx
init_react();
var import_react43 = __toESM(require("react")), BlogPosts = ({ posts, query }) => {
  let tagRegex = new RegExp(query, "i");
  return posts.filter((post) => query ? post.title.toLowerCase().includes(query) || post.tags.filter((tag) => tagRegex.test(tag.name || tag.label)).length > 0 : post).map((post) => /* @__PURE__ */ import_react43.default.createElement(PostItem_default, {
    key: post.title + "_" + post.id,
    post
  }));
}, BlogPosts_default = BlogPosts;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/blog/index.jsx
var import_react_router_dom = require("react-router-dom"), import_react46 = __toESM(require("react"));

// app/layouts/SectionHero.jsx
init_react();
var import_react44 = __toESM(require("react")), import_framer_motion = require("framer-motion"), SectionHero = ({ leftCol, rightCol, maxWidth = "max-w-screen-xl" }) => {
  let variants = {
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5 }
    }
  };
  return /* @__PURE__ */ import_react44.default.createElement(import_framer_motion.motion.section, {
    initial: "hidden",
    animate: "visible",
    variants,
    className: `ml-auto mr-auto flex w-full ${maxWidth} flex-col-reverse items-center gap-8 p-4 tablet:flex-row desktop:gap-20`
  }, /* @__PURE__ */ import_react44.default.createElement("div", {
    className: "flex w-full flex-col items-start desktop:w-1/2"
  }, leftCol), /* @__PURE__ */ import_react44.default.createElement("div", {
    className: "ml-auto mr-auto  w-full max-w-lg desktop:w-1/2"
  }, rightCol));
}, SectionHero_default = SectionHero;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/blog/index.jsx
var import_react47 = require("@remix-run/react");

// app/utils/misc.js
init_react();
var useUpdateQueryStringValueWithoutNavigation = (queryKey, queryValue) => {
  React.useEffect(() => {
    let currentSearchParams = new URLSearchParams(window.location.search), oldQuery = currentSearchParams.get(queryKey) ?? "";
    if (queryValue === oldQuery)
      return;
    queryValue ? currentSearchParams.set(queryKey, queryValue) : currentSearchParams.delete(queryKey);
    let newUrl = [window.location.pathname, currentSearchParams.toString()].filter(Boolean).join("?");
    window.history.replaceState(null, "", newUrl);
  }, [queryKey, queryValue]);
};

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/blog/index.jsx
var meta3 = () => ({
  title: "Tyrel Chambers | Blog",
  description: "Articles about web development, programming, and life."
}), loader9 = async () => {
  let { posts } = await getPosts();
  return { posts };
}, index2 = () => {
  let { posts } = (0, import_react45.useLoaderData)(), postsTags = posts.reduce((acc, post, i) => (post.tags.forEach((tag) => {
    acc.includes(tag) || acc.push(tag);
  }), acc), []).filter((tag, i, self) => i === self.findIndex((t) => t.value === tag.value)), [searchParams] = (0, import_react47.useSearchParams)(), featuredPost = posts.filter((post) => post.featured)[0], [queryValue, setQuery] = import_react46.default.useState(() => searchParams.get("q") ?? ""), query = queryValue.trim();
  return useUpdateQueryStringValueWithoutNavigation("q", query), /* @__PURE__ */ import_react46.default.createElement("div", null, /* @__PURE__ */ import_react46.default.createElement(Header_default, null), /* @__PURE__ */ import_react46.default.createElement(Gap_default, {
    height: "h-20"
  }), /* @__PURE__ */ import_react46.default.createElement("main", {
    className: "ml-auto mr-auto mb-20 max-w-screen-xl"
  }, /* @__PURE__ */ import_react46.default.createElement(SectionHero_default, {
    leftCol: /* @__PURE__ */ import_react46.default.createElement(import_react46.default.Fragment, null, /* @__PURE__ */ import_react46.default.createElement("h1", {
      className: "h1"
    }, "Welcome to my growing collection of articles"), /* @__PURE__ */ import_react46.default.createElement("p", {
      className: "subtitle"
    }, "I write mainly for myself, but hopefully they help you too!"), /* @__PURE__ */ import_react46.default.createElement(import_react45.Form, {
      action: "/blog",
      method: "GET",
      onSubmit: (e) => e.preventDefault(),
      className: "w-full"
    }, /* @__PURE__ */ import_react46.default.createElement("input", {
      type: "search",
      placeholder: "Search for articles",
      className: "mt-6 w-full rounded-full border-2 border-gray-500 bg-zinc-800 bg-opacity-20 p-6 text-white tablet:mt-16",
      onChange: (event) => setQuery(event.currentTarget.value.toLowerCase())
    }))),
    rightCol: /* @__PURE__ */ import_react46.default.createElement(import_react46.default.Fragment, null, /* @__PURE__ */ import_react46.default.createElement("h2", {
      className: "h3 mb-6"
    }, "Featured article"), /* @__PURE__ */ import_react46.default.createElement("div", {
      className: "flex w-full flex-col rounded-lg  bg-zinc-800 shadow-lg"
    }, /* @__PURE__ */ import_react46.default.createElement("img", {
      src: featuredPost.cover_img,
      alt: "",
      className: "mb-4 h-52 w-full rounded-lg  object-cover"
    }), /* @__PURE__ */ import_react46.default.createElement("div", {
      className: "p-6"
    }, /* @__PURE__ */ import_react46.default.createElement("h3", {
      className: "h3"
    }, featuredPost.title), /* @__PURE__ */ import_react46.default.createElement("p", {
      className: "mt-4 text-xl text-gray-400"
    }, featuredPost.description), /* @__PURE__ */ import_react46.default.createElement(import_react_router_dom.Link, {
      to: `/blog/${featuredPost.slug}`,
      className: "link-button small secondary mt-6"
    }, "Read post", /* @__PURE__ */ import_react46.default.createElement("i", {
      className: "fa-solid fa-arrow-right-long"
    })))))
  }), /* @__PURE__ */ import_react46.default.createElement(Gap_default, {
    height: "h-12 desktop:h-28",
    className: ""
  }), /* @__PURE__ */ import_react46.default.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ import_react46.default.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ import_react46.default.createElement("h3", {
    className: "h3"
  }, "Search by tag"), /* @__PURE__ */ import_react46.default.createElement("div", {
    className: "mt-8 flex max-w-3xl flex-wrap gap-2"
  }, /* @__PURE__ */ import_react46.default.createElement("label", {
    className: `whitespace-nowrap rounded-full border-2 bg-zinc-800  p-3 px-6 text-gray-200 ${query === "" ? "border-yellow-300" : "border-transparent"}`,
    onClick: () => {
      setQuery("");
    }
  }, /* @__PURE__ */ import_react46.default.createElement("input", {
    type: "checkbox",
    name: "",
    id: "",
    className: "sr-only"
  }), /* @__PURE__ */ import_react46.default.createElement("span", null, "All")), postsTags.map((tag, id) => {
    var _a, _b, _c;
    return /* @__PURE__ */ import_react46.default.createElement("label", {
      className: `whitespace-nowrap rounded-full border-2 bg-zinc-800  p-3 px-6 text-gray-200 ${query.includes((_a = tag.name || tag.label) == null ? void 0 : _a.toLowerCase()) ? "border-yellow-300" : "border-transparent"}`,
      onClick: () => {
        setQuery((tag.name || tag.label).toLowerCase());
      },
      key: id
    }, /* @__PURE__ */ import_react46.default.createElement("input", {
      type: "checkbox",
      name: "",
      id: "",
      className: "sr-only"
    }), /* @__PURE__ */ import_react46.default.createElement("span", null, ((_b = tag.name) == null ? void 0 : _b.toLowerCase()) || ((_c = tag.label) == null ? void 0 : _c.toLowerCase()) || null));
  })))), /* @__PURE__ */ import_react46.default.createElement(Gap_default, {
    height: "h-12 desktop:h-28"
  }), /* @__PURE__ */ import_react46.default.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ import_react46.default.createElement("p", {
    className: "h3"
  }, "Showing ", /* @__PURE__ */ import_react46.default.createElement("span", null, query ? `{ ${query} }` : "{ all }"), " articles"), /* @__PURE__ */ import_react46.default.createElement("div", {
    className: "mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3"
  }, /* @__PURE__ */ import_react46.default.createElement(BlogPosts_default, {
    posts,
    query
  })))), /* @__PURE__ */ import_react46.default.createElement(Footer_default, null));
}, blog_default = index2;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/resources.jsx
var resources_exports = {};
__export(resources_exports, {
  default: () => resources_default,
  loader: () => loader10,
  meta: () => meta4
});
init_react();
var import_react49 = __toESM(require("react"));

// app/constants/resources.js
init_react();
var import_react48 = require("react"), analytics = {
  title: "Analytics",
  children: [
    {
      title: "Plausible",
      url: "https://plausible.io/",
      description: "Plausible Analytics is an open-source project dedicated to making web analytics more privacy-friendly."
    }
  ]
}, photography = {
  title: "Photography",
  children: [
    {
      title: "Unsplash",
      url: "https://unsplash.com/",
      description: "Great for finding beautiful landscape images"
    },
    {
      title: "Gratisography",
      url: "https://gratisography.com/",
      description: "Provides goofy pictures for a light feel"
    },
    {
      title: "Subtle Patterns",
      url: "https://www.toptal.com/designers/subtlepatterns/",
      description: "Find subtle texture patterns"
    }
  ]
}, tutorials = {
  title: "Tutorials",
  children: [
    {
      title: "Codecademy",
      url: "https://www.codecademy.com/",
      description: "Use interactive tutorials to build your skills"
    },
    {
      title: "FreeCodeCamp",
      url: "https://www.codecademy.com/",
      description: "In depth tutorials from a wide range of languages"
    },
    {
      title: "Code Fights",
      url: "https://codefights.com/",
      description: "Practice your skills with others"
    },
    {
      title: "Code Wars",
      url: "https://www.codewars.com/",
      description: "Use challenges to hone your skills"
    },
    {
      title: "Go Lang",
      url: "https://golang.org/",
      description: "A good resource for learning Go Lang"
    },
    {
      title: "Css-Tricks",
      url: "https://css-tricks.com/",
      description: "Learn about common Html and CSS tricks (very useful)"
    },
    {
      title: "Udemy",
      url: "https://www.udemy.com/",
      description: "My favourite tool for getting high quality video courses on a variety of topics"
    },
    {
      title: "Lynda",
      url: "https://www.lynda.com/",
      description: "Another great tool for video courses"
    }
  ]
}, codeResources = {
  title: "Code Resources",
  children: [
    {
      title: "Codrops",
      url: "https://tympanus.net/codrops/",
      description: "Complex examples of cool code design and behaviour"
    },
    {
      title: "Bulma",
      url: "https://bulma.io/",
      description: "Light weight CSS framework"
    },
    {
      title: "Font Awesome",
      url: "https://fontawesome.com/",
      description: "Fantastic resource for finding icons"
    },
    {
      title: "Google Fonts",
      url: "https://fonts.google.com/",
      description: "Resource for fonts"
    },
    {
      title: "CSS Matic",
      url: "https://www.cssmatic.com/",
      description: "Handy little resource for gradients and shadows"
    },
    {
      title: "Coggle",
      url: "https://coggle.it/",
      description: "Mind mapping tool to help organize your projects"
    },
    {
      title: "Codepen",
      url: "https://codepen.io/",
      description: "Sandbox playground for testing and writing quick code"
    }
  ]
}, sourceControl = {
  title: "Source Control",
  children: [
    {
      title: "Github",
      url: "https://github.com/",
      description: "Powerful tool for storing your code"
    },
    {
      title: "Gitlab",
      url: "https://gitlab.com",
      description: "A great tool for version control, with private repo's"
    }
  ]
}, cheatSheets = {
  title: "Cheat Sheets",
  children: [
    {
      title: "Emmet",
      url: "https://docs.emmet.io/cheat-sheet/",
      description: "Cheat sheet for a powerful coding tool"
    },
    {
      title: "PostgreSQL",
      url: "https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546",
      description: "Cheat sheet for PostgreSQL"
    }
  ]
}, colourPickers = {
  title: "Colour Pickers",
  children: [
    {
      title: "Material.io",
      url: "https://material.io/guidelines/style/color.html#color-color-palette",
      description: "Colour picker"
    },
    {
      title: "Flat UI Color Picker",
      url: "http://www.flatuicolorpicker.com/",
      description: "Find beautiful flat colours."
    },
    {
      title: "Adobe Color Wheel",
      url: "https://color.adobe.com/create/color-wheel/?base=2&rule=Analogous&selected=4&name=My%20Color%20Theme&mode=rgb&rgbvalues=1,0.8120800903086206,0.050000000000000044,0.91,0.4345013792222775,0.04550000000000004,1,0,0,0.6540623557406823,0.04550000000000004,0.91,0.11441763017496764,0.2319640517053544,1&swatchOrder=0,1,2,3,4",
      description: "Tool for finding the right colour combinations"
    },
    {
      title: "Coolors",
      url: "https://coolors.co/",
      description: "Find beautiful colours"
    }
  ]
}, articles = {
  title: "Articles",
  children: [
    {
      title: "How to setup up Nginx server blocks on Ubuntu 14.04",
      url: "https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-14-04-lts",
      description: "Learn how to configure Nginx on your Ubuntu 14.04 server"
    },
    {
      title: "Good UI",
      url: "http://goodui.org/",
      description: "A good resource for learning Good UI"
    },
    {
      title: "Sass Guidelines",
      url: "https://sass-guidelin.es/",
      description: "Learn important formatting for Sass"
    },
    {
      title: "How To Be A Programmer",
      url: "https://github.com/braydie/HowToBeAProgrammer/blob/master/README.md",
      description: "Get an in-depth look at becoming a programmer"
    },
    {
      title: "Create a Web Design Style Guide",
      url: "https://designmodo.com/create-style-guides/",
      description: "Learn how to create a design style guide"
    },
    {
      title: "Angular 2 HTTP Requests with Observables",
      url: "https://scotch.io/tutorials/angular-2-http-requests-with-observables",
      description: "While a bit outdated, this resource can help explain the idea behind observables"
    },
    {
      title: "Getting Started with Redux",
      url: "https://egghead.io/courses/getting-started-with-redux",
      description: "Video resource for learning Redux"
    },
    {
      title: "Devise",
      url: "http://devise.plataformatec.com.br/#starting-with-rails",
      description: "Guide for the Devise gem"
    },
    {
      title: "Building a Rails and Simple Form Contact Form",
      url: "https://rubyonrailshelp.wordpress.com/2014/01/08/rails-4-simple-form-and-mail-form-to-make-contact-form/",
      description: "An article that helped guide me to making a contact for in Rails"
    },
    {
      title: "Building a Web App with Go Lang",
      url: "http://blog.scottlogic.com/2017/02/28/building-a-web-app-with-go.html",
      description: "Guide to building your own web app with Go Lang"
    },
    {
      title: "FreeCodeCamp Guide",
      url: "https://guide.freecodecamp.org/",
      description: "In-depth guide to various programming elements"
    },
    {
      title: "Simple React Router Guide",
      url: "https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf",
      description: "Simple guide to building out your React Router"
    },
    {
      title: " 37 Best Sites to Learn Something New",
      url: "https://entrepreneurs.maqtoob.com/the-37-best-websites-to-learn-something-new-895e2cb0cad4#.8e0i2le4f"
    }
  ]
}, servers = {
  title: "Servers",
  children: [
    {
      title: "DigitalOcean",
      url: "https://www.digitalocean.com/",
      description: "Find affordable servers to host your websites"
    }
  ]
}, communication = {
  title: "Communication",
  children: [
    {
      title: "Slack",
      url: "https://slack.com/",
      description: "Incredibly useful tool for team communication"
    }
  ]
}, designSoftware = {
  title: "Design Software",
  children: [
    {
      title: "Affinity Photo",
      url: "https://affinity.serif.com/en-gb/photo/",
      description: "My preferred choice of photo editing software"
    },
    {
      title: "Affinity Designer",
      url: "https://affinity.serif.com/en-gb/",
      description: "My preferred choice of vector design software"
    },
    {
      title: "Adobe Illustrator",
      url: "https://www.adobe.com/ca/products/illustrator.html?sdid=KKQML&mv=search&s_kwcid=AL!3085!3!227016237334!e!!g!!adobe%20illustrator&ef_id=Wnju7AAAAJq3SxvV:20180205235524:s",
      description: "Subscription based vector design"
    },
    {
      title: "Adobe Photoshop",
      url: "https://www.adobe.com/ca/products/photoshop.html",
      description: "Subscription based photo editing"
    },
    {
      title: "Sketch",
      url: "https://www.sketchapp.com/",
      description: "Mac OS based prototyping tool"
    },
    {
      title: "Invision",
      url: "https://www.invisionapp.com/",
      description: "Prototyping tool"
    }
  ]
}, projectManagement = {
  title: "Project Management",
  children: [
    {
      title: "Jira",
      url: "https://www.atlassian.com/software/jira?aceid=&adposition=1t1&adgroup=9124126102&campaign=189395542&creative=246574799455&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p19481529617&gclid=EAIaIQobChMIvuK2z_SM2QIVVrXACh3sCgPgEAAYASAAEgIuhvD_BwE&gclsrc=aw.ds",
      description: "Fully rounded project management software"
    },
    {
      title: "Trello",
      url: "https://trello.com/",
      description: "Simple Kanban software for easy project management"
    },
    {
      title: "Clickup",
      url: "https://clickup.com",
      description: "Plan, track, and manage any type of work with project management that flexes to your team's needs."
    }
  ]
}, books = {
  title: "Books",
  children: [
    {
      title: "Crushing It!",
      author: "Gary Vaynerchuck",
      img: "crushingit.webp",
      url: "https://www.amazon.ca/Crushing-Great-Entrepreneurs-Business-Influence-ebook/dp/B072DV2GHG/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1517777443&sr=1-1&keywords=crushing+it"
    },
    {
      title: "ReWork",
      author: "Jason Fried, David Heinemeler Hansson",
      img: "rework.webp",
      url: "https://www.amazon.ca/Rework-Jason-Fried/dp/0307463745/ref=sr_1_1?s=books&ie=UTF8&qid=1517779185&sr=1-1&keywords=rework"
    },
    {
      title: "Practical Modern Javascript",
      author: "Nicolas Bevacqua",
      img: "practicaljs.webp",
      url: "https://www.amazon.ca/Practical-Modern-JavaScript-Dive-Future/dp/149194353X/ref=sr_1_1?ie=UTF8&qid=1517778485&sr=8-1&keywords=practical+modern+javascript"
    },
    {
      title: "The Rails 5 Way",
      author: "Obie Fernandez",
      img: "rails5.webp",
      url: "https://www.amazon.ca/Rails-5-Way-4th/dp/0134657675/ref=sr_1_1?s=books&ie=UTF8&qid=1517778549&sr=1-1&keywords=rails+5+way"
    },
    {
      title: "You Don't Know JS: Up & Going",
      author: "Kyle Simpson",
      img: "ydkjs.webp",
      url: "https://www.amazon.ca/You-Dont-Know-JS-Going/dp/1491924462/ref=sr_1_2?s=books&ie=UTF8&qid=1517778620&sr=1-2&keywords=you+dont+know+js"
    },
    {
      title: "You Don't Know JS: Scopes & Closures",
      author: "Kyle Simpson",
      img: "ydkjs2.webp",
      url: "https://www.amazon.ca/You-Dont-Know-JS-Closures/dp/1449335586/ref=sr_1_4?s=books&ie=UTF8&qid=1517778620&sr=1-4&keywords=you+dont+know+js"
    },
    {
      title: "You Don't Know JS: Async & Performance",
      author: "Kyle Simpson",
      img: "ydkjs3.webp",
      url: "https://www.amazon.ca/You-Dont-Know-JS-Performance/dp/1491904224/ref=sr_1_6?s=books&ie=UTF8&qid=1517778620&sr=1-6&keywords=you+dont+know+js"
    },
    {
      title: "You Don't Know JS: ES6 & Beyond",
      author: "Kyle Simpson",
      img: "ydkjs4.webp",
      url: "https://www.amazon.ca/You-Dont-Know-JS-Beyond/dp/1491904240/ref=sr_1_5?s=books&ie=UTF8&qid=1517778620&sr=1-5&keywords=you+dont+know+js"
    },
    {
      title: "You Don't Know JS: this & Object Prototype",
      author: "Kyle Simpson",
      img: "ydkjs5.webp",
      url: "https://www.amazon.ca/You-Dont-Know-JS-Prototypes/dp/1491904151/ref=sr_1_3?s=books&ie=UTF8&qid=1517778620&sr=1-3&keywords=you+dont+know+js"
    },
    {
      title: "You Don't Know JS: Types & Grammar",
      author: "Kyle Simpson",
      img: "ydkjs6.webp",
      url: "https://www.amazon.ca/You-Dont-Know-JS-Grammar/dp/1491904194/ref=sr_1_1?s=books&ie=UTF8&qid=1517778620&sr=1-1&keywords=you+dont+know+js"
    }
  ]
}, baas = {
  title: "BaaS / PaaS",
  children: [
    {
      title: "Firebase",
      url: "https://firebase.google.com/",
      description: "Firebase is a platform developed by Google for creating mobile and web applications. "
    },
    {
      title: "AWS",
      url: "https://aws.amazon.com/",
      description: "Amazon Web Services (AWS) is a web-based cloud computing platform that allows you to develop, host, and manage applications and services on the Internet."
    },
    {
      title: "Google Cloud Platform",
      url: "https://cloud.google.com/",
      description: "Google Cloud Platform is a suite of cloud computing services and products that enable developers to build, deploy, and manage cloud applications."
    },
    {
      title: "Microsoft Azure",
      url: "https://azure.microsoft.com/en-us/",
      description: "Microsoft Azure is a cloud computing platform that provides a secure, scalable, and reliable cloud infrastructure for building, deploying, and managing applications and services."
    },
    {
      title: "Heroku",
      url: "https://www.heroku.com/",
      description: "Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud."
    },
    {
      title: "Supabase",
      url: "https://supabase.com/",
      description: "Supabase is an open-source PaaS that provides a fully-managed, cloud-based database for your applications."
    }
  ]
}, photoEditors = {
  title: "Photo Editors",
  children: [
    {
      title: "Edit.photo",
      url: "https://edit.photo/",
      description: "Edit.photo is a free online photo editor."
    }
  ]
}, resources = [
  analytics,
  photography,
  tutorials,
  codeResources,
  sourceControl,
  cheatSheets,
  colourPickers,
  articles,
  servers,
  communication,
  designSoftware,
  projectManagement,
  books,
  baas,
  photoEditors
];

// app/images.server.js
init_react();
var import_fs2 = __toESM(require("fs")), import_path2 = __toESM(require("path"));
function getImage(filename) {
  let imagesPath = import_path2.default.join(__dirname, "../public", "/images/"), image = import_fs2.default.readdirSync(imagesPath).find((image2) => image2.includes(filename));
  return import_fs2.default.readFileSync(`${imagesPath}${image}`, "base64");
}

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/resources.jsx
var import_react50 = require("@remix-run/react"), meta4 = () => ({
  "og:image": "https://images.unsplash.com/photo-1499744349893-0c6de53516e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  "og:url": "https://tyrelchambers.com/resources",
  "twitter:card": "summary_large_image",
  "twitter:title": "Wonderfully curated resources",
  "twitter:description": "A helpful list of resources to get you started",
  "twitter:image": "https://images.unsplash.com/photo-1499744349893-0c6de53516e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  "twitter:site": "@imtyrelchambers",
  "twitter:creator": "@imtyrelchambers",
  "og:site_name": "Tyrel Chambers",
  "og:locale": "en_US",
  "og:type": "article",
  "og:title": "Wonderfully curated resources",
  "og:description": "A helpful list of resources to get you started"
}), loader10 = async () => {
  let data = resources;
  for (let index3 = 0; index3 < data.length; index3++) {
    let element = data[index3];
    for (let j = 0; j < element.children.length; j++) {
      let child = element.children[j];
      child.img && (child.imageURL = await getImage(child.img)), element.children[j] = child;
    }
  }
  return data;
}, resources2 = () => {
  let data = (0, import_react50.useLoaderData)(), [searchParams] = (0, import_react50.useSearchParams)(), filteredList = data.sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0).map((item) => item.title), [queryValue, setQuery] = import_react49.default.useState(() => searchParams.get("q") ?? "");
  return useUpdateQueryStringValueWithoutNavigation("q", queryValue), /* @__PURE__ */ import_react49.default.createElement("div", null, /* @__PURE__ */ import_react49.default.createElement(Header_default, null), /* @__PURE__ */ import_react49.default.createElement("main", {
    className: "ml-auto mr-auto mt-10 max-w-screen-2xl p-4"
  }, /* @__PURE__ */ import_react49.default.createElement(SectionHero_default, {
    maxWidth: "max-w-screen-3xl",
    leftCol: /* @__PURE__ */ import_react49.default.createElement(import_react49.default.Fragment, null, /* @__PURE__ */ import_react49.default.createElement("h1", {
      className: "h1"
    }, "A curated list of resources"), /* @__PURE__ */ import_react49.default.createElement("p", {
      className: "subtitle"
    }, "These lists consist of my favourite bookmarks, services and other helpful stuff"), /* @__PURE__ */ import_react49.default.createElement("p", {
      className: "mt-8 text-gray-400"
    }, "If there are any resources that you love and would like to see in this list. I'd love it if you'd open an issue or submit a PR over on the", " ", /* @__PURE__ */ import_react49.default.createElement("a", {
      href: "https://github.com/tyrelchambers/tyrelchambers.com",
      className: "text-blue-300 underline",
      target: "_blank",
      rel: "noopenner noreferrer"
    }, "Github repo.")))
  }), /* @__PURE__ */ import_react49.default.createElement("div", {
    className: "mt-16 mb-16 flex flex-wrap items-center gap-6"
  }, filteredList.map((item) => /* @__PURE__ */ import_react49.default.createElement("button", {
    className: `whitespace-nowrap rounded-full  py-2 px-4  transition-all  hover:text-white ${queryValue === item ? "bg-yellow-300 text-gray-800 hover:bg-red-300" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`,
    onClick: () => setQuery(queryValue === item ? "" : item),
    key: item
  }, item))), /* @__PURE__ */ import_react49.default.createElement("div", {
    className: "flex flex-col gap-20"
  }, data.filter((item) => queryValue ? item.title === queryValue : item).map((resource) => /* @__PURE__ */ import_react49.default.createElement("section", {
    key: resource.title
  }, /* @__PURE__ */ import_react49.default.createElement("h2", {
    className: "h2 coloured"
  }, resource.title), /* @__PURE__ */ import_react49.default.createElement("div", {
    className: "mt-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3"
  }, resource.children.map((item, index3) => /* @__PURE__ */ import_react49.default.createElement("a", {
    href: item.url,
    key: index3,
    target: "_blank",
    className: "flex flex-col items-center gap-6 rounded-2xl border-2 border-gray-700 p-6 transition-all hover:border-yellow-300 mobile:flex-row tablet:items-start"
  }, item.imageURL && /* @__PURE__ */ import_react49.default.createElement("img", {
    src: `data:image/webp;base64, ${item.imageURL}`,
    alt: "",
    className: "aspect-[4/6] w-32  rounded-lg object-cover"
  }), /* @__PURE__ */ import_react49.default.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ import_react49.default.createElement("h3", {
    className: "h3 text-center mobile:text-left"
  }, item.title), item.author && /* @__PURE__ */ import_react49.default.createElement("p", {
    className: "mt-4 text-center text-xl text-gray-400 mobile:text-left"
  }, item.author), item.description && /* @__PURE__ */ import_react49.default.createElement("p", {
    className: "mt-4 text-center text-xl text-gray-400 mobile:text-left"
  }, item.description))))))))), /* @__PURE__ */ import_react49.default.createElement(Footer_default, null));
}, resources_default = resources2;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/signout.jsx
var signout_exports = {};
__export(signout_exports, {
  action: () => action4,
  loader: () => loader11
});
init_react();
var import_node3 = require("@remix-run/node"), import_react51 = require("react");
var loader11 = () => (0, import_node3.redirect)("/"), action4 = async ({ request }) => logout(request);

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  loader: () => loader12,
  meta: () => meta5
});
init_react();
var import_react52 = require("@remix-run/react");

// app/utils/getBlogPosts.js
init_react();
var getBlogPosts = async () => {
  let { data: posts } = await supabase2.from("posts").select();
  return posts;
};

// public/images/890717F1-8B22-4767-89CF-897A7B0209EF_1_105_c.webp
var F1_8B22_4767_89CF_897A7B0209EF_1_105_c_default = "/build/_assets/890717F1-8B22-4767-89CF-897A7B0209EF_1_105_c-A4KKQHBP.webp";

// public/images/821F0F1E-A38C-4939-A04C-EEB7DA2109FB_1_105_c.webp
var F0F1E_A38C_4939_A04C_EEB7DA2109FB_1_105_c_default = "/build/_assets/821F0F1E-A38C-4939-A04C-EEB7DA2109FB_1_105_c-W6UK7UMF.webp";

// public/images/81EEA478-6EC4-4817-B9FA-47D0B5638095_1_105_c.webp
var EEA478_6EC4_4817_B9FA_47D0B5638095_1_105_c_default = "/build/_assets/81EEA478-6EC4-4817-B9FA-47D0B5638095_1_105_c-IKZYQLOJ.webp";

// public/images/1FBEB87D-AFA9-4D12-AAEE-94027686A3EA_1_105_c.webp
var FBEB87D_AFA9_4D12_AAEE_94027686A3EA_1_105_c_default = "/build/_assets/1FBEB87D-AFA9-4D12-AAEE-94027686A3EA_1_105_c-O7FQZGKW.webp";

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/about.jsx
var meta5 = () => ({
  title: "Tyrel Chambers | About",
  description: "I'm a full-stack developer living in Ontario, Canada. I'm a self-taught indie developer and I love day-dreaming new ideas and using my free time to bring them to life."
}), loader12 = async () => {
  let posts = await getBlogPosts();
  return getArticleSuggestions({ articles: posts, count: 3 });
}, about = () => {
  let suggestions = (0, import_react52.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement("main", {
    className: "ml-auto mr-auto mt-20 w-full max-w-screen-xl"
  }, /* @__PURE__ */ React.createElement(SectionHero_default, {
    leftCol: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
      className: "h1"
    }, "Hey, I'm Tyrel Chambers \u{1F44B}"), /* @__PURE__ */ React.createElement("p", {
      className: "mt-4 text-xl text-blue-300"
    }, "Software Engineer & DevRel @ This Dot Labs"), /* @__PURE__ */ React.createElement("p", {
      className: "subtitle"
    }, "I'm a full-stack developer living in Ontario, Canada. I'm a self-taught indie developer and I love day-dreaming new ideas and using my free time to bring them to life."), /* @__PURE__ */ React.createElement(SocialList_default, {
      className: "mt-10"
    })),
    rightCol: /* @__PURE__ */ React.createElement("img", {
      src: F1_8B22_4767_89CF_897A7B0209EF_1_105_c_default,
      alt: "",
      className: "w-full rounded-lg object-cover "
    })
  }), /* @__PURE__ */ React.createElement(Gap_default, {
    height: "h-20"
  }), /* @__PURE__ */ React.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2"
  }, "My tech stack"), /* @__PURE__ */ React.createElement("p", {
    className: "subtitle"
  }, "These technologies are ones I work with on a regular basis"), /* @__PURE__ */ React.createElement("ul", {
    className: "mt-10 grid grid-cols-2 justify-between gap-10 tablet:grid-cols-4 desktop:grid-cols-7 "
  }, /* @__PURE__ */ React.createElement("li", {
    className: "flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "",
    className: "h-full w-full"
  })), /* @__PURE__ */ React.createElement("li", {
    className: "flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-xl text-white"
  }, "Remix.run")), /* @__PURE__ */ React.createElement("li", {
    className: "flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-xl text-white"
  }, "Express.js")), /* @__PURE__ */ React.createElement("li", {
    className: "flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/icons/docker-icon.svg",
    alt: "",
    className: "h-full w-full"
  })), /* @__PURE__ */ React.createElement("li", {
    className: "flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/icons/nodejs-icon.svg",
    alt: "",
    className: "h-full w-full"
  })), /* @__PURE__ */ React.createElement("li", {
    className: "flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/icons/sequelize-icon.svg",
    alt: "",
    className: "h-full w-full"
  })), /* @__PURE__ */ React.createElement("li", {
    className: "flex h-20 items-center justify-center rounded-lg bg-zinc-800 p-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://kmlstyxpbbsgbimyxphk.supabase.in/storage/v1/object/public/tyrel-chambers/icons/tailwind-css-icon.svg",
    alt: "",
    className: "h-full w-full"
  })))), /* @__PURE__ */ React.createElement(Gap_default, null), /* @__PURE__ */ React.createElement("figure", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: F0F1E_A38C_4939_A04C_EEB7DA2109FB_1_105_c_default,
    alt: "",
    className: "w-full rounded-lg object-cover desktop:h-[800px]"
  }), /* @__PURE__ */ React.createElement("figcaption", {
    className: "mt-4 ml-auto mr-auto max-w-xl text-center text-gray-400"
  }, "My cousin on the tallest cliffs in Ontario in Thunder Bay, Ontario. It was a 28km round trip hike that took us all day to complete.")), /* @__PURE__ */ React.createElement(Gap_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-20 tablet:flex-row"
  }, /* @__PURE__ */ React.createElement("iframe", {
    src: "https://youtube.com/embed/uJiLFua0cww",
    className: "w-full rounded-lg object-cover desktop:h-[800px]"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex max-w-screen-sm flex-col gap-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2 mb-4"
  }, "How I got here"), /* @__PURE__ */ React.createElement("p", {
    className: "text-xl leading-loose text-gray-400 tablet:text-2xl"
  }, "I love playing music, video games and taking pictures. I'm also interesting in writing blogs and teaching people about what I enjoy."), /* @__PURE__ */ React.createElement("p", {
    className: "text-xl leading-loose text-gray-400 tablet:text-2xl"
  }, "The video here shows me and my cousin walking across the longest foot suspension bridge in Canada (about 700 feet long). It was incredibly windy up at that height (about 150 meters), but it was an amazing experience.")))), /* @__PURE__ */ React.createElement(Gap_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2"
  }, "Where it began"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 grid grid-cols-1 gap-20 sm:grid-cols-2"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "leading-loose text-gray-400"
  }, "When I graduated from college with a Law and Security Administration diploma, I wanted to go back to school for a better degree. My original plan was to go to university for Computer Hardware Engineering, but while getting a few missing high-school courses, I stumbled upon web development. I ditched my plans for university and pursued this career for the last 8-9 years."), /* @__PURE__ */ React.createElement("p", {
    className: "leading-loose text-gray-400"
  }, "My career began working as a security guard for about 9 months; it was probably the worst experience in my life \u{1F606}. I then moved into retail as a cashier at a sporting-goods store. After about 4 years I went into IT as a support rep in elementary schools for the schoolboard here. I learned a lot in that job and was happy to be near tech. After 2.5 years I finally fell into the career I've been working toward in 2021.")))), /* @__PURE__ */ React.createElement(Gap_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-between tablet:flex-row  tablet:items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2"
  }, "I enjoy writing and teaching others"), /* @__PURE__ */ React.createElement("p", {
    className: "subtitle"
  }, "If you'd like, here are a few articles I've wrote...")), /* @__PURE__ */ React.createElement(import_react52.Link, {
    to: "/blog",
    className: "link-button small secondary mt-6 tablet:mt-0"
  }, "Read more", /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-arrow-right-long"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3"
  }, suggestions.map((post) => /* @__PURE__ */ React.createElement(PostItem_default, {
    key: post.title,
    post
  }))))), /* @__PURE__ */ React.createElement(Gap_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-10 tablet:flex-row"
  }, /* @__PURE__ */ React.createElement("figure", {
    className: "w-full max-w-[500px]"
  }, /* @__PURE__ */ React.createElement("img", {
    src: EEA478_6EC4_4817_B9FA_47D0B5638095_1_105_c_default,
    alt: "",
    className: "w-full  rounded-lg object-cover"
  }), /* @__PURE__ */ React.createElement("figcaption", {
    className: "mt-4 text-gray-400"
  }, "Just before the void. Thunder Bay, Ontario")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2"
  }, "Some fun facts about me"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 flex flex-col gap-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl text-white"
  }, "I can play guitar"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-gray-400"
  }, "I've been playing guitar since I was a little kid. I've picked up a few instruments since then such as drums, piano, bass and vocals. I would love to learn the cello or violin next.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl text-white"
  }, "I narrate thriller stories"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-gray-400"
  }, "I've been told I have a great narrating voice. So, I gave it a go and upload videos occassionally to my youtube channel", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://youtube.com/storiesaftermidnight",
    className: "text-blue-300 underline",
    target: "_blank",
    rel: "noopenner noreferrer"
  }, "Stories After Midnight."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl text-white"
  }, "I enjoy going for walks and runs"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-gray-400"
  }, "Enjoying the outdoors and being in nature is something I've really come to enjoy. Taking pictures and taking in the scenery are a favourite past-time of mine.")))))), /* @__PURE__ */ React.createElement("figure", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: FBEB87D_AFA9_4D12_AAEE_94027686A3EA_1_105_c_default,
    alt: "",
    className: "mt-20 w-full rounded-lg desktop:h-[600px]"
  })), /* @__PURE__ */ React.createElement(Gap_default, null)), /* @__PURE__ */ React.createElement(Footer_default, null));
}, about_default = about;

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader13
});
init_react();
var import_react56 = require("@remix-run/react");

// app/components/Project.jsx
init_react();
var import_react53 = __toESM(require("react")), import_react54 = require("@remix-run/react"), Project = ({ project }) => /* @__PURE__ */ import_react53.default.createElement("div", {
  key: project.title,
  className: "project rounded-lg border-2 border-gray-700 bg-zinc-800 p-6 transition-all "
}, /* @__PURE__ */ import_react53.default.createElement("h3", {
  className: "h3 mb-4"
}, project.title), /* @__PURE__ */ import_react53.default.createElement("p", {
  className: "text-normal h-40 text-gray-400 sm:h-32 desktop:text-xl"
}, project.summary), (project == null ? void 0 : project.caseStudy) ? /* @__PURE__ */ import_react53.default.createElement(import_react54.Link, {
  to: `/case-study/${project.caseStudy}`,
  className: "link-button small mt-4 outline"
}, "See ", project.title, " case study", /* @__PURE__ */ import_react53.default.createElement("i", {
  className: "fa-solid fa-arrow-right-long"
})) : /* @__PURE__ */ import_react53.default.createElement("a", {
  href: project.url,
  className: "link-button small mt-4 outline",
  target: "_blank",
  rel: "noopenerr noreferrer"
}, "See ", project.title, /* @__PURE__ */ import_react53.default.createElement("i", {
  className: "fa-solid fa-arrow-right-long"
}))), Project_default = Project;

// app/components/ScrollIcon.jsx
init_react();
var import_react55 = __toESM(require("react")), ScrollIcon = () => /* @__PURE__ */ import_react55.default.createElement("div", {
  className: "flex w-full items-center before:h-[1px] before:w-full before:bg-gray-700   after:h-[1px] after:w-full after:bg-gray-700"
}, /* @__PURE__ */ import_react55.default.createElement("p", {
  className: "text-gray-500 whitespace-nowrap ml-4 mr-4"
}, "Scroll me")), ScrollIcon_default = ScrollIcon;

// app/constants/projects.js
init_react();
var projects = [
  {
    title: "Reddex",
    thumbnail: "/logo green.svg",
    summary: "Filter and search posts from Reddit. Filter by keywords, upvote count or read time. Made for Narrators.",
    url: "https://reddex.app",
    caseStudy: "reddex",
    slug: "reddex"
  },
  {
    title: "Kanlen",
    thumbnail: "/dark.svg",
    summary: "Connect with developers and store your code snippets. Develop with peace.",
    url: "https://kanlen.ca"
  },
  {
    title: "Alysha Kyle",
    summary: "Built for Alysha Kyle. A Peterborough musical artist.",
    url: "https://alysha-kyle.vercel.app"
  },
  {
    title: "Packagr",
    summary: "Create and modify your next package.json",
    url: "https://packager-gamma.vercel.app/"
  },
  {
    title: "GetNuklear",
    summary: "Sort, search your own Reddit inbox, and send messages just by logging in with Reddit.",
    url: "https://getnucklear.netlify.app/"
  },
  {
    title: "Southern Cannibal",
    summary: "Created for a Youtube horror narrator.",
    url: "https://southerncannibal.com/"
  },
  {
    title: "Stories After Midnight",
    thumbnail: "/SAM - MOON - LIGHT.png",
    summary: "Created for a Youtube horror narrator.",
    url: "https://storiesaftermidnight.com/"
  },
  {
    title: "What's My Following",
    summary: "A little tool to give you perspective on how large your following is in comparison to tangible things.",
    url: "https://xenodochial-colden-95e6b2.netlify.app/"
  },
  {
    title: "GitHub User Search",
    summary: "A coding exercise to allow a user to search GitHub's API for users.",
    url: "https://jolly-goldberg-76884f.netlify.app"
  },
  {
    title: "FlakeRank",
    summary: "Fractal canonical weighting tool.",
    url: "https://flakerank.netlify.app/"
  }
];

// public/images/me2.webp
var me2_default = "/build/_assets/me2-TUTGZ7Z5.webp";

// public/images/me.webp
var me_default = "/build/_assets/me-FQJVKPEN.webp";

// public/images/mtn.webp
var mtn_default = "/build/_assets/mtn-GB54YRVK.webp";

// public/images/cousin.webp
var cousin_default = "/build/_assets/cousin-TU4B3TBK.webp";

// public/images/papa.webp
var papa_default = "/build/_assets/papa-HPP6E37Z.webp";

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/index.jsx
var loader13 = async () => {
  let { data: posts } = await supabase2.from("posts").select().order("id", "desc");
  return getArticleSuggestions({
    articles: posts,
    count: 3,
    recent: !0
  });
};
function Index() {
  let posts = (0, import_react56.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement("main", {
    className: "mt-4 ml-auto mr-auto max-w-screen-xl py-8 desktop:mt-14"
  }, /* @__PURE__ */ React.createElement(SectionHero_default, {
    leftCol: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
      className: "h1"
    }, "Building software and teaching people about what I love the most"), /* @__PURE__ */ React.createElement("div", {
      className: "mt-10 flex w-full flex-col items-center gap-6 desktop:flex-row"
    }, /* @__PURE__ */ React.createElement(import_react56.Link, {
      to: "/blog",
      className: "link-button primary large w-full"
    }, "Read my blog", /* @__PURE__ */ React.createElement("i", {
      className: "fa-solid fa-arrow-right-long"
    })), /* @__PURE__ */ React.createElement(import_react56.Link, {
      to: "/resources",
      className: "link-button secondary large w-full"
    }, "View some resources"))),
    rightCol: /* @__PURE__ */ React.createElement("img", {
      src: me2_default,
      alt: "",
      className: "w-full rounded-lg"
    })
  }), /* @__PURE__ */ React.createElement("section", {
    className: "mt-20 flex flex-col items-center justify-center"
  }, /* @__PURE__ */ React.createElement(ScrollIcon_default, null)), /* @__PURE__ */ React.createElement(Gap_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-8 tablet:flex-row desktop:gap-20"
  }, /* @__PURE__ */ React.createElement("img", {
    src: me_default,
    alt: "",
    className: "ml-auto mr-auto w-full rounded-lg object-cover tablet:max-w-xs"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2"
  }, "Hey, I'm Tyrel Chambers \u{1F44B}"), /* @__PURE__ */ React.createElement("p", {
    className: "text-normal font-thin text-gray-400 desktop:text-2xl"
  }, "I'm a programmer at heart and that's what you can usually find me doing as a profession and a hobby."), /* @__PURE__ */ React.createElement("p", {
    className: "text-normal text-gray-400  desktop:text-2xl"
  }, "Outside of programming I enjoy playing music, video games and taking photographs. I also have a", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://youtube.com/storiesaftermidnight"
  }, "Youtube channel"), " ", "where I flex and grow my narration skills!"), /* @__PURE__ */ React.createElement(SocialList_default, null), /* @__PURE__ */ React.createElement(import_react56.Link, {
    to: "/about",
    className: "link-button outline"
  }, "Learn more about me", /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-arrow-right-long"
  }))))), /* @__PURE__ */ React.createElement(Gap_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2"
  }, "I've made some pretty cool things!"), /* @__PURE__ */ React.createElement("p", {
    className: "subtitle"
  }, "These are entirely made up of personal projects or technical challenges."), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16 grid grid-cols-1 gap-8  tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-20"
  }, projects.map((project, index3) => /* @__PURE__ */ React.createElement(Project_default, {
    project,
    key: index3
  })))), /* @__PURE__ */ React.createElement(Gap_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col tablet:flex-row tablet:items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full flex-col justify-between"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2"
  }, "Recently published posts"), /* @__PURE__ */ React.createElement("p", {
    className: "subtitle"
  }, "Take a look at these recent articles")), /* @__PURE__ */ React.createElement(import_react56.Link, {
    to: "/blog",
    className: "link-button small secondary mt-6 tablet:mt-0"
  }, "See all posts", /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-arrow-right-long"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3"
  }, posts.map((post, index3) => /* @__PURE__ */ React.createElement(PostItem_default, {
    post,
    key: index3
  })))), /* @__PURE__ */ React.createElement(Gap_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2"
  }, "I love taking photos"), /* @__PURE__ */ React.createElement("p", {
    className: "subtitle"
  }, "If you'd like to see more, check out my", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://instagram.com/imtyrelchambers",
    rel: "noopenner noreferrer",
    target: "_blank",
    className: "underline"
  }, "instagram"), "."), /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    src: mtn_default,
    alt: "",
    className: "mt-8 h-[500px] w-full rounded-lg object-cover"
  }), /* @__PURE__ */ React.createElement("figcaption", {
    className: "mt-4 text-center font-thin text-white opacity-40"
  }, "Taken in 2019 in Thunder Bay, Ontario")), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-10 tablet:grid-cols-2"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    src: cousin_default,
    alt: "",
    className: "mt-8 h-[500px] w-full rounded-lg object-cover"
  }), /* @__PURE__ */ React.createElement("figcaption", {
    className: "mt-4 text-center font-thin text-white opacity-40"
  }, "Taken in 2021. My cousin and I hiking in our home town")), /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    src: papa_default,
    alt: "",
    className: "mt-8 h-[500px] w-full rounded-lg object-cover"
  }), /* @__PURE__ */ React.createElement("figcaption", {
    className: "mt-4 text-center font-thin text-white opacity-40"
  }, "Taken in 2018. My papa and I hiking by his house")))), /* @__PURE__ */ React.createElement(Gap_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-between gap-8 tablet:flex-row tablet:items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex max-w-3xl flex-col"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "h2"
  }, "Resources I've collected"), /* @__PURE__ */ React.createElement("p", {
    className: "subtitle"
  }, "If you're looking for some handy links to helpful resources, check them out")), /* @__PURE__ */ React.createElement(import_react56.Link, {
    to: "/resources",
    className: "link-button small secondary h-fit"
  }, "See resources", /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-arrow-right-long"
  })))), /* @__PURE__ */ React.createElement(Gap_default, null)), /* @__PURE__ */ React.createElement(Footer_default, null));
}

// route:/Users/tyrelchambers/home/tyrelchambers.com/app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action5,
  default: () => login
});
init_react();
var import_react57 = __toESM(require("react"));
var import_react58 = require("@remix-run/react");
var action5 = async ({ request }) => {
  let password = (await request.formData()).get("password"), redirectTo = "/";
  return await verifyLogin(password) ? createUserSession({
    request,
    userId: process.env.USER_KEY,
    redirectTo
  }) : null;
};
function login() {
  return /* @__PURE__ */ import_react57.default.createElement("div", {
    className: "ml-auto mr-auto mt-10 w-full max-w-lg"
  }, /* @__PURE__ */ import_react57.default.createElement("h1", {
    className: "h1"
  }, "Login"), /* @__PURE__ */ import_react57.default.createElement(import_react58.Form, {
    className: "mt-6",
    method: "post"
  }, /* @__PURE__ */ import_react57.default.createElement("div", {
    className: "mt-4 flex flex-col"
  }, /* @__PURE__ */ import_react57.default.createElement("label", {
    className: " text-xl text-gray-300",
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ import_react57.default.createElement("input", {
    type: "password",
    name: "password",
    className: "mt-2 rounded-md border-[1px] border-gray-700 bg-gray-800 p-3",
    placeholder: "Password"
  })), /* @__PURE__ */ import_react57.default.createElement("button", {
    className: "mt-4 w-full rounded-lg bg-yellow-300 p-4",
    type: "submit"
  }, "Login")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { version: "97bfdcc8", entry: { module: "/build/entry.client-RUYHYLSC.js", imports: ["/build/_shared/chunk-NUTN2VOP.js", "/build/_shared/chunk-T4G3O5J3.js", "/build/_shared/chunk-BQCUINC5.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CKAHXTY2.js", imports: ["/build/_shared/chunk-4VYM3NBW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-WQGLBIBH.js", imports: ["/build/_shared/chunk-W52WZJTP.js", "/build/_shared/chunk-MWMN4VJE.js", "/build/_shared/chunk-4LX5HSBO.js", "/build/_shared/chunk-XILY6LVZ.js", "/build/_shared/chunk-M252VCJO.js", "/build/_shared/chunk-VITVGEWW.js", "/build/_shared/chunk-RFKPYEPB.js", "/build/_shared/chunk-7UQOVAUD.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "root", path: "admin", index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-ZKJHQVXU.js", imports: ["/build/_shared/chunk-BM24CYLC.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/post/$id/edit": { id: "routes/admin/post/$id/edit", parentId: "root", path: "admin/post/:id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/post/$id/edit-KOAWFVHV.js", imports: ["/build/_shared/chunk-MN5KMBNN.js", "/build/_shared/chunk-DFFI7QUZ.js", "/build/_shared/chunk-JJH4METM.js", "/build/_shared/chunk-7UQOVAUD.js", "/build/_shared/chunk-BM24CYLC.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/post/$id/index": { id: "routes/admin/post/$id/index", parentId: "root", path: "admin/post/:id", index: !0, caseSensitive: void 0, module: "/build/routes/admin/post/$id/index-O4HCLTFW.js", imports: ["/build/_shared/chunk-2L5ODSZN.js", "/build/_shared/chunk-YX5GRXMF.js", "/build/_shared/chunk-MN5KMBNN.js", "/build/_shared/chunk-HNV5RUWW.js", "/build/_shared/chunk-BM24CYLC.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/post/new": { id: "routes/admin/post/new", parentId: "root", path: "admin/post/new", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/post/new-M3J6PSI6.js", imports: ["/build/_shared/chunk-RFKPYEPB.js", "/build/_shared/chunk-JJH4METM.js", "/build/_shared/chunk-7UQOVAUD.js", "/build/_shared/chunk-7G3WXXZM.js", "/build/_shared/chunk-BM24CYLC.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/posts/index": { id: "routes/admin/posts/index", parentId: "root", path: "admin/posts", index: !0, caseSensitive: void 0, module: "/build/routes/admin/posts/index-32KQPJQI.js", imports: ["/build/_shared/chunk-M252VCJO.js", "/build/_shared/chunk-DFFI7QUZ.js", "/build/_shared/chunk-7G3WXXZM.js", "/build/_shared/chunk-BM24CYLC.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$slug": { id: "routes/blog/$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$slug-FHM534IG.js", imports: ["/build/_shared/chunk-W52WZJTP.js", "/build/_shared/chunk-4LX5HSBO.js", "/build/_shared/chunk-XILY6LVZ.js", "/build/_shared/chunk-2L5ODSZN.js", "/build/_shared/chunk-M252VCJO.js", "/build/_shared/chunk-VITVGEWW.js", "/build/_shared/chunk-HNV5RUWW.js", "/build/_shared/chunk-RFKPYEPB.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-TP3G3CR5.js", imports: ["/build/_shared/chunk-ZRT7UKPZ.js", "/build/_shared/chunk-W52WZJTP.js", "/build/_shared/chunk-MWMN4VJE.js", "/build/_shared/chunk-4LX5HSBO.js", "/build/_shared/chunk-XILY6LVZ.js", "/build/_shared/chunk-YX5GRXMF.js", "/build/_shared/chunk-M252VCJO.js", "/build/_shared/chunk-VITVGEWW.js", "/build/_shared/chunk-RFKPYEPB.js", "/build/_shared/chunk-7UQOVAUD.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/case-study/$slug": { id: "routes/case-study/$slug", parentId: "root", path: "case-study/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/case-study/$slug-CAUPSZVO.js", imports: ["/build/_shared/chunk-VITVGEWW.js", "/build/_shared/chunk-HNV5RUWW.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ZNUDV6PO.js", imports: ["/build/_shared/chunk-W52WZJTP.js", "/build/_shared/chunk-MWMN4VJE.js", "/build/_shared/chunk-4LX5HSBO.js", "/build/_shared/chunk-XILY6LVZ.js", "/build/_shared/chunk-M252VCJO.js", "/build/_shared/chunk-VITVGEWW.js", "/build/_shared/chunk-RFKPYEPB.js", "/build/_shared/chunk-7UQOVAUD.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-BNMU4DNP.js", imports: ["/build/_shared/chunk-XILY6LVZ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources": { id: "routes/resources", parentId: "root", path: "resources", index: void 0, caseSensitive: void 0, module: "/build/routes/resources-DZXI2RMA.js", imports: ["/build/_shared/chunk-ZRT7UKPZ.js", "/build/_shared/chunk-MWMN4VJE.js", "/build/_shared/chunk-4LX5HSBO.js", "/build/_shared/chunk-XILY6LVZ.js", "/build/_shared/chunk-VITVGEWW.js", "/build/_shared/chunk-7UQOVAUD.js", "/build/_shared/chunk-PXIYREOT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signout": { id: "routes/signout", parentId: "root", path: "signout", index: void 0, caseSensitive: void 0, module: "/build/routes/signout-QRVUXS3U.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-97BFDCC8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/admin/post/$id/index": {
    id: "routes/admin/post/$id/index",
    parentId: "root",
    path: "admin/post/:id",
    index: !0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/admin/post/$id/edit": {
    id: "routes/admin/post/$id/edit",
    parentId: "root",
    path: "admin/post/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/admin/posts/index": {
    id: "routes/admin/posts/index",
    parentId: "root",
    path: "admin/posts",
    index: !0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/case-study/$slug": {
    id: "routes/case-study/$slug",
    parentId: "root",
    path: "case-study/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/admin/post/new": {
    id: "routes/admin/post/new",
    parentId: "root",
    path: "admin/post/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "root",
    path: "admin",
    index: !0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/resources": {
    id: "routes/resources",
    parentId: "root",
    path: "resources",
    index: void 0,
    caseSensitive: void 0,
    module: resources_exports
  },
  "routes/signout": {
    id: "routes/signout",
    parentId: "root",
    path: "signout",
    index: void 0,
    caseSensitive: void 0,
    module: signout_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
/**
 * @remix-run/node v1.6.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.6.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.6.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
