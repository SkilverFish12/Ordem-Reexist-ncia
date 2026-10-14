/* Visual e navegação do site Ordem Paranormal: Reexistência.
   Um único arquivo para todas as páginas: paletas, trilho de dados, fontes e atalhos. */
(function(){
var PAL_KEYS=["paper","card","ink","muted","line","teal","teal-soft","conh","ener","morte","sangue","medo","rail-bg","rail-fg"];
var PALETAS=[{"id": "laudo", "nome": "Laudo", "tom": "claro", "desc": "Papel de laudo e verde-mofo. A paleta original.", "c": ["#e5e8e3", "#f3f5f1", "#182225", "#566467", "#bcc5c0", "#1d6a65", "#cfe3df", "#b8901a", "#7c4fc0", "#6f7a82", "#b3342c", "#9aa8b9", "#182225", "#e5e8e3"]}, {"id": "dossie", "nome": "Dossiê", "tom": "claro", "desc": "Pasta de arquivo amarelada e tinta azul de carimbo.", "c": ["#e8dfc9", "#f5efdf", "#2b2218", "#675a46", "#cdbf9d", "#2c5b8f", "#d6e0ea", "#a67c12", "#7a4cb0", "#6d6a63", "#a82f27", "#6e859b", "#2b2218", "#e8dfc9"]}, {"id": "cianotipia", "nome": "Cianotipia", "tom": "claro", "desc": "Planta baixa de casa mal-assombrada, em azul de projeto.", "c": ["#dce8ef", "#edf4f8", "#0f2230", "#4b6272", "#b2c7d3", "#1b6c9a", "#cfe3ef", "#a98313", "#6d49b8", "#66767f", "#b13a2e", "#6d869d", "#0f2230", "#dce8ef"]}, {"id": "teal-escuro", "nome": "Escuro Verde-mofo", "tom": "escuro", "desc": "O original, no escuro.", "c": ["#0e1a1c", "#152528", "#e3ebe8", "#90a2a3", "#2b3f43", "#58b7ab", "#1c3a39", "#d3ad3b", "#a07be0", "#97a3ab", "#e0584d", "#b8c4d3", "#08100f", "#e3ebe8"]}, {"id": "vigilia", "nome": "Vigília", "tom": "escuro", "desc": "Madrugada de campana, com o lampião âmbar aceso.", "c": ["#0b0f18", "#121927", "#e8eaf0", "#8e99ae", "#263149", "#f0a53a", "#2b2512", "#d9c35a", "#a58be6", "#98a2b0", "#e4594e", "#b6c3d6", "#06090f", "#e8eaf0"]}, {"id": "evidencias", "nome": "Sala de Evidências", "tom": "escuro", "desc": "Mural do caso com barbante vermelho.", "c": ["#121212", "#1c1c1e", "#ecebe7", "#9c9b96", "#333336", "#e85d55", "#3b1e1c", "#d9b44a", "#a98ce8", "#9ca4a9", "#ff7a63", "#b9c3d0", "#0a0a0a", "#ecebe7"]}, {"id": "camara-fria", "nome": "Câmara Fria", "tom": "escuro", "desc": "Necrotério, azul de gaveta de aço.", "c": ["#0a141a", "#101f27", "#dcebf1", "#8aa3ae", "#22383f", "#58c1e8", "#153444", "#d2b146", "#a58be6", "#9aaab3", "#e4594e", "#b9c9d8", "#060d11", "#dcebf1"]}, {"id": "outro-lado", "nome": "Outro Lado", "tom": "escuro", "desc": "O violeta de quem já viu demais.", "c": ["#0f0a18", "#181127", "#ece6f6", "#a196bb", "#33284d", "#b891f7", "#2a1f47", "#d8b548", "#ee8ad9", "#a49fb3", "#e65a50", "#bfc3e6", "#09060f", "#ece6f6"]}, {"id": "sangue-seco", "nome": "Sangue Seco", "tom": "escuro", "desc": "Mancha antiga num papel escuro.", "c": ["#150b0b", "#201212", "#f1e7e3", "#b39b96", "#452827", "#e9695c", "#3b1b19", "#d7b044", "#a98ce8", "#a39b97", "#ff7d6a", "#c3b4c0", "#0d0606", "#f1e7e3"]}, {"id": "nevoa", "nome": "Névoa", "tom": "escuro", "desc": "Cinza de neblina, sem cor sobrando.", "c": ["#14171c", "#1c2128", "#e8ebef", "#9ba5b1", "#343c47", "#a9bfdc", "#26303d", "#d4b24e", "#a98ce8", "#9ca7b0", "#e45f55", "#c1ccd9", "#0d1014", "#e8ebef"]}, {"id": "visao-noturna", "nome": "Visão Noturna", "tom": "escuro", "desc": "Câmera infravermelha, fósforo verde.", "c": ["#070d08", "#0e1710", "#d9f0dc", "#86a58b", "#1f3524", "#62e07f", "#14301a", "#d9c24c", "#b693f2", "#9fb4a3", "#ff6c5e", "#acc8b4", "#040804", "#d9f0dc"]}];
function pega(id){for(var i=0;i<PALETAS.length;i++)if(PALETAS[i].id===id)return PALETAS[i];return null;}
var R=document.documentElement,salvo=null;
try{salvo=localStorage.getItem('op-paleta');}catch(e){}
var escuroSO=false;try{escuroSO=matchMedia('(prefers-color-scheme:dark)').matches;}catch(e){}
var atual=(pega(salvo)||pega(escuroSO?'teal-escuro':'laudo')).id;

/* ---------- 1) variáveis da paleta (aplicadas já no <head>, sem piscar) ---------- */
var sv=document.createElement('style');sv.id='pal-vars';
function varsCss(p){
  var c=p.c,o={};PAL_KEYS.forEach(function(k,i){o[k]=c[i];});
  var s='--paper:'+o.paper+';--card:'+o.card+';--ink:'+o.ink+';--muted:'+o.muted+';--line:'+o.line+';--teal:'+o.teal+';--teal-soft:'+o['teal-soft']+';'
   +'--conh:'+o.conh+';--ener:'+o.ener+';--morte:'+o.morte+';--sangue:'+o.sangue+';--medo:'+o.medo+';--rail-bg:'+o['rail-bg']+';--rail-fg:'+o['rail-fg']+';--focus:'+o.teal+';'
   /* nomes usados pelas páginas */
   +'--bg:'+o.paper+';--panel:'+o.card+';--dim:'+o.muted+';--fg:'+o.ink+';--accent:'+o.teal+';--accent2:'+o.teal+';--accent-soft:'+o['teal-soft']+';--warn:'+o.sangue+';'
   +'--warn-soft:color-mix(in srgb,'+o.sangue+' 14%,'+o.card+');'
   +"--f-d:'Young Serif',Georgia,serif;--f-b:'Literata',Georgia,serif;--f-n:'JetBrains Mono',ui-monospace,monospace;"
   +"--f-display:'Young Serif',Georgia,serif;--f-body:'Literata',Georgia,serif;--f-mono:'JetBrains Mono',ui-monospace,monospace;--cut:16px;";
  return s;
}
function aplica(id,guardar){
  var p=pega(id)||PALETAS[0];atual=p.id;
  R.setAttribute('data-pal',p.id);R.setAttribute('data-theme',p.tom==='escuro'?'dark':'light');R.style.colorScheme=p.tom==='escuro'?'dark':'light';
  sv.textContent='html[data-pal][data-pal]:root{'+varsCss(p)+'}'
   +'@media print{html[data-pal][data-pal]:root{--bg:#fff;--panel:#fff;--card:#fff;--line:#999;--ink:#000;--fg:#000;--dim:#444;--muted:#444;--paper:#fff}}';
  if(guardar){try{localStorage.setItem('op-paleta',p.id);}catch(e){}}
  return p;
}
document.head.appendChild(sv);aplica(atual,false);
var fl=document.createElement('link');fl.rel='stylesheet';fl.href='https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;1,7..72,400&family=Young+Serif&family=JetBrains+Mono:wght@500;700&display=swap';document.head.appendChild(fl);

/* ---------- 2) atalhos de teclado ---------- */
var PAGS=[{k:'1',n:'Fichas',u:'ficha.html',d:6},{k:'2',n:'Manual',u:'manual.html',d:12},{k:'3',n:'Ameaças',u:'ameaca.html',d:20}];
var arq=(location.pathname.split('/').pop()||'index.html').toLowerCase();
document.addEventListener('keydown',function(e){
  if(!e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;
  if(e.key==='0'){e.preventDefault();location.href='index.html';return;}
  for(var i=0;i<PAGS.length;i++)if(e.key===PAGS[i].k){e.preventDefault();location.href=PAGS[i].u;return;}
});

/* ---------- 3) CSS do visual (entra depois do CSS da página) ---------- */
var CSS="\n/* base */\nhtml[data-pal] body{font-family:var(--f-b)}\nhtml[data-pal] .vdado,html[data-pal] .vdado svg{display:block}\n.vdado{display:inline-block;vertical-align:middle;flex:none;width:26px;height:26px}\n.vdado svg{width:100%;height:100%;overflow:visible}\n.vdado .f{fill:currentColor;stroke:currentColor;stroke-width:2;stroke-linejoin:round}\n.vdado text{fill:var(--card);font:700 9.5px var(--f-n);text-anchor:middle}\n:focus-visible{outline:2px solid var(--focus);outline-offset:2px}\n/* t\u00edtulos e r\u00f3tulos no estilo novo */\nbody.vr h1{font:400 clamp(30px,4.4vw,52px)/1.05 var(--f-d);letter-spacing:-.01em}\nbody.vr h2{font-family:var(--f-d);font-weight:400;text-transform:none;letter-spacing:0}\nbody.vr:not(.vr-m) h2{font-size:1.2rem;color:var(--ink)}\nbody.vr:not(.vr-m) label{text-transform:none;letter-spacing:0;font-size:.85rem}\nbody.vr:not(.vr-m) .cond label{font-size:.9rem}\nbody.vr .topbar{border-bottom:2px solid var(--ink);padding-bottom:14px}\nbody.vr .sub{color:var(--muted)}\n/* pain\u00e9is com a quina cortada, como a face de um dado */\nbody.vr:not(.vr-m) .card,body.vr .oc,body.vr .itm,body.vr .mal,body.vr .rit{\n  --cut:16px;border-radius:0;\n  clip-path:polygon(0 0,calc(100% - var(--cut)) 0,100% var(--cut),100% 100%,0 100%);\n  background-image:linear-gradient(to top right,transparent calc(50% - .75px),var(--line) calc(50% - .75px),var(--line) calc(50% + .75px),transparent calc(50% + .75px));\n  background-repeat:no-repeat;background-position:top right;background-size:var(--cut) var(--cut)}\nbody.vr.vr-m .oc,body.vr.vr-m .itm,body.vr.vr-m .mal,body.vr.vr-m .rit{--cut:12px}\n/* bot\u00f5es no estilo da pr\u00e9via */\nbody.vr button,body.vr select{font-family:var(--f-b)}\n/* cores dos elementos seguem a paleta */\n.mal.conh,.dot.conh,.elem.conh{--el:var(--conh)}\n.mal.ener,.dot.ener,.elem.ener{--el:var(--ener)}\n.mal.morte,.dot.morte,.elem.morte{--el:var(--morte)}\n.mal.sangue,.dot.sangue,.elem.sangue{--el:var(--sangue)}\n.mal.medo,.dot.medo,.elem.medo{--el:var(--medo)}\n/* manual: o bot\u00e3o de tema antigo sai, o seletor de paletas o substitui */\nbody.vr .tema{display:none!important}\n/* r\u00e9gua de dados */\n.regua{display:flex;align-items:end;gap:6px;margin:10px 0 4px;color:var(--ink)}\n.regua .vdado{opacity:.28}.regua .vdado.at{opacity:1;color:var(--teal)}\n/* trilho \u00e0 esquerda no computador, barra embaixo no celular */\nbody.vr{padding-left:96px}body.vr.vr-m{padding-left:112px}\n.vrail{position:fixed;left:0;top:0;bottom:0;width:96px;z-index:40;display:flex;flex-direction:column;align-items:center;gap:10px;padding:22px 0;background:var(--rail-bg);color:var(--rail-fg);font-family:var(--f-b)}\nhtml[data-theme=\"dark\"] .vrail{border-right:1px solid var(--line)}\n.vrail .marca{font:400 13px/1.1 var(--f-d);text-align:center;margin-bottom:12px;padding:0 6px;color:inherit;text-decoration:none}\n.vrail .vb{display:flex;flex-direction:column;align-items:center;gap:4px;width:76px;padding:10px 0 8px;border-radius:10px;font:500 12.5px var(--f-b);color:color-mix(in srgb,var(--rail-fg) 62%,transparent);text-decoration:none}\n.vrail .vb .vdado{width:42px;height:42px}\n.vrail .vb:hover{color:var(--rail-fg)}\n.vrail .vb[aria-current=\"page\"]{color:var(--rail-fg);background:color-mix(in srgb,var(--rail-fg) 14%,transparent)}\n.vrail .vb[aria-current=\"page\"] .vdado .f{fill:var(--rail-fg);stroke:var(--rail-fg)}\n.vrail .vb[aria-current=\"page\"] .vdado text{fill:var(--rail-bg)}\n.vrail .vb .vdado{transition:transform .5s cubic-bezier(.3,1.4,.5,1)}\n.vrail .vb:hover .vdado{transform:rotate(18deg)}\n.vrail .fim{margin-top:auto;display:flex;flex-direction:column;gap:8px;align-items:center}\n.vrail .vtema{font:500 11.5px var(--f-b);border:1px solid color-mix(in srgb,var(--rail-fg) 35%,transparent);border-radius:14px;padding:4px 10px;cursor:pointer;background:none;color:var(--rail-fg)}\n.vrail kbd{font:500 10.5px var(--f-n);opacity:.6}\n.vrail .nomepal{font:500 11px/1.2 var(--f-b);opacity:.7;text-align:center;max-width:84px}\n.vpop{position:fixed;left:106px;bottom:18px;width:330px;max-height:calc(100vh - 36px);overflow:auto;background:var(--line);padding:1px;z-index:45;display:none;clip-path:polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%);color:var(--ink);font-family:var(--f-b);font-size:16px}\n.vpop.on{display:block}\n.vpop>.in{background:var(--card);padding:14px 14px 10px;clip-path:polygon(0 0,calc(100% - 15.5px) 0,100% 15.5px,100% 100%,0 100%)}\nbody.vr .vpop h3{font:400 19px var(--f-d);margin:0 0 2px;color:var(--ink);text-transform:none;letter-spacing:0}\n.vpop .sub{font-size:13px;color:var(--muted);margin:0 0 6px}\n.vpop .grupo{font:600 12px var(--f-b);color:var(--muted);margin:12px 0 4px;text-transform:uppercase;letter-spacing:.07em}\n.vpop .opt{all:unset;box-sizing:border-box;display:grid;grid-template-columns:auto minmax(0,1fr);gap:11px;align-items:center;width:100%;padding:7px 8px;cursor:pointer;border-radius:6px}\n.vpop .opt:hover{background:var(--teal-soft)}\n.vpop .opt:focus-visible{outline:2px solid var(--focus);outline-offset:1px}\n.vpop .opt[aria-checked=\"true\"]{box-shadow:inset 0 0 0 2px var(--teal)}\n.vpop .chips{display:flex;width:62px;height:30px;border:1px solid var(--line);overflow:hidden}\n.vpop .chips i{flex:1}\n.vpop .opt b{font:600 15px/1.2 var(--f-b);display:block;color:var(--ink)}\n.vpop .opt small{display:block;color:var(--muted);font-size:12.5px;line-height:1.3}\n@media(max-width:760px){\n  body.vr,body.vr.vr-m{padding-left:0;padding-bottom:88px}\n  body.vr.vr-m{padding-left:16px}\n  .vrail{top:auto;right:0;width:auto;flex-direction:row;justify-content:center;gap:6px;padding:6px 6px calc(6px + env(safe-area-inset-bottom,0px))}\n  .vrail .marca,.vrail kbd,.vrail .nomepal{display:none}.vrail .fim{margin:0 0 0 6px}\n  .vrail .vb{width:78px}.vrail .vb .vdado{width:30px;height:30px}\n  .vpop{left:8px;right:8px;width:auto;bottom:calc(86px + env(safe-area-inset-bottom,0px));max-height:calc(100vh - 110px)}\n}\n@media print{.vrail,.vpop,.regua{display:none!important}body.vr,body.vr.vr-m{padding-left:0!important}\n  body.vr .card,body.vr .oc,body.vr .itm,body.vr .mal,body.vr .rit{clip-path:none;background-image:none}}\n";

/* ---------- 4) montagem ---------- */
var SH={
 4:'<polygon class="f" points="12,4 20.5,19 3.5,19"/><text x="12" y="17" style="font-size:8.5px">4</text>',
 6:'<rect class="f" x="4" y="4" width="16" height="16" rx="1.5"/><text x="12" y="15.3" style="font-size:10.5px">6</text>',
 8:'<polygon class="f" points="12,3 21,12 12,21 3,12"/><text x="12" y="15.3" style="font-size:10px">8</text>',
 10:'<polygon class="f" points="12,4.5 21.5,12 12,19.5 2.5,12"/><text x="12" y="15" style="font-size:9px">10</text>',
 12:'<polygon class="f" points="8.5,3.5 15.5,3.5 20.5,8.5 20.5,15.5 15.5,20.5 8.5,20.5 3.5,15.5 3.5,8.5"/><text x="12" y="15.2" style="font-size:9.5px">12</text>',
 20:'<polygon class="f" points="12,2.5 20.5,7.2 20.5,16.8 12,21.5 3.5,16.8 3.5,7.2"/><text x="12" y="15.2" style="font-size:9.5px">20</text>'};
function dado(n,w){return '<span class="vdado" role="img" aria-label="d'+n+'"'+(w?' style="width:'+w+'px;height:'+w+'px"':'')+'><svg viewBox="0 0 24 24" aria-hidden="true">'+SH[n]+'</svg></span>';}
function montar(){
  var st=document.createElement('style');st.id='visual-css';st.textContent=CSS;document.head.appendChild(st);
  var b=document.body;b.classList.add('vr');
  if(document.querySelector('.capitulo'))b.classList.add('vr-m');
  /* trilho */
  var nav=document.createElement('nav');nav.className='vrail';nav.setAttribute('aria-label','Partes do site');
  var h='<a class="marca" href="index.html" title="Início (Alt+0)">Ordem<br>Paranormal<br>Reexistência</a>';
  PAGS.forEach(function(p){h+='<a class="vb" href="'+p.u+'"'+(arq===p.u?' aria-current="page"':'')+' title="Alt+'+p.k+'">'+dado(p.d)+p.n+'</a>';});
  h+='<div class="fim"><button type="button" class="vtema" id="vtema" aria-haspopup="true" aria-expanded="false" title="Trocar paleta (Alt+P)">Paletas</button><span class="nomepal" id="nomepal"></span><kbd>Alt+1 2 3 · P</kbd></div>';
  nav.innerHTML=h;b.appendChild(nav);
  var pop=document.createElement('div');pop.className='vpop';pop.id='vpop';pop.setAttribute('role','dialog');pop.setAttribute('aria-label','Escolher paleta');
  pop.innerHTML='<div class="in"><h3>Paletas</h3><p class="sub">'+PALETAS.length+' opções. A escolha vale para o site todo e fica salva neste navegador.</p><div id="vlista"></div></div>';
  b.appendChild(pop);
  /* régua de dados sob o título da página */
  var d=(PAGS.filter(function(p){return p.u===arq;})[0]||{}).d;
  if(d){[].slice.call(document.querySelectorAll('h1')).forEach(function(h1){
    if(h1.closest('header.capa')||h1.classList.contains('titulo'))return;
    var r=document.createElement('div');r.className='regua';r.setAttribute('aria-hidden','true');
    [4,6,8,10,12,20].forEach(function(n,i){var s=dado(n,16+i*4);r.insertAdjacentHTML('beforeend',s.replace('class="vdado"','class="vdado'+(n===d?' at':'')+'"'));});
    h1.insertAdjacentElement('afterend',r);});}
  /* seletor */
  var nomepal=document.getElementById('nomepal'),btn=document.getElementById('vtema');
  function chips(p){return '<span class="chips">'+[p.c[0],p.c[1],p.c[5],p.c[10],p.c[8]].map(function(c){return '<i style="background:'+c+'"></i>';}).join('')+'</span>';}
  function lista(){var h='';[['claro','Claras'],['escuro','Escuras']].forEach(function(g){h+='<div class="grupo">'+g[1]+'</div>';
    PALETAS.filter(function(p){return p.tom===g[0];}).forEach(function(p){h+='<button type="button" class="opt" role="menuitemradio" aria-checked="'+(p.id===atual)+'" data-id="'+p.id+'">'+chips(p)+'<span><b>'+p.nome+'</b><small>'+p.desc+'</small></span></button>';});});
    document.getElementById('vlista').innerHTML=h;}
  function escolher(id){var p=aplica(id,true);nomepal.textContent=p.nome;lista();try{window.dispatchEvent(new Event('op-paleta'));}catch(e){}}
  function abrir(v){pop.classList.toggle('on',v);btn.setAttribute('aria-expanded',v);}
  btn.addEventListener('click',function(e){e.stopPropagation();abrir(!pop.classList.contains('on'));});
  pop.addEventListener('click',function(e){e.stopPropagation();var o=e.target.closest('[data-id]');if(o)escolher(o.dataset.id);});
  document.addEventListener('click',function(){abrir(false);});
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&pop.classList.contains('on')){abrir(false);btn.focus();return;}
    if(e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.key==='p'||e.key==='P')){e.preventDefault();var i=PALETAS.findIndex(function(p){return p.id===atual;});escolher(PALETAS[(i+1)%PALETAS.length].id);}});
  nomepal.textContent=pega(atual).nome;lista();
  /* página inicial: três dados grandes */
  var ini=document.getElementById('inicio-dados');
  if(ini)ini.innerHTML=PAGS.map(function(p){return '<a class="big" href="'+p.u+'">'+dado(p.d)+'<strong>'+p.n+'</strong><span>'+({'Fichas':'Ficha de personagem interativa, com várias fichas salvas.','Manual':'Regras, especializações, poderes, rituais, itens e ameaças.','Ameaças':'Fichas de criaturas, com rolagem de ataques.'})[p.n]+'</span><kbd>Alt+'+p.k+'</kbd></a>';}).join('');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',montar);else montar();
})();
