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

    // Confirm the download
    const userConfirmed = confirm('Do you want to download this app?');

    if (userConfirmed) {
        // Redirect to the download link
        window.location.href = this.getAttribute('href');
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
