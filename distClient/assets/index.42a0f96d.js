import{A as e}from"./AddIcon.ca743e45.js";import{R as a,d as t,am as l,r as s,an as n}from"./vendor.8839be9f.js";import{i as m}from"./event3.1c3d1ade.js";const r=({next:e})=>a.createElement("form",null,a.createElement("div",{className:"grid w-full grid-cols-2 mt-12 gap-x-8 gap-y-6"},a.createElement("div",{className:"space-y-2"},a.createElement("span",{className:"font-semibold"},"First name"),a.createElement("input",{type:"text",placeholder:"Ex. Samantha",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"})),a.createElement("div",{className:"space-y-2"},a.createElement("span",{className:"font-semibold"},"Last name"),a.createElement("input",{type:"text",placeholder:"Ex. William",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"})),a.createElement("div",{className:"col-span-2 space-y-2"},a.createElement("span",{className:"font-semibold"},"Your Email"),a.createElement("input",{placeholder:"Ex. hello@gmail.com",type:"email",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"})),a.createElement("div",{className:"col-span-2 space-y-2"},a.createElement("span",{className:"font-semibold"},"Phone number"),a.createElement("input",{placeholder:"Ex. +84 83 801 9145",type:"tel",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"})),a.createElement("div",{className:"col-span-2 space-y-2"},a.createElement("span",{className:"font-semibold"},"Bussiness detail"),a.createElement("input",{type:"text",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"}))),a.createElement("button",{className:"px-8 py-4 mt-12 text-lg font-bold bg-blue-600 rounded-lg text-gray-50",onClick:e},"Continue")),c=({next:e})=>{const s=t();return a.createElement("form",null,a.createElement("div",{className:"grid w-full grid-cols-2 mt-12 gap-x-8 gap-y-6"},a.createElement("div",{className:"col-span-2 space-y-2"},a.createElement("span",{className:"font-semibold"},"Address 1"),a.createElement("input",{type:"text",placeholder:"Ex. Samantha",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"})),a.createElement("div",{className:"col-span-2 space-y-2"},a.createElement("span",{className:"font-semibold"},"Address 2"),a.createElement("input",{type:"text",placeholder:"Ex. William",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"})),a.createElement("div",{className:"space-y-2"},a.createElement("span",{className:"font-semibold"},"City"),a.createElement("input",{placeholder:"Ex. hello@gmail.com",type:"email",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"})),a.createElement("div",{className:"space-y-2 "},a.createElement("span",{className:"font-semibold"},"Country"),a.createElement("input",{placeholder:"Ex. +84 83 801 9145",type:"tel",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"})),a.createElement("div",{className:"space-y-2"},a.createElement("span",{className:"font-semibold"},"State/Province"),a.createElement("input",{type:"text",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"})),a.createElement("div",{className:"space-y-2"},a.createElement("span",{className:"font-semibold"},"Potral code"),a.createElement("input",{type:"text",className:"w-full px-4 py-3 font-medium border border-gray-300 rounded-lg bg-gray-50"}))),a.createElement("button",{className:"px-8 py-4 mt-12 text-lg font-bold bg-blue-600 rounded-lg text-gray-50",onClick:()=>{l.success("Buying tickket successfully",{position:l.POSITION.TOP_RIGHT}),s.push("/user-home")}},"Continue"))},o=()=>{var e;const[t,l]=s.exports.useState(0),m=()=>{l((t+1)%o.length)},o=[{name:"Customer info",component:a.createElement(r,{next:m})},{name:"Billing info",component:a.createElement(c,{next:m})}];return a.createElement(a.Fragment,null,a.createElement("div",{className:"flex mt-6 space-x-12"},o.map(((e,l)=>a.createElement("div",{className:"flex items-center space-x-2"},a.createElement("div",{className:(t>=l?"bg-blue-600 text-gray-50":"")+" transition-colors flex items-center justify-center text-base font-semibold border border-gray-500 rounded-full w-7 h-7"},t>l?a.createElement(n,{className:"w-6 h-6"}):l+1),a.createElement("span",{className:"text-base font-semibold"},e.name))))),null==(e=null==o?void 0:o[t])?void 0:e.component)};export default()=>a.createElement("div",{className:"flex flex-col-reverse w-full grid-cols-12 lg:grid dark:text-gray-50 ",style:{gridAutoFlow:"dense"}},a.createElement("div",{className:"col-span-12 px-2 py-8 lg:px-64 lg:col-span-9"},a.createElement("h3",{className:"text-2xl font-bold"},"Personal Infomation"),a.createElement(o,null)),a.createElement("div",{className:"col-span-12 bg-gray-100 lg:col-span-3 dark:bg-gray-800"},a.createElement("div",{className:"bg-gray-300 aspect-w-16 aspect-h-9"},a.createElement("img",{src:m,className:"absolute w-full h-full",alt:""})),a.createElement("div",{className:"p-10 space-y-8"},a.createElement("div",{className:""},a.createElement("h5",{className:"text-lg font-bold"},"Ticket sumary"),a.createElement("div",{className:"divide-y divide-gray-300"},a.createElement("div",{className:"py-4 space-y-3"},a.createElement("div",{className:"flex justify-between"},a.createElement("span",{className:"font-medium text-gray-500"},"2 General adminssion"),a.createElement("span",{className:"font-semibold"},"100$")),a.createElement("div",{className:"flex justify-between"},a.createElement("span",{className:"font-medium text-gray-500"},"Fees"),a.createElement("span",{className:"font-semibold"},"7.5$"))),a.createElement("div",{className:"flex justify-between pt-4 font-semibold"},a.createElement("span",null,"Total"),a.createElement("span",{className:"text-blue-500"},"207.5")))),a.createElement("div",null,a.createElement("h5",{className:"mb-3 text-lg font-bold"},"Location"),a.createElement("div",{className:"font-medium text-gray-500"},"SOme where")),a.createElement("div",null,a.createElement("h5",{className:"mb-3 text-lg font-bold"},"Hours"),a.createElement("div",{className:"space-y-3"},a.createElement("div",null,a.createElement("span",{className:"font-medium text-gray-500"},"Weekly Hours:"," "),a.createElement("span",{className:"font-semibold"},"7 PM - 10 PM")),a.createElement("div",null,a.createElement("span",{className:"font-medium text-gray-500"},"Sunday Hours:"," "),a.createElement("span",{className:"font-semibold"},"10 AM - 3 PM")))),a.createElement("button",{className:"flex text-base font-bold text-blue-600 add-to-calendar dark:text-blue-400 gap-x-2"},a.createElement("div",{className:"items-center w-6 h-6"},a.createElement(e,null))," ","Add to Calendar"))));