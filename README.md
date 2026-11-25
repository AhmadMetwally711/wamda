# Wamda | ومضة

An Arabic (RTL) photography blog built with React. Browse featured articles, search and filter by category, and read full posts with a table of contents and related articles.

**Live demo:** [wamda-nine.vercel.app](https://wamda-nine.vercel.app/)

## Features

- **Home page:** hero with live stats, featured posts, categories, latest posts, and a newsletter section
- **Blog page:** instant search, category filter, grid/list view, and pagination
- **Shareable filters:** the selected category lives in the URL (`/blog?category=...`)
- **Post page:** hero, auto-generated table of contents, tags, share buttons, author card, and related posts
- **About page:** values, team (generated from the posts data), and a contact section
- **Privacy Policy** and **Terms of Service** pages
- Newsletter form (UI only, no backend yet)
- Fully responsive, RTL layout

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (`createBrowserRouter`)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/) and [Font Awesome](https://fontawesome.com/)

## Getting Started

Requires [Node.js](https://nodejs.org/) (LTS).

```bash
# Clone the repository
git clone https://github.com/AhmadMetwally711/wamda.git
cd wamda

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Other scripts:

```bash
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── about/      # AboutHero, Values, Team, Contact
│   ├── blog/       # BlogHero, CategoryFilter, BlogPosts
│   ├── common/     # Navbar, Footer
│   ├── home/       # HomeHero, HomePosts, HomeCategories, HomeLatestPosts, HomeNewsletter
│   └── post/       # PostHero, PostSidebar, RelatedPosts
├── layouts/        # Layout, PostDetailsLayout
├── routes/         # Home, Blog, PostDetails, About, Privacy, Terms
├── utils/          # parseContent
├── App.jsx         # Root component
├── main.jsx        # Entry point
├── router.jsx      # Route definitions
├── data.js         # Posts, categories, and site info
└── index.css       # Tailwind setup and theme colors
```

## Content

All content comes from `src/data.js`:

- `posts`: articles (title, slug, category, author, image, tags, content)
- `categories`: names, icons, and counts
- `siteInfo`: site name, tagline, description, and contact email

Add a new article by adding an object to `posts`. In the article `content`, a line starting with `## ` becomes a section heading, which also appears in the table of contents.

## Deployment

The app is a single-page application, so every route must fall back to `index.html`. This repo includes a `vercel.json` that handles it:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Deploy on [Vercel](https://vercel.com/) by importing the repository. Vite is detected automatically:

| Setting          | Value           |
| ---------------- | --------------- |
| Framework Preset | Vite            |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |

## License

This project is for learning and portfolio purposes.
