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
      <header class="p-8 md:h-[3.7cm] print:h-[3.7cm] flex items- justify-center space-x-10 bg-slate-700">
        <div class="space-y-1">
          <h1 class="text-5xl font-extralight tracking-wide text-white text-center">
            Rodrigo Minaberrigaray
          </h1>
          <h2 class="text-2xl font-extralight tracking-wide text-white text-center">
            Desarrollador web full-stack
          </h2>
        </div>
      </header>
      <div class="flex flex-1 w-full h-full text-slate-700">
        <div class="basis-2/5 px-4 py-3 space-y-6 bg-slate-100">
          <section class="space-y-2">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              Contacto
            </h3>
            <ul class="text-sm space-y-2 lining-nums">
              <li class="flex items-center space-x-2">
                <EnvelopeIcon class="w-5 h-5" />
                <a href="mailto:rodrigo.minaberrigaray@gmail.com">
                  rodrigo.minaberrigaray@gmail.com
                </a>
              </li>
              <li class="flex items-center space-x-2">
                <MapPinIcon class="w-5 h-5" />
                <span>La Plata, Buenos Aires, Argentina</span>
              </li>
              <li class="flex items-center space-x-2">
                <LinkedinIcon class="pb-1 w-5 h-5" />
                <a href="https://www.linkedin.com/in/rminaberrigaray/" target="_blank">
                  rminaberrigaray
                </a>
              </li>
            </ul>
          </section>
          <section class="space-y-2">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              Estudios
            </h3>
            <div class="text-sm lining-nums">
              <p class="font-semibold">
                Analista Programador Universitario
              </p>
              <p class="font-medium">
                2012-2018 | Universidad Nacional de La Plata
              </p>
            </div>
            <div class="text-sm lining-nums">
              <p class="font-semibold">
                Licenciatura en Sistemas
              </p>
              <p class="font-medium">
                2012-2019 | Universidad Nacional de La Plata
              </p>
              <p class="italic">Tesina pendiente</p>
            </div>
          </section>
          <section class="space-y-2">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              Idiomas
            </h3>
            <ul class="text-sm list-disc list-inside">
              <li class="">
                Español: nativo
              </li>
              <li class="">
                Inglés: nivel intermedio
              </li>
            </ul>
          </section>
        </div>
        <div class="basis-3/5 px-4 py-3 space-y-6">
          <section class="space-y-2">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              Presentación
            </h3>
            <p class="text-base">
              Me considero una persona abierta y tolerante. Soy resolutivo y pragmático.
              Además de mi rol como desarrollador, disfruto colaborando en el análisis de las soluciones.
              Siempre con gran predispocición para las tareas que se requieran, ya sea aprender
              nuevas tecnologías o realizar cambios sobre alguna aplicación legacy.
            </p>
          </section>
          <section class="space-y-2">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              Experiencia
            </h3>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>