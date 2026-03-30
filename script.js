const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

const setupAppointmentForm = () => {
    const form = document.getElementById('appointmentForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = (document.getElementById('qaName')?.value || '').trim();
        const phone = (document.getElementById('qaPhone')?.value || '').trim();
        const when = (document.getElementById('qaWhen')?.value || '').trim();

        const whatsapp = form.getAttribute('data-whatsapp') || '905050359701';

        const messageLines = [
            'Merhaba, psikoteknik için randevu almak istiyorum.',
            name ? `Ad Soyad: ${name}` : null,
            phone ? `Telefon: ${phone}` : null,
            when ? `Tarih/Saat Tercihi: ${when}` : null,
        ].filter(Boolean);

        const text = encodeURIComponent(messageLines.join('\n'));
        const url = `https://wa.me/${whatsapp}?text=${text}`;

        window.open(url, '_blank', 'noopener,noreferrer');
    });
};

setupAppointmentForm();
