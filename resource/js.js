//Object.defineProperty(this,'currentSong',{get:()=>{return this.songs[this.currentIndex]}})
//tim hieu json.localstorage

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playToggleBtn = $('.btn-toggle-play')
const audio = $('#audio')
const cdThum = $('.cd-thumb')
const playingSongName = $('.playing-song-name')
const playingSongSinger = $('.playing-song-singer')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')


var playRythm = true; //chỉ có thể dùng 1 trong 2 rythm và wave
var playWavesurfer = false;  //chưa hoàn thành xử lý cho wave suffer

//rythm
var neon = (elem, value, options = {}) => {
  const from = options.from || [0, 0, 0]
  const to = options.to || [255, 255, 255]
  const scaleR = (to[0] - from[0]) * value
  const scaleG = (to[1] - from[1]) * value
  const scaleB = (to[2] - from[2]) * value
  elem.style.boxShadow = `0 0 50vh 30px rgb(${Math.floor(
    to[0] - scaleR
  )}, ${Math.floor(to[1] - scaleG)}, ${Math.floor(to[2] - scaleB)})`
}
const rythm = new Rythm()
rythm.dancer.dances.neon = neon
rythm.addRythm('neon3', 'neon', 0, 10, {
  from: [22, 167, 230],
  to: [197, 97, 84]
})
rythm.addRythm('borderColor3', 'color', 0, 10, {
  from: [22, 167, 230],
  to: [197, 97, 84]
})

// wave 

let canvasElement = $('.wave');
let wave = null;

if (playRythm) {
  rythm.connectExternalAudioElement(audio)
  rythm.start();
}
else {
  wave = new Wave(audio, canvasElement);
  wave.addAnimation(new wave.animations.Lines(
    {
      lineWidth: 1,
      lineColor: "rgb(17, 118, 162)",
      count: 100,
      glow: {
        strength: 20, color: "rgb(100, 192, 231)"
      },
      rounded: true,
      frequencyBand: "mids",
    }
  ));
}

//wave suffer

var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'white',
  progressColor: 'rgb(17, 118, 162)',
  barWidth: 3,
  barRadius: 3,
  height: 40,
  responsive: true
});

var playMusicApp = {

  songs: [
    {
      name: "Em Hát Ai Nghe",
      singer: "Raftaar x Fortnite",
      path: "Mp3/em hat ai nghe.mp3",
      image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
    },
    {
      name: "Một Cú Lừa",
      singer: "Raftaar x Salim Merchant x Karma",
      path: "Mp3/mot cu lua.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Biết tìm đâu",
      singer: "Raftaar x Brobha V",
      path: "Mp3/BietTimDau.mp3",
      image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
    },
    {
      name: "Can't Get You Out Of My Head",
      singer: "Raftaar x Nawazuddin Siddiqui",
      path: "Mp3/Can't Get You Out Of My Head.mp3",
      image:
        "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
    },
    {
      name: "Em nên dừng lại",
      singer: "Raftaar",
      path: "Mp3/EmNenDungLai.mp3",
      image:
        "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
    },
    {
      name: "Chạm khẽ tim anh",
      singer: "Raftaar x kr$na",
      path: "Mp3/ChamKheTimAnh.mp3",
      image:
        "https://static2.yan.vn/YanNews/2167221/201905/tieu-su-ca-si-noo-phuoc-thinh-e28ca8c5.jpg"
    },
    {
      name: "Em Hát Ai Nghe",
      singer: "Raftaar x Fortnite",
      path: "Mp3/em hat ai nghe.mp3",
      image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
    },
    {
      name: "Một Cú Lừa",
      singer: "Raftaar x Salim Merchant x Karma",
      path: "Mp3/mot cu lua.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Biết tìm đâu",
      singer: "Raftaar x Brobha V",
      path: "Mp3/BietTimDau.mp3",
      image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
    },
    {
      name: "Can't Get You Out Of My Head",
      singer: "Raftaar x Nawazuddin Siddiqui",
      path: "Mp3/Can't Get You Out Of My Head.mp3",
      image:
        "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
    },
    {
      name: "Em nên dừng lại",
      singer: "Raftaar",
      path: "Mp3/EmNenDungLai.mp3",
      image:
        "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
    },
    {
      name: "Chạm khẽ tim anh",
      singer: "Raftaar x kr$na",
      path: "Mp3/ChamKheTimAnh.mp3",
      image:
        "https://static2.yan.vn/YanNews/2167221/201905/tieu-su-ca-si-noo-phuoc-thinh-e28ca8c5.jpg"
    },
    {
      name: "Em Hát Ai Nghe",
      singer: "Raftaar x Fortnite",
      path: "Mp3/em hat ai nghe.mp3",
      image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
    },
    {
      name: "Một Cú Lừa",
      singer: "Raftaar x Salim Merchant x Karma",
      path: "Mp3/mot cu lua.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Biết tìm đâu",
      singer: "Raftaar x Brobha V",
      path: "Mp3/BietTimDau.mp3",
      image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
    },
    {
      name: "Can't Get You Out Of My Head",
      singer: "Raftaar x Nawazuddin Siddiqui",
      path: "Mp3/Can't Get You Out Of My Head.mp3",
      image:
        "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
    },
    {
      name: "Em nên dừng lại",
      singer: "Raftaar",
      path: "Mp3/EmNenDungLai.mp3",
      image:
        "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
    },
    {
      name: "Chạm khẽ tim anh",
      singer: "Raftaar x kr$na",
      path: "Mp3/ChamKheTimAnh.mp3",
      image:
        "https://static2.yan.vn/YanNews/2167221/201905/tieu-su-ca-si-noo-phuoc-thinh-e28ca8c5.jpg"
    },


  ],
  isRandSong: false,
  isRepeatSong: false,
  renderListSongs: function () {
    let songBlock = $(".playlist")
    let songs = this.songs.map((s, i) => {
      return `<div class="song" data-set="${i}">
      <div class="thumb" style="background-image:url('${s.image}')">
      </div>
      <div class="body" src="">
        <h3 class="title">${s.name}</h3>
        <p class="singer">${s.singer}</p>
      </div>
      <div class="btn-option" data-set="${i}">
      <i class="fas fa-ellipsis-h"></i>
      <div class="options">
        <div class="option option--love" data-set="${i}">Yêu thích</div>
        <div class="option option--delete" data-set="${i}">Xóa</div>
      </div>
    </div>
    </div>`
    })
    songBlock.innerHTML = songs.join("")
  },
  prepareSong: function (i) {
    //load songs by index
    let isPlaying = !audio.paused  //nếu trc đó đang phát nhạc thì cho nhạc phát luôn sau khi chuẩn bị
    let song = this.songs[i];
    if (song) {
      //hủy trạng thái active của song hiện tại
      let lastActiveSong = $('.song.active')
      if (lastActiveSong) {
        lastActiveSong.classList.remove('active')
      }
      //load song mới
      audio.src = song.path;
      audio.dataSet = i;
      cdThum.setAttribute('style', `background-image: url("${song.image}")`)
      progress.value = 0;
      playingSongName.innerText = song.name;
      playingSongSinger.innerHTML = `<span>Ca sĩ: </span> ${song.singer}`;

      //đặt trạng thái active cho song mới
      let currentSong = $$('.song')[i];
      currentSong.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      currentSong.classList.add('active')

      // wave sufer
      if (playWavesurfer) {
        wavesurfer.load(song.path);
      }

      if (isPlaying)
        audio.play()

    }
    else {
      alert('không tồn tại bài hát')
    }

  }
  , randSongIndex() {
    let rs = 0
    do {
      rs = (Math.floor(Math.random() * 100)) % this.songs.length
    }
    while (rs == audio.dataSet)
    return rs
  },
  addHandleEvent: function () {
    const cdAnimate = cdThum.animate([{ transform: 'rotate(360deg)' }], { duration: 10000, iterations: Infinity })
    cdAnimate.pause();
    //dừng, phát nhạc bằng shortcut "space"
    document.onkeydown = (e) => {
      if (e.key == " ") {
        playToggleBtn.click()
      }
    }
    // khi click vao btn play
    playToggleBtn.onclick = () => {
      playToggleBtn.classList.toggle('playing')
      if (audio.paused) {
        audio.play();
        cdAnimate.play();
      } else {
        audio.pause();
        cdAnimate.pause();
      }

      //wave suffer
      if (playWavesurfer) {
        if (wavesurfer.isPlaying()) {
          wavesurfer.pause()
        } else {
          wavesurfer.play()
        }
      }

    }
    //khi click btn next song
    nextBtn.onclick = () => {
      let nextSongIndex = this.isRandSong ? this.randSongIndex() : (audio.dataSet + 1) % this.songs.length
      this.prepareSong(nextSongIndex)
    }
    //khi click btn prev song
    prevBtn.onclick = () => {
      let prevSongIndex = this.isRandSong ? this.randSongIndex() : ((audio.dataSet - 1) >= 0 ? this.songs.length - 1 : 0) % this.songs.length
      this.prepareSong(prevSongIndex)
    }

    //khi click btn repeat
    repeatBtn.onclick = () => {
      repeatBtn.classList.toggle('active')
      this.isRepeatSong = !this.isRepeatSong;
    }
    //khi click random
    randBtn.onclick = () => {
      randBtn.classList.toggle('active')
      this.isRandSong = !this.isRandSong;
    }



    //sau khi tua thanh progress
    //chia ra thành 2 event để fix bug khi tua trên thanh progess
    let isMouseDown = false;
    progress.onmousedown = () => {
      if (!audio.paused) {
        isMouseDown = true;
        audio.pause();
        cdAnimate.pause();
      }
    }
    progress.onmouseup = () => {
      audio.currentTime = progress.value * audio.duration / 100
      if (isMouseDown) {
        audio.play();
        cdAnimate.play();
        isMouseDown = false;
      }
    }

    //run progress
    audio.ontimeupdate = () => {
      if (audio.currentTime && !audio.paused) {  //!audio.paused là 1 phần trong fix bug khi tua
        progress.value = audio.currentTime * 100 / audio.duration
      }
    }
    //sau khi hết bài hát
    audio.onended = () => {
      if (this.isRepeatSong) {
        audio.play()
      }
      else {
        nextBtn.click()
        audio.play()
      }
    }

    //thu đĩa khi scroll
    const cdBox = $('.cd')
    const cdBoxWidth = cdBox.offsetWidth;
    const songBox = $('.playlist')
    songBox.onscroll = () => {
      var newCdWidth = (cdBoxWidth - songBox.scrollTop) > 0 ? (cdBoxWidth - songBox.scrollTop / 2) : 0;
      if (newCdWidth >= 130) {
        cdBox.style.width = newCdWidth + 'px';
        // cdBox.style.opacity = newCdWidth * 2 / cdBoxWidth;
        cdBox.style.transform = `translateY(-${(32 - newCdWidth * 32 / cdBoxWidth)}px)`
      }
    }

    //khi click vào các bài hát trong list
    let songRendered = $$('.song')
    var btns_option = $$('.btn-option')
    //nếu click vào option
    btns_option.forEach((b) => {
      b.onclick = function () {
        let currentActive = $('.btn-option.active')
        if (currentActive) {
          if (currentActive.dataset.set != this.dataset.set) {
            currentActive.classList.remove('active')
          }
        }
        this.classList.toggle('active')
      }
    })
    //khi click vào btn-delete
    var btns_delete = $$('.option--delete')
    btns_delete.forEach((b) => {
      b.onclick = () => {
        let deleteIndex = b.dataset.set;
        // let deleteSong = Array.from(songRendered).filter((s) => {
        //   return s.dataset.set == deleteIndex
        // })[0]
        // console.log(deleteSong.parentElement.removeChild(deleteSong));
        console.log(this.songs[deleteIndex].name);
        this.songs.splice(deleteIndex, 1);
        this.start();
      }
    })
    //khi click vafo btn yêu thích
    var btns_love = $$('.option--love')
    btns_love.forEach((b) => {
      b.onclick = () => {
        alert('Yeu thích ' + this.songs[b.dataset.set].name)
      }
    })
    //click để chuyển nhạc
    songRendered.forEach((s, i) => {
      s.onclick = (e) => {
        //nếu đang phát thì để nó phát tiếp
        if (!audio.paused) {
          playMusicApp.prepareSong(i);
          audio.play()
        }
        else {
          playMusicApp.prepareSong(i);
        }
      };
    })



  },

  start: function () {
    this.renderListSongs();
    //mặc định nghe bài đầu tiên trong list
    this.prepareSong(0)
    //handle cho các btn, lắng nghe sự kiện onclick
    this.addHandleEvent();

  }
}
playMusicApp.start();

