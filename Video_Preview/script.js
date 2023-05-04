var video = document.querySelector("figure.placeholder");

video.outerHTML = `
    <video src="assets/videos/pexels-nothing-ahead-10505868.mp4"
        width="720"
        height="400"
        muted
        controls
        onmouseover="previewVideo(this)"
        onmouseout="stopPreviewingVideo(this)"
    >
    </video>
`;

function previewVideo(video) {
  video.play();
}

function stopPreviewingVideo(video) {
  video.pause();
}
