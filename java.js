window.addEventListener('load', function () {
    const player = document.getElementById('player');
    console.log(player);
    const left = document.getElementById('player').offsetLeft;
    const top = document.getElementById('player').offsetTop;

    console.log(top, left)

    
    player.style.left = left

    

        
        document.addEventListener('keyup', function() {
            console.log(player.style)
            document.getElementById('player').offsetLeft +=20 ;
            
        })
 
     


        

})
