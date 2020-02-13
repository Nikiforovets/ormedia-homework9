DZ.init({
    appId  : '394864',
    channelUrl : 'http://nikimusics/channel.html',
    player: {
        container: 'player',
        width : 800,
        height : 100,
        onload : function(){
        }
    }
});

document.getElementById("searchBtn").addEventListener("click", ()=>{
    //DZ.player.playTracks([136408148]);
    let artistField = document.getElementById("artistField");
    let trackField = document.getElementById("trackField");
    let request = new XMLHttpRequest();
    let url = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?q=artist:'";
    if(artistField.value != ""){
        url += artistField.value + "'";
    }
    if(trackField.value != ""){
        url += "track:'" + trackField.value + "'";
    }
    console.log(url);
    request.open('GET', url); 
    request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {  
        let array = JSON.parse(request.responseText);
        if(typeof array.data[0] != "undefined"){
            DZ.player.playTracks([array.data[0].id]);
        }
        else{
            alert("По вашему запросу ничего не найдено");
        }
    }
});
request.send();  
});

 