# Yaxuan Wang's Personal Portfolio

## Project Overview
This is Yaxuan Wang's personal portfolio website, showcasing my resume, skills, projects, and contact information. The site is fully responsive, optimized for multiple devices, and features interactive animations for an engaging user experience.

---

## Website Features
###  Dynamic Animations
- Interactive elements 
- Custom animations for transitions and user interactions.

### Responsive Design
- Optimized for devices ranging from smartphones to desktops.
- Tested across multiple resolutions (320px - 1920px).

###  Interactive Canvas Effects
- Dynamic backgrounds and visual effects rendered using the `<canvas>` element.

###  Functional Contact Form
- Email submission form with feedback notifications.

### Markdown Rendering
- Blog content dynamically rendered from Markdown files using `marked.js`.

---

## Setup and Deployment

### Prerequisites
To set up the project locally, ensure you have:
- A web server (e.g., live-server, XAMPP, or any HTTP server).
- A modern web browser (Chrome, Firefox, Safari, Edge).

### Steps to Run Locally
1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd YOUR_REPOSITORY_NAME
   ```

3. **Run the project**:
   Open the `index.html` file in your browser or run it using a local web server:
   ```bash
   live-server
   ```

4. **Access the website**:
   Visit `http://127.0.0.1:8080` (or the port specified by your web server).

---

## License
This project is licensed under the **MIT License**. Feel free to use, modify, and distribute the code with attribution.

---

## Credits
### Third-Party Libraries and Resources
- **jQuery (`jquery.min.js`)**
  - Simplifies DOM manipulation and AJAX requests.
  - [jQuery Documentation](https://jquery.com/)

- **marked.js (`marked.js`)**
  - Converts Markdown to HTML for the blog section.
  - [Marked.js Documentation](https://marked.js.org/)

- **Paper.js (`paper-full.min.js`)**
  - Enables advanced canvas drawing and animations.
  - [Paper.js Documentation](http://paperjs.org/)

- **Prism.js (`prism.js`)**
  - Provides syntax highlighting for code blocks.
  - [Prism.js Documentation](https://prismjs.com/)

- **QRCode.js (`qrcode.js`)**
  - Generates dynamic QR codes.
  - [QRCode.js Documentation](https://github.com/davidshimjs/qrcodejs)

---

## Directory Structure
```
/css
  - base.css: Base styles for the website.
  - home.css: Styles for the homepage.
  - resume.css: Styles for the resume page.
  - contact.css: Styles for the contact page.
  - blog.css: Styles for the blog section.

/js
  - base.js: Core logic for navigation and global interactions.
  - canvas.js: Handles `<canvas>` animations.
  - index1.js: JavaScript specific to `index1.html`.
  - jq.js: Simplified DOM operations.
  - jquery.min.js: Minified version of jQuery.
  - marked.js: Markdown-to-HTML conversion.
  - paper-full.min.js: Advanced canvas graphics and animation library.
  - prism.js: Syntax highlighting for code.
  - qrcode.js: QR code generator.
  - resume.js: Dynamic resume page features.

/img
  - Contains all images and icons used in the project.

index.html: Main entry point of the website.
project.html: Details projects and portfolios.
skills.html: Showcases skills and experience.
contact.html: Contact form and additional contact details.
blog.html: Blog section.
```

---

## Additional Notes
- **Testing**: Ensure responsiveness and cross-browser compatibility by testing on devices with resolutions ranging from 320px to 1920px.
- **Feedback**: Suggestions and improvements are welcome. Feel free to submit issues or pull requests!
