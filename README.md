# Sravani Makeovers — Luxury Bridal & Celebrity Studio Website

A couture, ultra-premium, responsive website crafted exclusively for **Sravani Makeovers** — South India's premier bridal and celebrity makeover studio.

Designed with royal black-and-gold aesthetics, editorial typography, glassmorphism, and smooth micro-interactions. Zero external framework dependencies — opens instantly in any modern web browser with zero errors.

---

## 🌟 Key Features & Interactive Systems

1. **Editorial Luxury Aesthetic**:
   - Palette: Deep velvet noir (`#0A090D`), Imperial champagne gold (`#D4AF37`), rose gold, and warm ivory.
   - Typography: Google Fonts `Playfair Display`, `Cormorant Garamond`, and `Plus Jakarta Sans`.
   - Subtle animated ambient glow, gold-leaf borders, and shimmer buttons.

2. **Real-Time Wedding Date Availability Checker**:
   - Interactive widget in the hero section allowing prospective brides to select their date and city.
   - Provides instant feedback on slot availability and automatically opens the consultation booking modal.

3. **Interactive Before & After Transformation Slider**:
   - Interactive split-image slider comparing natural bare skin prep to the finished 18-hour Muhurtham bridal glow.
   - Smooth mouse drag and touch swipe support on mobile devices.

4. **"Find Your Ideal Bridal Look" Style Quiz**:
   - A 4-step personalized consultation wizard:
     1. Ceremony selection (Muhurtham, Reception, Sangeet, Engagement)
     2. Attire & color palette (Kanjeevaram silk, designer lehenga, pastel silk, gowns)
     3. Desired skin finish (Luminous glass skin, royal matte HD, airbrush)
     4. Bridal hairstyle (Poola jada, Hollywood waves, floral chignon bun, bohemian braid)
   - Generates an instant tailored bridal recommendation card with 1-click booking integration.

5. **Dynamic Bridal Package & Price Calculator**:
   - Real-time estimation of bridal services:
     - Base event selection (Muhurtham, Reception, Sangeet, Royale 2-Event Suite)
     - Technique upgrades (Signature HD, Temptu Pro Airbrush, Couture Glass-Skin)
     - Add-on upgrades (Saree box pleating, mother of the bride glam, bridesmaid makeover, fresh florals, groom touchup)
   - Generates a pre-filled, formatted WhatsApp booking inquiry link.

6. **Signature Services Showcase with Category Filter**:
   - Interactive tab filtering: *All*, *Muhurtham Bridal*, *Reception Glam*, *Sangeet & Mehendi*, *Draping & Hair*, and *Academy Courses*.
   - Transparent pricing and detailed feature inclusions.

7. **Curated Lookbook Gallery & Fullscreen Lightbox**:
   - Filterable bridal and celebrity portfolio grid with smooth animations.
   - Click-to-zoom fullscreen lightbox with caption details.

8. **Brand Arsenal Marquee**:
   - Showcases 100% genuine luxury products: Charlotte Tilbury, Dior Backstage, MAC Cosmetics, Huda Beauty, NARS, Bobbi Brown, Laura Mercier, and Temptu Airbrush.

9. **Client Love & Verified Testimonials**:
   - Reviews from real brides featuring venues like Taj Falaknuma, ITC Kohenur, and Bengaluru Palace.

10. **Comprehensive Bridal FAQ Accordion**:
    - Smooth interactive accordion answering critical questions regarding early 4 AM muhurthams, trials, destination weddings, and bridesmaid packages.

11. **Instant Booking & VIP WhatsApp Integration**:
    - Complete booking form with validation.
    - Floating pulsating WhatsApp button.
    - Interactive confirmation voucher card upon submission.

12. **Tactile Luxury Audio Engine**:
    - Synthesized pleasant chime on button clicks powered by the native Web Audio API (zero audio files needed).

---

## 🚀 How to Run & Preview

### Option 1: Open Directly
Double-click `index.html` in your file explorer. It will immediately open in Google Chrome, Microsoft Edge, Safari, or Firefox.

### Option 2: Local Python Server (Recommended for testing)
Open PowerShell or Terminal in this folder and run:
```bash
python -m http.server 8080
```
Then navigate to: `http://localhost:8080`

---

## 🛠 Project Structure

```
saryuu/
├── index.html            # Master semantic HTML5 file
├── css/
│   └── style.css         # Luxury design tokens, glassmorphism, responsive grid & animations
├── js/
│   └── main.js           # Calculator, quiz, slider, audio engine, modal & booking handlers
└── README.md             # Documentation and guide
```

---

## ⚙️ Quick Customization Guide

- **Phone Number / WhatsApp**:
  In `index.html` and `js/main.js`, replace `919876543210` with your official mobile number.
- **Studio Address**:
  Update the address under the `#contact` section in `index.html`.
- **Pricing**:
  Update the `PRICING` object at the top of `js/main.js` to adjust rates or packages at any time.
