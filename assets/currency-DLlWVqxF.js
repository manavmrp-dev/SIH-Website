function n(r){return r==null||Number.isNaN(r)?"N/A":new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(r)}export{n as f};
