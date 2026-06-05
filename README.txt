# Ultra Meats Website

This is a static GitHub Pages website for Ultra Meats.

## Files
- `index.html` — main website page
- `styles.css` — website styling
- `script.js` — checkout validation and Square link routing
- `assets/ultra-meats-logo.png` — logo file

## Before publishing
1. Open `script.js`.
2. Replace these placeholder links with the client’s real Square links:
   - `https://square.link/u/REPLACE-STEAK-BUNDLE-LINK`
   - `https://square.link/u/REPLACE-CHICKEN-BUNDLE-LINK`
3. Confirm sales tax settings inside Square Online or Square Dashboard.
4. Confirm Georgia and Tennessee sales tax registration requirements with the client’s tax professional.
5. Confirm the USDA/FNS/SNAP requirements before advertising EBT acceptance.

## Checkout behavior
The website collects customer information and requires the customer to check the Final Sale Disclaimer box before continuing.

If the Square links are not replaced yet, the checkout button will show a reminder instead of sending the customer to payment.

## GitHub Pages upload
Upload all files in this folder to the repository root. Then enable GitHub Pages from the repository settings.
