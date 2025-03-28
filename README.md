# AI-Powered Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and AI integration. This portfolio showcases my skills, projects, and experience with an interactive and engaging user interface.

## 🌟 Features

- **AI Integration**

  - AI-powered chatbot for interactive communication
  - Voice navigation support
  - Smart content suggestions
  - Dynamic UI elements

- **Modern Design**

  - Responsive layout for all devices
  - Dark/Light mode support
  - Smooth animations and transitions
  - Clean and professional UI

- **Interactive Elements**
  - Dynamic skill ratings
  - Project showcases
  - Contact form with AI suggestions
  - Status notifications

## 🛠️ Tech Stack

- **Frontend**

  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Lucide Icons

- **UI Components**

  - Shadcn/ui
  - Custom components
  - Responsive design

- **AI & Integration**
  - AI-powered features
  - Voice navigation
  - Dynamic content

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/RAJAN-115/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── experience/
│   ├── projects/
│   ├── skills/
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── chatbot-button.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   └── status-banner.tsx
├── lib/
│   └── utils.ts
└── public/
    └── assets/
```

## 🔧 Configuration

1. **Environment Variables**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_AI_API_KEY=your_api_key
   ```

2. **Theme Configuration**
   - Located in `components/theme-provider.tsx`
   - Supports system, light, and dark modes

## 📱 Pages

- **Home**: Landing page with introduction and quick links
- **About**: Personal information and background
- **Projects**: Showcase of work and projects
- **Skills**: Technical skills and expertise
- **Experience**: Professional experience and education
- **Contact**: Contact form and information
- **Blog**: Coming soon section

## 🤖 AI Features

- **Chatbot**: Interactive AI assistant for user queries
- **Voice Navigation**: Voice commands for navigation
- **Smart Suggestions**: AI-powered content recommendations
- **Dynamic UI**: AI-enhanced user interface elements

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.294.0",
    "tailwindcss": "^3.3.0",
    "@radix-ui/react-slot": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

## 🔄 Development Status

This project is under active development. Some features may not work as expected. Check the status banner for updates.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Rajan Prajapati

- GitHub: [RAJAN-115](https://github.com/RAJAN-115)
- LinkedIn: [rajanrp115](https://www.linkedin.com/in/rajanrp115/)
- Email: rajarp115@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
