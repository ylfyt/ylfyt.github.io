function navLinkColl() {
	var bungkuss = document.getElementsByClassName('navbar-collapse');
	var buttons = document.getElementsByClassName('navbar-toggler');
	if (bungkuss[0].classList.contains('show')) {
		for (let i = 0; i < buttons.length; i++) {
			const element = buttons[i];
			element.classList.add('collapsed');
			element.setAttribute('aria-expanded', false);
		}

		for (let i = 0; i < bungkuss.length; i++) {
			const element = bungkuss[i];
			element.classList.remove('show');
		}
	}
}

const getCard = (project) => {
	const card = `
    <div class="col-md-4 mb-3">
									<div class="card">
										<img src="img/projects/${project.image}" alt="Projects 3" />
										<div class="card-body">
											<p class="card-text">
												${project.description}
											</p>
										</div>
									</div>
								</div>
    `;

	return card;
};

document.getElementById('loading-message').innerText = 'Loading...';

fetch('https://script.google.com/macros/s/AKfycbzkiYrofKoJ6-H5ad-k3-ftql2Wcg-VqXt8D_jWIqp75eXU1ZxTvMIU0v7_P1q7NQxwPg/exec')
	.then((result) => result.json())
	.then((result) => {
		const projects = result.projects;
		const container = document.getElementById('projects-container');
		for (let i = 0; i < projects.length; i++) {
			const project = projects[i];
			const card = getCard(project);
			container.innerHTML += card;
		}
		document.getElementById('loading-message').remove();
	})
	.catch((error) => {
		document.getElementById('loading-message').innerText = 'Failed to fecth';
	});
