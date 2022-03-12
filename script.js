const getCard = (project) => {
	const card = `
        <div class="col-md-4 mb-3">
        	<a href="${project.repository}" class="card-anchor" target="_blank">
                <div class="card">
                    <img src="img/projects/${project.image}" alt="Projects 3" />
					<div class="card-body">
                        <p class="card-text">${project.description}</p>
                    </div>
                </div>
			</a>
		</div>

    `;
	return card;
};

const container = document.getElementById('projects-container');
projects.forEach((project) => {
	const card = getCard(project);
	container.innerHTML += card;
});

document.getElementById('send-button').addEventListener('click', () => {
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const message = document.getElementById('message');
	const errorField = document.getElementById('send-error');
	if (name.value === '' || email.value === '' || message.value === '') {
		errorField.innerText = 'Field cannot empty';
		return;
	}

	errorField.innerText = 'Sending...';
	const data = {
		name: name.value,
		email: email.value,
		message: message.value,
	};

	document.getElementById('send-button').disabled = true;

	fetch('https://script.google.com/macros/s/AKfycbxi-YF8VdT6mexJS6-1_GBhmvqIQkFloa6vZxTZTy2UJT6JiwDuvqROLmFoDZKmK_SX5w/exec', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'text/plain',
		},
	})
		.then((result) => result.text())
		.then((result) => {
			if (result === 'true') {
				errorField.innerText = 'Message sent';
				name.value = '';
				email.value = '';
				message.value = '';
			} else {
				errorField.innerText = 'Message failed to send';
			}
			document.getElementById('send-button').disabled = false;
		})
		.catch((error) => {
			errorField.innerText = 'Message failed to send';
			document.getElementById('send-button').disabled = false;
		});
});
