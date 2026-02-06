


// Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        function closeMenu() {
            navLinks.classList.remove('active');
        }

        // Scroll Animation (Intersection Observer)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Form Submit Prevent Default (Just for demo)
        document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  formData.append("access_key", "91e17d64-e63e-4f53-b382-2e8665ec2ee7");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      e.target.reset();
    } else {
      alert(data.message || "Submission failed");
    }
  } catch (err) {
    alert("Network error. Try again later.");
    console.error(err);
  }
});
