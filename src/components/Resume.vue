<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { EnvelopeIcon } from '@heroicons/vue/24/solid'
  import { MapPinIcon } from '@heroicons/vue/24/solid'
  import LinkedinIcon from '@/assets/icons/linkedin.svg'
  import EsIcon from '@/assets/icons/es.svg'
  import GbIcon from '@/assets/icons/gb.svg'

  const translations = ref({
    es: null,
    en: null
  })

  const englishChecked = ref(false)
  const loading = ref(true)

  const language = ref('es')

  const messages = computed(() => {
    return translations.value[language.value]
  })

  async function onLanguageChange() {
    loading.value = true
    language.value = englishChecked.value ? 'en' : 'es'
    if(!translations.value[language.value]) {
      let module = await import(`@/translations/${language.value}.json`)
      translations.value[language.value] = module.default
    }
    setTimeout(() => loading.value = false, 200)
  }

  onMounted(() => onLanguageChange())

</script>

<template>
  <header class="p-4 print:hidden">
    <div class="">
      <label for="language-switch" class="inline-flex items-center p-2 rounded-md cursor-pointer text-gray-800 select-none">
        <input 
          type="checkbox" 
          id="language-switch" 
          class="hidden peer"
          v-model="englishChecked" 
          @change="onLanguageChange"
        >
        <span class="px-4 py-2 flex items-center space-x-2 rounded-l-md bg-blue-900 text-white peer-checked:bg-gray-300 peer-checked:text-inherit transition-colors duration-500">
          <EsIcon class="w-5 h-5 rounded-full" />
          <span class="font-medium text-sm">ES</span>
        </span>
        <span class="px-4 py-2 flex items-center space-x-2 rounded-r-md bg-gray-300 text-inherit peer-checked:bg-blue-900 peer-checked:text-white transition-colors duration-500">
          <GbIcon class="w-5 h-5 rounded-full" />
          <span class="font-medium text-sm">EN</span>
        </span>
      </label>
    </div>
  </header>

  <div v-if="loading" class="py-10 flex justify-center">
    <svg class="w-16 h-16 mr-2 text-gray-300 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
  </div>

  <main v-else class="py-8 print:p-0 print:h-full">
    <!-- Page -->
    <div class="flex flex-col mx-auto max-w-a4 md:h-a4 print:h-a4 print:w-a4 bg-white shadow-[0_0_8px_rgba(13,12,12,0.15)] print:shadow-none">
      <!-- Name -->
      <header class="p-8 md:h-[3.7cm] print:h-[3.7cm] flex items- justify-center space-x-10 bg-slate-700">
        <div class="space-y-1">
          <h1 class="text-5xl font-extralight tracking-wide text-white text-center">
            Rodrigo Minaberrigaray
          </h1>
          <h2 class="text-2xl font-extralight tracking-wide text-white text-center">
            {{ messages.role }}
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