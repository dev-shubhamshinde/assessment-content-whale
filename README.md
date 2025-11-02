# Qualigenix - Next.js Landing Page

This is a responsive, SEO-focused landing page for Qualigenix, built with Next.js (App Router) and Tailwind CSS.

The core feature of this project is a simple, file-based "Custom CMS" designed to meet the assessment's requirement for a CMS with SEO goals in check.

## Key Features

*   **Next.js 14 (App Router):** Utilizes the latest Next.js features for a modern, fast, and scalable web application.
    
*   **File-Based "Custom CMS":** All page content (headlines, descriptions, stats, FAQs, etc.) is externalized into a single `content/home.json` file. This allows for easy content updates without touching any React code.
    
*   **SEO-First Architecture:** The main page (`app/page.js`) is a **Server Component**. It imports content from the JSON file and passes it as props to child components. This ensures all critical content is Server-Side Rendered (SSR) for optimal search engine crawling and indexing.
    
*   **Dynamic Metadata:** The page's `<title>`, `<meta name="description">`, and `<meta name="keywords">` are dynamically generated from the `metadata` object within `content/home.json`.
    
*   **Hybrid Component Model:** This project correctly demonstrates the power of the App Router by:
    
    *   Using **Server Components** (`HeroSection`, `ServiceSection`, etc.) for static content display (ideal for SEO).
        
    *   Using **Client Components** (`Header`, `FaqSection`) for interactivity (`useState`, `onClick`), while still receiving their content as props from the parent Server Component.
        
*   **Tailwind CSS:** Styled using modern, utility-first CSS.
    
*   **Geist Font:** Implements the Vercel's Geist font for clean typography.
    

## Project Structure

Here is the high-level structure focusing on the CMS implementation:

    /
    ├── app/
    │   ├── page.js           # ✅ The main home page (Server Component)
    │   ├── layout.js         # ✅ The root layout (with metadata template)
    │   └── globals.css       # Tailwind directives
    ├── components/
    │   ├── Header.js         # 🔵 (Client Component for interactive menu)
    │   ├── HeroSection.js    # ✅ (Server Component for SEO)
    │   ├── ServiceSection.js # ✅ (Server Component for SEO)
    │   ├── SupportAndTestimonialSection.js # ✅ (Server Component for SEO)
    │   └── FaqSection.js     # 🔵 (Client Component for interactive accordion)
    ├── content/
    │   └── home.json         # <-- ⭐️ YOUR CUSTOM CMS FILE ⭐️
    └── ...
    

## Getting Started

1.  **Clone the repository:**
    
        git clone [https://your-repo-url.com/project-name.git](https://your-repo-url.com/project-name.git)
        cd project-name
        
    
2.  **Install dependencies:**
    
        npm install
        
    
3.  **Run the development server:**
    
        npm run dev
        
    
4.  Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000 "null") in your browser to see the result.
    

## How to Edit Page Content (The "Custom CMS")

This project separates content from code. To change any text, links, or lists on the home page, you **only need to edit one file:** `content/home.json`.

The `app/page.js` file reads this JSON and injects the content into the correct components.

### Example: Changing the Hero Headline

1.  Open `content/home.json`.
    
2.  Find the `hero` object.
    
3.  Change the `headline` value:
    
        {
          "metadata": { ... },
          "hero": {
            "headline": "Your New Headline Goes Here", // <-- EDIT THIS
            "description": "...",
            "features": [ ... ],
            ...
          },
          ...
        }
        
    
4.  Save the file. The browser will auto-refresh with the new content.
    

This same principle applies to all other sections: `serviceSection`, `supportAndTestimonialSection`, and `faqSection`.

### How to Manage SEO

To update the page's SEO title, meta description, or keywords, simply edit the `metadata` object at the top of `content/home.json`.

    {
      "metadata": {
        "title": "Your New SEO Title | Qualigenix",
        "description": "Your new, keyword-rich meta description goes here.",
        "keywords": [
          "new keyword",
          "another keyword",
          "seo"
        ]
      },
      ...
    }
    

The `app/page.js` file automatically exports this object, and Next.js will use it to populate the `<head>` tag of the page.
