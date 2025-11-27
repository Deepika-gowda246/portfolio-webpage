# 🚀 Complete Guide to Host Your Portfolio on GitHub Pages (FREE)

## Prerequisites
- A GitHub account (free at github.com)
- Your portfolio files ready in `c:\repos\portfolio-webpage`

---

## 📋 Step-by-Step Deployment Guide

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [https://github.com](https://github.com)
2. Click **"Sign up"**
3. Enter your email, create a password, and choose username: `Deepika-Gowda246`
4. Verify your email

### Step 2: Create a New Repository
1. Once logged in, click the **"+"** icon in the top-right corner
2. Select **"New repository"**
3. Repository settings:
   - **Repository name**: `deepika-portfolio` (or any name you prefer)
   - **Description**: "My professional portfolio - Deepika IM"
   - **Public** (must be public for free hosting)
   - ✅ **Add a README file** (check this box)
4. Click **"Create repository"**

### Step 3: Upload Your Files

#### Option A: Using GitHub Web Interface (Easiest)
1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop ALL these files from your `portfolio-webpage` folder:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `links.json`
   - `LICENSE`
   - `README.md`
3. Scroll down, add commit message: "Initial portfolio upload"
4. Click **"Commit changes"**

#### Option B: Using Git Command Line
```bash
# Navigate to your project folder
cd c:\repos\portfolio-webpage

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio upload"

# Add your repository as origin
git remote add origin https://github.com/Deepika-Gowda246/deepika-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. In your repository, click **"Settings"** (in the top menu)
2. Scroll down to **"Pages"** section (left sidebar)
3. Under **"Source"**, select:
   - **Deploy from a branch**
4. Under **"Branch"**:
   - Select **"main"** (or "master")
   - Select **"/ (root)"**
5. Click **"Save"**

### Step 5: Wait for Deployment
- GitHub will take 2-10 minutes to deploy your site
- You'll see a green checkmark ✅ when it's ready
- Your site will be available at:
  ```
  https://deepika-gowda246.github.io/deepika-portfolio/
  ```

---

## 🎨 Customizing Your Avatar

### Current Avatar
I've added a professional female avatar using DiceBear API. To customize:

1. **Option 1: Use your real photo**
   - Upload your photo to GitHub:
     - In your repository, click "Add file" → "Upload files"
     - Upload your photo (name it `avatar.jpg` or `avatar.png`)
     - Update `links.json`:
     ```json
     "avatar": "https://deepika-gowda246.github.io/deepika-portfolio/avatar.jpg"
     ```

2. **Option 2: Use LinkedIn Photo**
   - Right-click your LinkedIn profile photo
   - Copy image address
   - Update in `links.json`

3. **Option 3: Customize the current avatar**
   - Visit: https://www.dicebear.com/playground/
   - Create your avatar
   - Copy the URL and update in `links.json`

---

## 📝 Important URLs to Update

Before deploying, update these in `links.json`:

```json
{
  "links": [
    {
      "label": "Excel Portfolio",
      "url": "YOUR_ACTUAL_EXCEL_LINK_HERE",  // ← Update this
      "icon": "excel"
    },
    {
      "label": "Email",
      "url": "mailto:YOUR_REAL_EMAIL@gmail.com",  // ← Update this
      "icon": "mail"
    }
  ]
}
```

---

## 🔄 Making Updates After Deployment

### Method 1: Direct GitHub Edit
1. Go to your repository on GitHub
2. Click on the file you want to edit (e.g., `links.json`)
3. Click the pencil icon ✏️
4. Make your changes
5. Click "Commit changes"
6. Site updates automatically in 1-2 minutes!

### Method 2: Upload Updated Files
1. Edit files on your computer
2. Go to your repository
3. Click "Add file" → "Upload files"
4. Upload the changed files (they'll replace the old ones)
5. Commit changes

---

## 🌟 Pro Tips

1. **Custom Domain** (Optional)
   - Buy a domain (e.g., deepika-im.com)
   - Add a `CNAME` file with your domain name
   - Configure DNS settings

2. **Share Your Portfolio**
   - LinkedIn: Add to your profile
   - Resume: Include the link
   - Email signature: Add your portfolio URL

3. **QR Code Usage**
   - The QR code automatically uses your live URL
   - Perfect for business cards or networking events

---

## 🆘 Troubleshooting

### Site not showing up?
- Wait 10 minutes after enabling GitHub Pages
- Check Settings → Pages for the correct URL
- Make sure repository is PUBLIC

### Avatar not loading?
- Check the URL in `links.json` is correct
- Use HTTPS URLs only
- Try clearing browser cache (Ctrl+F5)

### Changes not appearing?
- Wait 2-5 minutes after committing
- Clear browser cache
- Check if commit was successful

---

## 📊 Your Live Portfolio URL

Once deployed, your portfolio will be available at:
```
https://deepika-gowda246.github.io/deepika-portfolio/
```

Or if you name your repository `deepika-gowda246.github.io`:
```
https://deepika-gowda246.github.io/
```

---

## 🎉 Congratulations!

Your portfolio is now:
- ✅ Hosted for FREE
- ✅ Always online (99.9% uptime)
- ✅ Secure with HTTPS
- ✅ Fast with GitHub's CDN
- ✅ Easy to update

---

## 📧 Need Help?

If you encounter any issues:
1. Check GitHub Pages documentation
2. Ensure all file names are correct (case-sensitive)
3. Verify your repository is public

Good luck with your portfolio! 🚀