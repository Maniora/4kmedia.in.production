# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account
3. Create a new service (Gmail, Outlook, etc.)

## 2. Create Email Templates

### Contact Form Template
Create a template with these variables:
- `{{user_name}}` - User's name
- `{{user_email}}` - User's email
- `{{user_phone}}` - User's phone
- `{{service}}` - Selected service
- `{{message}}` - Project details

### Careers Form Template
Create a template with these variables:
- `{{full_name}}` - Applicant's name
- `{{email}}` - Applicant's email
- `{{phone}}` - Applicant's phone
- `{{portfolio}}` - Portfolio link
- `{{role}}` - Role applying for
- `{{resume}}` - Resume file (Note: File uploads need special handling)

## 3. Environment Variables
Update your `.env` file with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template_id_here
VITE_EMAILJS_TEMPLATE_ID_CAREERS=your_careers_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 4. Security Notes
- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Use different templates for contact and careers forms
- Consider rate limiting for production use

## 5. Testing
1. Fill out the contact form and test email delivery
2. Test the careers form (note: file uploads may need additional handling)
3. Check your email inbox for received messages

## 6. Production Deployment
- Add environment variables to your hosting platform (Vercel, Netlify, etc.)
- Ensure all environment variables are set in production
- Test forms in production environment
