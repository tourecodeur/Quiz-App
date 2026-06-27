let currentPole="";
let currentIndex=0;
let score=0;

const quizzes={
dev:[
{q:"JS est ?",a:["Langage","Framework","OS","DB"],c:0},
{q:"HTML sert à ?",a:["Style","Structure","Serveur","DB"],c:1},
{q:"CSS ?",a:["Style","Logic","Data","AI"],c:0},
{q:"Node.js ?",a:["Backend JS","DB","OS","Editor"],c:0},
{q:"Angular ?",a:["Framework","DB","OS","Langage"],c:0}
],
design:[
{q:"Figma ?",a:["Design","Code","DB","Server"],c:0},
{q:"UX ?",a:["Expérience","Langage","OS","DB"],c:0},
{q:"Couleur chaude ?",a:["Bleu","Rouge","Vert","Noir"],c:1},
{q:"UI ?",a:["Interface","Server","DB","AI"],c:0},
{q:"PSD ?",a:["Fichier","Langage","OS","API"],c:0}
],
marketing:[
{q:"SEO ?",a:["Search","Style","DB","OS"],c:0},
{q:"LinkedIn ?",a:["Pro","Game","Music","Film"],c:0},
{q:"KPI ?",a:["Indicator","Langage","OS","DB"],c:0},
{q:"Ads ?",a:["Pub","Code","DB","OS"],c:0},
{q:"Email ?",a:["Marketing","Game","OS","AI"],c:0}
]
};

function startQuiz(p){
currentPole=p;
currentIndex=0;
score=0;
document.getElementById("poleSelection").classList.add("hidden");
document.getElementById("quizContainer").classList.remove("hidden");
load();
}

function load(){
let q=quizzes[currentPole][currentIndex];
document.getElementById("question").innerText=q.q;
let box=document.getElementById("answers");
box.innerHTML="";
q.a.forEach((x,i)=>{
let d=document.createElement("div");
d.innerText=x;
d.onclick=()=>{if(i===q.c)score++;currentIndex++;if(currentIndex<5)load();else end();};
box.appendChild(d);
});
}

function end(){
document.getElementById("quizContainer").classList.add("hidden");
document.getElementById("resultContainer").classList.remove("hidden");
document.getElementById("finalScore").innerText=score+"/5";
localStorage.setItem("score",Math.max(localStorage.getItem("score")||0,score));
document.getElementById("savedScore").innerText=localStorage.getItem("score");
}

function restartQuiz(){location.reload();}
function resetScore(){localStorage.removeItem("score");document.getElementById("savedScore").innerText=0;}
