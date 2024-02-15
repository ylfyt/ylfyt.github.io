<script lang="ts">
    import Button from '@/components/button.svelte';
    import FadeUpComponent from '@/components/fade-up-component.svelte';
    import LinkIcon from '@/components/link-icon.svelte';
    import { ENV_GAS_URL } from '@/utils/constants';
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';

    let feedback = '';
    let loading = false;
    let name = '';
    let email = '';
    let message = '';

    let isLoaded = false;
    onMount(() => {
        setTimeout(() => {
            isLoaded = true;
        }, 300);
    });

    const handleSubmit = async () => {
        const data = {
            name,
            email,
            message
        };
        loading = true;
        feedback = '';
        fetch(`${ENV_GAS_URL}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'text/plain'
            }
        })
            .then((result) => result.json())
            .then((result) => {
                if (!result?.success) {
                    feedback = 'Failed to send';
                    return;
                }
                email = '';
                name = '';
                message = '';
                feedback = 'Message sent';
            })
            .catch(() => {
                feedback = 'Failed to send';
            })
            .finally(() => {
                loading = false;
            });
    };
</script>

<div class={`${isLoaded ? 'fade-start' : ''} flex flex-col items-center justify-center gap-12 pt-4`}>
    <FadeUpComponent order={1}>
        <div class="mt-4 flex w-full flex-col items-center gap-10 sm:w-2/3">
            <div class="neu-in rounded-3xl px-4 py-2 text-2xl font-semibold text-color0">Contact Me</div>
            <form on:submit|preventDefault={handleSubmit} class="flex w-full flex-col items-center gap-6">
                <input
                    required
                    bind:value={name}
                    type="text"
                    class="neu-in focus:neu-in-short w-full rounded-2xl px-5 py-3 transition-shadow"
                    placeholder="Name"
                />
                <input
                    required
                    bind:value={email}
                    type="email"
                    class="neu-in focus:neu-in-short w-full rounded-2xl px-5 py-3 transition-shadow"
                    placeholder="Email"
                />
                <textarea
                    required
                    bind:value={message}
                    class="neu-in focus:neu-in-short h-32 w-full resize-none rounded-2xl px-5 py-3 transition-shadow"
                    placeholder="Message"
                />
                <div class="flex w-full">
                    <div class="flex-1"></div>
                    <Button
                        isLoading={loading}
                        class="neu-out active:neu-in-short disabled:active:neu-out flex w-fit items-center justify-center rounded-full px-8 py-2 font-semibold hover:text-color0"
                    >
                        Send
                    </Button>
                    <div class="flex flex-1 items-center justify-start">
                        {#if feedback}
                            <div class="ml-6 text-sm italic text-color0">{feedback}</div>
                        {/if}
                    </div>
                </div>
            </form>
        </div>
    </FadeUpComponent>
    <FadeUpComponent order={2}>
        <div class="neu-in flex w-fit flex-col items-center gap-4 rounded-xl px-6 py-2 pb-4">
            <div class="w-fit text-xl font-semibold text-color0">Connect With Me</div>
            <div class="flex gap-8">
                <LinkIcon url="https://github.com/ylfyt">
                    <Icon icon="skill-icons:github-light" />
                </LinkIcon>
                <LinkIcon url="https://www.linkedin.com/in/yudialfayat">
                    <Icon icon="logos:linkedin-icon" />
                </LinkIcon>
                <LinkIcon url="mailto:yalfayat@gmail.com">
                    <Icon icon="skill-icons:gmail-light" />
                </LinkIcon>
            </div>
        </div>
    </FadeUpComponent>
</div>
