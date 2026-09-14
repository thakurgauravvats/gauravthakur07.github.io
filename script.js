// =========================================================
// Gaurav Kumar Thakur — Portfolio JS
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky nav border on scroll ---------- */
  const siteNav = document.getElementById('siteNav');
  const onNavScroll = () => {
    if (!siteNav) return;
    siteNav.classList.toggle('scrolled', window.scrollY > 8);
  };
  onNavScroll();
  window.addEventListener('scroll', onNavScroll, { passive: true });

  /* ---------- Mobile menu toggle ---------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobilePanel = document.getElementById('mobilePanel');

  if (hamburgerBtn && mobilePanel) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobilePanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobilePanel.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close mobile menu on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobilePanel.classList.contains('open')) {
        mobilePanel.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- Scroll reveal animation ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Active nav link on scroll (scrollspy) ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const onScrollSpy = () => {
    let current = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 130;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  };
  if (sections.length) {
    onScrollSpy();
    window.addEventListener('scroll', onScrollSpy, { passive: true });
  }

  /* ---------- Graceful profile image fallback ---------- */
  const profileImg = document.getElementById('profileImg');
  const photoFrame = profileImg ? profileImg.closest('.hero-photo-frame') : null;
  if (profileImg && photoFrame) {
    profileImg.addEventListener('error', () => {
      photoFrame.classList.add('img-broken');
    });
  }

  /* ---------- Back to top button ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    };
    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Contact form -> mailto ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(contactForm);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const projectType = (data.get('projectType') || 'Not specified').toString();
      const budget = (data.get('budget') || 'Not specified').toString().trim() || 'Not specified';
      const message = (data.get('message') || '').toString().trim();

      const subject = encodeURIComponent(`Project Inquiry from ${name || 'Website Visitor'}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:gkt7565@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
