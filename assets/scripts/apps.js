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
        // Simulate file renaming (note: actual renaming must be done manually by the user or server-side)
        let downloadUrl = this.getAttribute('href');
        let fileName = downloadUrl.split('/').pop();
        let newFileName = fileName;

        // Add suffix for potential file conflicts
        let suffix = 1;
        while (false /* check if file with newFileName already exists */) {
            newFileName = fileName.replace(/(\d+)?(\.[^.]+)?$/, `${suffix}$2`);
            suffix++;
        }

        // Simulate file download with modified file name (this will not change the file name on disk)
        window.location.href = downloadUrl;

        // Notify user
        alert(`Download started for ${newFileName}`);
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
