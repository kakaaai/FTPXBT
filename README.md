# HUGO Token Website

HUGO is a Solana-based community token centered around dog memes and charitable giving. The platform combines humor with purpose, creating a space for dog lovers to share memes while supporting animal welfare organizations.

## Features

- Hero section featuring HUGO as the main Solana pet token
- Navigation menu with: About, Hugonomics, Donations, Roadmap
- Social media integration (Twitter, Instagram, Telegram, Email)
- Mobile-responsive design
- Token information display with contract address
- Real-time donation tracking dashboard
- Meme sharing community section
- Transparent donation verification system

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Swiper.js
- Font Awesome Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Generate placeholder images:
```bash
npm run generate-images
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
next-website/
├── public/          # Static files
│   ├── images/     # Generated images and icons
│   └── fonts/      # Font files
├── src/
│   ├── components/ # React components
│   ├── config/     # Configuration files
│   ├── pages/      # Next.js pages
│   └── styles/     # CSS styles
├── scripts/        # Build scripts
└── package.json    # Project dependencies
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generate-images` - Generate placeholder images

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
