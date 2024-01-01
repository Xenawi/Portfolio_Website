const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Game using python pygame with mmultiplayer',
        'name': 'vid (1).mp4',
        'duration': '00:20',
    },
    {
        'id': 'a2',
        'title': 'simple game with pygame',
        'name': 'vid (2).mp4',
        'duration': '00:14',
    },
    {
        'id': 'a3',
        'title': 'simple and beautiful log in page',
        'name': 'vid (3).mp4',
        'duration': '00:10',
    },

    {
        'id': 'a4',
        'title': 'simple animation using CSS',
        'name': 'vid (4).mp4',
        'duration': '00:20',
    },
    {
        'id': 'a5',
        'title': '3D popup card using CSS',
        'name': 'vid (5).mp4',
        'duration': '00:08',
    },
    {
        'id': 'a6',
        'title': 'pacMan using CSS',
        'name': 'vid (6).mp4',
        'duration': '00:21',
    },
    {
        'id': 'a7',
        'title': 'beautiful and simple art gallery',
        'name': 'vid (7).mp4',
        'duration': '00:23',
    },

    {
        'id': 'a8',
        'title': 'transparent log in form',
        'name': 'vid (8).mp4',
        'duration': '00:14',
    },
    // {
    //     'id': 'a9',
    //     'title': 'animated shopping cart',
    //     'name': 'vid (9).mp4',
    //     'duration': '00:16',
    // },

];

data.forEach((video, i) =>{
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="media/play.png" alt="">
                    <p>0${i + 1}. </p>
                    <h3>${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    
        `;

    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'media/pause.svg';


videos.forEach(selected_video =>{
    selected_video.onclick = ()=>{
        for(all_videos of videos){
            all_videos.classList.remove('active');   
            all_videos.querySelector('img').src = 'media/play.png';
        }
        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'media/pause.svg';
        
        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'media/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }

})