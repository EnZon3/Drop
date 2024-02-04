<script>
	import { Heart, MessageSquare, Play } from "lucide-svelte"
</script>

<nav class="bg-grey p-4">
	<div class="flex items-center justify-between">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<div>
			<h1 class="text-3xl font-bold">Drop</h1>
		</div>
		<div>
			<a href="/login" class="px-2 font-bold">Login</a>
		</div>
	</div>
</nav>

<main class="front-content-height">
	<div
		class="heroSection inline-flex front-content-height w-full flex-col items-center justify-center gap-2.5 p-2.5"
	>
		<div class="heroHeader font-['Inter'] text-6xl font-extrabold text-white">
			The place to share your apps.
		</div>
		<div class="heroSubtitle font-['Inter'] text-2xl font-normal text-white">
			Getting your project out there hasn't ever been this easy.
		</div>
		<div
			class="ctaButton inline-flex h-12 w-44 items-center justify-center gap-2.5 rounded-lg bg-blue-600 p-2.5"
		>
			<a href="/login" class="SignUp cursor-pointer font-['Inter'] text-base font-bold text-white">
				Sign Up
			</a>
		</div>
	</div>
</main>
<main class="h-[100dvh] p-4  overflow-hidden">
	<div class="features relative h-full w-full bg-slate-950">
		<div
			class="Frame4 absolute left-0 top-0 inline-flex h-96 w-[50dvw] items-center justify-center gap-6 p-[0px_2.5px_0px_2.5px]"
		>
			<div class="GetYourProjectOutThere font-['Inter'] text-4xl text-white">
				<span class="font-regular">Get your project</span> <span class="font-black">out there</span>
			</div>
			<div
				class="Frame6 inline-flex h-32 w-72 flex-col items-center justify-start rounded-xl border-2 border-blue-600 bg-slate-950 px-2.5 shadow-[0px_0px_24.906px_0px_#0B2C80,_0px_0px_49.813px_0px_#0B2C80,_0px_0px_174.344px_0px_#0B2C80,_0px_0px_348.688px_0px_#0B2C80,_0px_0px_597.75px_0px_#0B2C80,_0px_0px_1046.063px_0px_#0B2C80]"
			>
				<div class="Frame7 inline-flex h-24 w-72 items-start justify-start gap-2.5 pb-1 pt-2.5">
					<div class="Frame8 inline-flex h-32 flex-col items-start justify-start gap-2.5 px-2.5">
						<div class="Rectangle1 h-20 w-20 rounded-lg bg-zinc-300"></div>
					</div>
					<div class="Frame12 inline-flex h-20 w-36 flex-col items-start justify-start">
						<div class="YourApp font-['Inter'] text-2xl font-bold text-white">Your App</div>
						<div
							class="ExampleText h-13- w-36 truncate text-wrap font-['Inter'] text-[7px] font-light text-zinc-400"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis
							auctor elit sed vulputate mi. Consequat nisl vel pretium lectus quam. Velit ut tortor
							pretium viverra suspendisse potenti nullam ac tortor. Id velit ut tortor pretium.
						</div>
					</div>
				</div>
				<div class="Frame9 inline-flex h-6 w-72 items-center justify-start">
					<div class="Frame10 flex w-12 items-center justify-start gap-0.5 py-2.5 pl-2.5 pr-1">
						<Play class="relative h-3 w-3" />
						<div class="5k font-['Inter'] text-xs font-bold text-white">1.5K</div>
					</div>
					<div class="Frame11 flex w-11 items-center justify-start gap-0.5 px-1 py-2.5">
						<Heart class="relative h-3 w-3" />
						<div class=" font-['Inter'] text-xs font-bold text-white">246</div>
					</div>
					<div class="Frame12 flex w-11 items-center justify-start gap-0.5 px-1 py-2.5">
						<MessageSquare class="relative h-3 w-3" />
						<div class=" font-['Inter'] text-xs font-bold text-white">132</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="Frame5 absolute left-[50%] top-[40%] inline-flex h-96 w-[50dvw] items-center justify-center gap-3 p-[2.5px_0px_2.5px_0px]"
		>
			<div>
				<div class="font-['Inter'] text-3xl font-medium text-white">While also getting<br /></div>
				<div class="font-['Inter'] text-3xl font-black text-white">valuable feedback</div>
			</div>
			<div
				class="Frame6 inline-flex w-56 flex-col items-start justify-start rounded-xl border-2 border-blue-600 bg-slate-950 pb-[0.225rem] shadow-[0px_0px_24.906px_0px_#0B2C80,_0px_0px_49.813px_0px_#0B2C80,_0px_0px_174.344px_0px_#0B2C80,_0px_0px_348.688px_0px_#0B2C80,_0px_0px_597.75px_0px_#0B2C80,_0px_0px_1046.063px_0px_#0B2C80]"
			>
				<div class="Frame9 inline-flex h-6 items-center justify-start">
					<div class="Frame10 flex items-center justify-start gap-0.5 py-2.5 pl-2.5 pr-1">
						<div class="Play flex items-center justify-start gap-2.5">
							<!-- svelte-ignore a11y-missing-attribute -->
							<img class="Image1 h-[12px] w-[12px]" src="enzon3.gif" />
						</div>
						<div class="Enzon3 font-['Inter'] text-xs font-bold text-white">EnZon3</div>
					</div>
				</div>
				<div class="Frame7 inline-flex items-start justify-start gap-2.5 px-2.5">
					<div
						class="commentText w-52 font-['Inter'] text-sm font-normal text-neutral-200"
					>
						Super cool concept! Navbar padding needs some work but overall it's awesome!
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
