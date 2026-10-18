(function(){
var dlg=document.getElementById("lb"),im=dlg&&dlg.querySelector("img");
document.querySelectorAll("[data-zoom]").forEach(function(e){e.addEventListener("click",function(){
  var s=e.getAttribute("data-zoom")||e.getAttribute("src");im.src=s;im.alt=e.getAttribute("data-alt")||"";
  if(dlg.showModal)dlg.showModal();else dlg.setAttribute("open","")})});
if(dlg){dlg.addEventListener("click",function(ev){if(ev.target!==im)dlg.close()});}
document.querySelectorAll(".copy").forEach(function(b){b.addEventListener("click",function(){
  var t=b.getAttribute("data-copy"),done=function(){var o=b.textContent;b.textContent="Copied";setTimeout(function(){b.textContent=o},1400)};
  var sel=function(){var n=b.parentNode.querySelector("b"),r=document.createRange();r.selectNodeContents(n);var s=getSelection();s.removeAllRanges();s.addRange(r)};
  try{navigator.clipboard.writeText(t).then(done,sel)}catch(e){sel()}})});
document.querySelectorAll("[data-pre]").forEach(function(a){a.addEventListener("click",function(){try{localStorage.setItem("fl-pre",a.getAttribute("data-pre"))}catch(e){}})});
})();