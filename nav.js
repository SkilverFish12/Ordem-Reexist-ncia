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

var CSS2="\n/* ===== blocos do modelo: atributos como dados, barras de PV/Sanidade/PE, escada de NH ===== */\n.vtiles{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:6px 0 10px}\n@media(max-width:520px){.vtiles{grid-template-columns:repeat(2,1fr)}}\n.vtile{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;padding:8px 0;margin:0!important;cursor:pointer;min-width:0}\n.vtile .vtd{display:block;width:78px;height:78px;color:var(--ink)}\n.vtile .vtd svg{display:block;width:100%;height:100%;overflow:visible}\n.vtile .vtd .f{fill:currentColor;stroke:currentColor;stroke-width:2;stroke-linejoin:round}\n.vtile .vtd .f.o{fill:none}\n.vtile .vtd text{fill:var(--card);font:700 9.5px var(--f-n);text-anchor:middle}\n.vtile .vtd .f.o+text{fill:var(--muted)}\n.vtile>b{font:400 17px var(--f-d);color:var(--ink)}\n.vtile>span.vtc{font-size:13.5px;color:var(--muted);line-height:1.35}\n.vtile select{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer;border:0}\n.vtile:focus-within{outline:2px solid var(--focus);outline-offset:2px}\n.vtile label{display:none!important}\n.vtile:hover .vtd{transform:rotate(10deg)}.vtile .vtd{transition:transform .3s}\n.vvit{display:grid;gap:14px;margin:4px 0 14px}\n.vvit .l{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:5px}\n.vvit .l b{font:400 17px var(--f-d);color:var(--ink)}.vvit .l span{font:700 16px var(--f-n);color:var(--ink)}\n.vcasas{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;height:16px}\n.vcasas i{background:var(--line);clip-path:polygon(0 0,100% 0,calc(100% - 4px) 100%,0 100%)}\n.vcasas i.v{background:var(--c)}\n.vvit .pv{--c:var(--sangue)}.vvit .san{--c:var(--ener)}.vvit .pe{--c:var(--conh)}\n.vnhcard{position:relative}\n.vnhcard .field{position:absolute;inset:0;margin:0;opacity:0}\n.vnhcard .field label{display:none}\n.vnhcard .field select{width:100%;height:100%;cursor:pointer}\n.vnhcard:focus-within{outline:2px solid var(--focus);outline-offset:-2px}\n.vnhn{display:flex;align-items:baseline;gap:12px}\n.vnhn b{font:400 44px/1 var(--f-d);color:var(--sangue)}\n.vnhn span{font:400 21px var(--f-d);color:var(--ink)}\n.vnh{display:flex;align-items:end;gap:5px;height:56px;margin:6px 0}\n.vnh i{flex:1;background:var(--line);height:var(--h)}\n.vnh i.v{background:var(--sangue)}\n.vnhcard p.vdica{margin:6px 0 0;color:var(--muted);font-size:15px}\n/* campos grandes em mono (Presen\u00e7a Perturbadora e Pontos de Vida da amea\u00e7a) */\n.vbig .grid{gap:10px}\n.vbig .field{display:flex;flex-direction:column-reverse;border-top:3px solid var(--ink);padding-top:6px;margin:0}\n.vbig .field label{font-size:13.5px;color:var(--muted);margin:0}\n.vbig .field input,.vbig .field select{font:700 26px/1.1 var(--f-n);border:0;padding:0;color:var(--ink);background:transparent}\n/* manual: tabelas, notas e r\u00f3tulos como na pr\u00e9via */\nbody.vr-m th{font:600 14px var(--f-b);letter-spacing:0;text-transform:none;color:var(--muted);border-bottom:2px solid var(--ink)}\nbody.vr-m td.m,body.vr-m th.m{font-family:var(--f-n)}\nbody.vr-m .nota{border-left:5px solid var(--teal);border-radius:0;background:var(--teal-soft)}\nbody.vr-m .cap-eyebrow{font:600 15px var(--f-b);letter-spacing:0;text-transform:none;color:var(--muted)}\nbody.vr-m nav.toc .cn{letter-spacing:0;text-transform:none}\nbody.vr-m h1{padding-bottom:12px;border-bottom:2px solid var(--ink);margin-bottom:6px}\n";
var CSS3="\n.nota.vd20,.vleg20{position:relative;padding-left:70px!important;border-left:5px solid var(--accent)!important}\n.vd20i{position:absolute;left:14px;top:12px;width:42px;height:42px;color:var(--accent)}\n.vd20i svg{display:block;width:100%;height:100%;overflow:visible}\n.vd20i .f{fill:currentColor;stroke:currentColor;stroke-width:2;stroke-linejoin:round}\n.vd20i text{fill:var(--bg);font:700 8.5px var(--f-n,monospace);text-anchor:middle}\n.vleg20{margin:0 0 22px!important;max-width:none!important;background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:12px 16px 12px 70px;font:500 16px var(--f-body,var(--f-b))}\n.vleg20 b{font-family:var(--f-display,var(--f-d));font-weight:400;font-size:19px}\nnav.toc .vleg20t{display:flex;align-items:center;gap:8px;margin:10px 0 0;font-size:13.5px;color:var(--muted)}\nnav.toc .vleg20t .vd20i{position:static;width:26px;height:26px;flex:none}\n\n/* ===== destaques: nome no t\u00edtulo, NT/NEX, barras edit\u00e1veis, Maldi\u00e7\u00e3o, cores de dado, amea\u00e7a ===== */\nh1.vh1{font:400 clamp(28px,3.4vw,46px)/1.05 var(--f-d)!important;color:var(--ink)!important;letter-spacing:0!important;text-transform:none!important;margin:0!important}\nh1.vh1.vazio{opacity:.55}\n.vstat{border:1px solid var(--line);border-top:4px solid var(--accent);background:var(--card);padding:8px 14px 10px!important;margin-bottom:0}\n.vstat>label{font:600 13.5px var(--f-b)!important;color:var(--muted)!important;text-transform:none!important;letter-spacing:0!important}\n.vstat input[type=number],.vstat input[type=text]{font:700 clamp(34px,3.6vw,56px)/1.05 var(--f-n)!important;border:0!important;padding:0!important;color:var(--ink)!important;background:transparent!important;width:100%;min-width:0}\n.vstat .row{align-items:baseline!important}\n.vstat #deslQ{font:700 22px var(--f-n)!important;color:var(--accent)!important}\n.vstat.vdesl{border-top-color:var(--teal,var(--accent))}\n@media screen and (min-width:1100px){.idcard{grid-template-columns:1.3fr 1fr 1.4fr 1.4fr 1fr 1fr 1.1fr 1fr!important}}\n.vduo{display:grid;grid-template-columns:1fr;gap:10px;margin-top:12px}\n@media(max-width:1099px){.vduo{grid-template-columns:1fr 1fr}}\n@media(max-width:520px){.vduo{grid-template-columns:1fr}}\n.vduo .field{margin:0!important;max-width:none!important}\n.vmal{border:1px solid var(--line);border-top:4px solid var(--ink);background:var(--card);padding:8px 14px 10px;margin:0!important}\n.vmal>b{display:block;font:600 13.5px var(--f-b);color:var(--muted)}\n.vmal .vstp{margin-top:4px}\n.vmal .vcasas{height:10px;margin-top:8px}\n.vmal .vcasas i.v{background:var(--ink)}\n.vmal input.vorig{display:none}\n.vvit .l{align-items:center!important;flex-wrap:wrap;gap:6px 10px}\n.vvit .l span{margin-left:auto}\n.vstp{display:inline-flex;align-items:center;gap:4px}\n.vstp button{font:700 17px/1 var(--f-n);min-width:30px;height:30px;padding:0 5px;border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:4px;cursor:pointer}\n.vstp button:hover{border-color:var(--accent);color:var(--accent)}\n.vstp input{font:700 28px/1 var(--f-n)!important;width:3.1ch!important;min-width:0;text-align:center;border:0!important;border-bottom:2px solid var(--ink)!important;background:transparent!important;color:var(--ink)!important;padding:0 !important}\n.vstp input.vmx{font-size:19px!important;color:var(--muted)!important;border-bottom-color:var(--line)!important}\n.vstp .sep{font:700 20px var(--f-n);color:var(--muted)}\n.vlegsetas{font-size:12.5px;color:var(--muted);margin:-6px 0 8px}\n.pv-pd{display:none!important}\nselect.vd[data-d]{border-width:2px!important;border-style:solid!important;border-radius:5px}\nselect.vd[data-d=\"d4\"]{background-color:rgba(255,255,255,.55)!important;border-color:#c9ced6!important}\nselect.vd[data-d=\"d6\"]{background-color:rgba(63,174,90,.30)!important;border-color:#3fae5a!important}\nselect.vd[data-d=\"d8\"]{background-color:rgba(56,132,230,.30)!important;border-color:#3884e6!important}\nselect.vd[data-d=\"d10\"]{background-color:rgba(240,196,32,.34)!important;border-color:#e8b820!important}\nselect.vd[data-d=\"d12\"]{background-color:rgba(228,66,66,.32)!important;border-color:#e44242!important}\n.vleg{display:inline-flex;gap:6px;flex-wrap:wrap;margin:0 0 8px}\n.vleg i{font:700 13px var(--f-n);font-style:normal;padding:1px 9px;border:2px solid var(--c);border-radius:5px;background:color-mix(in srgb,var(--c) 30%,transparent);color:var(--ink)}\n#cardPericias .periciarow{padding:1px 0!important}\n#cardPericias .periciarow select{min-height:26px!important}\n.vvit{gap:22px!important}.vcasas{height:20px!important}.vmal .vcasas{height:12px!important}\n.vtile .vtd{width:92px!important;height:92px!important}\n#cardPericias .periciasgrid{grid-template-columns:1fr!important;grid-template-rows:none!important;grid-auto-flow:row!important}\n#cardResProf{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:4px 22px;align-items:start}\n#cardResProf>h2{grid-column:1/-1}\n#cardResProf .proffield{margin-top:0!important}\n#cardResProf .profs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2px 14px}\n@media(max-width:900px){#cardResProf{grid-template-columns:1fr}#cardResProf .profs{grid-template-columns:1fr}}\n.vpp{border-left:6px solid var(--sangue)!important}\n.vpp .field:first-child input{font-size:clamp(40px,4.4vw,60px)!important;color:var(--sangue)!important}\n.vdest{position:relative}\n.vdest h3{font:400 19px var(--f-d);margin:0 0 6px;color:var(--ink)}\n.vdest .blk{margin:0 0 14px}\n.vdest .blk:last-child{margin-bottom:0}\n.vdest .chips{display:flex;flex-wrap:wrap;gap:8px}\n.vdest p.vimu{margin:8px 0 0;font:500 16px var(--f-b);color:var(--ink)}\n.vdest p.vimu b{font-weight:700}\n.vch{display:inline-flex;align-items:center;gap:7px;border:1.5px solid var(--c,var(--ink));border-radius:4px 12px 4px 12px;padding:2px 11px 2px 8px;font:600 15px var(--f-d);background:transparent;color:var(--ink)}\n.vch::before{content:\"\";width:10px;height:10px;background:var(--c,var(--ink));transform:rotate(45deg);flex:none}\n.vch.nm{--c:var(--ink)}\n.vch.conh{--c:var(--conh)}.vch.ener{--c:var(--ener)}.vch.morte{--c:var(--morte)}.vch.sangue{--c:var(--sangue)}.vch.medo{--c:var(--medo)}\n.vch.big{font-size:20px;padding:4px 14px 4px 10px}\n.vdesl-big{display:flex;flex-wrap:wrap;gap:8px 18px;align-items:baseline}\n.vdesl-big span{font:700 clamp(30px,3.2vw,46px)/1 var(--f-n);color:var(--ink)}\n.vdesl-big em{font:600 15px var(--f-b);font-style:normal;color:var(--muted);margin-left:4px}\n#acoes .item input[type=text]{font:400 19px var(--f-d)!important;color:var(--ink)!important;border:0!important;border-bottom:2px solid var(--ink)!important;border-radius:0!important;background:transparent!important}\n#acoes .item .t{font:600 13px var(--f-b);border:1.5px solid var(--accent)!important;border-radius:4px 12px 4px 12px!important;color:var(--accent)}\n.vnhcard{}\n.cols .vtiles{grid-template-columns:repeat(auto-fit,minmax(110px,1fr))!important}\n";
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
  var st=document.createElement('style');st.id='visual-css';st.textContent=CSS+CSS2+CSS3;document.head.appendChild(st);
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
  try{melhorar();}catch(e){try{console.error(e);}catch(x){}}
  if(ini)ini.innerHTML=PAGS.map(function(p){return '<a class="big" href="'+p.u+'">'+dado(p.d)+'<strong>'+p.n+'</strong><span>'+({'Fichas':'Ficha de personagem interativa, com várias fichas salvas.','Manual':'Regras, especializações, poderes, rituais, itens e ameaças.','Ameaças':'Fichas de criaturas, com rolagem de ataques.'})[p.n]+'</span><kbd>Alt+'+p.k+'</kbd></a>';}).join('');
}

/* ---------- 5) blocos do modelo (iguais aos da prévia) ---------- */
function melhorar(){
  var NOMES=['Inquietante','Sombrio','Perturbador','Corrosivo','Aterrador','Macabro','Pavoroso','Aterrorizante','Apocalíptico','Cataclísmico / Relíquia'];
  var $=function(q,r){return (r||document).querySelector(q);};
  var upd=[];
  function dieSvg(n){
    if(n&&SH[n])return '<svg viewBox="0 0 24 24" aria-hidden="true">'+SH[n]+'</svg>';
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon class="f o" points="12,3 21,12 12,21 3,12"/><text x="12" y="15.3" style="font-size:10px">?</text></svg>';
  }
  function fire(el,ev){try{el.dispatchEvent(new Event(ev,{bubbles:true}));}catch(e){}}
  function setv(orig,v,max){
    v=Math.max(0,v);if(max!=null&&max>0)v=Math.min(v,max);
    orig.value=String(v);fire(orig,'input');fire(orig,'change');tudo();
  }
  /* campo numérico espelho: edita o campo original sem tirar ele da página */
  function proxy(orig,cls){
    var i=document.createElement('input');i.type='number';i.className=cls||'';i.inputMode='numeric';
    i.addEventListener('input',function(){orig.value=i.value;fire(orig,'input');});
    i.addEventListener('change',function(){orig.value=i.value;fire(orig,'input');fire(orig,'change');tudo();});
    upd.push(function(){if(document.activeElement!==i&&i.value!==orig.value)i.value=orig.value;});
    return i;
  }
  function stepper(a,m,maxFixo){
    var s=document.createElement('span');s.className='vstp';
    function maxv(){return maxFixo!=null?maxFixo:(m?parseFloat(m.value)||0:0);}
    function b(t,d,ti){var x=document.createElement('button');x.type='button';x.textContent=t;x.title=ti;x.setAttribute('aria-label',ti);
      x.onclick=function(e){e.preventDefault();setv(a,(parseFloat(a.value)||0)+d,maxv());};return x;}
    s.appendChild(b('«',-5,'−5'));s.appendChild(b('‹',-1,'−1'));
    s.appendChild(proxy(a,'vcur'));
    var sep=document.createElement('span');sep.className='sep';sep.textContent='/';s.appendChild(sep);
    if(m)s.appendChild(proxy(m,'vmx'));else{var mm=document.createElement('span');mm.className='sep';mm.textContent=String(maxFixo);s.appendChild(mm);}
    s.appendChild(b('›',1,'+1'));s.appendChild(b('»',5,'+5'));
    return s;
  }
  function casas(cs,cur,max,fixo){
    cur=isNaN(cur)?0:cur;max=isNaN(max)?0:max;
    var n=max>0?Math.min(Math.round(max),24):(fixo||12);var fill=max>0?Math.max(0,Math.min(n,Math.round(Math.min(cur,max)/max*n))):0;
    var key=cur+'/'+max+'/'+n+'/'+fill;if(cs.dataset.k===key)return;cs.dataset.k=key;
    var h='';for(var i=0;i<n;i++)h+='<i'+(i<fill?' class="v"':'')+'></i>';cs.innerHTML=h;
  }
  function vitais(defs,antes){
    var vit=document.createElement('div');vit.className='vvit';
    defs.forEach(function(x){
      var a=$('input[data-k="'+x[2]+'"]'),m=$('input[data-k="'+x[3]+'"]');if(!a||!m)return;
      var w=document.createElement('div');w.className=x[0];w.innerHTML='<div class="l"><b>'+x[1]+'</b></div><div class="vcasas"></div>';
      $('.l',w).appendChild(stepper(a,m));vit.appendChild(w);
      var cs=$('.vcasas',w);
      upd.push(function(){casas(cs,parseFloat(a.value),parseFloat(m.value));});
    });
    antes.parentNode.insertBefore(vit,antes);return vit;
  }
  /* ---- tiles de atributo (ficha e ameaça) ---- */
  var sf=$('select[data-k="fisico"]');
  var ehFicha=!!$('input[data-k="pv_atual"]');
  if(sf){
    var grid=sf.closest('.grid');grid.classList.add('vtiles');grid.removeAttribute('style');
    var info={fisico:['Físico','PV e carga'],presteza:['Presteza',''],mente:['Mente','pontos de perícia'],espirito:['Espírito','PE']};
    ['fisico','presteza','mente','espirito'].forEach(function(k){
      var sel=$('select[data-k="'+k+'"]'),f=sel.closest('.field');f.classList.add('vtile');
      sel.setAttribute('aria-label',info[k][0]);
      var d=document.createElement('span');d.className='vtd';var nm=document.createElement('b');nm.textContent=info[k][0];var cp=document.createElement('span');cp.className='vtc';
      f.insertBefore(cp,f.firstChild);f.insertBefore(nm,f.firstChild);f.insertBefore(d,f.firstChild);
      upd.push(function(){var n=parseInt((sel.value||'').replace(/\D/g,''),10)||0;var h=dieSvg(n);if(d.dataset.n!==String(n)){d.innerHTML=h;d.dataset.n=String(n);}
        var t=n?('valor '+n):'escolha o dado';
        if(ehFicha){if(k==='presteza'){var de=$('input[data-k="deslocamento"]');if(n&&de&&de.value)t+='<br>deslocamento '+de.value+' m';}else if(info[k][1]&&n)t+='<br>'+info[k][1];}
        if(cp.dataset.t!==t){cp.innerHTML=t;cp.dataset.t=t;}});
    });
  }
  /* ---- título com o nome ---- */
  var h1=$('.topbar h1'),nomeEl=$('input[data-k="nome"]');
  if(h1&&nomeEl){
    var padrao=h1.textContent.trim();h1.classList.add('vh1');
    upd.push(function(){var v=(nomeEl.value||'').trim();var t=v||padrao;if(h1.textContent!==t){h1.textContent=t;try{document.title=(v?v+' — ':'')+padrao;}catch(e){}}h1.classList.toggle('vazio',!v);});
  }
  /* ---- FICHA ---- */
  if(ehFicha){
    ['nt','nex'].forEach(function(k){var e=$('input[data-k="'+k+'"]');if(e)e.closest('.field').classList.add('vstat');});
    var nv=$('.nivelf');if(nv)nv.classList.add('vstat');
    var dEl=$('input[data-k="deslocamento"]'),mEl=$('input[data-k="maldicao"]');
    if(dEl&&mEl){
      var df=dEl.closest('.field'),mf=mEl.closest('.field');df.classList.add('vstat','vdesl');
      var duo=document.createElement('div');duo.className='vduo';df.parentNode.insertBefore(duo,df);duo.appendChild(df);
      var mal=document.createElement('div');mal.className='vmal';mal.innerHTML='<b>Pontos de Maldição</b>';
      mEl.className='vorig';mal.appendChild(mEl);mal.appendChild(stepper(mEl,null,20));
      var mc=document.createElement('div');mc.className='vcasas';mal.appendChild(mc);duo.appendChild(mal);mf.remove();
      upd.push(function(){casas(mc,parseFloat(mEl.value),20,20);});
    }
    var box=$('.pv-pd');
    if(box){
      vitais([['pv','Pontos de vida','pv_atual','pv_max'],['san','Sanidade','san_atual','san_max'],['pe','Pontos de esforço','pd_atual','pd_max']],box);
      var lg=document.createElement('div');lg.className='vlegsetas';lg.textContent='‹ › somam ou tiram 1 · « » somam ou tiram 5. Você também pode digitar o número.';box.parentNode.insertBefore(lg,box);
    }
    var pg=$('#periciasGrupos');
    if(pg){
      var lg2=document.createElement('div');lg2.className='vleg';
      [['d4','#c9ced6'],['d6','#3fae5a'],['d8','#3884e6'],['d10','#e8b820'],['d12','#e44242']].forEach(function(x){var i=document.createElement('i');i.textContent=x[0];i.style.setProperty('--c',x[1]);lg2.appendChild(i);});
      pg.parentNode.insertBefore(lg2,pg);
      upd.push(function(){[].forEach.call(pg.querySelectorAll('select'),function(s){s.classList.add('vd');var v=s.value||'';if(s.dataset.d!==v){if(v)s.dataset.d=v;else s.removeAttribute('data-d');}});});
    }
  }
  /* ---- AMEAÇA ---- */
  var snh=$('select[data-k="nivel"]'),cols=$('.cols');
  if(snh&&cols){
    var fld=snh.closest('.field');
    var card=document.createElement('div');card.className='card vnhcard';
    card.innerHTML='<h2>Nível de Horror</h2><div class="vnhn"><b></b><span></span></div><div class="vnh"></div><p class="vdica">Quanto mais alto o degrau, mais a criatura muda o rumo da cena. Toque para trocar.</p>';
    card.appendChild(fld);cols.insertBefore(card,cols.firstChild);
    var nb=$('.vnhn b',card),ns=$('.vnhn span',card),lad=$('.vnh',card);
    var h='';for(var i=1;i<=10;i++)h+='<i style="--h:'+(18+i*3.8)+'px"></i>';lad.innerHTML=h;var is=[].slice.call(lad.children);
    upd.push(function(){var v=parseInt(snh.value,10)||0;var k=String(v);if(card.dataset.k===k)return;card.dataset.k=k;nb.textContent=v||'—';ns.textContent=v?NOMES[v-1]:'escolha o nível';is.forEach(function(e,j){e.className=j<v?'v':'';});});
    [].slice.call(document.querySelectorAll('.card h2')).forEach(function(h2){
      var t=h2.textContent.trim(),c=h2.closest('.card');
      if(t==='Presença Perturbadora')c.classList.add('vbig','vpp');
      if(t==='Pontos de Vida'){
        var g=$('.grid',c);if(g){g.style.display='none';vitais([['pv','Pontos de vida','pvAtual','pv']],g);}
      }
    });
    /* quadro de destaques: deslocamento, elementos, resistências */
    var dest=document.createElement('div');dest.className='card vdest';
    dest.innerHTML='<div class="blk b-d"><h3>Deslocamento</h3><div class="vdesl-big"></div></div><div class="blk b-e"><h3>Elementos</h3><div class="chips"></div></div><div class="blk b-r"><h3>Resistências</h3><div class="chips"></div><p class="vimu"></p></div>';
    var nhPos=card.nextSibling;cols.insertBefore(dest,nhPos);
    var cl={Conhecimento:'conh',Energia:'ener',Morte:'morte',Sangue:'sangue',Medo:'medo'};
    function esc(t){return String(t==null?'':t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
    function chip(t,extra,big){return '<span class="vch '+(cl[t]||'nm')+(big?' big':'')+'">'+esc(t)+(extra!==''&&extra!=null?' '+esc(extra):'')+'</span>';}
    upd.push(function(){
      var S_;try{S_=S;}catch(e){return;}if(!S_)return;
      var key=JSON.stringify([S_.desl,S_.elemento,S_.sec,S_.res,S_.imu,S_.vul]);if(dest.dataset.k===key)return;dest.dataset.k=key;
      var dd=(S_.desl||[]).filter(function(x){return x&&x.m!==''&&x.m!=null;});
      $('.vdesl-big',dest).innerHTML=dd.length?dd.map(function(x){var m=parseFloat(x.m);return '<div><span>'+esc(x.m)+' m</span><em>'+(isNaN(m)?'':Math.round(m/1.5)+' q')+(x.n?' · '+esc(x.n):'')+'</em></div>';}).join(''):'<em>sem deslocamento</em>';
      var el=[];if(S_.elemento&&S_.elemento!=='Nenhum')el.push(S_.elemento);(S_.sec||[]).forEach(function(e){if(el.indexOf(e)<0)el.push(e);});
      $('.b-e .chips',dest).innerHTML=el.length?el.map(function(e,i){return chip(e,'',i===0);}).join(''):'<em style="color:var(--muted)">Nenhum</em>';
      var rs=(S_.res||[]).filter(function(r){return r&&r.t&&r.t!=='Nulo';});
      $('.b-r .chips',dest).innerHTML=rs.length?rs.map(function(r){return chip(r.t,r.v);}).join(''):'<em style="color:var(--muted)">sem resistências</em>';
      var im=(S_.imu||[]).filter(function(x){return x&&x.t&&x.t!=='Nulo';}).map(function(x){return x.t.toLowerCase();});
      var vu=(S_.vul||[]).filter(function(x){return x&&x.t&&x.t!=='Nulo';}).map(function(x){return x.t;});
      var p='';if(im.length)p+='Imune a <b>'+esc(im.join(', '))+'</b>. ';if(vu.length)p+='Vulnerável a '+vu.map(function(t){return chip(t,'');}).join(' ');
      $('.vimu',dest).innerHTML=p;
    });
  }

  /* ---- MANUAL: d20 marca o que é importante ou dica ---- */
  var toc=$('nav.toc');
  if(toc){
    var d20='<span class="vd20i" aria-hidden="true"><svg viewBox="0 0 24 24">'+SH[20]+'<text x="12" y="14.6">20</text></svg></span>';
    [].forEach.call(document.querySelectorAll('.nota'),function(n){
      var t=n.querySelector('b.t'),r=t?t.textContent.trim():'';
      if(!t||r==='Gatilho'||r==='Aura'||n.dataset.d20)return;
      n.dataset.d20='1';n.classList.add('vd20');n.insertAdjacentHTML('afterbegin',d20);
    });
    var cap1=$('.capitulo');
    if(cap1&&!$('.vleg20')){
      var lg=document.createElement('div');lg.className='vleg20';
      lg.innerHTML=d20+'<b>Importante ou dica.</b> Quando você vir este d20 ao lado de um quadro, o texto traz algo que costuma ser esquecido na mesa, uma regra de leitura ou um conselho para o Mestre.';
      cap1.insertBefore(lg,cap1.firstChild);
      var tl=document.createElement('p');tl.className='vleg20t';tl.innerHTML=d20+'<span>= importante ou dica</span>';
      var ol=$('ol.caps',toc);if(ol)toc.insertBefore(tl,ol);
    }
  }
  function tudo(){upd.forEach(function(f){try{f();}catch(e){}});}
  tudo();setInterval(tudo,400);
  document.addEventListener('input',tudo);document.addEventListener('change',tudo);
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',montar);else montar();
})();
