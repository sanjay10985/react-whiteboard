# Collab - Real-time Collaborative Whiteboard

Collab is a modern web application that provides a real-time collaborative whiteboard experience. Built with React and Firebase, it allows users to create, share, and collaborate on digital whiteboards in real-time.

## Features

- **Real-time Collaboration**: Multiple users can draw on the same whiteboard simultaneously
- **Persistent Storage**: All drawings are automatically saved and can be accessed later
- **User Authentication**: Secure access with Firebase authentication
- **Responsive Design**: Works seamlessly across different devices and screen sizes
- **Modern UI**: Built with Tailwind CSS for a clean and modern user interface

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Backend/Database**: Firebase 11
- **Routing**: React Router 7
- **UI Components**: Shadcn UI
- **State Management**: Context API

## Prerequisites

- Node.js (Latest LTS version recommended)
- Firebase account and project setup

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your Firebase configuration

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── assets/        # Static assets
├── components/    # Reusable UI components
├── config/        # Configuration files (Firebase, etc.)
├── contexts/      # React context providers
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── modules/       # Feature-based modules
└── router/        # Routing configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to:

- Report bugs
- Suggest enhancements
- Submit pull requests

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
