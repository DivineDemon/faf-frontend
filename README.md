# FAF Frontend

<div align="center">
  <img src="./public/logo.png" alt="FAF Logo" width="120" height="120">
  
  <h3>Freelancer & Client Hunter Platform</h3>
  
  <p>A modern, full-featured freelancing platform connecting talented freelancers with client hunters seeking quality services.</p>

  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8.2-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
  [![Stripe](https://img.shields.io/badge/Stripe-7.9.0-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

</div>

## 🚀 Features

### 👥 User Management
- **Dual User Types**: Support for both Freelancers and Client Hunters
- **Role-based Authentication**: Secure access control with JWT tokens
- **Profile Management**: Comprehensive user profiles with skills, experience, and portfolio
- **Image Upload**: Profile picture and project cover image support
- **Account Status Tracking**: Real-time account and payment status monitoring

### 💼 Freelancer Features
- **Professional Profiles**: Detailed profiles with bio, skills, hourly rates, and experience
- **Portfolio Showcase**: Display projects with descriptions, earnings, and time taken
- **Social Links**: Integration with GitHub, LinkedIn, and portfolio websites
- **Availability Status**: Real-time availability indicators
- **Project Management**: Create, edit, and manage project portfolios
- **Chat System**: Real-time communication with client hunters

### 🎯 Client Hunter Features
- **Freelancer Discovery**: Advanced search and filtering system
- **Smart Filters**: Filter by skills, hourly rate, experience level, and location
- **Freelancer Profiles**: Detailed view of freelancer capabilities and portfolios
- **Project Creation**: Create and manage project requirements
- **Chat System**: Direct communication with freelancers
- **Payment Processing**: Secure payment system for platform access

### 💬 Real-time Communication
- **Live Chat**: WebSocket-powered real-time messaging
- **Chat History**: Persistent message storage and retrieval
- **Message Search**: Search through conversation history
- **Online Status**: Real-time user presence indicators
- **Chat Archiving**: Organize and manage conversations

### 💳 Payment System
- **Stripe Integration**: Secure payment processing
- **Platform Fees**: Automated fee collection for premium features
- **Payment Status Tracking**: Real-time payment status monitoring
- **Receipt Generation**: Automatic receipt generation for payments
- **Payment History**: Complete transaction history

### 🎨 User Experience
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional interface using shadcn/ui components
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Smooth loading indicators throughout the app
- **Error Handling**: Comprehensive error boundaries and user feedback

## 🛠️ Technical Features

### ⚡ Performance & Optimization
- **Code Splitting**: Automatic route-based code splitting with TanStack Router
- **Lazy Loading**: Optimized component loading for better performance
- **Caching**: Intelligent API response caching with RTK Query
- **Bundle Optimization**: Vite-powered fast builds and hot module replacement

### 🔒 Security & Authentication
- **JWT Authentication**: Secure token-based authentication
- **Route Protection**: Role-based route guards and authentication checks
- **Payment Security**: PCI-compliant payment processing with Stripe
- **Input Validation**: Comprehensive form validation with Zod schemas
- **XSS Protection**: Built-in protection against cross-site scripting

### 📱 Modern Development Stack
- **React 19**: Latest React features with concurrent rendering
- **TypeScript**: Full type safety with strict configuration
- **TanStack Router**: Type-safe file-based routing
- **Redux Toolkit**: Predictable state management with RTK Query
- **Tailwind CSS**: Utility-first CSS framework with custom design system

### 🔧 Developer Experience
- **Hot Reloading**: Instant feedback during development
- **Type Safety**: Auto-generated API types from OpenAPI specification
- **Linting & Formatting**: Biome for consistent code quality
- **Component Library**: Reusable UI components with shadcn/ui
- **Form Handling**: React Hook Form with Zod validation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **pnpm** (v8.0.0 or higher) - Recommended package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/faf-frontend.git
cd faf-frontend
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Configure your environment variables:
```env
# API Configuration
VITE_BASE_API_URL=https://your-api-url.com

# Stripe Configuration (if using Stripe)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key

# Other configurations
VITE_APP_NAME=FAF Platform
VITE_APP_VERSION=1.0.0
```

### 4. Generate API Types (Optional)
If your backend provides an OpenAPI specification:
```bash
pnpm generate:api
```

### 5. Start Development Server
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with hot reloading |
| `pnpm build` | Build the application for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run Biome linter and formatter |
| `pnpm generate:api` | Generate TypeScript types from OpenAPI spec |

## 🏗️ Project Structure

```
faf-frontend/
├── public/                 # Static assets
│   └── logo.png           # Application logo
├── src/
│   ├── assets/            # Images, icons, and CSS
│   │   ├── css/          # Global styles
│   │   ├── icons/        # SVG icons
│   │   └── img/          # Images
│   ├── components/        # React components
│   │   ├── auth/         # Authentication components
│   │   ├── chat/         # Chat-related components
│   │   ├── dashboard/    # Dashboard components
│   │   ├── freelancer/   # Freelancer-specific components
│   │   ├── payment/      # Payment components
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and configurations
│   ├── routes/           # File-based routing
│   │   ├── client-hunter/ # Client hunter routes
│   │   └── freelancer/   # Freelancer routes
│   ├── store/            # Redux store and slices
│   │   ├── services/     # API services and RTK Query
│   │   └── slices/       # Redux slices
│   └── main.tsx          # Application entry point
├── components.json        # shadcn/ui configuration
├── biome.json           # Biome linter configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel deployment configuration
└── vite.config.ts       # Vite configuration
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS 4.1.10 with a custom design system. Configuration is handled through:
- `tailwind.config.js` - Main configuration
- `src/assets/css/index.css` - Global styles and CSS variables

### TypeScript
Strict TypeScript configuration with:
- Strict mode enabled
- Path mapping for clean imports (`@/` alias)
- Auto-generated API types from OpenAPI specification

### Biome
Code quality is enforced through Biome with:
- Automatic formatting
- Linting rules for TypeScript/React
- Import organization
- Consistent code style

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
# Build the application
pnpm build

# The built files will be in the 'dist' directory
# Deploy the 'dist' directory to your hosting provider
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style (enforced by Biome)
- Write meaningful commit messages
- Add TypeScript types for new features
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. **Check the Issues**: Look through existing GitHub issues
2. **Create a New Issue**: Provide detailed information about your problem
3. **Contact Support**: Reach out to our support team

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [TanStack Router](https://tanstack.com/router) - Type-safe routing
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Stripe](https://stripe.com/) - Payment processing
- [Vite](https://vitejs.dev/) - Build tool

---

<div align="center">
  <p>Built with ❤️ by the FAF Team</p>
  <p>© 2024 FAF Platform. All rights reserved.</p>
</div>
