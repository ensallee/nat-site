(this["webpackJsonpnat-site"]=this["webpackJsonpnat-site"]||[]).push([[0],[,function(e,t,n){e.exports={flexContainer:"style_flexContainer__1lNfP",menu:"style_menu__1D8vS",natSufrin:"style_natSufrin__30rgN",mainListContainer:"style_mainListContainer__3HJl3",poetryContainer:"style_poetryContainer__2YCQO",aboutContainer:"style_aboutContainer__1HI1v",visible:"style_visible__3ewoq",selected:"style_selected__1_erA"}},,,function(e,t,n){e.exports={imageContainer:"style_imageContainer__3-h6H",fade:"style_fade__2Bwrs",fadeIn:"style_fadeIn__3BCOb",galleryContainer:"style_galleryContainer__1JOZ4"}},,,function(e,t,n){e.exports=n.p+"static/media/house.2c970315.JPG"},function(e,t,n){e.exports=n.p+"static/media/white_building.087ac035.JPG"},function(e,t,n){e.exports=n.p+"static/media/screaming_toast.5157d52a.JPG"},function(e,t,n){e.exports=n.p+"static/media/tv.fdaacc63.JPG"},function(e,t,n){e.exports=n.p+"static/media/accessories.826f5d13.JPG"},function(e,t,n){e.exports=n.p+"static/media/nat.65d5df03.JPG"},function(e,t,n){e.exports={mainContainer:"style_mainContainer__kGn86"}},function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),l=(n(19),n(3)),c=n(2),s=n.n(c),u=n(1),m=n.n(u),f=[{name:"Antioch Review",link:"http://review.antiochcollege.edu/winter-2015"},{name:"Blaze Vox",link:"http://www.blazevox.org/BX%20Covers/BXspring14/Nat%20Sufrin%20-%20Spring%2014.pdf"},{name:"Dialogist",link:"https://dialogist.org/v1i4-nat-sufrin/"},{name:"Fence",link:"https://reader.exacteditions.com/issues/80349/spread/1"},{name:"Imperial Matters",link:"http://imperialmatters.com/nat-sufrin/"},{name:"Jellyfish",link:"http://www.jellyfishmagazine.org/10/sufrin.html"},{name:"Tinge",link:"http://www.tingemagazine.org/love-letter-to-irigaray/"},{name:"TriQuarterly",link:"https://www.triquarterly.org/contributors/nat-sufrin"}];function d(e){var t=e.setSelected,n=e.setHovered,a=e.selected,o=function(e){e.stopPropagation();var n=e.target.innerText;t(a===n?null:n)};return console.log("selected",a),r.a.createElement("div",{className:m.a.flexContainer},r.a.createElement("div",{className:m.a.menu},r.a.createElement("h1",{className:m.a.natSufrin},"nat sufrin"),r.a.createElement("ul",{className:m.a.mainListContainer},r.a.createElement("li",{className:s()("About"===a&&m.a.selected),onClick:function(e){return o(e)},onMouseEnter:function(e){return n(e.target.innerText)},onMouseLeave:function(){return n(null)}},"About"),r.a.createElement("li",{className:s()("Poetry"===a&&m.a.selected),onClick:function(e){return o(e)},onMouseEnter:function(e){return n(e.target.innerText)},onMouseLeave:function(){return n(null)}},"Poetry"),r.a.createElement("li",{className:s()("Psychology"===a&&m.a.selected),onClick:function(e){return o(e)},onMouseEnter:function(e){return n(e.target.innerText)},onMouseLeave:function(){return n(null)}},"Psychology"),r.a.createElement("li",{className:s()("C.V."===a&&m.a.selected),onClick:function(e){return o(e)},onMouseEnter:function(e){return n(e.target.innerText)},onMouseLeave:function(){return n(null)}},"C.V."),r.a.createElement("li",{className:s()("Contact"===a&&m.a.selected),onClick:function(e){return o(e)},onMouseEnter:function(e){return n(e.target.innerText)},onMouseLeave:function(){return n(null)}},r.a.createElement("a",{href:"https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=nwsufrin@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Contact"))),r.a.createElement("ul",{className:s()(m.a.poetryContainer,"Poetry"===a&&m.a.visible)},f.map((function(e){return r.a.createElement("li",{key:e.name,onClick:function(e){return e.stopPropagation()}},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.name))}))),r.a.createElement("div",{className:s()(m.a.aboutContainer,"About"===a&&m.a.visible)},r.a.createElement("p",null,"Nat Sufrin is a doctoral candidate in Clincial Psychology at The City College of New York. He is also a practicing poet and iPhone photography enthusiast. He lives in Brooklyn."))))}var p=n(7),g=n.n(p),h=n(8),_=n.n(h),v=n(9),y=n.n(v),C=n(10),E=n.n(C),w=n(11),b=n.n(w),k=n(12),x=n.n(k),N=n(4),P=n.n(N),S={Default:x.a,About:g.a,Poetry:_.a,Psychology:y.a,"C.V.":E.a,Contact:b.a};function M(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)(!1),u=Object(l.a)(c,2),m=u[0],f=u[1],d=e.selected,p=e.hovered;return Object(a.useEffect)((function(){var e=d||p?d||p:"Default";S[e]!==o&&(i(S[e]),f(!0))}),[d,p]),r.a.createElement("div",{className:P.a.galleryContainer},r.a.createElement("div",{className:P.a.imageContainer},r.a.createElement("img",{onClick:function(e){return e.stopPropagation()},className:s()(m&&P.a.fade),onAnimationEnd:function(){return f(!1)},src:o,alt:"Nat Sufrin iPhone Photograph"})))}var O=n(13),J=n.n(O);function j(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(null),c=Object(l.a)(i,2),s=c[0],u=c[1];return r.a.createElement("div",{className:J.a.mainContainer,onClick:function(){return o(null)}},r.a.createElement(d,{setSelected:o,setHovered:u,selected:n}),r.a.createElement(M,{selected:n,hovered:s}))}var T=function(){return r.a.createElement(j,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.be92bfb4.chunk.js.map