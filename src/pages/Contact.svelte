<script lang="ts">
	import GithubSocialButton from '../components/GithubSocialButton.svelte';
	import { scale } from 'svelte/transition';
	import LinkedinSocialButton from '../components/LinkedinSocialButton.svelte';
	import EmailSocialButton from '../components/EmailSocialButton.svelte';

	const submitMessage = () => {};
</script>

<div class="contact" in:scale>
	<div class="form-wrapper">
		<form on:submit|preventDefault={submitMessage}>
			<div class="text-title">Contact Me</div>
			<input type="text" placeholder="Name" class="glass" />
			<input type="email" placeholder="Email" class="glass" />
			<textarea
				name="message"
				id=""
				cols="30"
				rows="10"
				placeholder="Message"
				class="glass"
			/>
			<button type="submit" class="glass">Submit</button>
		</form>
	</div>
	<div class="social-container">
		<div class="text-title">Connect with Me</div>
		<div class="social-wrapper">
			<GithubSocialButton />
			<LinkedinSocialButton />
			<EmailSocialButton />
		</div>
	</div>
</div>

<style>
	.contact {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex: 1;
	}
	.form-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 70%;
	}

	input {
		border: none;
		height: 40px;
		padding: 10px 20px;
		border-radius: 5px;
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
	}

	input:focus {
		outline-color: rgba(0, 204, 255, 0.685);
		outline-width: 2px;
		outline-style: outset;
		box-shadow: none;
	}

	textarea {
		resize: none;
		padding: 10px 20px;
		border-radius: 5px;
		border: none;
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
	}

	textarea:focus {
		outline-color: rgba(0, 204, 255, 0.685);
		outline-width: 2px;
		outline-style: outset;
		box-shadow: none;
	}

	button {
		border: none;
		width: 100px;
		height: 40px;
		border-radius: 5px;
		font-weight: bold;
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
	}

	button:hover {
		cursor: pointer;
	}

	button:active {
		box-shadow: none;
	}

	.social-container {
		margin-top: 40px;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.social-wrapper {
		margin-top: 10px;
		display: flex;
		gap: 40px;
	}

	@media (max-width: 960px) {
		.contact {
			flex-direction: column;
		}

		.form-wrapper {
			width: 100%;
		}
	}

	@media (max-width: 620px) {
		form {
			width: 100%;
		}
	}
</style>
