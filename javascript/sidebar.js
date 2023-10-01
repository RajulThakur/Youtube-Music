let hambuttonclick=true;
document.querySelector('.js-ham-button').addEventListener('click',()=>{
    console.log(hambuttonclick);
    hamclick(hambuttonclick);
    console.log(hambuttonclick);
})
function hamclick(){
    if(hambuttonclick){
        console.log('if')
        document.querySelector('.sidebar').classList.add("sidebar-close");
        document.querySelector('.middle-section').classList.add("middle-section-close")
        document.getElementById('line').remove();
        document.getElementById('bottom-section').remove();
        document.getElementById('content').style['margin-left']='170px';
        document.querySelector('.left-section').classList.add("left-section-close");
        hambuttonclick=false;
    }
    else{
        console.log('else')
        document.querySelector('.sidebar').classList.remove("sidebar-close");
        document.querySelector('.middle-section').classList.remove("middle-section-close")
        document.querySelector('.sidebar').innerHTML=`<div class="middle-section">
        <button class="home-button">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="svg-icon"><g><path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path></g></svg>
            <p>Home</p>
        </button>
        <button class="Explore-button">
            <svg class="svg-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path></g></svg>
            <p>Explore</p>
        </button>
        <button class="Library-button">
            <svg class="svg-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M16,6v2h-2v5c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.37,0,0.7,0.11,1,0.28V6H16z M18,20H4V6H3v15h15V20z M21,3H6v15h15V3z M7,4h13v13H7V4z"></path></g></svg>
            <p>Library</p>
        </button>
        <button class="Upgrade-button">
            <svg class="svg-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"></path></g></svg>
            <p>Upgrade</p>
        </button>
    </div>

    <div id="line"></div>

    <div id="bottom-section">
        <div class="new-playlist"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="svg-icon" style="margin-right: 6px;"><g class="style-scope yt-icon"><path d="M20,12h-8v8h-1v-8H3v-1h8V3h1v8h8V12z"></path></g></svg> New playlist</div>
        <div class="playlist-container">
            <p class="first-line">Your Likes</p>
            <span class="second-line">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"  style="pointer-events: none; fill:rgba(255, 255, 255, 0.7); width:12px; height:12px;"><g ><path d="M17,2H7v1h1v8l-2,2v2h5v6l1,1l1-1v-6h5v-2l-2-2V3h1V2z" ></path></g></svg>
                <p class="second-line-text">Auto playlist</p>
            </span>        
        </div>

        <div class="playlist-container">
            <p class="first-line">Song</p>
            <span class="second-line">
                <p class="second-line-text">HOmo</p>
            </span>        
        </div>    
        </div>`
        document.getElementById('content').style['margin-left']='340px';
        document.querySelector('.left-section').classList.remove("left-section-close");
        hambuttonclick=true;
    }
}