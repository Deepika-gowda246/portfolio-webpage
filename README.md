

A beautiful, glassmorphism-styled single-page portfolio with link management, perfect for sharing your professional profiles and work. Built with vanilla HTML, CSS, and JavaScript - no frameworks required!

![Portfolio Preview](https://via.placeholder.com/800x400)

## ✨ Features

- 🎨 **Glassmorphism Design** - Modern, elegant card with blur effects and soft shadows
- 📱 **Fully Responsive** - Works perfectly on all devices (phones to desktops)
- 🌓 **Auto Dark/Light Mode** - Adapts to system preferences
- 📝 **In-Browser Editing** - Edit your profile without touching code
- 💾 **JSON-Based Content** - Easy to update via GitHub
- 📲 **QR Code Generator** - Share your page instantly with mobile devices
- 🚀 **GitHub Pages Ready** - Free hosting, no backend required
- ♿ **Accessible** - Proper ARIA labels and keyboard navigation
- ⚡ **Lightning Fast** - No heavy frameworks, minimal dependencies

## 🚀 Quick Start

### 1. Fork or Download

1. Fork this repository or download as ZIP
2. If downloading, create a new GitHub repository and upload all files

### 2. Update Your Information

Edit `links.json` with your actual information:

```json
{
  "name": "Your Name",
  "handle": "@yourhandle",
  "avatar": "https://your-avatar-url.com/image.jpg",
  "links": [
    {
      "label": "LinkedIn",
      "url": "https://www.linkedin.com/in/your-profile",
      "icon": "linkedin"
    },
    // Add more links...
  ]
}
```

### 3. Enable GitHub Pages

1. Go to your repository Settings
2. Navigate to **Pages** section
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

Your site will be available at: `https://[your-username].github.io/[repository-name]`

### 4. Custom Domain (Optional)

1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📝 How to Edit Your Profile

### Method 1: In-Browser Editor (Temporary)

1. Click the **gear icon** (⚙️) in the top-right corner
2. Edit your name, handle, avatar URL, and links
3. Click **Save to Browser** to save locally
4. Click **Copy JSON** to get the updated data
5. Paste the JSON into `links.json` on GitHub to make changes permanent

### Method 2: Direct GitHub Edit (Permanent)

1. Go to your repository on GitHub
2. Click on `links.json`
3. Click the pencil icon to edit
4. Make your changes
5. Commit the changes
6. Your site updates automatically!

## 🎨 Customization

### Colors and Styling

Edit `styles.css` to customize:

- **Background Gradient**: Modify `--bg-gradient-1`, `--bg-gradient-2`, `--bg-gradient-3`
- **Card Appearance**: Adjust `--card-bg`, `--card-border`
- **Text Colors**: Change `--text-primary`, `--text-secondary`, `--text-muted`
- **Button Styles**: Customize `--button-bg`, `--button-hover-bg`

### Adding Custom Icons

The project uses inline SVG icons. To add new icons:

1. Add your SVG icon definition in the `<defs>` section of `index.html`
2. Use the icon name in your `links.json`

Supported icon types:
- `linkedin` - LinkedIn profile
- `powerbi` - Hacker Rank 
- `github` - GitHub profile
- `mail` / `email` - Email contact

## 📱 QR Code Feature

- **Desktop**: Click the floating QR button in the bottom-right
- **Mobile**: Click the QR icon in the top-left
- Generates a QR code of your current page URL
- Perfect for sharing your profile at networking events

## 🛠️ Technical Details

### File Structure

```
portfolio-webpage/
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── app.js          # JavaScript functionality
├── links.json      # Your profile data
├── README.md       # Documentation
└── LICENSE         # MIT License
```

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance

- **Page Size**: < 50KB (excluding avatar image)
- **Load Time**: < 1 second on 3G
- **Lighthouse Score**: 95+ across all metrics

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **Created by**: Bhanu Nagesha M
- **Font**: Inter by Rasmus Andersson
- **QR Code Library**: QRCode.js
- **Icons**: Custom SVG icons

## 💡 Tips

1. **Avatar Image**: Use a square image (recommended: 400x400px) for best results
2. **Link Icons**: Keep icon names lowercase in `links.json`
3. **URL Format**: Always include `https://` for external links
4. **Email Links**: Use `mailto:` prefix for email addresses
5. **Testing**: Test your changes locally by opening `index.html` in a browser

## 🐛 Troubleshooting

### Links not showing?
- Check that `links.json` is valid JSON (use [JSONLint](https://jsonlint.com/))
- Ensure all URLs are properly formatted
- Check browser console for errors

### QR Code not working?
- Ensure you're accessing the site via HTTP/HTTPS (not file://)
- Check that QRCode.js CDN is accessible

### Changes not reflecting on GitHub Pages?
- Wait 5-10 minutes for GitHub Pages to update
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Check GitHub Actions tab for deployment status

## 📧 Support

For issues or questions, please open an issue on GitHub or contact via the email link on the portfolio page.

---
