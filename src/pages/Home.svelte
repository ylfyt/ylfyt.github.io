<script>
	import { Link } from 'svelte-navigator';
</script>

<div class="home">
	<div class="profile">
		<img src="./img/user.jpg" alt="" />
	</div>

	<div class="quotes">
		<h1>Hi, I'm Yudi</h1>
		<h3>Computer Science student</h3>
		<p>I'm a computer science student who is very enthusiastic about technology</p>
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
		height: 100%;
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

	h1 {
		font-size: 27px;
		font-weight: 500;
	}

	h3 {
		font-size: 20px;
		font-weight: 500;
	}

	p {
		font-size: 15px;
		margin-top: 10px;
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
