<script lang="ts">
	import GithubSocialButton from '../components/GithubSocialButton.svelte';
	import { scale } from 'svelte/transition';
	import LinkedinSocialButton from '../components/LinkedinSocialButton.svelte';
	import EmailSocialButton from '../components/EmailSocialButton.svelte';

	let feedbackMessage = '';
	let disabledButton = false;

	let name = '';
	let email = '';
	let message = '';
	const submitMessage = async () => {
		feedbackMessage = 'Please wait...';
		disabledButton = true;

		const data = {
			name,
			email,
			message
		};

		fetch(
			'https://script.google.com/macros/s/AKfycbxi-YF8VdT6mexJS6-1_GBhmvqIQkFloa6vZxTZTy2UJT6JiwDuvqROLmFoDZKmK_SX5w/exec',
			{
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'text/plain'
				}
			}
		)
			.then((result) => result.text())
			.then((result) => {
				if (result === 'true') {
					feedbackMessage = 'Message sent';
					name = '';
					email = '';
					message = '';
				} else {
					feedbackMessage = 'Message failed to send';
				}
				disabledButton = false;
			})
			.catch((error) => {
				feedbackMessage = 'Message failed to send';
				disabledButton = false;
			});
	};
</script>

<div class="contact">
	<div class="form-wrapper" in:scale>
		<form on:submit|preventDefault={submitMessage}>
			<div class="text-title">Contact Me</div>
			<input type="text" placeholder="Name" class="glass" bind:value={name} />
			<input type="email" placeholder="Email" class="glass" bind:value={email} />
			<textarea
				name="message"
				id=""
				cols="30"
				rows="10"
				placeholder="Message"
				class="glass"
				bind:value={message}
			/>
			<div class="submit-wrapper">
				<button
					type="submit"
					class="glass"
					disabled={name === '' || email === '' || message === '' || disabledButton}
					>Submit</button
				>
				<div class="text-secondary">{feedbackMessage}</div>
			</div>
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
	.submit-wrapper {
		display: flex;
		align-items: center;
		gap: 20px;
	}
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

	button:disabled {
		cursor: auto;
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
