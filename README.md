## Djiotsa Djouake Christian Daryn, software engineer, fullstack developer

# CV Development Process

This document outlines the process followed to develop my personal CV using the **Software Development Life Cycle (SDLC)** methodology. This approach ensures a well-structured, efficient, and polished final product that meets both aesthetic and functional requirements.

## 1. Requirement Gathering and Analysis
   - **Objective**: Identify the key information to include in the CV, such as work experience, education, skills, and achievements.
   - **Activities**: Analyzed job descriptions and industry standards to determine the most relevant sections and layout style. Considered target audience (potential employers, recruiters) and the specific roles of interest.
   - **Outcome**: A list of essential sections and information to be presented in the CV.

## 2. System Design
   - **Objective**: Design the layout, structure, and visual theme for the CV.
   - **Activities**: Created wireframes for the CV layout, choosing fonts, colors, and section organization. Planned the hierarchy of information to make it easy to read and visually appealing.
   - **Outcome**: Design mockup, including layout, fonts, colors, and graphics.

## 3. Implementation (Coding)
   - **Objective**: Develop the CV using HTML, CSS, and relevant libraries, ensuring responsiveness and accessibility.
   - **Activities**: Coded the CV from scratch using HTML for structure and CSS for styling. Incorporated Flexbox/Grid for layout and ensured the design remained responsive across devices.
   - **Outcome**: A functional and visually appealing CV in HTML and CSS format.

## 4. Testing
   - **Objective**: Ensure the CV looks and functions as expected across different devices and browsers.
   - **Activities**: Tested the CV’s responsiveness on various screen sizes, checked compatibility across major browsers, and validated for accessibility and readability.
   - **Outcome**: Bug-free, responsive CV that renders well across devices.

## 5. Deployment
   - **Objective**: Make the CV accessible to recruiters and employers.
   - **Activities**: Hosted the CV on GitHub Pages (or alternative platform), generating a shareable link. Exported the HTML file to PDF format for easy sharing.
   - **Outcome**: Published CV, accessible online and as a downloadable PDF.

## 6. Maintenance
   - **Objective**: Keep the CV updated with new skills, experience, and achievements.
   - **Activities**: Periodically update the content, refine design elements, and improve technical aspects as needed.
   - **Outcome**: An up-to-date, polished CV that reflects my current skills and experience.


### _______________________RESULTS________________________


### 1. Requirement Gathering and Analysis
  - **General Objective**: Build a curriculum vitae that effectively showcases the relevant skills, experience, and achievements to potential employers.
  
  - **Specifics objectives**:
    - *Role interested(software engineer)*: 
      - Web developer (fullstack, frontend and backend),
      - Mobile developer
      - cross-platform developer
 
    - *Target Audience*:
      - **Potential Employers and Recruiters**: HR teams, hiring managers, and tech recruiters looking to fill software engineering or web development roles.
      - **Potential Clients**: Individuals or companies looking to hire a freelancer or contractor for web development projects.
      - **Peers and Industry Connections**: Other software engineers, developers, and tech professionals who may want to collaborate or network.
      - **Community and Followers**: People interested in learning from the engineer's content, such as blog posts, tutorials, or open-source contributions.
      - **Students and Aspiring Developers**: Individuals looking for inspiration, guidance, or mentorship on their own journeys into tech.
      - **Event Organizers and Conference Planners**: Organizers looking to invite industry experts to speak or present at events might use the portfolio as a source of reference.
  
    - *Functional Requirements*:
      - **1. Hero Section**: Display a professional introduction (name, job title, summary)
      - **2. About Section**:Provide a detailed background  information: experience, and skill.
      - **3. Skills Section**: List key technical skills with visual indicators and sort them by category.
      - **4. Projects Section**: Showcase individual projects with details (title, description, technology stack, image/screenshot/video demo, link)
      - **5. Contact Section**: Include contact form with name, phone number, email, subject, message, linkedin link, github link and direct connection: whatsapp, linkedin, and email
      - **6. Resume/CV**: highlight the education, certifications and work experiences with and option to  view and download the resume.
      - **7. Blog and Testimony**: will be added in the future.
      - **8. Navigation and Interaction**:
          - Responsive design for mobile, tablet and desktop
          -  Sticky header and back to top button
      - **9. Content management**: For future  update, enable content update(project, user information, email list subscription, blog post, testimonials) through a user friendly backend.
      - **10. Search Engine Optimization**: Ensure SEO-friendly URLs and metadata for page to enhance discoverability. Also implement, alt tags for images, meta descriptions, and relevant keywords.


    - *Non-Functional Requirements*:
      - **1. Performance**: Website should load in under 3 seconds for an optimal user experience and ensure image optimization and lazy loading to improve page load speed.
      - **2. Usability**: Create an intuitive and user-friendly interface with clear navigation.  All sections and elements should be easy to locate and understand for users of varying tech skill levels.
      - **3. Scalability**: for future, he backend should support future content growth (e.g., adding more projects, blogs) without performance degradation.
      - **4. Reliability and Availability**: Ensure a high availability of the website (99.9% uptime) to provide consistent access to users. Backup and restore mechanisms should be in place to avoid data loss.
      - **5. Maintainability**: Code should be modular, well-documented, and easy to update.
      - **6. Accessibility**: Ensure proper color contrast, keyboard navigation, alt tags for images.


### 2. System Design
   - **Fonts**:
     - *Primary*: Montserrat for readability.
     - *Secondary*: Poppins for headings or highlighted text.
     - *Code font*: Source code pro for any code snippet. 

   - **Color palette**:
     - *Primary Color*: Deep Blue (#003366)->dark(Lighter Navy: #1A2D48) – Represents professionalism, trust, and reliability.
     - *Accent Color*: Vibrant Orange (#FF6B35)->dark(Burnt Orange: #FF8F66) – Adds energy and attention to important elements like buttons and links.
     - *Neutral Background*: Light Gray (#F5F5F5) or White (#FFFFFF)->dark(Dark Slate: #121212) – Ensures content readability and provides a clean look.
     - *Text Color*: Dark Gray (#333333)->dark(Soft Light Gray: #E0E0E0) – Soft on the eyes and balances well against a light background.
     - *Secondary Accent*: Light Blue (#A6C8FF)->dark(Muted Blue: #5A8CC6) – Used for subtle highlights, borders, or section backgrounds.

   - **Section Organization and Information Hierarchy**:
     - *1. Hero Section*:
       - ***content***: Display the engineer’s name, job title, a brief intro, and a call-to-action button (e.g., "View My Work").
       - ***Design***: Use large, centered text with an eye-catching background or professional photo. Add a subtle animation or scrolling cue for engagement.

     - *2. About Section*:
       - ***Content***: Overview of the engineer’s background, skills, and experience. Include a downloadable resume button.
       - ***Design***: Arrange in a split layout with a brief bio on one side and a visual or skills summary on the other.
       - ***Hierarchy***: Start with a heading like “About Me” followed by short, digestible paragraphs and skill icons or bars.

     - *3. Projects Sections*:
       - ***Content***: Showcase projects with thumbnails, titles, descriptions, and tech stacks. Include links to demos and GitHub repos.
       - ***Design***: Use a grid layout with a hover effect to reveal more details. Categorize or filter by type or tech stack for easy navigation.
       - ***Hierarchy***: Highlight featured projects at the top. Use consistent visual indicators (like icons or tags) for tech stacks. 

     - *4. Skills Section*:
       - ***Content***: Display core technical skills with proficiencies (e.g., frontend, backend, tools).
       - ***Design***: Visual elements like bars, circles, or icons to convey skill levels. Use color contrasts for easy readability.
       - ***Hierarchy***: Group skills by categories (Frontend, Backend, Tools) with subheadings for clarity.
  
     - *5. Contact section*:
       - ***Content***: Contact form (name, email, message) with social media links.
       - ***Design***: Include a minimal form with labels and a submit button. Place social icons for LinkedIn, GitHub, and Twitter underneath.
       - ***Hierarchy***: Title the section “Let’s Connect” or “Get in Touch” to make it welcoming and accessible.
     - *6. Footer section*:
       - ***Content**: Include essential links (e.g., home, about, portfolio), social media icons, and a copyright notice.
       - ***Design***: Keep the footer simple, using the primary and neutral colors to separate it visually from the main content.
       - ***Hierarchy***: Socials links should be clearly visible, with copyright text at the bottom.

   - **Information Hierarchy and Visual appeal**:
     - ***Use visual hierarchy***: Employ different font sizes and weights to guide the  user's eye from header to content. Header should stand out, while the main body text remains clean.
     - ***Whitespace and Padding***: Ensure ample spacing between section and around elements to avoid clutter. This make the design fell airy and inviting.
     - ***Consistence Styling***: Maintain consistence colors, font sizes, button style across the site to create a cohesive experience.
     - ***Interactive elements***: Add subtle hover effects for buttons, links, and project thumbnails to make the site feel interactive without overwhelming the user.
