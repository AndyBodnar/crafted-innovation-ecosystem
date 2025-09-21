# Crafted Innovation Ecosystem

A modern monorepo containing three interconnected websites built with Next.js and Turborepo.

## 🏗️ Architecture

This monorepo contains three Next.js applications:

- **Crafted Innovation** (Port 3000) - Main tech consultancy landing page
- **Dev Collective** (Port 3001) - Developer community platform (placeholder)
- **Bespoke Seating Company** (Port 3002) - Custom furniture business (placeholder)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd crafted-innovation-ecosystem

# Install dependencies
npm install

# Start all applications in development mode
npm run dev
```

### Individual App Development

```bash
# Run only Crafted Innovation (port 3000)
npm run dev -- --scope=crafted-innovation

# Run only Dev Collective (port 3001)
npm run dev -- --scope=dev-collective

# Run only Bespoke Seating (port 3002)
npm run dev -- --scope=bespoke-seating
```

## 📦 Project Structure

```
crafted-innovation-ecosystem/
├── apps/
│   ├── crafted-innovation/     # Main landing page
│   ├── dev-collective/         # Developer community
│   └── bespoke-seating/        # Furniture business
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── eslint-config/          # Shared ESLint config
│   └── typescript-config/      # Shared TypeScript config
├── turbo.json                  # Turborepo configuration
└── package.json               # Root package.json
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start all apps in development mode
npm run build        # Build all apps for production
npm run lint         # Lint all packages
npm run format       # Format code with Prettier
npm run check-types  # Type check all packages

# Individual app commands
npm run dev -- --scope=crafted-innovation
npm run build -- --scope=dev-collective
```

## 🌐 Deployment

### Vercel (Recommended)

Each app can be deployed separately to Vercel:

1. **Crafted Innovation**: Connect your main domain
2. **Dev Collective**: Connect your dev collective domain
3. **Bespoke Seating**: Connect your furniture business domain

#### Setup Steps:

1. Push your code to GitHub
2. Connect each app directory to a separate Vercel project:
   - `apps/crafted-innovation` → Main domain
   - `apps/dev-collective` → Dev collective domain
   - `apps/bespoke-seating` → Furniture domain

3. Vercel will automatically detect the configuration files and build correctly

### Domain Configuration

Update the cross-site links in each app once you have your domains:

- Replace `http://localhost:3000` with your main domain
- Replace `http://localhost:3001` with your dev collective domain  
- Replace `http://localhost:3002` with your furniture domain

## 🎨 Customization

### Adding New Features

1. **Shared Components**: Add to `packages/ui/`
2. **App-specific Features**: Add to respective app directories
3. **Shared Configuration**: Update in `packages/` directories

### Styling

Each app uses CSS modules for styling. The color schemes are:

- **Crafted Innovation**: Blue theme (`#0070f3`)
- **Dev Collective**: Green theme (`#10b981`) 
- **Bespoke Seating**: Orange theme (`#d97706`)

## 🔧 Adding Tailwind CSS (Optional)

To add Tailwind CSS across all apps:

```bash
# Install Tailwind dependencies
npm install -D tailwindcss autoprefixer postcss

# Create Tailwind config
npx tailwindcss init -p
```

## 📱 Features

### Crafted Innovation (Main Site)
- Hero section with service overview
- Service cards highlighting capabilities
- Ecosystem navigation to other sites
- Professional consulting focus

### Dev Collective (Coming Soon)
- Developer community features
- Project collaboration tools
- Knowledge sharing platform
- Skill matching system

### Bespoke Seating Company (Launching Soon)
- Custom furniture showcase
- Process overview
- Premium seating solutions
- Consultation booking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across all apps
5. Submit a pull request

## 📄 License

Copyright © 2024 Crafted Innovation. All rights reserved.

## 🆘 Support

For questions or support, contact [andy@bespokeseating.xyz]

---

Built with ❤️ using Next.js, Turborepo, and modern web technologies.
