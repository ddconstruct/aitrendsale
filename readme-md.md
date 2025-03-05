# TrendShop - AI Products E-commerce Website

This repository contains a complete e-commerce website for selling digital AI-related products.

## Features

- Responsive modern design
- PayPal payment integration
- Product showcase with descriptions
- Testimonials section
- Contact information

## Deployment Instructions

### Basic GitHub Pages Deployment

1. Fork this repository
2. Go to Settings > Pages
3. Set the source to "main" branch
4. Your site will be published at https://yourusername.github.io/trendshop/

### Custom Domain (Optional)

1. Purchase a domain name from a registrar (GoDaddy, Namecheap, etc.)
2. In your GitHub Pages settings, add your custom domain
3. Update your domain's DNS settings according to GitHub's instructions

## PayPal Integration

To enable payments with your PayPal business account:

1. Create a PayPal Developer account at [developer.paypal.com](https://developer.paypal.com)
2. Create a new application to get your Client ID
3. Replace `YOUR_PAYPAL_CLIENT_ID` in the index.html file with your actual Client ID

## Digital Product Delivery

For a production site, you'll need to implement one of these delivery methods:

1. **Email Delivery**: Send download links via email after purchase
2. **Protected Download Area**: Create a members-only section of your site
3. **Third-Party Service**: Use services like SendOwl, Gumroad, or Easy Digital Downloads

## File Structure

- `index.html` - Main website HTML
- `styles.css` - All styling for the website
- `scripts.js` - JavaScript functionality including PayPal integration
- `images/` - Directory containing product images
  - `product-guide.jpg` - AI Productivity Guide image
  - `product-masterclass.jpg` - Prompt Engineering Masterclass image
  - `product-toolkit.jpg` - Business Toolkit image
- `products/` - Directory where you would store your actual digital products
  - This would contain your PDF files or other downloadable content

## Customization

### Adding More Products

1. Duplicate a product card section in the HTML
2. Update the product details and image
3. Add any new product files to the products directory

### Changing Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary: #4a6fff; /* Main brand color */
    --secondary: #ff6b6b; /* Accent color */
    --dark: #333; /* Text color */
    --light: #f9f9f9; /* Background color */
    --gray: #888; /* Secondary text color */
}
```

## Support

For any questions or assistance with this template, please contact:

- Email: your-email@example.com
- Twitter: @yourusername

## License

This template is provided for your personal use. Please replace the placeholder content with your own before publishing.
