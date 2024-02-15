<script lang="ts">
    import FadeUpComponent from './fade-up-component.svelte';
    import NeuIcon from './neu-icon.svelte';
    import NavItem from './nav-item.svelte';
    import LinkIcon from './link-icon.svelte';
    import Icon from '@iconify/svelte';
</script>

<div class="flex w-full flex-col items-start justify-evenly gap-4 md:flex-row-reverse">
    <FadeUpComponent order={1}>
        <div class="ml-auto mr-auto flex w-full items-center justify-center sm:w-1/3 md:w-2/3">
            <div class="neu-out w-fit rounded-full p-4">
                <img class="aspect-square w-[250px] rounded-full" src="/profile.jpg" alt="profile" />
            </div>
        </div>
    </FadeUpComponent>
    <FadeUpComponent order={1} mobileOrder={2}>
        <div class="flex w-full flex-col gap-4">
            <div class="neu-in flex flex-col items-start justify-start gap-1 rounded-2xl px-5 py-2">
                <span class="text-2xl font-semibold">Hi, I'm Yudi</span>
                <div class="flex items-center gap-2">
                    <NeuIcon class="text-color0">
                        <Icon icon="streamline:desktop-code-solid" />
                    </NeuIcon>
                    <span class="text-lg font-semibold">Software Engineer</span>
                </div>
                <span class="text-sm">I'm currently working as Software Engineer</span>
            </div>
            <div class="neu-in flex flex-col gap-4 rounded-2xl px-5 py-2">
                <div class="flex gap-4">
                    <NavItem
                        href="/whoami/contacts"
                        class="neu-out flex w-fit items-center gap-2 font-semibold hover:text-color0"
                    >
                        <NeuIcon class="neu-in">
                            <Icon icon="ri:send-plane-fill" />
                        </NeuIcon>
                        Contact me
                    </NavItem>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/yudialfayat"
                        class="neu-out flex items-center gap-2 rounded-lg px-5 font-semibold hover:text-color0"
                    >
                        <NeuIcon class="neu-in">
                            <Icon icon="mingcute:paper-fill" />
                        </NeuIcon>
                        Resume
                    </a>
                </div>
                <div class="flex gap-4">
                    <LinkIcon ariaLabel="Github Profile" url="https://github.com/ylfyt">
                        <Icon icon="skill-icons:github-light" />
                    </LinkIcon>
                    <LinkIcon ariaLabel="Linkedin Profile" url="https://www.linkedin.com/in/yudialfayat">
                        <Icon icon="logos:linkedin-icon" />
                    </LinkIcon>
                    <LinkIcon ariaLabel="Email Address" url="mailto:yalfayat@gmail.com">
                        <Icon icon="skill-icons:gmail-light" />
                    </LinkIcon>
                </div>
            </div>
            <div class="neu-in mt-4 w-fit rounded-2xl px-5 py-2">
                <div class="mb-3 text-xl font-semibold">Current favorite technologies</div>
                <div class="flex gap-3">
                    <NeuIcon class="text-[24px]">
                        <Icon icon="logos:dotnet" />
                    </NeuIcon>
                    <NeuIcon class="text-[24px]">
                        <Icon icon="devicon:typescript" />
                    </NeuIcon>
                    <NeuIcon class="text-[24px]">
                        <Icon icon="logos:graphql" />
                    </NeuIcon>
                    <NeuIcon class="text-[24px]">
                        <Icon icon="logos:react" />
                    </NeuIcon>
                    <NeuIcon class="text-[24px]">
                        <Icon icon="logos:svelte-icon" />
                    </NeuIcon>
                    <NeuIcon class="text-[24px]">
                        <Icon icon="logos:tailwindcss-icon" />
                    </NeuIcon>
                </div>
            </div>
        </div>
    </FadeUpComponent>
</div>
