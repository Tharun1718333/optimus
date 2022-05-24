"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[9047],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8068:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Understanding Intervals and Windows",d={unversionedId:"concepts/intervals-and-windows",id:"concepts/intervals-and-windows",isDocsHomePage:!1,title:"Understanding Intervals and Windows",description:"When defining a new job, you need to define the interval at which it will be triggered.",source:"@site/docs/concepts/intervals-and-windows.md",sourceDirName:"concepts",slug:"/concepts/intervals-and-windows",permalink:"/optimus/docs/concepts/intervals-and-windows",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/concepts/intervals-and-windows.md",tags:[],version:"current",lastUpdatedBy:"Arinda Arif",lastUpdatedAt:1653381612,formattedLastUpdatedAt:"5/24/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/optimus/docs/concepts/architecture"},next:{title:"Developing plugins",permalink:"/optimus/docs/development/building-plugin"}},u=[],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understanding-intervals-and-windows"},"Understanding Intervals and Windows"),(0,o.kt)("p",null,"When defining a new job, you need to define the interval at which it will be triggered.\nThis parameter can give you a precise value when the job is scheduled for execution but\nonly a rough estimate exactly when the job is executing. It is very common in a ETL\npipeline to know when the job is exactly executing as well as for what time window\nthe current transformation will consume the data. Knowledge of what time window this\ntransformation is consuming data from the source will tell what previous windows\nwe have already consumed, and we can skip those."),(0,o.kt)("p",null,"For example: ",(0,o.kt)("br",null),"\nWe have a table with 2 columns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"created_at"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rick"),(0,o.kt)("td",{parentName:"tr",align:null},"2021-03-05")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sanchez"),(0,o.kt)("td",{parentName:"tr",align:null},"2021-03-06")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Serious"),(0,o.kt)("td",{parentName:"tr",align:null},"2021-03-07")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sam"),(0,o.kt)("td",{parentName:"tr",align:null},"2021-03-07")))),(0,o.kt)("p",null,"If we schedule a job for a cron interval of ",(0,o.kt)("inlineCode",{parentName:"p"},"0 2 * * *")," that is daily at 2 AM, and start\nthe job from ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-03-06"),", on first day job will consume ",(0,o.kt)("inlineCode",{parentName:"p"},"Rick")," as the input of the table\nif we apply a filter over the SQL query of this table as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"Select * from table where\ncreated_at > DATE('{{.DSTART}}') AND\ncreated_at <= DATE('{{.DEND}}')\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"DSTART")," could be replaced at the time of compilation with ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-03-05")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"DEND")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-03-06"),". This transformation will consume each row every day. Without\nthe provided filter, we will have to consume all the records which are created till date\ninside the table even though the previous rows might already been processed."),(0,o.kt)("p",null,"These ",(0,o.kt)("inlineCode",{parentName:"p"},"DSTART")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DEND")," values of the input window could vary depending on the ETL\njob requirement. For a daily executing job, it could be of 24 hours, but for hourly\nexecuting job, it will be 1 hour. Similary a job might be consuming data for a week\nor a month, so no matter what day we are executing the query we might need to shift the\nwindow dates to the first day of the month as start and last day of the month as end."),(0,o.kt)("p",null,"Optimus allows input window to be customized via 3 configurations."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Size"),": It's the length of the task window, 1 hour, 24 hour, 1 week. This will result\ninto the difference between DSTART and DEND"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Offset"),": It is a possible usecase that the day transformation is executing, and the\nday ETL want to consume the data has some time difference. For example, even though job\nis executing today and in normal situations, it should be consuming data from yesterday to\nX hours before, there are cases when the input window needs to be shifted to few hours in past\nor even future."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Truncate_to"),": Window start and end may not always lies on exactly the day job wants them\nto be even if we use the above parameters. Sometimes window just needs to be aligned\nto a well-defined business window like month start to month end, or week start to weekend\neven though today is middle of the week. ",(0,o.kt)("inlineCode",{parentName:"li"},"Truncate_to")," helps aligning the windows to\nexact business time windows.")))}p.isMDXComponent=!0}}]);