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
            Desarrollador web full stack
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
              Habilidades
            </h3>
            <div class="text-sm space-y-1">
              <div class="font-semibold">
                Principales
              </div>
              <div class="inline-flex flex-wrap gap-1">
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">PHP</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">Java</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">HTML</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">CSS</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">JavaScript</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">Symfony</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">Spring Boot</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">Vue.js</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">Tailwind</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">Maven</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">Hibernate JPA</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">SQL</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">Git</span>
                <span class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm">REST</span>
              </div>
            </div>
            <div class="text-sm space-y-1">
              <div class="font-semibold">
                Secundarias
              </div>
              <div class="inline-flex flex-wrap gap-1">
                <span class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl">SOAP</span>
                <span class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl">Docker</span>
                <span class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl">Laravel</span>
                <span class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl">Slim</span>
                <span class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl">Jenkins</span>
                <span class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl">Node.js</span>
                <span class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl">Materialize CSS</span>
                <span class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl">JSF</span>
                <span class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl">SVN</span>
                <span class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl">Kong</span>
              </div>
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
          <section class="space-y-3">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              Presentación
            </h3>
            <p class="text-base leading-5">
              Desarrollador web full stack Ssr. con más de 5 años de experiencia. 
              Con un perfil orientado a la resolución de problemas y gran capacidad de aprendizaje,
              fui incorporando a mi stack distintos lenguajes y frameworks. Principalmente trabajé con PHP (Symfony) y
              Java (Spring Boot) del lado del backend y Vue.js como framework JavaScript del lado del frontend.
            </p>
          </section>
          <section class="space-y-3">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              Experiencia
            </h3>
            <div class="">
              <div class="text-base font-semibold">Desarrollador web en Colegio de Escribanos de la provincia de Buenos Aires</div>
              <div class="text-base font-medium italic text-blue-600">Julio 2020 - presente</div>
              <p class="text-base leading-5">
                En mi rol de desarrollador, participé principalmente en el análisis y desarrollo de nuevas aplicaciones y servicios web.
                Cambiamos de un enfoque monolítico a un ecosistema con múltiples APIs, bases de datos y aplicaciones.
              </p>
              <p class="text-base leading-5">
                Principales actividades:
              </p>
              <ul class="text-base list-none leading-5 [&>li]:before:content-['\2013'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:relative [&>li]:pl-6">
                <li>
                  Aplicaciones frontend con Vue.js y Tailwind CSS.
                </li>
                <li>
                  Desarrollo de RESTful APIs con Spring Boot (Java).
                </li>
                <li>
                  Desarrollos menores con Node.js (manejo de websockets con socket.io y generación de PDFs con Puppeteer).
                </li>
                <li>
                  Mantenimiento de aplicaciones Spring + JSF.
                </li>
                <li>
                  Uso de Kong como API Gateway.
                </li>
                <li>
                  CI/CD con Gitlab + Jenkins.
                </li>
              </ul>
            </div>
            <div class="">
              <div class="text-base font-semibold">Desarrollador web en Dirección Provincial de Sistemas de Información y Tecnologías</div>
              <div class="text-base font-medium italic text-blue-600">Mayo 2017 - diciembre 2020</div>
              <p class="text-base leading-5">
                Miembro del equipo de desarrollo que tuvo como finalidad modernizar las aplicaciones y servicios web del organismo.
                Fui ganando experiencia y logré convertirme en uno de los referentes del equipo, ayudando y capacitando a los nuevos 
                desarrolladores.
              </p>
              <p class="text-base leading-5">
                Principales actividades:
              </p>
              <ul class="text-base list-none leading-5 [&>li]:before:content-['\2013'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:relative [&>li]:pl-6">
                <li>
                  Mantenimiento de aplicaciones legacy con PHP 5.3. Rediseño con Materialize CSS y jQuery.
                </li>
                <li>
                  Desarrollo y mantenimiento de webservices SOAP.
                </li>
                <li>
                  Slim Framework para exponer webservices SOAP como API REST.
                </li>
                <li>
                  Aplicaciones MVC con Symfony (PHP). Frontend con Materialize CSS y Vue.js.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>