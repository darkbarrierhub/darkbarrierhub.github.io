// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download button click handler
document.querySelector('.download-button').addEventListener('click', function(e) {
    e.preventDefault();

    const userConfirmed = confirm('Do you want to download this app?');

    if (userConfirmed) {
        let downloadUrl = this.getAttribute('href');
        window.location.href = downloadUrl;
    }
});

// Fullscreen Image Viewer
const fullscreenViewer = document.getElementById('fullscreen-viewer');
const fullscreenImage = document.getElementById('fullscreen-image');

document.querySelectorAll('.image-gallery img').forEach(img => {
    img.addEventListener('click', function() {
        fullscreenImage.src = this.src;
        fullscreenViewer.style.display = 'flex';
    });
});

document.querySelector('.close-btn').addEventListener('click', function() {
    fullscreenViewer.style.display = 'none';
});

fullscreenViewer.addEventListener('click', function(e) {
    if (e.target !== fullscreenImage) {
        fullscreenViewer.style.display = 'none';
    }
});

// Example of future functionality: show more/less description
const description = document.querySelector('.app-description');
const originalText = description.innerHTML;
const truncatedText = originalText.substring(0, 150) + '... <a href="#" class="read-more">Read more</a>';

if (originalText.length > 150) {
    description.innerHTML = truncatedText;
}

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('read-more')) {
        e.preventDefault();
        description.innerHTML = originalText + ' <a href="#" class="read-less">Read less</a>';
    } else if (e.target && e.target.classList.contains('read-less')) {
        e.preventDefault();
        description.innerHTML = truncatedText;
    }
});
// Disqus configuration and loading
function loadDisqus() {
    var disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = window.location.pathname;
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://darkbarrierhub-github-io.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
}
