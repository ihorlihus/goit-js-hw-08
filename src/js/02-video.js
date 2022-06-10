
    import throttle from 'lodash.throttle';
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);



player.on('timeupdate', throttle(function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
}, 1000)
);

player.setCurrentTime((JSON.parse(localStorage.getItem("videoplayer-current-time")))
    .seconds).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
    });

player.ready().then(function() {
    console.log('the player is ready')
    player.play()
});