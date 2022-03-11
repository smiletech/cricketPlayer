const Name=document.getElementById("Name")
const Age=document.getElementById("Age")
const cricketplayer=document.getElementById("cricketplayer")
const Tb=document.getElementById("Tb")

function reset(){
Name.value="";
Age.value="";
cricketplayer.value="";
}

let PlayerList=[];

 PlayerList=JSON.parse(localStorage.getItem('Player-List'))||[]

// PlayerList.length==11?Start1():null
Start1();

function PlayerHander(){
    if(Name.value==''|| Age.value=='' || cricketplayer.value=='')
   {
        alert("please Fill all value");
        return
    }

const OnePlayer={
    Name:Name.value,
    Age:Age.value,
    PlyerType:cricketplayer.value
}

if(PlayerList.length<=11)
{
checkValue(OnePlayer,PlayerList)?PlayerList.push(OnePlayer):alert(" this batsmen already here");
localStorage.setItem("Player-List",JSON.stringify(PlayerList))
alert("one Member added!")
reset();
Start1();
}
else
{
    alert("sorry!! 11 player already done.");
}

}

function checkValue(OnePlayer,PlayerList){
if(PlayerList.length==0)
return true;
else
{
for(let i of PlayerList)
{
    if(i.Name===OnePlayer.Name && i.PlyerType===OnePlayer.PlyerType)
    return false
}
}
return true
}

function Start1()
{
    const Arr=JSON.parse(localStorage.getItem('Player-List'));
    console.log(Arr.length);

    let tbl=`<h3>Team-Member</h3>

    <table class="Table-syt">
    <tr>
        <th>Sn.</th>
        <th>Name</th>
        <th>Age</th>
        <th>PlayerType</th>
    </tr>`

    if(Arr.length==0)
    {tbl+=`<tr>No players are added</tr>`}
    else
    {
        tbl+=Arr.map((e,index)=>`<tr><td>${index+1}</td><td>${e.Name}</td><td>${e.Age}</td><td>${e.PlyerType}</td></tr>`)
    }
    

   Tb.innerHTML=tbl+`</table>`
    return Tb
}
            
    
    






            