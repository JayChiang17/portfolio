# Jay Chiang - Portfolio

A modern, responsive portfolio website showcasing my experience as a Data Engineer and Full-Stack Developer specializing in manufacturing data systems and applied data science.

**Live Demo:** [https://jaychiang17.github.io/portfolio/](https://jaychiang17.github.io/portfolio/)

## About Me

Data Engineer and Full-Stack Developer with 2+ years of experience building real-time MES dashboards, analytics pipelines, and AI-powered retrieval systems in the manufacturing industry. Currently pursuing M.S. in Applied Data Science at the University of Michigan - Ann Arbor, focusing on ML pipelines, deep learning, NLP, and causal inference.

## Professional Experience

- **Data Engineer** | Leadman Electronics | Jan 2024 - Present
- **Software Engineer, Manufacturing Data Systems** | Meritronics Inc | Sep 2025 - Dec 2025
- **Data Analyst** | Reliable Power, Inc. | Jan 2024 - Sep 2025

## Education

- **M.S. Applied Data Science** | University of Michigan - Ann Arbor | Jan 2026 - Present
- **B.S. Technology Information Management** | UC Santa Cruz | Sep 2020 - Jun 2023

## Tech Stack

### Frontend
- React 18
- Framer Motion
- React Type Animation

### Backend & Data
- Python, FastAPI, PostgreSQL, Azure SQL
- Pandas, NumPy, Airflow
- FAISS, Ollama, HyDE

### DevOps
- Docker, Kubernetes
- GitHub Pages, gh-pages

### Styling
- Custom CSS3 with animations
- Responsive design
- Premium highlight animations

## Features

- Responsive single-page application
- Smooth scroll navigation with 7 sections (Home, About, Experience, Skills, Projects, Resume, Contact)
- Interactive skills marquee carousel
- Premium animations:
  - Gradient text flow
  - Stat highlight badges
  - Shimmer effects
  - Staggered list animations
  - Reveal underlines
- TypeAnimation for dynamic role display
- Error boundary handling
- Lazy loading with Suspense

## Project Structure

```
src/
├── components/
│   ├── HomePage.js        # Main container
│   ├── Header.js          # Hero section with TypeAnimation
│   ├── MainNav.js         # Sticky navigation (7 options)
│   ├── ResumePage.js      # Resume/CV section
│   ├── skills.js          # Skills marquee carousel
│   ├── ContactPage.js     # Contact section
│   ├── ErrorBoundary.js   # Error handling
│   ├── Loading.js         # Loading spinner
│   └── Popup.js           # Notification popup
├── style/
│   ├── Homepages.css
│   ├── ResumePage.css
│   ├── Header.css
│   ├── MainNav.css
│   ├── FloatingSkills.css
│   ├── ContactPage.css
│   ├── HighlightEffects.css
│   └── ...
└── pic/                   # Profile images
```

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/JayChiang17/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm test` | Run tests |

## Contact

- **Email:** chiang.mengchieh@gmail.com
- **Phone:** (+1) 408-688-6969
- **LinkedIn:** [linkedin.com/in/jay-chiang-9054001a7](https://www.linkedin.com/in/jay-chiang-9054001a7/)
- **GitHub:** [github.com/JayChiang17](https://github.com/JayChiang17)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with React | Deployed on GitHub Pages
