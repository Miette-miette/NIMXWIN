let mikado =20;
let maitreNeutre= document.getElementById("maitreNeutre");
let maitreDefaite= document.getElementById("maitreDefaite");
let choix=document.getElementById("level")

function choix_difficulte()
{
   
   choix.style.right="-100%";
   let mikado_anim= document.querySelectorAll("#mikado li:nth-of-type(2n)");
    for(let k=0; k<mikado_anim.length; k++)
    {
        mikado_anim[k].style.animation='mikado_start1 1s 1';
    }
    
    let mikado_anim2= document.querySelectorAll("#mikado li:nth-of-type(2n+1)");
    for(let j=0; j<mikado_anim2.length; j++)
    {
        mikado_anim2[j].style.animation='mikado_start2 1s 1';
    }
    console.log(mikado_anim2);
}


function nouveau_tour()
{
    let mikado_html="";
    for(let i=0; i<mikado; i++)
    {
        mikado_html+="<li></li>";
    }
    document.getElementById("mikado").innerHTML=mikado_html;
    
    
}
function tour_adverse()
{
    setTimeout(function() 
    {
        let difficulte=(document.querySelector('input[name="niveau_difficulte"]:checked').value);
        let retrait=choix_adverse(difficulte);
   
    while(retrait>mikado)
    {
        retrait=choix_adverse(difficulte);
        console.log("retry",retrait);
    }

    mikado-=retrait;
    console.log("nb mikado",mikado);

    document.getElementById("coups_adverse").innerHTML='Votre adversaire a retiré '+retrait+" bâtonnet(s). A vous de jouer!";
    if (mikado<=0)
        {
            alert("Vous avez gagné!");
            mikado=21;
            mise_en_place();
        }
    nouveau_tour();
    document.getElementById("valider").disabled=false;
    }, 1000);
       
}

function choix_adverse(facilite=0){
    let batonnet_group=mikado-1;
    let ecart=batonnet_group-(Math.floor(batonnet_group/4)*4);
     ecart=(ecart>0) ? ecart : 1;

    return (getRandomInt(100)>facilite) ? ecart :getRandomInt(2)+1 ;
    
}

function mise_en_place()
{ 
    maitreNeutre.style.display="block";
                
    maitreDefaite.style.display="none";
    
    choix.style.display="flex";
    nouveau_tour();
    
    
    setTimeout( tour_adverse(),2000);
    
    
}
mise_en_place();

function jouer()
{
    
    let retrait=document.querySelector('input[name="retrait_de_mikado"]:checked').value;
    console.log(retrait);
    
    if(!(retrait>mikado))
    {
        mikado-=retrait;
        
        if (mikado<=0)
            {
                
                maitreNeutre.style.display="none";
                
                maitreDefaite.style.display="block";
                document.getElementById("valider").disabled=true;
                setTimeout(function()
                {
                    alert("Vous avez perdu!");
                    mikado=21;
                    mise_en_place();
                    tour_adverse();
                    nouveau_tour();
                },2000);   
            }
    else{
        document.getElementById("valider").disabled=true;
        tour_adverse();
        nouveau_tour();
        }
    
    }
   else
   {
    alert("Vous ne pouvez pas retirer "+retrait+" bâtonnet(s), vous ne pouvez retirer que "+ mikado+" bâtonnet(s) maximum!")
   }
   
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
