document.addEventListener('DOMContentLoaded', function() {
    // Get the current page path
    const currentPath = window.location.pathname;
    
    // Determine if we're in a subfolder
    const isInSubfolder = currentPath.includes('/pages/');
    
    // Set the path to the includes folder based on our location
    const includesPath = isInSubfolder ? '../includes/' : 'includes/';

    // Add active class to current navigation item
    function setActiveNavItem() {
        // Get all nav links
        const navLinks = document.querySelectorAll('nav ul li a');
        
        // Find which link matches current page and add active class
        navLinks.forEach(link => {
            // Get link href without domain
            const linkPath = new URL(link.href).pathname;
            
            // Check if current path ends with the link path
            // or if we're on index and the link is to index
            if (currentPath.endsWith(linkPath) || 
                (currentPath.endsWith('/') && linkPath.endsWith('index.html'))) {
                link.classList.add('active');
            }
        });
    }
    
    // Load header
    fetch(includesPath + 'header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load header: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Fix paths based on current location
            if (isInSubfolder) {
                document.getElementById('home-link').href = '../index.html';
                document.getElementById('about-link').href = 'about.html';
                // Add other links as needed
            } else {
                document.getElementById('home-link').href = 'index.html';
                document.getElementById('about-link').href = 'pages/about.html';
                // Add other links as needed
            }
            
            // Set active nav item after header is loaded
            setActiveNavItem();
        })
        .catch(error => {
            console.error('Error loading header:', error);
            document.getElementById('header-placeholder').innerHTML = 
                '<div class="container"><p>Error loading header. Please refresh the page.</p></div>';
        });
    
    // Load footer
    fetch(includesPath + 'footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load footer: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            
            // Fix footer home link path if needed
            const footerHomeLink = document.getElementById('footer-home-link');
            if (footerHomeLink) {
                if (isInSubfolder) {
                    footerHomeLink.href = '../index.html';
                } else {
                    // On homepage, hide the "Back to Home" link
                    if (currentPath.endsWith('index.html') || 
                        currentPath.endsWith('/')) {
                        footerHomeLink.style.display = 'none';
                    }
                }
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            document.getElementById('footer-placeholder').innerHTML = 
                '<div class="container"><p>Error loading footer. Please refresh the page.</p></div>';
        });
});