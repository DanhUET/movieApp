import{r as s,j as m}from"./index-B-wxiS7c.js";const c=({src:t,width:o,height:r,className:n})=>{const[a,l]=s.useState(`https://placehold.co/${o}x${r}?text=No image`);return s.useEffect(()=>{const e=new Image;return e.src=t,e.onload=()=>{l(t)},()=>{e.onload=null}},[t]),m.jsx("img",{src:a,alt:"",className:a===t||!t?n:`${n} blur-md`,width:o,height:r,loading:"lazy"})};export{c as I};
