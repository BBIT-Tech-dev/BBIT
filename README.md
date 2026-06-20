# 🍌 BBIT: Banana Boy Institute of Technology

Welcome to the official repository of the **Banana Boy Institute of Technology (BBIT)**, a premier parody university dedicated to quantum mechanics, advanced human bio-energy flow dynamics, and quantum teleportation research, headed by the HOD of All Departments, **4-Dimensional Sir**.

This repository contains the static web files (`index.html`, `style.css`, and `script.js`) for the BBIT portal. You can host this website completely for free using **GitHub Pages**.

---

## 🚀 How to Host This Website for Free on GitHub Pages

Follow these step-by-step instructions to deploy your website to the internet.

### Prerequisites
1. **GitHub Account**: Make sure you have a free account at [github.com](https://github.com).
2. **Git Installed**: Ensure Git is installed on your computer. You can check by running `git --version` in your terminal.

---

### Step 1: Initialize Your Local Git Repository
Open your terminal inside this project folder (`/Users/Alpha/Documents/fun/`) and run the following commands to initialize Git and commit your files:

```bash
# Initialize a new Git repository
git init

# Add all files to the staging area
git add .

# Create the initial commit
git commit -m "feat: launch BBIT quantum and bio-energy website"

# Rename the default branch to 'main'
git branch -M main
```

---

### Step 2: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new) (log in if you haven't already).
2. Enter a **Repository name** (for example, `bbit`).
3. Make sure the repository visibility is set to **Public** (required for the free tier of GitHub Pages).
4. Leave all other options (README, .gitignore, license) **unchecked** as we already have these files.
5. Click the green **Create repository** button.

---

### Step 3: Link Your Code to GitHub & Push
GitHub will display a page with instructions. Copy and run the commands under **"...or push an existing repository from the command line"**:

```bash
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/bbit.git

# Push your code to GitHub
git push -u origin main
```

*(You may be prompted to enter your GitHub username and password/personal access token to authorize the upload).*

---

### Step 4: Turn on GitHub Pages
Once your files are successfully pushed to GitHub:

1. Navigate to your repository page on GitHub (e.g., `https://github.com/YOUR-USERNAME/bbit`).
2. Click the ⚙️ **Settings** tab in the top navigation bar of the repository.
3. On the left-hand sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - For **Source**, select **Deploy from a branch**.
   - Under **Branch**, change **None** to **`main`**.
   - Leave the folder path as `/ (root)`.
5. Click **Save**.

---

### Step 5: View Your Live Website!
GitHub will start building and deploying your site. 
- Wait about **1 to 2 minutes**.
- Refresh the **Pages** settings screen.
- At the top of the page, you will see a notice saying: 
  **"Your site is live at `https://YOUR-USERNAME.github.io/bbit/`"**
- Click that link to open your brand new, fully hosted website!

Any future updates you commit and push (`git push`) to GitHub will automatically update the live site.

---

*Humbly submitted to the space-time continuum by the Alumni of BBIT.*
