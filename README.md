# PurePeptides

Multi-page e-commerce storefront for PurePeptides — premium research-grade peptides.
Static site (HTML/CSS/JS, no build step). Deploy-ready for GitHub Pages.

## Pages
- `index.html` — storefront (98 products, cart, wishlist, search, 4 languages, currency switch)
- `checkout.html` — delivery details form + order summary; saves order, hands off to WhatsApp/email for payment
- `order-status.html` — order tracking lookup
- `calculator.html` — peptide reconstitution calculator
- `faq.html`, `privacy.html`, `returns.html`, `delivery.html`, `terms.html` — info pages
- `assets/styles.css`, `assets/shared.js` — shared styling + WhatsApp live-chat widget

## Contact
- Email: sales@europemeds.com
- WhatsApp: +33 7 58 56 35 17 (also a floating live-chat button on every page)

## Deploy (GitHub Pages)
Settings → Pages → Deploy from a branch → `main` / `(root)`.

## Notes
- Cart persists via browser localStorage and flows: shop → checkout → order status.
- Checkout collects delivery details only. Payment is arranged off-site (bank details sent by email/WhatsApp), so no card data is handled.
- All products are sold strictly for research purposes only. Not for human use.
