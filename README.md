# Junkyard Car Parts E-commerce Website

A modern e-commerce website built with Next.js for selling custom car parts and aftermarket components.

## Features

- Responsive design for all devices
- Product catalog with filtering and sorting
- Detailed product pages
- Shopping cart functionality
- Secure checkout process
- User authentication (coming soon)
- Admin dashboard (coming soon)

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma (for database)
- NextAuth.js (for authentication)
- Stripe (for payments)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/junkyard-car-parts.git
cd junkyard-car-parts
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add the following variables:
```env
DATABASE_URL="your_database_url"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="your_stripe_secret_key"
STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── cart/              # Shopping cart pages
│   ├── checkout/          # Checkout pages
│   ├── products/          # Product listing and detail pages
│   └── ...                # Other pages
├── components/            # Reusable components
├── lib/                   # Utility functions and configurations
└── styles/               # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/junkyard-car-parts](https://github.com/yourusername/junkyard-car-parts)
