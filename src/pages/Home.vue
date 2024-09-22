<template>
  <!--- HEADER -->
  <section
    class="relative bg-white overflow-hidden"
    :style="{
      backgroundImage: 'url(/src/assets/svg/pattern-white.svg)',
      backgroundPosition: 'center',
    }"
  >
    <div class="py-20 md:py-28">
      <div class="container px-4 mx-auto">
        <div class="flex justify-center flex-wrap xl:items-center -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <span
              class="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-violet-500 uppercase rounded-9xl"
            >
              Header
            </span>
            <h1
              class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight"
            >
              A small business is only as good as its tools.
            </h1>
            <p class="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
              We’re different. Flex is the only saas business platform that lets
              you run your business on one platform, seamlessly across all
              digital channels.
            </p>
            <div class="flex flex-wrap justify-center">
              <div class="w-full md:w-auto py-1 md:py-0 md:mr-4">
                <a
                  class="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 border border-violet-500 rounded-md shadow-sm"
                  href="#"
                >
                  Request a Demo
                </a>
              </div>
              <div class="w-full md:w-auto py-1 md:py-0">
                <a
                  class="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
          <!-- <div class="w-full md:w-1/2 px-4">
            <div class="relative mx-auto md:mr-0 max-w-max">
              <img
                class="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
                src="flex-ui-assets/elements/circle3-green.svg"
                alt=""
              />
              <img
                class="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                src="flex-ui-assets/elements/dots3-yellow.svg"
                alt=""
              />
              <img
                class="relative rounded-7xl"
                src="flex-ui-assets/images/headers/header.jpg"
                alt=""
              />
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>

  <!--- Features -->
  <section
    class="py-24 md:pb-32 bg-white"
    :style="{
      backgroundImage: 'url(/src/assets/svg/pattern-white.svg)',
      backgroundPosition: 'center',
    }"
  >
    <div class="container px-4 mx-auto">
      <div class="md:max-w-4xl mb-12 mx-auto text-center">
        <span
          class="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm"
        >
          Features
        </span>
        <h1
          class="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter"
        >
          Gain more insight into how people use your
        </h1>
        <p class="text-lg md:text-xl text-coolGray-500 font-medium">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200"
          >
            <div
              class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg"
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">
              Measure your performance
            </h3>
            <p class="text-coolGray-500 font-medium">
              Stay connected with your team and make quick decisions wherever
              you are.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200"
          >
            <div
              class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg"
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">
              Measure your performance
            </h3>
            <p class="text-coolGray-500 font-medium">
              Stay connected with your team and make quick decisions wherever
              you are.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200"
          >
            <div
              class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg"
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">
              Measure your performance
            </h3>
            <p class="text-coolGray-500 font-medium">
              Stay connected with your team and make quick decisions wherever
              you are.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200"
          >
            <div
              class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg"
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">
              Measure your performance
            </h3>
            <p class="text-coolGray-500 font-medium">
              Stay connected with your team and make quick decisions wherever
              you are.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200"
          >
            <div
              class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg"
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">
              Measure your performance
            </h3>
            <p class="text-coolGray-500 font-medium">
              Stay connected with your team and make quick decisions wherever
              you are.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200"
          >
            <div
              class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg"
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">
              Measure your performance
            </h3>
            <p class="text-coolGray-500 font-medium">
              Stay connected with your team and make quick decisions wherever
              you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--- How it works -->
  <section
    class="py-24 bg-white overflow-hidden"
    :style="{
      backgroundImage: 'url(/svg/pattern-white.svg)',
      backgroundPosition: 'center',
    }"
  >
    <div class="container px-4 mx-auto">
      <div class="flex justify-center flex-wrap -mx-4">
        <!-- <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <div class="relative mx-auto md:ml-0 max-w-max">
              <img
                class="absolute z-10 -right-8 -top-8 w-28 md:w-auto"
                src="flex-ui-assets/elements/circle3-green.svg"
                alt=""
              />
              <img
                class="absolute z-10 -left-10 -bottom-8 w-28 md:w-auto"
                src="flex-ui-assets/elements/dots3-yellow.svg"
                alt=""
              />
              <img
                src="flex-ui-assets/images/how-it-works/stock.png"
                alt=""
              />
            </div>
          </div> -->
        <div class="w-full md:w-1/2 px-4">
          <span
            class="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm"
          >
            How it works
          </span>
          <h2
            class="mb-12 text-4xl md:text-5xl leading-tight font-bold tracking-tighter"
          >
            Gain more insight into how people use your
          </h2>
          <div class="flex flex-wrap -mx-4 text-center md:text-left">
            <div class="w-full md:w-1/2 px-4 mb-8">
              <div
                class="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full"
              >
                1
              </div>
              <h3 class="mb-2 text-xl font-bold">Custom analytics</h3>
              <p class="font-medium text-coolGray-500">
                Get a complete sales dashboard in the cloud. See activity,
                revenue and social metrics all in one place.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-4 mb-8">
              <div
                class="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full"
              >
                2
              </div>
              <h3 class="mb-2 text-xl font-bold">Team Management</h3>
              <p class="font-medium text-coolGray-500">
                Our calendar lets you know what is happening with customer and
                projects so you are able to control process.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-4 mb-8">
              <div
                class="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full"
              >
                3
              </div>
              <h3 class="mb-2 text-xl font-bold">Easy setup</h3>
              <p class="font-medium text-coolGray-500">
                End to End Business Platform, Sales Management, Marketing
                Automation, Help Desk and many more.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-4">
              <div
                class="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full"
              >
                4
              </div>
              <h3 class="mb-2 text-xl font-bold">Build your website</h3>
              <p class="font-medium text-coolGray-500">
                A tool that lets you build a dream website even if you know
                nothing about web design or programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--- Pricing -->
  <section
    class="py-20 xl:pt-24 xl:pb-28 bg-white"
    :style="{
      backgroundImage: 'url(/svg/pattern-white.svg)',
      backgroundPosition: 'center',
    }"
  >
    <div class="container px-4 mx-auto">
      <div class="md:max-w-4xl mb-12 mx-auto text-center">
        <span
          class="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl"
        >
          Pricing
        </span>
        <h3
          class="mb-4 text-3xl md:text-5xl text-coolGray-900 font-bold tracking-tighter"
        >
          Flexible pricing plan for your startup
        </h3>
        <p class="mb-12 text-lg md:text-xl text-coolGray-500 font-medium">
          Pricing that scales with your business immediately.
        </p>
      </div>
      <div class="flex flex-wrap justify-center -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div
            class="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500"
          >
            <span
              class="inline-block py-px px-2 mb-6 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl"
            >
              Pricing
            </span>
            <h3 class="mb-4 text-lg md:text-xl text-violet-500 font-medium">
              Basic Plan
            </h3>
            <div class="mb-4">
              <span
                class="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium"
              >
                $
              </span>
              <span class="text-5xl text-coolGray-900 font-medium"> 10 </span>
              <span class="text-3xl text-coolGray-900 font-medium"> /mo </span>
            </div>
            <p class="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
              Billed annually
            </p>
            <ul class="self-start mb-8">
              <li class="flex items-center mb-3 text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>Complete documentation</span>
              </li>
              <li class="flex items-center mb-3 text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>Working materials in Figma</span>
              </li>
              <li class="flex items-center mb-3 text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>100GB cloud storage</span>
              </li>
              <li class="flex items-center text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>500 team members</span>
              </li>
            </ul>
            <a
              class="inline-block py-3 px-7 w-full text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md shadow-sm"
              href="#"
            >
              Request a Demo
            </a>
          </div>
        </div>
        <!-- Add additional pricing plans here with similar structure -->
      </div>
    </div>
  </section>
</template>

<script setup></script>
