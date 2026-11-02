const C = window.QOZUMI;
function money(n){ return (Math.round(n*10000)/10000).toFixed(4).replace(/\.?0+$/,"") || "0"; }
function fillSpecs(){
  document.querySelectorAll("[data-supply]").forEach(e=>e.textContent=C.totalSupply.toLocaleString("en-US"));
  document.querySelectorAll("[data-price]").forEach(e=>e.textContent=C.mintPriceBNB.toFixed(4));
  document.querySelectorAll("[data-max]").forEach(e=>e.textContent=C.maxPerWallet);
  document.querySelectorAll("[data-chain]").forEach(e=>e.textContent=C.chainName);
}
function copyText(id, btn){
  const el=document.getElementById(id); if(!el) return;
  const text=el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(()=>{
    const old=btn.textContent; btn.textContent="Copied ✓"; setTimeout(()=>btn.textContent=old,1800);
  });
}
function checkWallet(){
  const input=document.getElementById("walletInput"), out=document.getElementById("walletResult");
  if(!input||!out) return;
  const v=input.value.trim();
  if(/^0x[a-fA-F0-9]{40}$/.test(v)){
    out.innerHTML="<span class='check'>Address format looks valid.</span> Agent ID and remaining allowance cannot be verified yet, because no QOZUMI contract is deployed. This check will read the chain once the contract is live.";
  } else {
    out.textContent="Enter a full BNB Chain address starting with 0x (42 characters). No wallet is connected on this page.";
  }
}
document.addEventListener("DOMContentLoaded",()=>{ fillSpecs(); });
