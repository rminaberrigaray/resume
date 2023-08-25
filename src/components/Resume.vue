<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { EnvelopeIcon } from '@heroicons/vue/24/solid'
  import { MapPinIcon } from '@heroicons/vue/24/solid'
  import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
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
  
  function downloadResume(event) {
    const button = event.currentTarget
    button.disabled = true

    const filename = `Minaberrigaray_resume_${language.value}.pdf`
    const anchor = document.createElement('a')
    anchor.setAttribute('href', `./${filename}`)
    anchor.setAttribute('download', filename)
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)

    setTimeout(() => button.disabled = false, 200)
  }

</script>

<template>
  <header class="p-4 print:hidden">
    <div class="flex justify-between max-w-a4 mx-auto">
      <label for="language-switch" class="inline-flex items-center rounded-md cursor-pointer text-gray-800 select-none">
        <input 
          type="checkbox" 
          id="language-switch" 
          class="hidden peer"
          v-model="englishChecked" 
          @change="onLanguageChange"
        >
        <span class="px-4 py-2 flex items-center space-x-2 rounded-l-md bg-blue-900 hover:bg-blue-800 text-blue-100 hover:text-white peer-checked:bg-gray-300 peer-checked:hover:bg-gray-200 peer-checked:text-gray-800 peer-checked:hover:text-gray-700 transition ease-in-out duration-200">
          <EsIcon class="w-5 h-5 rounded-full" />
          <span class="font-medium text-sm">ES</span>
        </span>
        <span class="px-4 py-2 flex items-center space-x-2 rounded-r-md bg-gray-300 hover:bg-gray-200 text-gray-800 hover:text-gray-700 peer-checked:bg-blue-900 peer-checked:hover:bg-blue-800 peer-checked:text-blue-100 peer-checked:hover:text-white transition ease-in-out duration-200">
          <GbIcon class="w-5 h-5 rounded-full" />
          <span class="font-medium text-sm">EN</span>
        </span>
      </label>
      <button 
        class="inline-flex space-x-2 items-center justify-center px-4 py-2 text-sm font-medium text-center text-blue-100 border rounded-md shadow-sm cursor-pointer hover:text-white bg-blue-900 hover:bg-blue-800 transition ease-in-out duration-200"
        v-if="!loading"
        @click.native="downloadResume"
      >
        <span class="relative">{{ messages.downloadButtonText }}</span>
        <ArrowDownTrayIcon class="w-5 h-5" />
      </button>
    </div>
  </header>

  <div v-if="loading" class="py-10 flex justify-center">
    <svg class="w-16 h-16 mr-2 text-gray-300 animate-spin fill-blue-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div class="flex flex-1 flex-col-reverse sm:flex-row print:flex-row w-full h-full text-slate-700">
        <div class="basis-2/5 px-4 py-3 space-y-6 bg-slate-100">
          <section class="space-y-2">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              {{ messages.sections.contact.title }}
            </h3>
            <ul class="text-sm space-y-2 lining-nums">
              <li class="flex items-center space-x-2">
                <EnvelopeIcon class="w-5 h-5" />
                <a href="mailto:rodrigo.minaberrigaray@gmail.com">
                  {{ messages.sections.contact.mail }}
                </a>
              </li>
              <li class="flex items-center space-x-2">
                <MapPinIcon class="w-5 h-5" />
                <span>{{ messages.sections.contact.location }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <LinkedinIcon class="pb-1 w-5 h-5" />
                <a href="https://www.linkedin.com/in/rminaberrigaray/" target="_blank">
                  {{ messages.sections.contact.linkedin }}
                </a>
              </li>
            </ul>
          </section>
          <section class="space-y-2">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              {{ messages.sections.studies.title }}
            </h3>
            <div 
              v-for="study in messages.sections.studies.list"
              class="text-sm lining-nums"
            >
              <p class="font-semibold">
                {{ study.degree }}
              </p>
              <p class="font-medium">
                {{ study.period }} |
                <a href="https://www.info.unlp.edu.ar/" target="_blank">{{ study.college }}</a>
              </p>
              <p v-if="study.note" class="italic">{{ study.note }}</p>
            </div>
          </section>
          <section class="space-y-2">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              {{ messages.sections.skills.title }}
            </h3>
            <div class="text-sm space-y-1">
              <div class="font-semibold">
                {{ messages.sections.skills.main.subtitle }}
              </div>
              <div class="inline-flex flex-wrap gap-1">
                <span
                  v-for="skill in messages.sections.skills.main.list" 
                  class="px-2 py-0.5 bg-white rounded-xl font-medium text-slate-700 border border-slate-500 shadow-sm"
                >{{ skill }}</span>
              </div>
            </div>
            <div class="text-sm space-y-1">
              <div class="font-semibold">
                {{ messages.sections.skills.secondary.subtitle }}
              </div>
              <div class="inline-flex flex-wrap gap-1">
                <span 
                  v-for="skill in messages.sections.skills.secondary.list" 
                  class="px-2 py-0.5 border border-slate-300 bg-white shadow-sm rounded-xl"
                >{{ skill }}</span>
              </div>
            </div>
          </section>
          <section class="space-y-2">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              {{ messages.sections.languages.title }}
            </h3>
            <ul class="text-sm list-disc list-inside">
              <li v-for="language in messages.sections.languages.list">
                {{ language.name }} — {{ language.level }}
              </li>
            </ul>
          </section>
        </div>
        <div class="basis-3/5 px-4 py-3 space-y-6">
          <section class="space-y-3">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              {{ messages.sections.profile.title }}
            </h3>
            <p class="text-base leading-5">
              {{ messages.sections.profile.text }}
            </p>
          </section>
          <section class="space-y-3">
            <h3 class="text-xl font-medium uppercase border-b border-slate-400">
              {{ messages.sections.experience.title }}
            </h3>
            <div v-for="experience in messages.sections.experience.list">
              <div class="text-base font-semibold">{{ experience.position }}</div>
              <div class="text-base font-medium italic text-blue-600">{{ experience.period }}</div>
              <p class="text-base leading-5">
                {{ experience.description }}
              </p>
              <p class="text-base leading-5">
                {{ experience.tasks.subtitle }}
              </p>
              <ul class="text-base list-none leading-5 [&>li]:before:content-['\2013'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:relative [&>li]:pl-6">
                <li v-for="task in experience.tasks.list">
                  {{ task }}
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>