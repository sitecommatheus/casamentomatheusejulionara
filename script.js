document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.invitation-card');
    
    // Animação de entrada LUXUOSA
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px) scale(0.95)';
    
    setTimeout(() => {
        card.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
    }, 300);
    
    // Revelação sequencial ELEGANTÍSSIMA
    const elements = [
        '.date-section',
        '.names-section', 
        '.message-section',
        '.bible-quote',
        '.details-section',
        '.footer-rodape'
    ];
    
    elements.forEach((selector, index) => {
        setTimeout(() => {
            const el = document.querySelector(selector);
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(50px)';
                el.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100);
            }
        }, 500 + (index * 200));
    });
    
    // Efeitos hover LUXUOSOS
    document.querySelectorAll('.detail').forEach(detail => {
        detail.addEventListener('mouseenter', () => {
            detail.style.transform = 'translateY(-10px) scale(1.03)';
        });
        detail.addEventListener('mouseleave', () => {
            detail.style.transform = 'translateY(0) scale(1)';
        });
    });
});