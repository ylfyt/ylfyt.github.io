<script>
	import EmailSocialButton from '../components/EmailSocialButton.svelte';

	import GithubSocialButton from '../components/GithubSocialButton.svelte';
	import LinkedinSocialButton from '../components/LinkedinSocialButton.svelte';

	import { Link } from 'svelte-navigator';
	import { scale } from 'svelte/transition';
</script>

<div class="home">
	<div class="profile" in:scale>
		<img src="./img/user.jpg" alt="" />
	</div>

	<div class="quotes">
		<div class="text-title">Hi, I'm Yudi</div>
		<div class="text-secondary">Computer Science student</div>
		<p class="text-regular">
			I'm a computer science student who is very enthusiastic about technology
		</p>
		<div class="contact-info">
			<Link to="contact" id="contact-button" class="link glass">Contact Me</Link>
			<div class="social-wrapper">
				<GithubSocialButton />
				<LinkedinSocialButton />
				<EmailSocialButton />
			</div>
		</div>
	</div>
</div>

<style>
	.home {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.contact-info {
		margin-top: 30px;
		display: flex;
		gap: 40px;
	}

	.social-wrapper {
		display: flex;
		gap: 20px;
	}

	:global(#contact-button) {
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
		font-weight: bold;
	}

	:global(.contact-button .link) {
		border-radius: 10px;
	}

	.profile {
		width: 50%;
		text-align: center;
	}

	.profile img {
		width: 450px;
		height: 450px;
		border-radius: 50%;
	}

	.quotes {
		width: 50%;
	}

	@media (max-width: 960px) {
		.home {
			flex-direction: column;
		}
		.profile {
			width: 100%;
		}
		.quotes {
			margin-top: 2rem;
			width: 100%;
			padding: 1rem;
		}
	}

	@media (max-width: 600px) {
		.profile img {
			width: 300px;
			height: 300px;
		}
	}
</style>
