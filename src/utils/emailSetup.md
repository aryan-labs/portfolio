# EmailJS Setup Instructions

To receive emails from your contact form, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your Gmail account
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Portfolio Contact: {{from_name}}

**Content:**
```
Hello Aryan,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

## Step 5: Update Contact Component
Replace these values in `src/components/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Step 6: Test
1. Fill out your contact form
2. Check your email inbox for the message
3. If it doesn't work, check the browser console for errors

## Free Tier Limits
- 200 emails per month
- Perfect for a portfolio website

That's it! Your contact form will now send emails directly to aryan.shrivastava234@gmail.com