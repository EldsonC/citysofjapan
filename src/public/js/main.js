const btnExplore = document.getElementById('btn-explore-circle').addEventListener('click', () => {
    document.getElementById('name-japan').style = 'animation: animationExit 1s;'
    document.getElementById('name-city').style = 'animation: animationExit 2s;'
    document.getElementById('btn-explore-circle').style = 'animation: animationExit 3s;'
    document.getElementById('containner-show').style = 'opacity: 0; transition: 1s;'

    setTimeout(() => {
        document.getElementById('containner-show').style.display = 'none'

        document.getElementById('containner-data').style = 'display: flex;'
        document.getElementById('line').style = 'animation: nameJpCityAnimation2 1s;'
        document.getElementById('title').style = 'animation: nameJpCityAnimation2 2s;'
        document.getElementById('history').style = 'animation: nameJpCityAnimation2 3s;'
        document.getElementById('containner-btn-navigation').style = 'animation: nameJpCityAnimation2 3s;'
        
        
    }, 500)

})

const btnReturn = document.getElementById('btn-back').addEventListener('click', () => {
    
    document.getElementById('line').style = 'animation: animationExit 1s;'
    document.getElementById('title').style = 'animation: animationExit 2s;'
    document.getElementById('history').style = 'animation: animationExit 3s;'
    document.getElementById('containner-btn-navigation').style = 'animation: animationExit 3s;'

    setTimeout(() => {
        document.getElementById('containner-data').style = 'display: none;'

        document.getElementById('name-japan').style = 'animation: nameJpCityAnimation2 1s;'
        document.getElementById('name-city').style = 'animation: nameJpCityAnimation2 2s;'
        document.getElementById('btn-explore-circle').style = 'animation: nameJpCityAnimation2 3s;'
        document.getElementById('containner-show').style = 'opacity: 1;'
    }, 1000)
    
    
})


