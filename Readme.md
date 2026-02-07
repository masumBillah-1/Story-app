# 📖 Story App - Team Project

একটি React-based Story Sharing Application যেখানে ৬ জন team member মিলে কাজ করবে।

---

## 👥 Team Member & Branch Assignment

| সদস্য | Branch Name | দায়িত্ব | Folder/Files |
|:------|:-----------|:---------|:------------|
| **সদস্য ১** | `login-page` | Login ও Signup Page তৈরি, Form Validation | `pages/Login.jsx`, `pages/Signup.jsx` |
| **সদস্য ২** | `navbar-footer` | Navbar ও Footer Component, Responsive UI | `components/Navbar.jsx`, `components/Footer.jsx` |
| **সদস্য ৩** | `home-stories` | Home Page ও Stories Page তৈরি | `pages/Home.jsx`, `pages/Stories.jsx` |
| **সদস্য ৪** | `story-card` | StoryCard Component, Shared UI Components | `components/StoryCard.jsx`, `shared/Input.jsx`, `shared/Button.jsx` |
| **সদস্য ৫** | `api-services` | Backend API Integration, Data Fetching | `services/api.js`, `services/auth.js` |
| **সদস্য ৬** | `layouts-routing` | Layout Structure, Routing Setup | `layouts/AuthLayout.jsx`, `layouts/MainLayout.jsx`, `App.jsx` |

---

## 📁 Project Folder Structure

```
Story-app/
├── src/
│   ├── components/         # Reusable UI Components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── StoryCard.jsx
│   ├── layouts/            # Page Layout Wrappers
│   │   ├── AuthLayout.jsx
│   │   └── MainLayout.jsx
│   ├── pages/              # Route-level Pages
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Home.jsx
│   │   └── Stories.jsx
│   ├── services/           # API & Backend Services
│   │   ├── api.js
│   │   └── auth.js
│   ├── shared/             # Small Reusable Components
│   │   ├── Input.jsx
│   │   ├── Button.jsx
│   │   └── Modal.jsx
│   ├── App.jsx             # Main App Component
│   └── main.jsx            # Entry Point
├── README.md
└── package.json
```

---

## 🔄 Git Workflow

### 1️⃣ Main Branch Setup
```bash
git init
git branch -M main
git remote add origin <GitHub_Repo_URL>
git push -u origin main
```

**নিয়ম:**
- `main` branch-এ সবসময় stable code থাকবে
- কখনো সরাসরি `main`-এ push করবেন না

---

### 2️⃣ Feature Branch তৈরি

প্রতিটি সদস্য নিজের branch তৈরি করবে:

```bash
# সদস্য ১
git checkout -b login-page

# সদস্য ২
git checkout -b navbar-footer

# সদস্য ৩
git checkout -b home-stories

# সদস্য ৪
git checkout -b story-card

# সদস্য ৫
git checkout -b api-services

# সদস্য ৬
git checkout -b layouts-routing
```

**নিয়ম:**
- শুধুমাত্র নিজের assigned folder/file-এ কাজ করবেন
- অন্যের branch-এ কাজ করা থেকে বিরত থাকুন

---

### 3️⃣ Commit করার নিয়ম

```bash
git add .
git commit -m "[Tag] কাজের সংক্ষিপ্ত বিবরণ"
git push origin <branch-name>
```

#### ✅ Commit Message Examples:

```
[Login] Login form তৈরি এবং validation যোগ করা হয়েছে
[Navbar] Responsive navbar তৈরি এবং links যোগ করা হয়েছে
[API] Stories fetch API integration সম্পন্ন
[StoryCard] Story card component এবং styling যোগ
[Routing] React Router setup এবং routes define করা
[Fix] Login page এ button alignment ঠিক করা
```

#### 📝 Commit Message Format:

| Tag | ব্যবহার |
|-----|---------|
| `[Feature]` | নতুন feature যোগ করার সময় |
| `[Fix]` | Bug fix করার সময় |
| `[Update]` | Existing code update করার সময় |
| `[Style]` | CSS/styling change করার সময় |
| `[Refactor]` | Code improve করার সময় |

---

### 4️⃣ Pull Request (PR) Process

কাজ শেষ হলে:

1. **GitHub-এ যান** এবং Pull Request তৈরি করুন
2. **Base branch:** `main` | **Compare branch:** আপনার feature branch
3. **Title:** সংক্ষিপ্ত বিবরণ দিন (যেমন: "Login Page Implementation")
4. **Description:** কী কী কাজ করা হয়েছে লিখুন
5. **Reviewer:** Team lead বা অন্য member-কে assign করুন
6. **Review & Approve** হলে `main`-এ merge করুন

---

### 5️⃣ Conflict এড়ানোর নিয়ম

Merge conflict এড়াতে নিয়মিত `main` থেকে update নিন:

```bash
# Main branch এ যান
git checkout main

# Latest code pull করুন
git pull origin main

# আপনার branch এ ফিরে যান
git checkout <your-branch-name>

# Main branch merge করুন
git merge main
```

**Conflict হলে:**
1. File-এ conflict resolve করুন
2. `git add .` এবং `git commit` করুন
3. আবার push করুন

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm বা yarn

### Steps

```bash
# Repository clone করুন
git clone <GitHub_Repo_URL>
cd Story-app

# Dependencies install করুন
npm install

# Development server চালু করুন
npm run dev
```

---

## 📌 Important Rules

✅ **করবেন:**
- নিজের assigned folder/file-এ কাজ করুন
- Commit message clear এবং descriptive রাখুন
- নিয়মিত `main` থেকে pull করুন
- কাজ শেষে Pull Request তৈরি করুন

❌ **করবেন না:**
- সরাসরি `main` branch-এ push করবেন না
- অন্যের file modify করবেন না (permission ছাড়া)
- Large files (images/videos) GitHub-এ push করবেন না
- Conflict ignore করবেন না - সাথে সাথে fix করুন

---

## 🎯 Next Steps

1. ✅ Repository clone করুন
2. ✅ নিজের branch তৈরি করুন
3. ✅ Assigned কাজ শুরু করুন
4. ✅ Regular commit করুন
5. ✅ Pull Request create করুন

---

## 📞 Contact & Support

কোনো সমস্যা হলে বা clarification প্রয়োজন হলে team discussion-এ জানান।

---

**Happy Coding! 🚀**

---

_তৈরি করেছে: Story App Team | Version: 1.0_