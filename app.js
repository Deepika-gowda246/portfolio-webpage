// App State with default links
let profileData = {
    name: "Deepika IM",
    avatar: "avatar.png",
    links: [
        {
            "label": "LinkedIn",
            "url": "https://www.linkedin.com/in/deepika-im",
            "icon": "linkedin"
        },
        {
            "label": "Hacker Rank",
            "url": "https://www.hackerrank.com/profile/deepikaim246",
            "icon": "Hacker Rank"
        },
        {
            "label": "GitHub",
            "url": "https://github.com/Deepika-Gowda246",
            "icon": "github"
        },
        {
            "label": "Email",
            "url": "mailto:deepika246@example.com",
            "icon": "mail"
        }
    ]
};

// DOM Elements
const elements = {
    avatar: document.getElementById('avatar'),
    profileName: document.getElementById('profileName'),
    profileHandle: document.getElementById('profileHandle'),
    linksContainer: document.getElementById('linksContainer'),
    settingsBtn: document.getElementById('settingsBtn'),
    mobileQrBtn: document.getElementById('mobileQrBtn'),
    qrModal: document.getElementById('qrModal'),
    qrClose: document.getElementById('qrClose'),
    editModal: document.getElementById('editModal'),
    editClose: document.getElementById('editClose'),
    editName: document.getElementById('editName'),
    editHandle: document.getElementById('editHandle'),
    editAvatar: document.getElementById('editAvatar'),
    linksEditor: document.getElementById('linksEditor'),
    addLinkBtn: document.getElementById('addLinkBtn'),
    saveBtn: document.getElementById('saveBtn'),
    resetBtn: document.getElementById('resetBtn'),
    copyJsonBtn: document.getElementById('copyJsonBtn')
};

// Initialize QR Code instance
let qrCodeInstance = null;

// Load profile data on page load
async function loadProfileData() {
    try {
        // First check localStorage for saved data
        const savedData = localStorage.getItem('profileData');
        if (savedData) {
            profileData = JSON.parse(savedData);
            renderProfile();
            return;
        }

        // Try to load from links.json
        try {
            const response = await fetch('links.json');
            if (response.ok) {
                const data = await response.json();
                // Only use file data if it has links
                if (data.links && data.links.length > 0) {
                    profileData = data;
                }
            }
        } catch (fetchError) {
            // File might not exist or we're running locally
            console.log('Using default profile data');
        }

        renderProfile();
    } catch (error) {
        console.error('Error loading profile data:', error);
        renderProfile();
    }
}

// Render profile data to the page
function renderProfile() {
    // Update avatar
    if (profileData.avatar) {
        elements.avatar.src = profileData.avatar;
    }

    // Update profile info
    elements.profileName.textContent = profileData.name || 'Your Name';

    // Render links
    renderLinks();
}

// Render links
function renderLinks() {
    elements.linksContainer.innerHTML = '';

    if (!profileData.links || profileData.links.length === 0) {
        elements.linksContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted);">No links added yet</p>';
        return;
    }

    profileData.links.forEach(link => {
        const linkBtn = document.createElement('a');
        linkBtn.className = 'link-btn';
        linkBtn.href = link.url;
        linkBtn.target = '_blank';
        linkBtn.rel = 'noopener noreferrer';

        // Get icon based on type
        const iconId = getIconId(link.icon);

        linkBtn.innerHTML = `
            <svg class="link-icon">
                <use xlink:href="#${iconId}"></use>
            </svg>
            <span class="link-text">${link.label}</span>
            <svg class="link-chevron">
                <use xlink:href="#icon-chevron"></use>
            </svg>
        `;

        elements.linksContainer.appendChild(linkBtn);
    });
}

// Get icon ID based on icon name
function getIconId(iconName) {
    const iconMap = {
        'linkedin': 'icon-linkedin',
        'powerbi': 'icon-powerbi',
        'github': 'icon-github',
        'mail': 'icon-mail',
        'gmail': 'icon-mail',
        'email': 'icon-mail',
        'hackerrank': 'icon-hackerrank'
    };

    return iconMap[iconName?.toLowerCase()] || 'icon-mail';
}

// QR Code functionality
function showQRCode() {
    elements.qrModal.classList.add('active');

    // Clear previous QR code if exists
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';

    // Determine the URL to encode
    let qrUrl = window.location.href;

    // If running locally, use the future GitHub Pages URL
    if (window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // This will be your actual GitHub Pages URL after deployment
        qrUrl = 'https://deepika-gowda246.github.io/deepika-portfolio/';
    }

    // Generate new QR code
    qrCodeInstance = new QRCode(qrContainer, {
        text: qrUrl,
        width: 200,
        height: 200,
        colorDark: '#1a1a1a',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

function hideQRCode() {
    elements.qrModal.classList.remove('active');
}

// Edit Modal functionality
function showEditModal() {
    // Simple password protection
    const password = prompt('Enter admin password:');

    // You can change this password to anything you want
    if (password !== 'deepika2024') {
        showNotification('Incorrect password!', 'error');
        return;
    }

    elements.editModal.classList.add('active');

    // Populate current values
    elements.editName.value = profileData.name || '';
    elements.editHandle.value = profileData.handle || '';
    elements.editAvatar.value = profileData.avatar || '';

    // Render links editor
    renderLinksEditor();
}

function hideEditModal() {
    elements.editModal.classList.remove('active');
}

// Render links in the editor
function renderLinksEditor() {
    elements.linksEditor.innerHTML = '';

    if (!profileData.links) {
        profileData.links = [];
    }

    profileData.links.forEach((link, index) => {
        const linkRow = createLinkRow(link, index);
        elements.linksEditor.appendChild(linkRow);
    });

    if (profileData.links.length === 0) {
        elements.linksEditor.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 20px;">No links added. Click "+ Add Link" to start.</p>';
    }
}

// Create a link row for the editor
function createLinkRow(link, index) {
    const row = document.createElement('div');
    row.className = 'link-row';
    row.innerHTML = `
        <input type="text" placeholder="Label" value="${link.label || ''}" data-index="${index}" data-field="label">
        <input type="url" placeholder="URL" value="${link.url || ''}" data-index="${index}" data-field="url">
        <input type="text" placeholder="Icon" value="${link.icon || ''}" data-index="${index}" data-field="icon">
        <button class="btn-remove-link" data-index="${index}">×</button>
    `;

    // Add event listeners
    row.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', (e) => {
            const idx = parseInt(e.target.dataset.index);
            const field = e.target.dataset.field;
            profileData.links[idx][field] = e.target.value;
        });
    });

    row.querySelector('.btn-remove-link').addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.index);
        profileData.links.splice(idx, 1);
        renderLinksEditor();
    });

    return row;
}

// Add new link
function addNewLink() {
    if (!profileData.links) {
        profileData.links = [];
    }

    profileData.links.push({
        label: '',
        url: '',
        icon: ''
    });

    renderLinksEditor();
}

// Save to localStorage
function saveToLocalStorage() {
    // Update basic info
    profileData.name = elements.editName.value;
    profileData.handle = elements.editHandle.value;
    profileData.avatar = elements.editAvatar.value;

    // Save to localStorage
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Re-render profile
    renderProfile();

    // Close modal
    hideEditModal();

    // Show success message
    showNotification('Profile saved to browser!');
}

// Reset to file
async function resetToFile() {
    try {
        const response = await fetch('links.json');
        if (response.ok) {
            profileData = await response.json();
            localStorage.removeItem('profileData');
            renderProfile();
            hideEditModal();
            showNotification('Reset to original file!');
        } else {
            showNotification('Could not load links.json', 'error');
        }
    } catch (error) {
        console.error('Error resetting to file:', error);
        showNotification('Error resetting to file', 'error');
    }
}

// Copy JSON to clipboard
function copyJsonToClipboard() {
    // Update basic info before copying
    profileData.name = elements.editName.value;
    profileData.handle = elements.editHandle.value;
    profileData.avatar = elements.editAvatar.value;

    const jsonString = JSON.stringify(profileData, null, 2);

    // Copy to clipboard
    navigator.clipboard.writeText(jsonString).then(() => {
        showNotification('JSON copied to clipboard!');
    }).catch(err => {
        console.error('Error copying to clipboard:', err);
        showNotification('Error copying to clipboard', 'error');
    });
}

// Show notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        font-size: 14px;
        z-index: 2000;
        animation: slideUp 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Share functionality
function showShareModal() {
    const shareModal = document.getElementById('shareModal');
    shareModal.classList.add('active');
}

function hideShareModal() {
    const shareModal = document.getElementById('shareModal');
    shareModal.classList.remove('active');
}

// Share functions
function getShareUrl() {
    if (window.location.protocol === 'file:' || window.location.hostname === 'localhost') {
        return 'https://deepika-gowda246.github.io/deepika-portfolio/';
    }
    return window.location.href;
}

function shareToClipboard() {
    const url = getShareUrl();
    navigator.clipboard.writeText(url).then(() => {
        showNotification('Link copied to clipboard!');
        hideShareModal();
    });
}

function shareToTwitter() {
    const url = getShareUrl();
    const text = `Check out ${profileData.name}'s portfolio!`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareToFacebook() {
    const url = getShareUrl();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function shareToWhatsApp() {
    const url = getShareUrl();
    const text = `Check out ${profileData.name}'s portfolio: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function shareToLinkedIn() {
    const url = getShareUrl();
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
}

function shareToMessenger() {
    const url = getShareUrl();
    window.open(`fb-messenger://share?link=${encodeURIComponent(url)}`, '_blank');
}

// Make share functions global
window.shareToClipboard = shareToClipboard;
window.shareToTwitter = shareToTwitter;
window.shareToFacebook = shareToFacebook;
window.shareToWhatsApp = shareToWhatsApp;
window.shareToLinkedIn = shareToLinkedIn;
window.shareToMessenger = shareToMessenger;

// Event Listeners
elements.settingsBtn.addEventListener('click', showEditModal);
elements.editClose.addEventListener('click', hideEditModal);
elements.mobileQrBtn.addEventListener('click', showQRCode);
elements.qrClose.addEventListener('click', hideQRCode);
elements.addLinkBtn.addEventListener('click', addNewLink);
elements.saveBtn.addEventListener('click', saveToLocalStorage);
elements.resetBtn.addEventListener('click', resetToFile);
elements.copyJsonBtn.addEventListener('click', copyJsonToClipboard);

// Share button listeners
document.getElementById('shareBtn').addEventListener('click', showShareModal);
document.getElementById('shareClose').addEventListener('click', hideShareModal);

// Close share modal when clicking outside
document.getElementById('shareModal').addEventListener('click', (e) => {
    if (e.target.id === 'shareModal') {
        hideShareModal();
    }
});

// Close modals when clicking outside
elements.qrModal.addEventListener('click', (e) => {
    if (e.target === elements.qrModal) {
        hideQRCode();
    }
});

elements.editModal.addEventListener('click', (e) => {
    if (e.target === elements.editModal) {
        hideEditModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideQRCode();
        hideEditModal();
    }

    // Press Ctrl+Shift+E to show/hide settings button
    if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        const settingsBtn = document.getElementById('settingsBtn');
        settingsBtn.classList.toggle('visible');
    }
});

// Generate Desktop QR Code
function generateDesktopQR() {
    const desktopQRContainer = document.getElementById('qrcode-desktop');
    if (desktopQRContainer && window.innerWidth >= 1024) {
        // Clear any existing QR code
        desktopQRContainer.innerHTML = '';

        // Determine the URL to encode
        let qrUrl = window.location.href;
        let isPreview = false;

        // If running locally, use the future GitHub Pages URL
        if (window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // This will be your actual GitHub Pages URL after deployment
            qrUrl = 'https://deepika-gowda246.github.io/deepika-portfolio/';
            isPreview = true;
        }

        // Create QR code container div
        const qrDiv = document.createElement('div');
        qrDiv.style.display = 'inline-block';
        desktopQRContainer.appendChild(qrDiv);

        // Generate QR code
        new QRCode(qrDiv, {
            text: qrUrl,
            width: 150,
            height: 150,
            colorDark: '#1a1a1a',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });

        // Add preview note if running locally
        if (isPreview) {
            const noteElement = document.createElement('p');
            noteElement.textContent = 'Preview URL';
            desktopQRContainer.appendChild(noteElement);
        }
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadProfileData();

    // Generate desktop QR code after a short delay to ensure page is loaded
    setTimeout(() => {
        generateDesktopQR();
    }, 100);

    // Regenerate QR on window resize (in case viewport changes)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            generateDesktopQR();
        }, 250);
    });
});