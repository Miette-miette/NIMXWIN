let mikado =20;
let img=document.createElement("img");
img.src="/media/Defaite.gif"


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
        
        let retrait=getRandomInt(2)+1;
   
    while(retrait>mikado)
    {
        retrait=getRandomInt(2)+1;
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

function mise_en_place()
{ 
    tour_adverse();
    nouveau_tour();
}
mise_en_place();

function jouer()
{
    let retrait=document.getElementById("retrait").value;
    console.log(retrait);
    
    if(!(retrait>mikado))
    {
        mikado-=retrait;
        
        if (mikado<=0)
            {
                alert("Vous avez perdu!");
                
                mikado=21;
                mise_en_place();
            }
    document.getElementById("valider").disabled=true;
    tour_adverse();
    nouveau_tour();
    
    }
   else
   {
    alert("Vous ne pouvez pas retirer "+retrait+" bâtonnet(s), vous ne pouvez retirer que "+ mikado+" bâtonnet(s) maximum!")
   }
   
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

