document.addEventListener('DOMContentLoaded', () => {    
	const whatsappLink = document.getElementById('whatsapp-link');
	if (whatsappLink) {
        whatsappLink.addEventListener('click', (event) => {
            const phone = whatsappLink.dataset.phone || '';
			const message = whatsappLink.dataset.message || '';
            
			if (!phone) {
                return;
			}

			event.preventDefault();
            
			const encodedMessage = encodeURIComponent(message);
			const url = `https://wa.me/${phone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;

			window.open(url, '_blank', 'noopener');
		});
	}
    
    const emailLink = document.getElementById('email-link');
	if (emailLink) {
		emailLink.addEventListener('click', (event) => {
			const email = emailLink.dataset.email || '';
			const subject = emailLink.dataset.subject || '';
			const body = emailLink.dataset.body || '';

			if (!email) {
				return;
			}

			event.preventDefault();

			const params = new URLSearchParams();
			if (subject) {
				params.set('subject', subject);
			}
			if (body) {
				params.set('body', body);
			}

			const queryString = params.toString();
			const mailtoUrl = `mailto:${email}${queryString ? `?${queryString}` : ''}`;

			window.location.href = mailtoUrl;
		});
	}

    const curriculoLink = document.getElementById('curriculo-link');
	if (curriculoLink) {
		curriculoLink.addEventListener('click', (event) => {
			const filePath = curriculoLink.dataset.file || '';
			const filename = curriculoLink.dataset.filename || '';

			if (!filePath) {
				return;
			}

			event.preventDefault();

			const tempAnchor = document.createElement('a');
			tempAnchor.href = filePath;
			tempAnchor.target = '_blank';
			tempAnchor.rel = 'noopener';

			if (filename) {
				tempAnchor.download = filename;
			} else if (curriculoLink.hasAttribute('download')) {
				tempAnchor.setAttribute('download', '');
			}

			document.body.appendChild(tempAnchor);
			tempAnchor.click();
			document.body.removeChild(tempAnchor);
		});
	}
});
