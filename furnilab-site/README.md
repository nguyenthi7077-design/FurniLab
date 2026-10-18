# FurniLab website

A static website (no build step). Open `index.html` in a browser to preview it.

## Files
- `index.html` : home page (hero, about, materials, collection, pre-order form, contact)
- `fl-01.html` to `fl-13.html` : one page per product
- `site.css`, `site.js` : shared styles and scripts for the product pages
- `img/` : all photos and specification sheets

## Publish with GitHub + Cloudflare Pages
1. Create a GitHub repository and upload everything in this folder (keep the `img` folder).
2. In Cloudflare, go to Workers & Pages, create a Pages project and connect the repository.
3. Build command: leave empty. Output directory: `/` (the root of the repository).
4. Add your domain under the project's Custom domains.

## Things to update
- Contact details: search for `nguyenthi7077@gmail.com` and `+0424323878` in `index.html` and `fl-*.html`.
- The pre-order form in `index.html` currently builds a text request that the customer copies and sends.
  To receive orders automatically, connect the form to a form service or a Cloudflare function.
