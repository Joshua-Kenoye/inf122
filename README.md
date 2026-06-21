# Web Programming Course Hub

A modern, responsive website for a Web Programming course featuring three modules: Web Programming Basics, HTML5 & Forms, and CSS3 & Styling.

## 📁 Project Structure

```
web-programming-course/
├── index.html              # Landing page with all modules
├── module1.html            # Module 1: Web Programming Basics
├── module2.html            # Module 2: HTML5 & Forms
├── module3.html            # Module 3: CSS3 & Styling
├── contact.html            # Contact page with form
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript for interactivity
├── images/
│   ├── module1.jpg        # Module 1 image
│   ├── module2.jpg        # Module 2 image
│   └── module3.jpg        # Module 3 image
├── audio/
│   └── module2-lecture.wav # Sample audio for Module 2
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, Atom, etc.)
- No server required - runs entirely in the browser!

### Installation & Setup

1. **Download/Clone the Project**
   ```bash
   # If using git
   git clone <repository-url>
   cd web-programming-course
   
   # Or simply download and extract the ZIP file
   ```

2. **Open in VS Code**
   - Open VS Code
   - File → Open Folder → Select `web-programming-course` folder
   - Install the "Live Server" extension (by Ritwick Dey)

3. **Run the Website**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - The website will open in your default browser at `http://localhost:5500`

4. **Alternative: Direct Browser Opening**
   - Simply double-click `index.html` to open it in your browser
   - Or drag and drop `index.html` into your browser window

## 📚 Features

### Landing Page (index.html)
- Hero section with call-to-action button
- Overview of all three modules
- Key features section
- Responsive design

### Module 1: Web Programming Basics
- Internet and WWW concepts
- Communication protocols table
- Client-server architecture
- Web development lifecycle
- Key takeaways

### Module 2: HTML5 & Forms
- Semantic HTML5 elements
- Interactive registration form
- HTML5 input types showcase
- Audio player with controls
- Lists (ordered, unordered, description)

### Module 3: CSS3 & Styling
- CSS selectors and properties table
- Box model visualization
- Flexbox layout examples
- CSS Grid layout examples
- Color and gradient demonstrations
- Transitions and animations
- Responsive design principles
- Typography examples

### Contact Page
- Instructor information display
- Functional contact form
- Multiple contact methods
- FAQ section
- Office hours and support information

## 🎨 Design Features

- **Modern Gradient Design**: Purple and pink gradient color scheme
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects and hover animations
- **Interactive Elements**: Hover effects, transitions, and animations
- **Accessibility**: Semantic HTML, keyboard navigation, skip links
- **Mobile Menu**: Hamburger menu for mobile devices
- **Form Validation**: Real-time email and phone validation
- **Smooth Scrolling**: Smooth scroll behavior for anchor links

## 🛠️ Customization

### Change Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... other colors ... */
}
```

### Update Instructor Information
Edit `contact.html` and update:
- Name: God'swill Richard Okon
- Registration: 25/CO/IS/037
- Department: Information System

### Replace Images
Replace the placeholder images in the `images/` folder:
- `module1.jpg` - Module 1 image
- `module2.jpg` - Module 2 image
- `module3.jpg` - Module 3 image

### Add Audio Content
Replace the sample audio in `audio/module2-lecture.wav` with your actual audio file.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ⌨️ Keyboard Shortcuts

- **Alt + H**: Go to Home page
- **Alt + C**: Go to Contact page

## 📝 Form Handling

### Contact Form
The contact form on the `contact.html` page accepts:
- **Name** (required)
- **Phone Number** (required)
- **Subject** (required)
- **Comments/Message** (required)

Currently, the form displays a success message and logs the data to the browser console. To send emails, you'll need to integrate with a backend service like:
- Formspree
- EmailJS
- Your own backend API

### Registration Form (Module 2)
The registration form on `module2.html` accepts:
- Full Name
- Email Address
- Phone Number
- Course Track (dropdown)
- Preferred Start Date
- Prior Experience (textarea)
- Terms and Conditions (checkbox)

## 🔧 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📖 Learning Resources

### HTML5
- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

### CSS3
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

### JavaScript
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript DOM Manipulation](https://www.w3schools.com/js/js_htmldom.asp)

## 🐛 Troubleshooting

### Images not showing
- Ensure image files are in the `images/` folder
- Check file names match exactly (case-sensitive on Linux/Mac)
- Try using absolute paths if relative paths don't work

### Audio not playing
- Ensure audio file is in the `audio/` folder
- Check browser supports the audio format (.wav, .mp3)
- Try different audio formats for better compatibility

### Form not working
- Check browser console for JavaScript errors (F12)
- Ensure form IDs match the JavaScript code
- Test in a different browser

### Styling looks wrong
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser
- Check that CSS file is in the `css/` folder

## 📄 License

This project is created for educational purposes as part of the Web Programming course.

## 👨‍🏫 Course Information

**Instructor**: God'swill Richard Okon  
**Registration Number**: 25/CO/IS/037  
**Department**: Information System  
**Course**: Web Programming (INF122)

---

**Created**: 2026  
**Last Updated**: June 2026

Happy Learning! 🚀
