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

কাজ শেষ হলে:kjdf ghhfdjk huibh

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





# Story App 


Design Link:  
https://stitch.withgoogle.com/projects/2018275577614846283

---

##  Key Features
Akhi apu korba===========
###  Public Story Feed
- Clean and modern homepage
- Featured and recent stories
- Card-based story layout
- Author name and story metadata
- Easy navigation
Sayma apu korba ====================
-user Login page
-user Singup page
-
biyzed baiya korba =============
-Author Analytics Dashboard

sakib baiya korba ====================
Navbar & hero section 
juma apu korba=====================

###  Single Story Reader View
- Distraction-free reading layout
- Story title, author info, and publish date
- Hero image / illustration support
- Like, comment, and engagement section
- Responsive typography for long reads

###  Story Editor (Create / Edit)
- Rich text editor for writing stories
- Create new stories
- Edit existing stories
- Clean writing-focused UI
- Publish and update stories easily

###  User Dashboard & Management
- Author analytics dashboard
- Story statistics (views, reads, engagement)
- Manage published stories
- Draft management
- Clean and organized dashboard UI
Masum bai korba=======
###  Draft Management
- Dedicated drafts page
- Quickly resume unfinished stories
- Organized list view for drafts

###  User Settings & Profile
- Profile information management
- Account and security settings
- Notification preferences
- Clean and minimal settings UI

---

##  Screens (Based on Design)

- Public Story Feed
- Single Story Reader View
- Story Editor (Create / Edit)
- User Dashboard
- Drafts Page
- Analytics & Stats Page
- User Settings & Profile
- User Login Page
- User Signup Page

---

##  Technology Stack

### Frontend
- JavaScript
- React.js / Next.js
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

### Tools
- Git & GitHub
- Google Stitch (UI/UX Design)

---

##  Project Structure (Example)




# 📅 Appointment Manager - Smart Queue & Service Management System




![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646cff?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.0-38bdf8?logo=tailwindcss)





###  Key Features

- **Secure Authentication** - User login/signup with demo account support
-  **Real-time Dashboard** - Visual analytics and activity tracking
-  **Staff Management** - Track availability, capacity, and workload
-  **Service Configuration** - Define services with duration and staff requirements
-  **Smart Appointment Scheduling** - Conflict detection and auto-assignment
-  **Intelligent Queue System** - Automatic staff assignment from waiting queue
-  **Activity Logging** - Complete audit trail of all actions
-  **Professional UI/UX** - Modern, responsive design with smooth animations





### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/appointment-manager.git
cd appointment-manager
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:5173
```

### Demo Account

Use these credentials to test the application:
- **Email:** demo@example.com
- **Password:** demo123

---

##  Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 6.0.5** - Build tool and dev server
- **TailwindCSS 4.0.0** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React** - Icon library

### State Management
- React Hooks (useState, useEffect)
- LocalStorage for data persistence

### Styling
- TailwindCSS with custom configuration
- CSS animations and transitions
- Glass morphism effects
- Gradient backgrounds

---

## Features Breakdown

### 1. Authentication System
- ✅ User registration with validation
- ✅ Secure login system
- ✅ Demo account for testing
- ✅ Session persistence
- ✅ Logout functionality

### 2. Dashboard
- ✅ Real-time statistics (appointments, queue, staff)
- ✅ Today's appointment summary
- ✅ Staff load visualization
- ✅ Activity log with timestamps
- ✅ Quick navigation cards

### 3. Appointment Management
- ✅ Create, edit, delete appointments
- ✅ Smart staff assignment
- ✅ Time conflict detection
- ✅ Date and time filtering
- ✅ Status management (Scheduled, Completed, Cancelled, No-Show)
- ✅ Staff capacity checking

### 4. Staff Management
- ✅ Add/edit/delete staff members
- ✅ Service type assignment
- ✅ Daily capacity configuration
- ✅ Availability status toggle
- ✅ Workload tracking

### 5. Services Management
- ✅ Define service types
- ✅ Set service duration
- ✅ Assign required staff types
- ✅ Track staff availability per service

### 6. Queue Management
- ✅ Automatic queue when staff unavailable
- ✅ Priority-based queue ordering
- ✅ Auto-assign from queue
- ✅ Manual staff assignment
- ✅ Queue position tracking

---

##  UI/UX Design Principles

### Design System
- **Color Palette:** Indigo, Purple, Blue gradients with professional accents
- **Typography:** Inter font family for modern, clean look
- **Spacing:** Consistent 8px grid system
- **Shadows:** Layered shadows for depth
- **Animations:** Smooth transitions and micro-interactions

### Responsive Design
-  Mobile-first approach
-  Tablet optimization
-  Desktop enhancements
-  Accessibility compliant

### Key UI Components
- Glass morphism cards
- Gradient buttons with hover effects
- Animated statistics cards
- Professional form inputs with icons
- Status badges with color coding
- Interactive tables with hover states

---

##  Data Flow

```
User Authentication
    ↓
Dashboard (Overview)
    ↓
├── Appointments ←→ Staff ←→ Services
    ↓
Waiting Queue (Auto-assignment)
    ↓
Activity Logs
```

---

##  Configuration

### Tailwind Configuration
```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Custom colors, animations, etc.
    },
  },
}
```

### Vite Configuration
```javascript
// vite.config.js
export default {
  plugins: [react()],
  server: {
    port: 5173,
  },
}
```

---





## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---


##  Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

##  Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- react for beautiful icons
- Vite for lightning-fast development




















=======
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
>>>>>>> f5b949abf4e1b66bc9fe087facd2827ec5abb6cb












