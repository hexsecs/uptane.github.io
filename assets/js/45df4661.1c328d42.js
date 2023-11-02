"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[6730],{1168:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=i(5893),n=i(1151);const o={sidebar_position:3},a="Uptane Design",r={id:"learn-more/design",title:"Uptane Design",description:"Uptane utilizes multiple servers, known as repositories, to provide security through the validation of images before downloading. This diagram illustrates how the checks and balances of this system works. The connected components on the right hand side of the diagram are on the vehicle, while the components on the left hand-side represent the repositories. The Image repository can be thought of as an unchanging source of information about images. It is the keeper of every image currently deployed by the OEM, along with the metadata files that prove their authenticity. The Director repository knows what software should be distributed to each ECU, given the current state of the repository. Many ECUs do not have clocks, and so may use an external source to provide a secure source of time.",source:"@site/docs/learn-more/design.md",sourceDirName:"learn-more",slug:"/learn-more/design",permalink:"/docs/learn-more/design",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"LearnMoreSidebar",previous:{title:"Threat Model",permalink:"/docs/learn-more/threat"},next:{title:"Audio-Visuals",permalink:"/docs/learn-more/audio"}},h={},c=[{value:"The Evolution of Uptane",id:"the-evolution-of-uptane",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"uptane-design",children:"Uptane Design"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(5287).Z+"",width:"762",height:"425"})}),"\n",(0,s.jsx)(t.p,{children:"Uptane utilizes multiple servers, known as repositories, to provide security through the validation of images before downloading. This diagram illustrates how the checks and balances of this system works. The connected components on the right hand side of the diagram are on the vehicle, while the components on the left hand-side represent the repositories. The Image repository can be thought of as an unchanging source of information about images. It is the keeper of every image currently deployed by the OEM, along with the metadata files that prove their authenticity. The Director repository knows what software should be distributed to each ECU, given the current state of the repository. Many ECUs do not have clocks, and so may use an external source to provide a secure source of time."}),"\n",(0,s.jsx)(t.p,{children:"In the first step in the update process, the ECU sends its vehicle version manifest to the Director repository. The manifest contains signed information about existing images. Using this input, the Director chooses which images should be installed next. The metadata and images are then moved to the ECU, which will run a verification process. The diagram shows a Primary ECU connected to a number of Secondary ECUs. ECUs are generally classified in terms of access to storage space, memory, a power supply, and a direct internet connection. The form of verification that will be run --Full or Partial-- is also based on the resources of the ECU, as well as how security critical it may be. If the verification indicates no issues, the images can be downloaded to the ECU, and the vehicle version manifest will be updated."}),"\n",(0,s.jsx)(t.h2,{id:"the-evolution-of-uptane",children:"The Evolution of Uptane"}),"\n",(0,s.jsxs)(t.p,{children:["To meet the types of threats enumerated, Uptane started with the basic design of ",(0,s.jsx)(t.a,{href:"https://theupdateframework.github.io/overview.html",children:"The Update Framework (TUF)"}),", a flexible framework and specification that has proven successful in securing software update systems on repositories. The basic TUF design was first introduced in a ",(0,s.jsx)(t.a,{href:"https://ssl.engineering.nyu.edu/papers/samuel_tuf_ccs_2010.pdf",children:"2010 paper"})," by Justin Samuel, Nick Mathewson, Roger Dingledine, and Justin Cappos. Under the direction of Cappos at NYU Tandon School of Engineering since 2011, TUF has been ",(0,s.jsx)(t.a,{href:"https://theupdateframework.github.io/papers/prevention-rollback-attacks-atc2017.pdf?raw=true",children:"adapted"})," to ",(0,s.jsx)(t.a,{href:"https://theupdateframework.github.io/papers/protect-community-repositories-nsdi2016.pdf?raw=true",children:"protect against threats"})," to various types of ",(0,s.jsx)(t.a,{href:"https://uptane.github.io/papers/kuppusamy_escar_16.pdf",children:"software applications"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["A central tenet of TUF is ",(0,s.jsx)(t.strong,{children:"compromise-resilience"}),", or the ability to minimize the extent of the threat posed by any given attack. The building blocks for this state rest on four design principles."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Separation of trust"}),": distributing responsibility for the signing of metadata so if one signing key is compromised, it will not affect other users."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Threshold signatures"}),": requiring that a fixed number of signatures must be gathered to attest to the authenticity of a file before the update can be downloaded."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Explicit and implicit revocation of keys"}),": providing a mechanism for replacing compromised keys so malevolent parties can not continue signing metadata to authenticate malware."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Keeping the most vulnerable keys offline"}),": mandating that certain signing keys be kept offline, thus making them harder to steal or compromise."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"But very early on in its development, researchers realized that they could not just apply TUF directly to ECUs. One problem in securing ECUs on vehicles is that their capabilities are inconsistent. This issue is exacerbated by a number of other issues that distinguish ECUs from computers or other smart devices."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"They are not single clients."}),"\n",(0,s.jsx)(t.li,{children:"They are not particularly smart."}),"\n",(0,s.jsx)(t.li,{children:"The individual components do not trust each other."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["With these issues in mind, as well as other concerns expressed by industry representatives, Uptane modified the basic TUF design in a few ways. The first is the ",(0,s.jsx)(t.strong,{children:"addition of a second repository"}),", which divides labor and responsibility for different aspects of the verification process. As mentioned in the brief description above, the ",(0,s.jsx)(t.em,{children:"image"})," repository holds an accurate inventory of all the images currently on all ECUs on all vehicles maintained by an OEM, and the corresponding metadata. This repository uses offline keys to sign all metadata, making it much harder for attackers to substitute compromised images. The ",(0,s.jsx)(t.em,{children:"director"})," repository, which instructs vehicles as to what updates should be installed next, uses online keys to sign its metadata, allowing for easier and faster turnarounds. By combining the two repositories, an OEM can provide both customizability and security for the control units on their vehicles."]}),"\n",(0,s.jsxs)(t.p,{children:["Another modification made to the basic TUF design has to do with the way Uptane ",(0,s.jsx)(t.strong,{children:"verifies the images"}),", meaning the media used to supply the code and data that control the actions of the ECUs. In the verification step, the ECU determines if a file is safe to download by checking its accompanying metadata. As mentioned above, an ECU can use two different verification strategies, depending on its power. Verification can be ",(0,s.jsx)(t.em,{children:"full,"})," which requires checking that the hashes and sizes of images in the signed metadata match the hashes and sizes stored on the image repository, or ",(0,s.jsx)(t.em,{children:"partial,"})," which requires only the signature on the targets metadata file from the director repository to be checked."]}),"\n",(0,s.jsx)(t.p,{children:"Full verification provides better protection to those ECUs that have the memory and storage capacity to conduct the procedure. But, because even the weakest ECUs can be afforded some protection by the less resource-intensive partial method, the security of the system as a whole is improved."})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5287:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Uptane_process-87e54fb58d19d63311d63dd6ac1adbae.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>a});var s=i(7294);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);