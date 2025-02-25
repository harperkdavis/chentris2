// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dWG2W":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c598b7ceafbacf28";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"UoDXn":[function(require,module,exports,__globalThis) {
var _tetrisTs = require("./src/tetris.ts");
for(const key in _tetrisTs)window[key] = _tetrisTs[key];

},{"./src/tetris.ts":"57Jd3"}],"57Jd3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PIECES", ()=>PIECES);
parcelHelpers.export(exports, "COSM_PALETTES", ()=>COSM_PALETTES);
parcelHelpers.export(exports, "COSM_NAME_COLORS", ()=>COSM_NAME_COLORS);
parcelHelpers.export(exports, "COSM_BANNERS", ()=>COSM_BANNERS);
parcelHelpers.export(exports, "COMBOS", ()=>COMBOS);
parcelHelpers.export(exports, "T_CHECK", ()=>T_CHECK);
parcelHelpers.export(exports, "WALL_KICK", ()=>WALL_KICK);
parcelHelpers.export(exports, "WALL_KICK_I", ()=>WALL_KICK_I);
parcelHelpers.export(exports, "Piece", ()=>Piece);
parcelHelpers.export(exports, "MoveType", ()=>MoveType);
parcelHelpers.export(exports, "Direction", ()=>Direction);
parcelHelpers.export(exports, "COMPETITIVE_DEFAULTS", ()=>COMPETITIVE_DEFAULTS);
parcelHelpers.export(exports, "NORMAL_DEFAULTS", ()=>NORMAL_DEFAULTS);
parcelHelpers.export(exports, "createNewBag", ()=>createNewBag);
parcelHelpers.export(exports, "createNewBoard", ()=>createNewBoard);
parcelHelpers.export(exports, "deepCopyBoard", ()=>deepCopyBoard);
parcelHelpers.export(exports, "highestTile", ()=>highestTile);
parcelHelpers.export(exports, "highestGarbageTile", ()=>highestGarbageTile);
parcelHelpers.export(exports, "rotateArray", ()=>rotateArray);
parcelHelpers.export(exports, "getRotatedPiece", ()=>getRotatedPiece);
parcelHelpers.export(exports, "pieceFits", ()=>pieceFits);
parcelHelpers.export(exports, "defaultSubmoveState", ()=>defaultSubmoveState);
parcelHelpers.export(exports, "makeSubmove", ()=>makeSubmove);
parcelHelpers.export(exports, "getJuiceLevel", ()=>getJuiceLevel);
parcelHelpers.export(exports, "getLevelJuice", ()=>getLevelJuice);
parcelHelpers.export(exports, "getCombos", ()=>getCombos);
parcelHelpers.export(exports, "makeMove", ()=>makeMove);
parcelHelpers.export(exports, "mod", ()=>mod);
parcelHelpers.export(exports, "getLevel", ()=>getLevel);
parcelHelpers.export(exports, "getXp", ()=>getXp);
const PIECES = [
    {
        layout: [
            [
                0,
                0,
                0,
                0
            ],
            [
                1,
                1,
                1,
                1
            ],
            [
                0,
                0,
                0,
                0
            ],
            [
                0,
                0,
                0,
                0
            ]
        ],
        color: [
            130,
            250,
            230
        ],
        width: 4
    },
    {
        layout: [
            [
                1,
                0,
                0
            ],
            [
                1,
                1,
                1
            ],
            [
                0,
                0,
                0
            ]
        ],
        color: [
            130,
            150,
            250
        ],
        width: 3
    },
    {
        layout: [
            [
                0,
                0,
                1
            ],
            [
                1,
                1,
                1
            ],
            [
                0,
                0,
                0
            ]
        ],
        color: [
            240,
            160,
            110
        ],
        width: 3
    },
    {
        layout: [
            [
                1,
                1
            ],
            [
                1,
                1
            ]
        ],
        color: [
            240,
            230,
            110
        ],
        width: 2
    },
    {
        layout: [
            [
                0,
                1,
                0
            ],
            [
                1,
                1,
                1
            ],
            [
                0,
                0,
                0
            ]
        ],
        color: [
            180,
            130,
            240
        ],
        width: 3
    },
    {
        layout: [
            [
                1,
                1,
                0
            ],
            [
                0,
                1,
                1
            ],
            [
                0,
                0,
                0
            ]
        ],
        color: [
            240,
            130,
            150
        ],
        width: 3
    },
    {
        layout: [
            [
                0,
                1,
                1
            ],
            [
                1,
                1,
                0
            ],
            [
                0,
                0,
                0
            ]
        ],
        color: [
            130,
            240,
            120
        ],
        width: 3
    },
    {
        layout: [
            [
                1
            ]
        ],
        color: [
            200,
            200,
            200
        ],
        width: 3
    }
];
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : [
        0,
        0,
        0
    ];
}
const COSM_PALETTES = {
    'Default': {
        data: [
            [
                130,
                250,
                230
            ],
            [
                130,
                150,
                250
            ],
            [
                240,
                160,
                110
            ],
            [
                240,
                230,
                110
            ],
            [
                180,
                130,
                240
            ],
            [
                240,
                130,
                150
            ],
            [
                130,
                240,
                120
            ],
            [
                200,
                200,
                200
            ] // G
        ],
        levelRequirement: 0,
        juiceCost: 0
    },
    'Alternate': {
        data: [
            [
                180,
                130,
                240
            ],
            [
                130,
                240,
                120
            ],
            [
                240,
                130,
                150
            ],
            [
                130,
                250,
                230
            ],
            [
                240,
                230,
                110
            ],
            [
                240,
                160,
                110
            ],
            [
                130,
                150,
                250
            ],
            [
                200,
                200,
                200
            ] // G
        ],
        levelRequirement: 0,
        juiceCost: 1000
    },
    'Deep': {
        data: [
            hexToRgb('#43aa8b'),
            hexToRgb('#577590'),
            hexToRgb('#f8961e'),
            hexToRgb('#f9c74f'),
            hexToRgb('#f3722c'),
            hexToRgb('#f94144'),
            hexToRgb('#90be6d'),
            [
                200,
                200,
                200
            ] // G
        ],
        levelRequirement: 0,
        juiceCost: 10000
    },
    'Vintage': {
        data: [
            hexToRgb('#797d62'),
            hexToRgb('#9b9b7a'),
            hexToRgb('#d9ae94'),
            hexToRgb('#f1dca7'),
            hexToRgb('#ffcb69'),
            hexToRgb('#d08c60'),
            hexToRgb('#997b66'),
            [
                200,
                200,
                200
            ] // G
        ],
        levelRequirement: 0,
        juiceCost: 100000
    },
    'Terminal': {
        data: [
            [
                0,
                255,
                255
            ],
            [
                0,
                0,
                255
            ],
            [
                255,
                127,
                0
            ],
            [
                255,
                255,
                0
            ],
            [
                255,
                0,
                255
            ],
            [
                255,
                0,
                0
            ],
            [
                0,
                255,
                0
            ],
            [
                127,
                127,
                127
            ] // G
        ],
        levelRequirement: 5,
        juiceCost: 200000
    },
    'Sunset': {
        data: [
            hexToRgb('#003f5c'),
            hexToRgb('#58508d'),
            hexToRgb('#bc5090'),
            hexToRgb('#ff6361'),
            hexToRgb('#ffa600'),
            hexToRgb('#ffd380'),
            hexToRgb('#ffe9c0'),
            [
                200,
                200,
                200
            ] // G
        ],
        levelRequirement: 10,
        juiceCost: 400000
    },
    'Fiery': {
        data: [
            hexToRgb('#e62314'),
            hexToRgb('#e83715'),
            hexToRgb('#ea4c15'),
            hexToRgb('#ec6116'),
            hexToRgb('#ed7517'),
            hexToRgb('#ef8a17'),
            hexToRgb('#f19e18'),
            [
                200,
                200,
                200
            ] // G
        ],
        levelRequirement: 20,
        juiceCost: 1000000
    },
    'Ocean': {
        data: [
            hexToRgb('#145277'),
            hexToRgb('#266785'),
            hexToRgb('#397c93'),
            hexToRgb('#4c91a1'),
            hexToRgb('#5ea6af'),
            hexToRgb('#71bbbd'),
            hexToRgb('#83d0cb'),
            [
                200,
                200,
                200
            ] // G
        ],
        levelRequirement: 20,
        juiceCost: 1000000
    },
    'Pink': {
        data: [
            hexToRgb('#fcf3c4'),
            hexToRgb('#fcdbbe'),
            hexToRgb('#fbc3b8'),
            hexToRgb('#fbabb2'),
            hexToRgb('#fa92ac'),
            hexToRgb('#fa7aa6'),
            hexToRgb('#f962a0'),
            [
                255,
                200,
                255
            ] // G
        ],
        levelRequirement: 30,
        juiceCost: 3000000
    },
    'Conditional Formatting': {
        data: [
            hexToRgb('#84e3c8'),
            hexToRgb('#a8e6cf'),
            hexToRgb('#dcedc1'),
            hexToRgb('#ffd3b6'),
            hexToRgb('#ffaaa5'),
            hexToRgb('#ff8b94'),
            hexToRgb('#ff7480'),
            [
                200,
                200,
                200
            ] // G
        ],
        levelRequirement: 30,
        juiceCost: 20000000
    },
    'Monochrome': {
        data: [
            [
                200,
                200,
                200
            ],
            [
                200,
                200,
                200
            ],
            [
                200,
                200,
                200
            ],
            [
                200,
                200,
                200
            ],
            [
                200,
                200,
                200
            ],
            [
                200,
                200,
                200
            ],
            [
                200,
                200,
                200
            ],
            [
                200,
                200,
                200
            ] // G
        ],
        levelRequirement: 30,
        juiceCost: 50000000
    },
    'Aura': {
        data: [
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0
            ] // G
        ],
        levelRequirement: 50,
        juiceCost: 1000000000
    }
};
const COSM_NAME_COLORS = {
    'Default': {
        data: [
            0,
            0,
            0
        ],
        levelRequirement: 0,
        juiceCost: 0
    },
    'Red': {
        data: [
            200,
            0,
            0
        ],
        levelRequirement: 10,
        juiceCost: 0
    },
    'Blue': {
        data: [
            0,
            0,
            200
        ],
        levelRequirement: 20,
        juiceCost: 0
    },
    'Green': {
        data: [
            0,
            200,
            0
        ],
        levelRequirement: 30,
        juiceCost: 0
    },
    'Purple': {
        data: [
            100,
            50,
            200
        ],
        levelRequirement: 40,
        juiceCost: 0
    },
    'Aura': {
        data: [
            255,
            255,
            255
        ],
        levelRequirement: 50,
        juiceCost: 0
    }
};
const COSM_BANNERS = {
    'Default': {
        data: 'bannerDefault.png',
        levelRequirement: 0,
        juiceCost: 0
    },
    'Gray': {
        data: 'bannerGray.png',
        levelRequirement: 0,
        juiceCost: 5000
    },
    'Blue': {
        data: 'bannerBlue.png',
        levelRequirement: 0,
        juiceCost: 10000
    },
    'Blocks': {
        data: 'bannerBlocks.png',
        levelRequirement: 0,
        juiceCost: 10000
    },
    'Fade': {
        data: 'bannerFade.png',
        levelRequirement: 0,
        juiceCost: 50000
    },
    'Certified Master': {
        data: 'bannerMaster.png',
        levelRequirement: 0,
        juiceCost: 200000
    },
    'Nathan Mode ON': {
        data: 'bannerNathan.png',
        levelRequirement: 0,
        juiceCost: 300000
    },
    'Karl Mode ON': {
        data: 'bannerKarl.png',
        levelRequirement: 0,
        juiceCost: 300000
    },
    'Silly Mode ON': {
        data: 'bannerSilly.png',
        levelRequirement: 0,
        juiceCost: 500000
    },
    'Does anyone have any methods at all': {
        data: 'bannerMethods.png',
        levelRequirement: 0,
        juiceCost: 500000
    },
    'Nebula': {
        data: 'bannerNebula.png',
        levelRequirement: 0,
        juiceCost: 1000000
    },
    'Freedom': {
        data: 'bannerFreedom.png',
        levelRequirement: 0,
        juiceCost: 1000000
    },
    'Aura': {
        data: 'bannerAura.png',
        levelRequirement: 50,
        juiceCost: 1000000000
    }
};
const COMBOS = {
    '00': {
        name: 'none',
        lines: {
            type: 'add',
            count: 0
        },
        juice: {
            type: 'add',
            count: 0
        }
    },
    // 1 - order
    '1l': {
        name: 'single',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 100
        }
    },
    '2l': {
        name: 'double',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 400
        }
    },
    '3l': {
        name: 'triple',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 900
        }
    },
    '4l': {
        name: 'chentris',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'add',
            count: 1600
        }
    },
    '1t': {
        name: 't-spin single',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 400
        }
    },
    '2t': {
        name: 't-spin double',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'add',
            count: 1000
        }
    },
    '3t': {
        name: 't-spin triple',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'add',
            count: 3200
        }
    },
    'fc': {
        name: 'full clear',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'multiply',
            count: 2
        }
    },
    // 2 - order
    '1l1l': {
        name: 'snake eyes',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 200
        }
    },
    '1l2l': {
        name: 'the old one two',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 500
        }
    },
    '1l3l': {
        name: 'the old one three',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1000
        }
    },
    '1l4l': {
        name: 'big five',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'add',
            count: 1800
        }
    },
    '1l1t': {
        name: 'snake spins',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 500
        }
    },
    '1l2t': {
        name: 'the old one two spin',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'add',
            count: 1100
        }
    },
    '1l3t': {
        name: 'the old one three spin',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'add',
            count: 3400
        }
    },
    '1lfc': {
        name: 'one line full clear',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'multiply',
            count: 2
        }
    },
    '2l1l': {
        name: 'stepdown',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 300
        }
    },
    '2l2l': {
        name: 'halftris',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 600
        }
    },
    '2l3l': {
        name: 'up a notch',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1100
        }
    },
    '2l4l': {
        name: 'big six',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'add',
            count: 2000
        }
    },
    '2l1t': {
        name: 'spindown',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 600
        }
    },
    '2l2t': {
        name: 'spindle',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'add',
            count: 1200
        }
    },
    '2l3t': {
        name: 'up a spin',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'add',
            count: 3600
        }
    },
    '2lfc': {
        name: 'double trouble',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'multiply',
            count: 2
        }
    },
    '3l1l': {
        name: 'downtris',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 500
        }
    },
    '3l2l': {
        name: 'leapdown',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 800
        }
    },
    '3l3l': {
        name: 'trippy',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1300
        }
    },
    '3l4l': {
        name: 'lucky guy',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'add',
            count: 2400
        }
    },
    '3l1t': {
        name: 'spinleap',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 800
        }
    },
    '3l2t': {
        name: 'trippy spin',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'add',
            count: 1400
        }
    },
    '3l3t': {
        name: 'linespin equality',
        lines: {
            type: 'add',
            count: 7
        },
        juice: {
            type: 'add',
            count: 4000
        }
    },
    '3lfc': {
        name: 'trippy clear',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'multiply',
            count: 2
        }
    },
    '4l1l': {
        name: 'small five',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 900
        }
    },
    '4l2l': {
        name: 'small six',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 1200
        }
    },
    '4l3l': {
        name: 'guy lucky',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'add',
            count: 1700
        }
    },
    '4l4l': {
        name: 'b2b',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'add',
            count: 3200
        }
    },
    '4l1t': {
        name: 'chenspin',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1200
        }
    },
    '4l2t': {
        name: 'halfdown',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'add',
            count: 1800
        }
    },
    '4l3t': {
        name: 'spinlucky',
        lines: {
            type: 'add',
            count: 8
        },
        juice: {
            type: 'add',
            count: 4800
        }
    },
    '4lfc': {
        name: 'perfect clear',
        lines: {
            type: 'add',
            count: 8
        },
        juice: {
            type: 'multiply',
            count: 2
        }
    },
    '1t1l': {
        name: 'singulari-t',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 300
        }
    },
    '1t2l': {
        name: 'reverse spindle',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 600
        }
    },
    '1t3l': {
        name: 'trip from t',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1100
        }
    },
    '1t4l': {
        name: 'post-t chentris',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'add',
            count: 2000
        }
    },
    '1t1t': {
        name: 'double it',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 600
        }
    },
    '1t2t': {
        name: 'red-t blue-t',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'add',
            count: 1200
        }
    },
    '1t3t': {
        name: 'chen-t',
        lines: {
            type: 'add',
            count: 7
        },
        juice: {
            type: 'add',
            count: 3600
        }
    },
    '1tfc': {
        name: 't-clear',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'multiply',
            count: 2
        }
    },
    '2t1l': {
        name: 'keep it on the t-l',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 500
        }
    },
    '2t2l': {
        name: '2 spin 2 line',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 800
        }
    },
    '2t3l': {
        name: 'spinny trip',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1300
        }
    },
    '2t4l': {
        name: '2 spin 4 me',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'add',
            count: 2400
        }
    },
    '2t1t': {
        name: 'stepdown-t',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 800
        }
    },
    '2t2t': {
        name: 'adds to 40',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'add',
            count: 1400
        }
    },
    '2t3t': {
        name: 'nathan special',
        lines: {
            type: 'add',
            count: 7
        },
        juice: {
            type: 'add',
            count: 4000
        }
    },
    '2tfc': {
        name: 'double t-clear',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'multiply',
            count: 2
        }
    },
    '3t1l': {
        name: 'leapspin',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 300
        }
    },
    '3t2l': {
        name: 'stepspin',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 600
        }
    },
    '3t3l': {
        name: 'trippy spinline',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1100
        }
    },
    '3t4l': {
        name: 'luckyspin',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'add',
            count: 2000
        }
    },
    '3t1t': {
        name: 't-chen',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'add',
            count: 600
        }
    },
    '3t2t': {
        name: 'reverse nathan special',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'add',
            count: 1200
        }
    },
    '3t3t': {
        name: 'trip trip goose',
        lines: {
            type: 'add',
            count: 8
        },
        juice: {
            type: 'add',
            count: 3600
        }
    },
    '3tfc': {
        name: 'nasty triple t-clear',
        lines: {
            type: 'add',
            count: 8
        },
        juice: {
            type: 'multiply',
            count: 2
        }
    },
    // 3 - order
    // 1 line
    '1l1l1l': {
        name: 'three eyed snake',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 500
        }
    },
    '1l1l2l': {
        name: 'fibonacci-3',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 800
        }
    },
    '1l1l3l': {
        name: '1 + 1 = 3',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1300
        }
    },
    '1l1l4l': {
        name: 'eeh ?!',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'add',
            count: 2400
        }
    },
    '1l1l1l1l': {
        name: 'still single?',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 900
        }
    },
    '1l1l1l1l1l': {
        name: 'leave the house',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1700
        }
    },
    '1l1l2l3l': {
        name: 'fibonacci-4',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'add',
            count: 2500
        }
    },
    '1l2l1l': {
        name: 'up then down',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 500
        }
    },
    '1l2l2l': {
        name: 'bad at counting',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 800
        }
    },
    '1l2l3l': {
        name: 'counting up',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1300
        }
    },
    '1l2l4l': {
        name: 'powers of two',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'add',
            count: 2400
        }
    },
    '1l2l3l4l': {
        name: 'counting higher',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'add',
            count: 3200
        }
    },
    '1l3l1l': {
        name: 'small spark',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 500
        }
    },
    '1l3l2l': {
        name: 'really bad at counting',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 800
        }
    },
    '1l3l3l': {
        name: 'two triple post single',
        lines: {
            type: 'add',
            count: 3
        },
        juice: {
            type: 'add',
            count: 1300
        }
    },
    '1l3l4l': {
        name: 'building chentris',
        lines: {
            type: 'add',
            count: 5
        },
        juice: {
            type: 'add',
            count: 2400
        }
    },
    '1l4l1l': {
        name: 'big spark',
        lines: {
            type: 'add',
            count: 1
        },
        juice: {
            type: 'add',
            count: 900
        }
    },
    '1l4l2l': {
        name: 'single meaning',
        lines: {
            type: 'add',
            count: 2
        },
        juice: {
            type: 'add',
            count: 1200
        }
    },
    '1l4l3l': {
        name: 'composite',
        lines: {
            type: 'add',
            count: 4
        },
        juice: {
            type: 'add',
            count: 1700
        }
    },
    '1l4l4l': {
        name: 'single into b2b',
        lines: {
            type: 'add',
            count: 6
        },
        juice: {
            type: 'add',
            count: 3200
        }
    }
};
const T_CHECK = [
    [
        1,
        0,
        1
    ],
    [
        0,
        0,
        0
    ],
    [
        1,
        0,
        1
    ]
];
const WALL_KICK = {
    0: {
        3: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                1,
                1
            ],
            [
                0,
                -2
            ],
            [
                1,
                -2
            ]
        ],
        1: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                1
            ],
            [
                0,
                -2
            ],
            [
                -1,
                -2
            ]
        ],
        2: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                2,
                0
            ],
            [
                1,
                1
            ],
            [
                2,
                1
            ],
            [
                -1,
                0
            ],
            [
                -2,
                0
            ],
            [
                -1,
                1
            ],
            [
                -2,
                1
            ],
            [
                0,
                -1
            ],
            [
                3,
                0
            ],
            [
                -3,
                0
            ]
        ]
    },
    1: {
        0: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                1,
                -1
            ],
            [
                0,
                2
            ],
            [
                1,
                2
            ]
        ],
        2: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                1,
                -1
            ],
            [
                0,
                2
            ],
            [
                1,
                2
            ]
        ],
        3: [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                -1,
                1
            ],
            [
                -1,
                2
            ],
            [
                0,
                -1
            ],
            [
                0,
                -2
            ],
            [
                -1,
                -1
            ],
            [
                -1,
                -2
            ],
            [
                1,
                0
            ],
            [
                0,
                3
            ],
            [
                0,
                -3
            ]
        ]
    },
    2: {
        1: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                1
            ],
            [
                0,
                -2
            ],
            [
                -1,
                -2
            ]
        ],
        3: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                1,
                1
            ],
            [
                0,
                -2
            ],
            [
                1,
                -2
            ]
        ],
        0: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                -2,
                0
            ],
            [
                -1,
                -1
            ],
            [
                -2,
                -1
            ],
            [
                1,
                0
            ],
            [
                2,
                0
            ],
            [
                1,
                -1
            ],
            [
                2,
                -1
            ],
            [
                0,
                1
            ],
            [
                -3,
                0
            ],
            [
                3,
                0
            ]
        ]
    },
    3: {
        2: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                -1
            ],
            [
                0,
                2
            ],
            [
                -1,
                2
            ]
        ],
        0: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                -1
            ],
            [
                0,
                2
            ],
            [
                -1,
                2
            ]
        ],
        1: [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                1,
                1
            ],
            [
                1,
                2
            ],
            [
                0,
                -1
            ],
            [
                0,
                -2
            ],
            [
                1,
                -1
            ],
            [
                1,
                -2
            ],
            [
                -1,
                0
            ],
            [
                0,
                3
            ],
            [
                0,
                -3
            ]
        ]
    }
};
const WALL_KICK_I = {
    0: {
        3: [
            [
                0,
                0
            ],
            [
                2,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                2
            ],
            [
                2,
                -1
            ]
        ],
        1: [
            [
                0,
                0
            ],
            [
                -2,
                0
            ],
            [
                1,
                0
            ],
            [
                1,
                2
            ],
            [
                -2,
                -1
            ]
        ],
        2: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                -2,
                0
            ],
            [
                1,
                0
            ],
            [
                2,
                0
            ],
            [
                0,
                1
            ]
        ]
    },
    1: {
        0: [
            [
                0,
                0
            ],
            [
                2,
                0
            ],
            [
                -1,
                0
            ],
            [
                2,
                1
            ],
            [
                -1,
                -2
            ]
        ],
        2: [
            [
                0,
                0
            ],
            [
                -1,
                0
            ],
            [
                2,
                0
            ],
            [
                -1,
                2
            ],
            [
                2,
                -1
            ]
        ],
        3: [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                0,
                -1
            ],
            [
                0,
                -2
            ],
            [
                -1,
                0
            ]
        ]
    },
    2: {
        1: [
            [
                0,
                0
            ],
            [
                -2,
                0
            ],
            [
                1,
                0
            ],
            [
                -2,
                1
            ],
            [
                1,
                -1
            ]
        ],
        3: [
            [
                0,
                0
            ],
            [
                2,
                0
            ],
            [
                -1,
                0
            ],
            [
                2,
                1
            ],
            [
                -1,
                -1
            ]
        ],
        0: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                2,
                0
            ],
            [
                -1,
                0
            ],
            [
                -2,
                0
            ],
            [
                0,
                -1
            ]
        ]
    },
    3: {
        2: [
            [
                0,
                0
            ],
            [
                1,
                0
            ],
            [
                -2,
                0
            ],
            [
                1,
                2
            ],
            [
                -2,
                -1
            ]
        ],
        0: [
            [
                0,
                0
            ],
            [
                -2,
                0
            ],
            [
                1,
                0
            ],
            [
                -2,
                1
            ],
            [
                1,
                -2
            ]
        ],
        1: [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                0,
                -1
            ],
            [
                0,
                -2
            ],
            [
                1,
                0
            ]
        ]
    }
};
var Piece = /*#__PURE__*/ function(Piece) {
    Piece[Piece["Empty"] = -1] = "Empty";
    Piece[Piece["I"] = 0] = "I";
    Piece[Piece["J"] = 1] = "J";
    Piece[Piece["L"] = 2] = "L";
    Piece[Piece["O"] = 3] = "O";
    Piece[Piece["T"] = 4] = "T";
    Piece[Piece["Z"] = 5] = "Z";
    Piece[Piece["S"] = 6] = "S";
    Piece[Piece["Garbage"] = 7] = "Garbage";
    return Piece;
}({});
var MoveType = /*#__PURE__*/ function(MoveType) {
    MoveType["Move"] = "move";
    MoveType["Hold"] = "hold";
    MoveType["AddGarbage"] = "addGarbage";
    return MoveType;
}({});
var Direction = /*#__PURE__*/ function(Direction) {
    Direction["Left"] = "left";
    Direction["Right"] = "right";
    Direction["Down"] = "down";
    Direction["Drop"] = "drop";
    Direction["RotateRight"] = "rotateRight";
    Direction["RotateLeft"] = "rotateLeft";
    Direction["Rotate180"] = "rotate180";
    return Direction;
}({});
const COMPETITIVE_DEFAULTS = {
    competitive: true,
    initialSpeed: 80,
    resendGarbage: true,
    forgivingCombos: false,
    garbageTurns: 1,
    garbageDefense: false
};
const NORMAL_DEFAULTS = {
    competitive: false,
    initialSpeed: 80,
    resendGarbage: true,
    forgivingCombos: true,
    garbageTurns: 2,
    garbageDefense: true
};
function createNewBag(srng, bagIndex, generator) {
    let pieces = [
        0,
        1,
        2,
        3,
        4,
        5,
        6
    ];
    const bag = [];
    const rng = generator(`${srng}-bag-${bagIndex}`);
    for(let i = 0; i < 7; i++){
        const index = Math.floor(rng() * pieces.length);
        bag.push(pieces[index]);
        pieces.splice(index, 1);
    }
    return bag;
}
function createNewBoard(playerId, matchId, gameId, generator) {
    const srng = `${playerId}-${matchId}-${gameId}`;
    return {
        srng,
        tiles: new Array(400).fill(-1),
        bag: createNewBag(srng, 0, generator),
        hold: -1,
        canHold: true,
        lost: false,
        bagPool: 0,
        garbagePool: 0,
        move: 0,
        combo: '',
        lastDamager: playerId,
        garbageQueue: [],
        clears: 0,
        juice: 0,
        lines: 0,
        finishingMoves: -1
    };
}
function deepCopyBoard(board) {
    return {
        srng: board.srng,
        tiles: [
            ...board.tiles
        ],
        bag: [
            ...board.bag
        ],
        hold: board.hold,
        canHold: board.canHold,
        lost: board.lost,
        bagPool: board.bagPool,
        garbagePool: board.garbagePool,
        move: board.move,
        combo: board.combo,
        lastDamager: board.lastDamager,
        garbageQueue: [
            ...board.garbageQueue
        ],
        clears: board.clears,
        juice: board.juice,
        lines: board.lines,
        finishingMoves: board.finishingMoves
    };
}
function highestTile(board) {
    for(let i = 0; i < 400; i++){
        if (board.tiles[i] !== -1) return Math.floor(i / 10);
    }
    return 40;
}
function highestGarbageTile(board) {
    for(let i = 0; i < 400; i++){
        if (board.tiles[i] === 7) return Math.floor(i / 10);
    }
    return 40;
}
function rotateArray(array, rotation) {
    const rot = mod(rotation, 4);
    if (rot <= 0) return array.map((row)=>[
            ...row
        ]);
    else if (rot === 1) return array.map((row, i)=>row.map((_, j)=>array[array.length - j - 1][i]));
    else if (rot === 2) return array.map((row, i)=>row.map((_, j)=>array[array.length - i - 1][array.length - j - 1]));
    else return array.map((row, i)=>row.map((_, j)=>array[j][array.length - i - 1]));
}
function getRotatedPiece(piece, rotation) {
    const layout = PIECES[piece].layout;
    return rotateArray(layout, rotation);
}
function pieceFits(piece, board, x, y, rotation) {
    const layout = getRotatedPiece(piece, rotation);
    for(let i = 0; i < layout.length; i++){
        for(let j = 0; j < layout[i].length; j++)if (layout[i][j] === 1) {
            const nx = x + j, ny = y + i;
            const index = ny * 10 + nx;
            if (nx < 0 || nx >= 10 || ny < 0 || ny >= 40) return false;
            if (index > board.tiles.length || index < 0 || board.tiles[index] !== -1) return false;
        }
    }
    return true;
}
function defaultSubmoveState() {
    return {
        pieceX: 3,
        pieceY: 16,
        pieceRotation: 0,
        submoves: [],
        lastMoveSuccessful: true,
        dropLines: 0
    };
}
function makeSubmove(submove, board, submoveState) {
    if (submoveState.submoves.includes("drop")) return submoveState;
    const state = {
        pieceX: submoveState.pieceX,
        pieceY: submoveState.pieceY,
        pieceRotation: submoveState.pieceRotation,
        submoves: [
            ...submoveState.submoves
        ],
        lastMoveSuccessful: false,
        dropLines: 0
    };
    if (submove === "left") {
        if (pieceFits(board.bag[0], board, state.pieceX - 1, state.pieceY, state.pieceRotation)) {
            state.pieceX -= 1;
            state.submoves.push("left");
            state.lastMoveSuccessful = true;
        }
    } else if (submove === "right") {
        if (pieceFits(board.bag[0], board, state.pieceX + 1, state.pieceY, state.pieceRotation)) {
            state.pieceX += 1;
            state.submoves.push("right");
            state.lastMoveSuccessful = true;
        }
    } else if (submove === "down") {
        if (pieceFits(board.bag[0], board, state.pieceX, state.pieceY + 1, state.pieceRotation)) {
            state.pieceY += 1;
            state.submoves.push("down");
            state.lastMoveSuccessful = true;
        }
    } else if (submove === "drop") {
        state.submoves.push("drop");
        state.lastMoveSuccessful = true;
        while(pieceFits(board.bag[0], board, state.pieceX, state.pieceY + 1, state.pieceRotation))state.pieceY += 1;
        state.dropLines = state.pieceY - submoveState.pieceY;
    } else if (submove === "rotateRight" || submove === "rotateLeft" || submove === "rotate180") {
        if (board.bag[0] !== 3) {
            const rotate = submove === "rotateRight" ? 1 : submove === "rotateLeft" ? -1 : 2;
            const wallKickArray = board.bag[0] == 0 ? WALL_KICK_I : WALL_KICK;
            const oldRotation = state.pieceRotation;
            const newRotation = mod(state.pieceRotation + rotate, 4);
            for(let i = 0; i < 5; i++){
                const wallKick = wallKickArray[oldRotation][newRotation][i];
                if (pieceFits(board.bag[0], board, state.pieceX + wallKick[0], state.pieceY - wallKick[1], newRotation)) {
                    state.pieceX = state.pieceX + wallKick[0];
                    state.pieceY = state.pieceY - wallKick[1];
                    state.pieceRotation = newRotation;
                    state.submoves.push(submove);
                    state.lastMoveSuccessful = true;
                    break;
                }
            }
        }
    }
    return state;
}
function getJuiceLevel(juice) {
    return Math.log(juice / 2000 + 1) / Math.log(2);
}
function getLevelJuice(level) {
    return 2000 * (Math.pow(2, level) - 1);
}
function getCombos(combo) {
    let combos = [];
    let valid = 0;
    for(let i = 0; i < combo.length / 2; i += 1){
        if (combo[i * 2] === "0") continue;
        let addCombo;
        const longCombo = combo.substring(0, i * 2 + 2).replace(/0/g, '');
        for(let j = 0; j <= longCombo.length / 2; j += 1){
            const newCombo = COMBOS[longCombo.substring(j * 2, i * 2 + 2)];
            if (newCombo) {
                addCombo = {
                    name: newCombo.name,
                    lines: {
                        type: newCombo.lines.type,
                        count: newCombo.lines.count
                    },
                    juice: {
                        type: newCombo.juice.type,
                        count: newCombo.juice.count
                    }
                };
                break;
            }
        }
        if (addCombo) {
            addCombo.original = combo.substring(i * 2, i * 2 + 2);
            if (addCombo.lines.type === 'add') addCombo.lines.count = addCombo.lines.count + Math.max(0, Math.floor(valid / 2));
            else addCombo.lines.count = addCombo.lines.count * Math.max(1, Math.floor(valid / 2));
            if (addCombo.juice.type === 'add') addCombo.juice.count = addCombo.juice.count * Math.max(1, valid - 1);
            combos.push(addCombo);
            valid += 1;
        }
    }
    return combos;
}
function makeMove(move, board, generator, rules, ignoreGarbage = false) {
    if (board.lost) return board;
    let newBoard = deepCopyBoard(board);
    let usedPiece = -1;
    let submoveState = defaultSubmoveState();
    switch(move.type){
        case "move":
            for (const submove of move.submoves || [])submoveState = makeSubmove(submove, newBoard, submoveState);
            const piece = getRotatedPiece(newBoard.bag[0], submoveState.pieceRotation);
            let over = true;
            for(let i = 0; i < piece.length; i++){
                for(let j = 0; j < piece[i].length; j++)if (piece[i][j] === 1) {
                    const index = (submoveState.pieceY + i) * 10 + submoveState.pieceX + j;
                    newBoard.tiles[index] = newBoard.bag[0];
                    if (index >= 200) over = false;
                }
            }
            usedPiece = newBoard.bag.shift() || -1;
            newBoard.canHold = true;
            if (over) newBoard.lost = true;
            if (newBoard.finishingMoves >= 0) newBoard.finishingMoves -= 1;
            break;
        case "hold":
            if (newBoard.canHold) {
                const hold = newBoard.hold;
                newBoard.hold = newBoard.bag[0];
                newBoard.canHold = false;
                if (hold !== -1) newBoard.bag[0] = hold;
                else newBoard.bag.shift();
            }
            break;
        case "addGarbage":
            let garbage = move.garbage || 0;
            if (highestTile(newBoard) - garbage <= 0 || highestGarbageTile(newBoard) - garbage <= 20) {
                board.lost = true;
                garbage = highestTile(newBoard);
            }
            const rng = generator(`${newBoard.srng}-garbage-${garbage}-${newBoard.garbagePool}`);
            newBoard.garbagePool += garbage;
            const noGarbageIndex = Math.floor(rng() * 10);
            const preTiles = newBoard.tiles.slice(10 * garbage);
            const postTiles = new Array(garbage * 10).fill(-1).map((_, i)=>i % 10 === noGarbageIndex ? -1 : 7);
            newBoard.tiles = [
                ...preTiles,
                ...postTiles
            ];
            break;
    }
    if (newBoard.bag.length < 7) {
        newBoard.bag = newBoard.bag.concat(createNewBag(newBoard.srng, newBoard.bagPool, generator));
        newBoard.bagPool++;
    }
    const lines = [];
    let clears = 0;
    for(let i = 0; i < 40; i++){
        const line = newBoard.tiles.slice(i * 10, (i + 1) * 10);
        const cleared = line.every((tile)=>tile !== -1);
        if (cleared) {
            if (rules.resendGarbage) clears += 1;
            else if (line.every((tile)=>tile !== 7)) clears += 1;
        } else lines.push(line);
    }
    newBoard.clears = clears;
    let tSpin = false;
    newBoard.lines += newBoard.clears;
    if (newBoard.clears > 0) {
        if (board.finishingMoves >= 0) newBoard.finishingMoves += newBoard.clears;
        let j = 0;
        for(let i = 0; i < newBoard.clears; i++){
            if (newBoard.garbageQueue.length <= 0) break;
            j += 1;
            const garbage = newBoard.garbageQueue.shift();
            garbage.amount -= 1;
            if (garbage.amount > 0) newBoard.garbageQueue.unshift(garbage);
        }
        newBoard.clears -= j;
        if (rules.garbageDefense) for (let garbage of newBoard.garbageQueue)garbage.turns += 1;
        if (newBoard.clears > 0 && usedPiece === 4 && submoveState.dropLines === 0) {
            const submoves = move.submoves || [];
            const lastMove = [
                ...submoves
            ].reverse().find((submove)=>submove !== "down" && submove !== "drop");
            if (lastMove === "rotateLeft" || lastMove === "rotateRight") {
                function check(x, y) {
                    return x < 0 || x >= 10 || y < 0 || y >= 40 || newBoard.tiles[y * 10 + x] !== -1;
                }
                const piece = rotateArray(T_CHECK, submoveState.pieceRotation);
                let corners = 0;
                for(let i = 0; i < piece.length; i++)for(let j = 0; j < piece[i].length; j++){
                    if (piece[i][j] === 1) {
                        if (check(submoveState.pieceX + j, submoveState.pieceY + i)) corners += 1;
                    }
                }
                if (corners >= 3) tSpin = true;
            }
        }
    }
    const newTiles = new Array(400).fill(-1);
    for(let i = 0; i < lines.length; i++)newTiles.splice((i + (40 - lines.length)) * 10, 10, ...lines[i]);
    newBoard.tiles = newTiles;
    if (!ignoreGarbage && move.type === "move") {
        for(let i = 0; i < newBoard.garbageQueue.length; i++){
            const garbage = newBoard.garbageQueue[i];
            garbage.turns -= 1;
            if (garbage.turns <= 0) {
                newBoard.lastDamager = garbage.player;
                newBoard = makeMove({
                    type: "addGarbage",
                    garbage: garbage.amount
                }, newBoard, generator, rules, true);
            }
        }
        newBoard.garbageQueue = newBoard.garbageQueue.filter((garbage)=>garbage.turns > 0);
    }
    const newLayout = PIECES[newBoard.bag[0]].layout;
    for(let i = 0; i < newLayout.length; i++){
        for(let j = 0; j < newLayout[i].length; j++)if (newLayout[i][j] === 1) {
            const index = (i + 16) * 10 + (j + 3);
            if (newBoard.tiles[index] !== -1) newBoard.lost = true;
        }
    }
    if (move.type === "move") {
        if (newBoard.clears <= 0) {
            if (newBoard.combo.length >= 2) {
                if (!rules.forgivingCombos || newBoard.combo.substring(newBoard.combo.length - 2) === '00') {
                    if (newBoard.finishingMoves < 0) newBoard.combo = '';
                } else newBoard.combo += '00';
            }
        } else {
            newBoard.combo += newBoard.clears + (tSpin ? 't' : 'l');
            if (newTiles.every((tile)=>tile === -1)) newBoard.combo += 'fc';
            const combos = getCombos(newBoard.combo);
            const lastCombo = combos[combos.length - 1];
            if (lastCombo.juice.type === 'multiply') {
                let totalJuice = 0;
                for (let combo of combos){
                    if (combo.juice.type === 'multiply') continue;
                    totalJuice += combo.juice.count;
                }
                newBoard.juice += totalJuice;
            } else newBoard.juice += lastCombo.juice.count;
        }
    }
    if (newBoard.finishingMoves < 0 && board.finishingMoves >= 0) newBoard.lost = true;
    return newBoard;
}
function mod(n, m) {
    return (n % m + m) % m;
}
const LOG_1_05 = Math.log(1.05);
function getLevel(xp) {
    return Math.floor(Math.log(Math.sqrt(xp) / 100 + 1) / LOG_1_05 + 1);
}
function getXp(level) {
    return Math.floor((100 * (Math.pow(1.05, level - 1) - 1)) ** 2);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["dWG2W","UoDXn"], "UoDXn", "parcelRequire94c2")

//# sourceMappingURL=index.afbacf28.js.map
