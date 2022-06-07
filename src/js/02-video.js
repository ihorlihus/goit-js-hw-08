

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('currentTime', function (data) {
        
    // data is an object containing properties specific to that event
});

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });