function detectAdblock() { const e = { uBlockOrigin: { url: "https://example.org/data/yzfdmoan.js", id: "837jlaBksSjd9jh" }, adblockPlus: { url: "https://example.org/data/utep_ad.js", id: "hfuBadsf3hFAk" } }; function c(e) { return new Promise(function (n, o) { var t = document.createElement("script"); t.onload = function () { document.getElementById(e.id) ? n(!1) : n(!0) }, t.onerror = function () { n(!0) }, t.src = e.url, document.body.appendChild(t) }) } return new Promise(function (o, t) { var n = [c(e.uBlockOrigin), c(e.adblockPlus)]; Promise.all(n).then(n => { o({ uBlockOrigin: n[0], adblockPlus: n[1], usingAdblock: !0 === n[0] || !0 === n[1] }) }).catch(n => { t(n) }) }) }