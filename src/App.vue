<script setup>
  import { EnvelopeIcon } from '@heroicons/vue/24/solid'
  import { MapPinIcon } from '@heroicons/vue/24/solid'
  import LinkedinIcon from './assets/icons/linkedin.svg'
</script>

<template>
  <header>
  </header>

  <main class="py-8 print:p-0 print:h-full">
    <!-- Page -->
    <div class="flex flex-col mx-auto max-w-a4 md:h-a4 print:h-a4 print:w-a4 bg-white shadow-[0_0_8px_rgba(13,12,12,0.15)] print:shadow-none">
      <!-- Name -->
      <header class="p-8 md:h-[4.7cm] print:h-[4.7cm] flex items-center space-x-10 bg-slate-700">
        <img class="h-full rounded-full" alt="Profile picture" src="./assets/images/profile.jpg">
        <div class="space-y-1">
          <h1 class="text-5xl font-extralight tracking-wide text-white text-center">
            Rodrigo Minaberrigaray
          </h1>
          <h2 class="text-2xl font-extralight tracking-wide text-white text-center">
            Desarrollador web full-stack
          </h2>
        </div>
      </header>
      <div class="flex flex-1 w-full h-full">
        <div class=" basis-2/5 px-4 py-3 bg-slate-100">
          <section class="space-y-2">
            <h3 class="text-xl font-medium uppercase text-slate-700 border-b border-slate-400">
              Contacto
            </h3>
            <ul class="text-slate-700 text-sm space-y-2 lining-nums">
              <li class="flex items-center space-x-2">
                <EnvelopeIcon class="w-5 h-5" />
                <span>rodrigo.minaberrigaray@gmail.com</span>
              </li>
              <li class="flex items-center space-x-2">
                <MapPinIcon class="w-5 h-5" />
                <span>La Plata, Buenos Aires, Argentina</span>
              </li>
              <li class="flex items-center space-x-2">
                <LinkedinIcon class="pb-1 w-5 h-5" />
                <span>rminaberrigaray</span>
              </li>
            </ul>
          </section>
        </div>
        <div class="basis-3/5"></div>
      </div>
    </div>
  </main>
</template>