"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[489],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1397:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Apple-ID fixing"},p=void 0,u={unversionedId:"guide-Apple-ID",id:"guide-Apple-ID",title:"Apple-ID fixing",description:"Video guide here (Use SMBIOS iMacPro1,1)",source:"@site/docs/guide-Apple-ID.md",sourceDirName:".",slug:"/guide-Apple-ID",permalink:"/docs/guide-Apple-ID",draft:!1,editUrl:"https://github.com/notAperson535/OneClick-macOS-Simple-KVM/tree/docs/docs/guide-Apple-ID.md",tags:[],version:"current",frontMatter:{title:"Apple-ID fixing"},sidebar:"docs",previous:{title:"How to increase disk size",permalink:"/docs/guide-disk-resizing"},next:{title:"Passing through a USB device (Works with iPhone)",permalink:"/docs/guide-usb-passthrough"}},s={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=vBRrCYZEjtI"},"Video guide here")," (Use SMBIOS iMacPro1,1)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If using virt-manager Use a random multicast ",(0,i.kt)("a",{parentName:"li",href:"https://www.hellion.org.uk/cgi-bin/randmac.pl"},"MAC address generator")," and paste it into the template generated by ",(0,i.kt)("inlineCode",{parentName:"li"},"make.sh"),". ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"While I was editing the template, I also used ",(0,i.kt)("inlineCode",{parentName:"li"},"uuidgen")," and pasted that in there for good measure."),(0,i.kt)("li",{parentName:"ul"},"Then import the template with ",(0,i.kt)("inlineCode",{parentName:"li"},"virsh define whatever.xml"),".")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In the macOS Finder, look for ",(0,i.kt)("strong",{parentName:"li"},"EFI")," in the left bar under ",(0,i.kt)("strong",{parentName:"li"},"Volumes"),". If it isn't visible you will have to mount it:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the macOS Terminal and type ",(0,i.kt)("inlineCode",{parentName:"li"},"diskutil list")," and look for the disk/partition location of the EFI. (There may be more than one.)"),(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo diskutil mount diskYsZ"),", using the disk/partition location name where you see EFI. It should look like this:\n",(0,i.kt)("img",{parentName:"li",src:"https://oneclick-macos-simple-kvm.notaperson535.is-a.dev/img/efi%20partition.png",alt:"image"}))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/corpnewt/GenSMBIOS"},"GenSMBIOS"),' and gernerate a set of serials for the mac model shown under "System Report" ("iMacPro1,1").'),(0,i.kt)("li",{parentName:"ol"},"Locate the plist file at ",(0,i.kt)("inlineCode",{parentName:"li"},"/Volumes/EFI/OC/config.plist"),". Insert the generated serials into generic section in the appropriate places.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"GenSMBIOS Value"),(0,i.kt)("th",{parentName:"tr",align:null},"config.plist"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"SystemProductName")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Serial"),(0,i.kt)("td",{parentName:"tr",align:null},"SystemSerialNumber")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Board Serial"),(0,i.kt)("td",{parentName:"tr",align:null},"MLB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SmUUID"),(0,i.kt)("td",{parentName:"tr",align:null},"SystemUUID")))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"You can edit it by hand or use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/corpnewt/ProperTree"},"ProperTree")," for this."),(0,i.kt)("li",{parentName:"ol"},"Reboot. You should be able to log in with your Apple-ID now.")))}d.isMDXComponent=!0}}]);