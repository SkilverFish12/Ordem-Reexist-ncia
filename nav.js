/* Navegação entre as partes do site. Um único arquivo para todas as páginas. */
(function(){
  var P=[
    {k:'1',n:'Fichas',u:'ficha.html'},
    {k:'2',n:'Manual',u:'manual.html'},
    {k:'3',n:'Ameaças',u:'ameaca.html'}
  ];
  var atual=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  function ir(u){location.href=u;}
  document.addEventListener('keydown',function(e){
    if(!e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;
    if(e.key==='0'){e.preventDefault();ir('index.html');return;}
    for(var i=0;i<P.length;i++)if(e.key===P[i].k){e.preventDefault();ir(P[i].u);return;}
  });
  if(atual==='index.html'||atual==='')return;
  var css=document.createElement('style');
  css.textContent='#siteNav{position:fixed;left:12px;bottom:calc(env(safe-area-inset-bottom,0px) + 12px);z-index:99999;font:500 13px system-ui,sans-serif}'
   +'#siteNav button.sn-b{background:rgba(30,30,36,.82);color:#fff;border:1px solid rgba(255,255,255,.3);border-radius:18px;padding:6px 12px;cursor:pointer;font:inherit;opacity:.75}'
   +'#siteNav button.sn-b:hover,#siteNav button.sn-b:focus-visible{opacity:1;outline:2px solid #9b7bd6}'
   +'#siteNav .sn-m{display:none;position:absolute;left:0;bottom:38px;background:rgba(30,30,36,.97);border:1px solid rgba(255,255,255,.3);border-radius:10px;padding:6px;min-width:170px}'
   +'#siteNav.on .sn-m{display:block}'
   +'#siteNav a{display:flex;justify-content:space-between;gap:14px;color:#fff;text-decoration:none;padding:8px 10px;border-radius:6px}'
   +'#siteNav a:hover,#siteNav a:focus-visible{background:rgba(255,255,255,.14);outline:none}'
   +'#siteNav a.at{background:rgba(155,123,214,.45)}'
   +'#siteNav a span{opacity:.6;font:11px ui-monospace,monospace}'
   +'@media print{#siteNav{display:none!important}}';
  document.head.appendChild(css);
  var w=document.createElement('div');w.id='siteNav';
  var h='<button type="button" class="sn-b" aria-expanded="false" aria-label="Trocar de página">☰ Trocar</button><div class="sn-m" role="menu">';
  P.forEach(function(p){h+='<a role="menuitem" href="'+p.u+'"'+(atual===p.u?' class="at"':'')+'>'+p.n+'<span>Alt+'+p.k+'</span></a>';});
  h+='<a role="menuitem" href="index.html">Início<span>Alt+0</span></a></div>';
  w.innerHTML=h;document.body.appendChild(w);
  var b=w.querySelector('.sn-b');
  b.addEventListener('click',function(e){e.stopPropagation();var o=w.classList.toggle('on');b.setAttribute('aria-expanded',o);});
  document.addEventListener('click',function(e){if(!w.contains(e.target)){w.classList.remove('on');b.setAttribute('aria-expanded','false');}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){w.classList.remove('on');b.setAttribute('aria-expanded','false');}});
})();
