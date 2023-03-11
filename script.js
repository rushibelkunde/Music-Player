
var masterPlay = document.getElementById("pause");

console.log(masterPlay);

masterPlay.addEventListener('click',()=>{
    console.log("xYz");

    if(masterPlay.classList.contains('fa-pause')){
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    }
    else{
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    
})


