[index (1).html](https://github.com/user-attachments/files/32187388/index.1.html)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gaurav Kumar Thakur | Web Developer, Content Writer &amp; Video Editor</title>
<meta name="description" content="Professional portfolio of Gaurav Kumar Thakur, a Web Developer, Content Writer, Copywriter, Video Editor and Content Creator from Jaipur, India.">

<!-- Open Graph -->
<meta property="og:title" content="Gaurav Kumar Thakur | Web Developer, Content Writer & Video Editor">
<meta property="og:description" content="Professional portfolio of Gaurav Kumar Thakur, a Web Developer, Content Writer, Copywriter, Video Editor and Content Creator from Jaipur, India.">
<meta property="og:type" content="website">
<meta property="og:image" content="assets/profile-placeholder.svg">

<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%2315171B'/%3E%3Ctext x='50' y='68' font-family='Georgia,serif' font-size='52' fill='%23FBFAF8' text-anchor='middle'%3EGT%3C/text%3E%3C/svg%3E">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
/* ============ RESET & BASE ============ */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto;}
  *{animation-duration:0.001ms !important;animation-iteration-count:1 !important;transition-duration:0.001ms !important;}}

:root{
  --paper:#FBFAF8;
  --paper-alt:#F2F0EA;
  --ink:#15171B;
  --ink-soft:#5B5E66;
  --ink-faint:#8A8D93;
  --line:#E3E1DA;
  --accent:#23456E;
  --accent-soft:#EAF0F6;
  --accent-warm:#A9843C;
  --radius:10px;
  --max:1180px;
  --font-display:'Manrope',sans-serif;
  --font-body:'Inter',sans-serif;
}

body{
  font-family:var(--font-body);
  color:var(--ink);
  background:var(--paper);
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
  font-size:16px;
}
h1,h2,h3,h4{font-family:var(--font-display);color:var(--ink);line-height:1.15;font-weight:800;letter-spacing:-0.01em;}
p{color:var(--ink-soft);}
a{color:inherit;text-decoration:none;}
img{max-width:100%;display:block;}
ul{list-style:none;}
button{font-family:inherit;cursor:pointer;border:none;background:none;}
input,textarea,select{font-family:inherit;font-size:1rem;color:var(--ink);}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px;}

.wrap{max-width:var(--max);margin:0 auto;padding:0 28px;}
.section{padding:112px 0;border-bottom:1px solid var(--line);}
.section-alt{background:var(--paper-alt);}
@media (max-width:768px){.section{padding:72px 0;}}

.eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  font-size:0.9rem;color:var(--ink-soft);margin-bottom:18px;
}
.eyebrow::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--accent-warm);display:inline-block;}

.section-head{max-width:640px;margin-bottom:56px;}
.section-head h2{font-size:clamp(1.75rem,3vw,2.4rem);margin-bottom:14px;}
.section-head p{font-size:1.05rem;max-width:560px;}

.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  padding:14px 26px;border-radius:6px;font-weight:600;font-size:0.95rem;
  transition:background .2s ease,color .2s ease,border-color .2s ease,transform .15s ease;
  white-space:nowrap;
}
.btn-primary{background:var(--ink);color:var(--paper);}
.btn-primary:hover{background:var(--accent);transform:translateY(-1px);}
.btn-secondary{background:transparent;color:var(--ink);border:1px solid var(--ink);}
.btn-secondary:hover{background:var(--ink);color:var(--paper);}
.btn-ghost{color:var(--accent);font-weight:600;padding:0;border-bottom:1px solid transparent;}
.btn-ghost:hover{border-bottom-color:var(--accent);}

/* ============ REVEAL ANIMATION ============ */
.reveal{opacity:0;transform:translateY(14px);transition:opacity .7s ease,transform .7s ease;}
.reveal.is-visible{opacity:1;transform:translateY(0);}

/* ============ NAVBAR ============ */
header.nav{
  position:sticky;top:0;z-index:100;
  background:rgba(251,250,248,0.92);backdrop-filter:blur(8px);
  border-bottom:1px solid transparent;
  transition:border-color .3s ease,box-shadow .3s ease;
}
header.nav.scrolled{border-bottom-color:var(--line);}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:20px 28px;max-width:var(--max);margin:0 auto;}
.logo{font-family:var(--font-display);font-weight:800;font-size:1.05rem;letter-spacing:-0.01em;}
.nav-links{display:flex;gap:34px;align-items:center;}
.nav-links a{font-size:0.94rem;color:var(--ink-soft);position:relative;padding:4px 0;transition:color .2s ease;}
.nav-links a:hover,.nav-links a.active{color:var(--ink);}
.nav-links a.active::after{content:"";position:absolute;left:0;bottom:-2px;width:100%;height:1.5px;background:var(--accent-warm);}
.nav-cta{display:flex;align-items:center;gap:18px;}
.nav-cta .btn{padding:11px 20px;font-size:0.9rem;}
.hamburger{display:none;flex-direction:column;gap:5px;width:26px;background:none;}
.hamburger span{display:block;height:2px;background:var(--ink);border-radius:2px;transition:transform .25s ease,opacity .25s ease;}
.mobile-panel{display:none;position:fixed;inset:0;top:65px;background:var(--paper);z-index:99;padding:32px 28px;}
.mobile-panel.open{display:block;}
.mobile-panel a{display:block;font-size:1.3rem;font-family:var(--font-display);font-weight:700;padding:14px 0;border-bottom:1px solid var(--line);}
.mobile-panel .btn{margin-top:24px;width:100%;}

@media (max-width:860px){
  .nav-links{display:none;}
  .nav-cta .btn{display:none;}
  .hamburger{display:flex;}
}

/* ============ HERO ============ */
.hero{padding:96px 0 110px;}
.hero-inner{display:grid;grid-template-columns:1.1fr 0.9fr;gap:64px;align-items:center;}
.hero h1{font-size:clamp(2.3rem,4.4vw,3.6rem);margin:18px 0 22px;}
.hero-sub{font-size:1.12rem;max-width:520px;margin-bottom:34px;}
.hero-ctas{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:30px;}
.status-badge{
  display:inline-flex;align-items:center;gap:9px;
  padding:9px 16px;border:1px solid var(--line);border-radius:100px;
  font-size:0.88rem;color:var(--ink-soft);background:var(--paper);
}
.status-dot{width:8px;height:8px;border-radius:50%;background:#3E8E5C;position:relative;}
.status-dot::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:1px solid #3E8E5C;opacity:0.5;animation:pulse 2.2s ease-out infinite;}
@keyframes pulse{0%{transform:scale(0.6);opacity:0.6;}100%{transform:scale(2.2);opacity:0;}}

.hero-photo{position:relative;max-width:380px;justify-self:end;}
.hero-photo::before{
  content:"";position:absolute;top:18px;left:18px;right:-18px;bottom:-18px;
  border:1px solid var(--accent-warm);border-radius:6px;z-index:0;
}
.hero-photo img{position:relative;z-index:1;border-radius:6px;width:100%;aspect-ratio:5/6;object-fit:cover;background:var(--paper-alt);}

@media (max-width:900px){
  .hero-inner{grid-template-columns:1fr;gap:40px;}
  .hero-photo{grid-row:1;justify-self:center;max-width:280px;}
}

/* ============ ABOUT ============ */
.about-inner{display:grid;grid-template-columns:1fr 1fr;gap:64px;}
.about-inner p{margin-bottom:18px;font-size:1.02rem;}
.stats{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-content:start;}
.stat{border-top:1px solid var(--line);padding-top:14px;}
.stat .num{font-family:var(--font-display);font-size:2rem;font-weight:800;display:block;}
.stat .label{color:var(--ink-soft);font-size:0.92rem;}
@media (max-width:768px){.about-inner{grid-template-columns:1fr;gap:36px;}}

/* ============ SERVICES ============ */
.services-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1px;background:var(--line);border:1px solid var(--line);}
.service-card{background:var(--paper);padding:34px 28px;transition:background .2s ease;}
.service-card:hover{background:var(--paper-alt);}
.service-card .icon{width:34px;height:34px;color:var(--accent);margin-bottom:20px;}
.service-card h3{font-size:1.08rem;margin-bottom:10px;}
.service-card p{font-size:0.95rem;}
.services-cta{margin-top:44px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;}
.services-cta p{color:var(--ink);font-weight:600;font-size:1.05rem;}

/* ============ SKILLS ============ */
.skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:44px;}
.skill-group h3{font-size:1rem;text-transform:none;color:var(--ink);margin-bottom:18px;padding-bottom:12px;border-bottom:1px solid var(--line);}
.skill-badges{display:flex;flex-wrap:wrap;gap:10px;}
.skill-badges span{
  padding:9px 15px;border:1px solid var(--line);border-radius:100px;
  font-size:0.88rem;color:var(--ink-soft);background:var(--paper);
  transition:border-color .2s ease,color .2s ease;
}
.skill-badges span:hover{border-color:var(--accent);color:var(--ink);}
@media (max-width:860px){.skills-grid{grid-template-columns:1fr;gap:34px;}}

/* ============ PROJECTS ============ */
.projects-list{display:flex;flex-direction:column;gap:1px;background:var(--line);border:1px solid var(--line);}
.project-card{background:var(--paper);display:grid;grid-template-columns:0.85fr 1.15fr;gap:0;}
.project-media{
  background:linear-gradient(135deg,var(--paper-alt) 0%,#E9E6DD 100%);
  min-height:260px;display:flex;align-items:center;justify-content:center;
  border-right:1px solid var(--line);
}
.project-media span{color:var(--ink-faint);font-size:0.85rem;letter-spacing:0.03em;}
.project-body{padding:38px;}
.project-tagline{font-size:0.85rem;color:var(--accent-warm);font-weight:600;margin-bottom:10px;}
.project-body h3{font-size:1.35rem;margin-bottom:12px;}
.project-body p{margin-bottom:18px;}
.project-tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px;}
.project-tags span{font-size:0.8rem;padding:5px 11px;background:var(--paper-alt);border-radius:4px;color:var(--ink-soft);}
.project-note{font-size:0.88rem;color:var(--ink-soft);font-style:italic;margin-bottom:20px;}
@media (max-width:768px){.project-card{grid-template-columns:1fr;}.project-media{border-right:none;border-bottom:1px solid var(--line);min-height:180px;}.project-body{padding:28px;}}

/* ============ EXPERIENCE (timeline) ============ */
.timeline{max-width:760px;}
.timeline-item{display:grid;grid-template-columns:70px 1fr;gap:28px;padding:30px 0;border-top:1px solid var(--line);}
.timeline-item:last-child{border-bottom:1px solid var(--line);}
.timeline-num{font-family:var(--font-display);font-weight:800;color:var(--ink-faint);font-size:1.1rem;}
.timeline-content h3{font-size:1.1rem;margin-bottom:4px;}
.timeline-duration{color:var(--accent);font-size:0.88rem;font-weight:600;margin-bottom:10px;}
.timeline-content p{font-size:0.97rem;}
@media (max-width:600px){.timeline-item{grid-template-columns:44px 1fr;gap:18px;}}

/* ============ CREATOR SECTION ============ */
.creator{background:var(--ink);color:var(--paper);border-bottom:none;}
.creator .section-head h2,.creator .section-head p{color:var(--paper);}
.creator .section-head p{color:#B9BBC1;}
.creator-inner{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:end;}
.creator-inner p.body{color:#C7C9CE;font-size:1.05rem;max-width:600px;}
.creator-links{display:flex;gap:16px;flex-wrap:wrap;}
.creator-links .btn-secondary{border-color:#3B3E45;color:var(--paper);}
.creator-links .btn-secondary:hover{background:var(--paper);color:var(--ink);}
@media (max-width:700px){.creator-inner{grid-template-columns:1fr;}}

/* ============ WHY WORK WITH ME ============ */
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:36px;}
.why-item .why-num{font-family:var(--font-display);color:var(--ink-faint);font-weight:800;font-size:0.95rem;margin-bottom:14px;}
.why-item h3{font-size:1.05rem;margin-bottom:10px;}
.why-item p{font-size:0.94rem;}
@media (max-width:860px){.why-grid{grid-template-columns:1fr 1fr;row-gap:32px;}}
@media (max-width:520px){.why-grid{grid-template-columns:1fr;}}

/* ============ TESTIMONIALS ============ */
.testimonial-placeholder{
  border:1px dashed var(--line);border-radius:var(--radius);
  padding:48px;text-align:center;color:var(--ink-soft);font-size:1.05rem;max-width:640px;
}

/* ============ CONTACT ============ */
.contact-inner{display:grid;grid-template-columns:0.85fr 1.15fr;gap:64px;}
.contact-info .status-badge{margin-bottom:28px;}
.contact-detail{padding:18px 0;border-top:1px solid var(--line);}
.contact-detail:last-of-type{border-bottom:1px solid var(--line);}
.contact-detail .label{font-size:0.82rem;color:var(--ink-faint);margin-bottom:4px;display:block;}
.contact-detail a,.contact-detail span.value{font-size:1.02rem;color:var(--ink);font-weight:500;}
.contact-detail a:hover{color:var(--accent);}

form.contact-form{display:flex;flex-direction:column;gap:18px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.field label{display:block;font-size:0.85rem;color:var(--ink-soft);margin-bottom:7px;}
.field input,.field select,.field textarea{
  width:100%;padding:13px 15px;border:1px solid var(--line);border-radius:6px;background:var(--paper);
  transition:border-color .2s ease;
}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--accent);}
.field textarea{resize:vertical;min-height:120px;}
.form-note{font-size:0.85rem;color:var(--ink-faint);}
@media (max-width:768px){.contact-inner{grid-template-columns:1fr;gap:40px;}.form-row{grid-template-columns:1fr;}}

/* ============ FOOTER ============ */
footer{padding:64px 0 32px;background:var(--paper-alt);}
.footer-top{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:48px;margin-bottom:48px;}
.footer-brand h3{font-size:1.15rem;margin-bottom:6px;}
.footer-brand .role{color:var(--ink-soft);font-size:0.92rem;margin-bottom:14px;}
.footer-brand .tagline{color:var(--ink-faint);font-size:0.88rem;}
.footer-col h4{font-size:0.85rem;color:var(--ink-faint);margin-bottom:16px;}
.footer-col a{display:block;color:var(--ink-soft);font-size:0.94rem;padding:6px 0;transition:color .2s ease;}
.footer-col a:hover{color:var(--ink);}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:24px;border-top:1px solid var(--line);flex-wrap:wrap;gap:12px;}
.footer-bottom p{font-size:0.85rem;color:var(--ink-faint);}
.social-icons{display:flex;gap:14px;}
.social-icons a{width:36px;height:36px;border:1px solid var(--line);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--ink-soft);transition:border-color .2s ease,color .2s ease;}
.social-icons a:hover{border-color:var(--ink);color:var(--ink);}
.social-icons svg{width:16px;height:16px;}
@media (max-width:768px){.footer-top{grid-template-columns:1fr;gap:32px;}}
</style>
</head>
<body>

<!-- ============ NAVBAR ============ -->
<header class="nav" id="siteNav">
  <div class="nav-inner">
    <a href="#home" class="logo">Gaurav Kumar Thakur</a>
    <nav class="nav-links" aria-label="Primary">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="nav-cta">
      <a href="#contact" class="btn btn-primary">Let's Work Together</a>
    </div>
    <button class="hamburger" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mobilePanel">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-panel" id="mobilePanel">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#experience">Experience</a>
    <a href="#contact">Contact</a>
    <a href="#contact" class="btn btn-primary">Let's Work Together</a>
  </div>
</header>

<!-- ============ HERO ============ -->
<section class="hero" id="home">
  <div class="wrap hero-inner">
    <div class="hero-text reveal">
      <p class="eyebrow">Freelancer • Developer • Creator</p>
      <h1>Building Digital Experiences That Make an Impact.</h1>
      <p class="hero-sub">I'm Gaurav Kumar Thakur — a Web Developer, Content Writer, Copywriter, Video Editor and Content Creator focused on creating professional digital experiences and engaging content.</p>
      <div class="hero-ctas">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-secondary">Let's Work Together</a>
      </div>
      <div class="status-badge"><span class="status-dot"></span> Available for Freelance Projects</div>
    </div>
    <div class="hero-photo reveal">
      <img src="assets/profile-placeholder.svg" alt="Gaurav Kumar Thakur, Web Developer and Content Creator based in Jaipur">
    </div>
  </div>
</section>

<!-- ============ ABOUT ============ -->
<section class="section" id="about">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">About</p>
      <h2>About Me</h2>
    </div>
    <div class="about-inner">
      <div class="reveal">
        <p>Hi, I'm Gaurav Kumar Thakur, a freelancer and creative developer from Jaipur, India. I work across web development, content writing, copywriting and video editing, combining technical skills with creativity to build useful and engaging digital experiences.</p>
        <p>I have hands-on experience working in teams, developing frontend projects during my internship, creating websites, working on innovative technology-based projects, and producing video content for social media platforms.</p>
        <p>Alongside development, I have been creating and editing content for Instagram and YouTube, giving me a strong understanding of visual storytelling, audience engagement and digital content.</p>
      </div>
      <div class="stats reveal">
        <div class="stat"><span class="num">2+ Yrs</span><span class="label">Video Editing</span></div>
        <div class="stat"><span class="num">12+ Mo</span><span class="label">Content Writing</span></div>
        <div class="stat"><span class="num">6+ Mo</span><span class="label">Copywriting</span></div>
        <div class="stat"><span class="num">3 Mo</span><span class="label">Frontend Internship</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ SERVICES ============ -->
<section class="section section-alt" id="services">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Services</p>
      <h2>What I Can Do For You</h2>
      <p>A blend of technical and creative services built around what businesses, creators and brands actually need.</p>
    </div>
    <div class="services-grid reveal">
      <div class="service-card">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 5 3 12l5 7M16 5l5 7-5 7M13.5 4l-3 16" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <h3>Web Development</h3>
        <p>Responsive, modern and user-friendly websites designed for businesses, portfolios and digital projects.</p>
      </div>
      <div class="service-card">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 8.5h18" stroke-linecap="round"/><circle cx="6" cy="6.25" r="0.6" fill="currentColor" stroke="none"/></svg>
        <h3>Website Design</h3>
        <p>Clean and professional website interfaces focused on usability, visual appeal and responsive experiences.</p>
      </div>
      <div class="service-card">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h13l3 3v13H4z" stroke-linejoin="round"/><path d="M8 10h8M8 14h8M8 18h5" stroke-linecap="round"/></svg>
        <h3>Content Writing</h3>
        <p>Clear, engaging and audience-focused content for websites, social media and digital platforms.</p>
      </div>
      <div class="service-card">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20 18 6M14 4h6v6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 4h8M4 20h8" stroke-linecap="round" opacity="0.4"/></svg>
        <h3>Copywriting</h3>
        <p>Conversion-focused copy designed to communicate value clearly and encourage users to take action.</p>
      </div>
      <div class="service-card">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="6" width="13" height="12" rx="1.5"/><path d="M16 10.5 21 8v8l-5-2.5" stroke-linejoin="round"/></svg>
        <h3>Video Editing</h3>
        <p>Professional short-form video editing for Instagram Reels, YouTube Shorts, promotional content and social media.</p>
      </div>
      <div class="service-card">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8 15.8 7M8.2 13.2l7.6 3.8" stroke-linecap="round"/></svg>
        <h3>Social Media Content</h3>
        <p>Creative content designed to help brands and creators build a consistent and engaging online presence.</p>
      </div>
      <div class="service-card">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 3h9l4 4v14H6z" stroke-linejoin="round"/><path d="M9 11h7M9 14.5h7M9 18h4" stroke-linecap="round"/></svg>
        <h3>Script Writing</h3>
        <p>Engaging scripts for short-form videos, storytelling, reels and creator content.</p>
      </div>
    </div>
    <div class="services-cta reveal">
      <p>Have a project in mind? Let's discuss it.</p>
      <a href="#contact" class="btn btn-secondary">Contact Me</a>
    </div>
  </div>
</section>

<!-- ============ SKILLS ============ -->
<section class="section" id="skills">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Skills</p>
      <h2>Skills &amp; Expertise</h2>
    </div>
    <div class="skills-grid reveal">
      <div class="skill-group">
        <h3>Web Development</h3>
        <div class="skill-badges">
          <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Responsive Web Design</span><span>Frontend Development</span><span>Website Design</span><span>UI/UX</span>
        </div>
      </div>
      <div class="skill-group">
        <h3>Content &amp; Writing</h3>
        <div class="skill-badges">
          <span>Content Writing</span><span>Copywriting</span><span>Script Writing</span><span>Social Media Content</span><span>Storytelling</span>
        </div>
      </div>
      <div class="skill-group">
        <h3>Creative</h3>
        <div class="skill-badges">
          <span>Video Editing</span><span>Instagram Reels</span><span>YouTube Shorts</span><span>Content Creation</span><span>Canva</span><span>Visual Storytelling</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ PROJECTS ============ -->
<section class="section section-alt" id="projects">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Selected work</p>
      <h2>Featured Projects</h2>
    </div>
    <div class="projects-list reveal">
      <div class="project-card">
        <div class="project-media"><span>Project image placeholder</span></div>
        <div class="project-body">
          <p class="project-tagline">Project 01</p>
          <h3>EcoTrack — Smart Plastic Waste Management System</h3>
          <p>A smart plastic waste management concept combining web technology, IoT and gamification to encourage responsible recycling. The idea includes smart dustbins that can help monitor waste and improve plastic collection and recycling.</p>
          <div class="project-tags">
            <span>Smart Dustbin Concept</span><span>Plastic Waste Management</span><span>Website Development</span><span>UI/UX</span><span>IoT Concept</span><span>Gamification</span><span>Plastic Credits</span>
          </div>
          <p class="project-note">Application development is currently in progress.</p>
          <a href="PROJECT_LINK_01" class="btn btn-secondary">View Project</a>
        </div>
      </div>
      <div class="project-card">
        <div class="project-media"><span>Project image placeholder</span></div>
        <div class="project-body">
          <p class="project-tagline">Project 02</p>
          <h3>Game Development &amp; Web Project — Internship</h3>
          <p>During my internship, I worked as part of a team on frontend development and project creation, including a game-based project and website development.</p>
          <div class="project-tags">
            <span>Frontend Development</span><span>Team Collaboration</span><span>Website Development</span><span>Game Project</span><span>UI Implementation</span>
          </div>
          <a href="PROJECT_LINK_02" class="btn btn-secondary">View Project</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ EXPERIENCE ============ -->
<section class="section" id="experience">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Timeline</p>
      <h2>Experience</h2>
    </div>
    <div class="timeline reveal">
      <div class="timeline-item">
        <div class="timeline-num">01</div>
        <div class="timeline-content">
          <h3>Frontend Development Intern</h3>
          <p class="timeline-duration">3 Months</p>
          <p>Worked as part of a team on frontend development, website creation and project implementation. Contributed to building and improving project interfaces while collaborating with team members.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-num">02</div>
        <div class="timeline-content">
          <h3>Video Editor &amp; Content Creator</h3>
          <p class="timeline-duration">2+ Years</p>
          <p>Creating and editing short-form video content for Instagram and YouTube, including reels, storytelling videos and creator-focused content.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-num">03</div>
        <div class="timeline-content">
          <h3>Content Writer</h3>
          <p class="timeline-duration">12+ Months</p>
          <p>Experience creating clear, engaging and audience-focused written content for digital platforms.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-num">04</div>
        <div class="timeline-content">
          <h3>Copywriter</h3>
          <p class="timeline-duration">6+ Months</p>
          <p>Experience writing concise and persuasive copy designed to communicate ideas, products and services effectively.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ CREATOR SECTION ============ -->
<section class="section creator">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Beyond freelancing</p>
      <h2>Developer by Skill. Creator by Passion.</h2>
    </div>
    <div class="creator-inner reveal">
      <p class="body">Beyond freelancing and development, I create my own digital content. From shooting and editing videos to storytelling and publishing content, I handle the complete creative process.</p>
      <div class="creator-links">
        <a href="INSTAGRAM_LINK" class="btn btn-secondary" target="_blank" rel="noopener">Instagram</a>
        <a href="YOUTUBE_LINK" class="btn btn-secondary" target="_blank" rel="noopener">YouTube</a>
      </div>
    </div>
  </div>
</section>

<!-- ============ WHY WORK WITH ME ============ -->
<section class="section" id="why">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Why me</p>
      <h2>Why Work With Me?</h2>
    </div>
    <div class="why-grid reveal">
      <div class="why-item">
        <p class="why-num">01</p>
        <h3>Creative + Technical</h3>
        <p>I combine development skills with creative thinking.</p>
      </div>
      <div class="why-item">
        <p class="why-num">02</p>
        <h3>Client Focused</h3>
        <p>I focus on understanding the client's actual requirements before building.</p>
      </div>
      <div class="why-item">
        <p class="why-num">03</p>
        <h3>Reliable Communication</h3>
        <p>Clear communication and regular project updates.</p>
      </div>
      <div class="why-item">
        <p class="why-num">04</p>
        <h3>Quality Focused</h3>
        <p>I care about clean presentation, usability and delivering polished work.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="section section-alt" id="testimonials">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Testimonials</p>
      <h2>What Clients Say</h2>
    </div>
    <div class="testimonial-placeholder reveal">
      Client testimonials will be added as I complete more freelance projects.
    </div>
  </div>
</section>

<!-- ============ CONTACT ============ -->
<section class="section" id="contact">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Get in touch</p>
      <h2>Let's Build Something Great Together</h2>
      <p>Have a website, content or creative project in mind? I'd love to hear about it.</p>
    </div>
    <div class="contact-inner">
      <div class="contact-info reveal">
        <div class="status-badge"><span class="status-dot"></span> Available for Freelance Projects</div>
        <div class="contact-detail">
          <span class="label">Email</span>
          <a href="mailto:gkt7565@gmail.com">gkt7565@gmail.com</a>
        </div>
        <div class="contact-detail">
          <span class="label">Phone</span>
          <a href="tel:+917991187225">+91 79911 87225</a>
        </div>
        <div class="contact-detail">
          <span class="label">Location</span>
          <span class="value">Jaipur, Rajasthan, India</span>
        </div>
      </div>
      <form class="contact-form reveal" id="contactForm">
        <div class="form-row">
          <div class="field">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
        </div>
        <div class="form-row">
          <div class="field">
            <label for="projectType">Project Type</label>
            <select id="projectType" name="projectType">
              <option value="">Select an option</option>
              <option>Web Development</option>
              <option>Website Design</option>
              <option>Content Writing</option>
              <option>Copywriting</option>
              <option>Video Editing</option>
              <option>Social Media Content</option>
              <option>Script Writing</option>
              <option>Other</option>
            </select>
          </div>
          <div class="field">
            <label for="budget">Budget</label>
            <input type="text" id="budget" name="budget" placeholder="e.g. ₹5,000 – ₹15,000">
          </div>
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="align-self:flex-start;">Send Inquiry</button>
        <p class="form-note" id="formNote">This opens your email app with the details filled in, addressed to gkt7565@gmail.com.</p>
      </form>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer>
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        <h3>Gaurav Kumar Thakur</h3>
        <p class="role">Web Developer | Content Writer | Copywriter | Video Editor</p>
        <p class="tagline">Building. Creating. Growing.</p>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:gkt7565@gmail.com">gkt7565@gmail.com</a>
        <a href="tel:+917991187225">+91 79911 87225</a>
        <span style="display:block;padding:6px 0;color:var(--ink-soft);font-size:0.94rem;">Jaipur, Rajasthan, India</span>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Gaurav Kumar Thakur. All rights reserved.</p>
      <div class="social-icons">
        <a href="LINKEDIN_LINK" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.6 4.78 6v6.4h-4v-5.68c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.78H9z"/></svg>
        </a>
        <a href="INSTAGRAM_LINK" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="YOUTUBE_LINK" target="_blank" rel="noopener" aria-label="YouTube">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="5.5" width="19" height="13" rx="3"/><path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="FIVERR_LINK" target="_blank" rel="noopener" aria-label="Fiverr">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9.5"/><path d="M8.5 15.5v-5a2 2 0 0 1 2-2h1M8.5 12.5h3" stroke-linecap="round"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>

<script>
// ===== Sticky nav shadow/border on scroll =====
const siteNav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  siteNav.classList.toggle('scrolled', window.scrollY > 8);
}, {passive:true});

// ===== Mobile menu toggle =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobilePanel = document.getElementById('mobilePanel');
hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobilePanel.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});
mobilePanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobilePanel.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  });
});

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ===== Active nav link on scroll (scrollspy) =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}, {passive:true});

// ===== Contact form -> mailto =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const projectType = data.get('projectType') || 'Not specified';
  const budget = data.get('budget') || 'Not specified';
  const message = data.get('message') || '';

  const subject = encodeURIComponent(`Project Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`
  );
  window.location.href = `mailto:gkt7565@gmail.com?subject=${subject}&body=${body}`;
});
</script>
</body>
</html>
