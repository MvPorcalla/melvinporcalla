Sure! Here's your content formatted as a Markdown (`.md`) file:

````markdown
---

## ✅ 7. Analytics & Contact Form Integration

### 🔹 A. Analytics (Plausible - Lightweight & Free for Personal Use)

#### 1. Create an account at [https://plausible.io](https://plausible.io)

#### 2. Get the script tag they provide and paste it in `<head>`:

```html
<script async defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
````

> Replace `yourdomain.com` with the actual domain (e.g., `mvporcalla.github.io` if you're hosting it there).

---

### 🔹 B. Contact Form Integration (Using Formspree – Free, No Backend)

#### 1. Add this HTML form:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <label for="email">Your Email</label>
  <input type="email" name="email" required>

  <label for="message">Message</label>
  <textarea name="message" rows="5" required></textarea>

  <button type="submit">Send</button>
</form>
```

> Replace `YOUR_FORM_ID` with the actual ID from Formspree after setting it up: [https://formspree.io](https://formspree.io)

---

#### 2. Add simple feedback:

```html
<form ... onsubmit="alert('Message sent!');">
```

You can also use a modal or toast message for a better UX.

---

Let me know if you'd like the **contact form styled using Bootstrap** or want to use **EmailJS** (another free option) for more customization.

```