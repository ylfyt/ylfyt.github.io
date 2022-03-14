<script>
	import { Link } from 'svelte-navigator';
	import { fade } from 'svelte/transition';
</script>

<div class="home" in:fade>
	<div class="profile">
		<img src="./img/user.jpg" alt="" />
	</div>

	<div class="quotes">
		<div class="text-title">Hi, I'm Yudi</div>
		<div class="text-secondary">Computer Science student</div>
		<p class="text-regular">
			I'm a computer science student who is very enthusiastic about technology
		</p>
		<div class="contact-button">
			<Link to="contact" class="link glass">Contact Me</Link>
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

	.contact-button {
		margin-top: 30px;
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
