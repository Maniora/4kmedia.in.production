# 4kMedia Deployment Guide

## 🚀 Vercel Deployment (Hide Branding)

### 1. Environment Variables in Vercel
Add these environment variables in your Vercel dashboard:

```env
VITE_EMAILJS_SERVICE_ID=service_4kmedia
VITE_EMAILJS_TEMPLATE_ID_CONTACT=template_contact_form
VITE_EMAILJS_TEMPLATE_ID_CAREERS=template_careers_form
VITE_EMAILJS_PUBLIC_KEY=tBuT-sff12f4i9BAi
VITE_CONTACT_EMAIL=tedyzu@forexzig.com
VITE_CAREERS_EMAIL=tedyzu@forexzig.com
```

### 2. Hide Vercel Branding
The following files are already configured to hide Vercel branding:

- ✅ `vercel.json` - Custom deployment configuration
- ✅ `robots.txt` - Blocks Vercel bots
- ✅ `sitemap.xml` - SEO optimization
- ✅ `index.html` - Custom meta tags and branding

### 3. Custom Domain Setup
1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your custom domain: `4kmedia.in`
3. Update DNS records as instructed by Vercel
4. Enable SSL certificate

### 4. EmailJS Setup
1. **Create EmailJS Account:**
   - Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - Sign up with your temp email: `tedyzu@forexzig.com`

2. **Create Email Service:**
   - Add Gmail service with `tedyzu@forexzig.com`
   - Get Service ID (use: `service_4kmedia`)

3. **Create Email Templates:**

   **Contact Form Template:**
   ```
   Subject: New Contact Form Submission - {{user_name}}
   
   Name: {{user_name}}
   Email: {{user_email}}
   Phone: {{user_phone}}
   Service: {{service}}
   Message: {{message}}
   ```

   **Careers Form Template:**
   ```
   Subject: New Job Application - {{full_name}}
   
   Name: {{full_name}}
   Email: {{email}}
   Phone: {{phone}}
   Portfolio: {{portfolio}}
   Role: {{role}}
   ```

4. **Get Template IDs:**
   - Contact template ID: `template_contact_form`
   - Careers template ID: `template_careers_form`

### 5. Production Checklist
- [ ] Environment variables set in Vercel
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] EmailJS templates created
- [ ] Forms tested in production
- [ ] SEO meta tags optimized
- [ ] Sitemap submitted to Google Search Console

### 6. Performance Optimization
- [ ] Enable Vercel Analytics (optional)
- [ ] Configure CDN settings
- [ ] Set up monitoring and alerts
- [ ] Test mobile responsiveness
- [ ] Verify all links work

## 🔧 Troubleshooting

### Common Issues:
1. **Forms not working:** Check environment variables in Vercel
2. **Emails not received:** Verify EmailJS service configuration
3. **Domain not working:** Check DNS settings and SSL
4. **SEO issues:** Verify meta tags and sitemap

### Support:
- EmailJS: [support@emailjs.com](mailto:support@emailjs.com)
- Vercel: [Vercel Support](https://vercel.com/support)
- 4kMedia: [info@4kmedia.in](mailto:info@4kmedia.in)
