import Image from 'next/image'

export default function Home() {
  return (
<>
  <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
    <div className="flex items-center">
      <img src="dist/assets/logo.svg" alt="Logo" className="h-4" />
    </div>
    <ul className="font-montserrat items-center hidden md:flex">
      <li className="mx-3 ">
        <a className="growing-underline" href="howitworks">
          About GSJA
        </a>
      </li>
      <li className="growing-underline mx-3">
        <a href="features">Baptis</a>
      </li>
      <li className="growing-underline mx-3">
        <a href="pricing">Kontak</a>
      </li>
    </ul>
    <div className="font-montserrat hidden md:block">
      <button className="mr-6">Login</button>
      <button className="py-2 px-4 text-white bg-black rounded-3xl">
        Signup
      </button>
    </div>
    <div id="showMenu" className="md:hidden">
      <img src="dist/assets/logos/Menu.svg" alt="Menu icon" />
    </div>
  </nav>
  <div
    id="mobileNav"
    className="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down"
  >
    <div id="hideMenu" className="flex justify-end">
      <img src="dist/assets/logos/Cross.svg" alt="" className="h-16 w-16" />
    </div>
    <ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
      <li className="my-6">
        <a href="howitworks">About GSJA</a>
      </li>
      <li className="my-6">
        <a href="features">Baptis</a>
      </li>
      <li className="my-6">
        <a href="pricing">Kontak</a>
      </li>
    </ul>
  </div>
  {/* Hero */}
  <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
    <div className="md:flex-1 md:mr-10">
      <h1 className="font-pt-serif text-5xl font-bold mb-7">
        Welcome to
        <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
          GSJA Mertiguna Sintang
        </span>
      </h1>
      <p className="font-pt-serif font-normal mb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum
        tempore consectetur voluptas, cumque nobis laboriosam voluptatem.
      </p>
      <div className="font-montserrat">
        <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
          Call to action
        </button>
        <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
          Secondary action
        </button>
      </div>
    </div>
    <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
      <div className="relative">
        <img
          src="dist/assets/Highlight1.svg"
          alt=""
          className="absolute -top-16 -left-10"
        />
      </div>
      <img src="dist/assets/MacBook Pro.png" alt="Macbook" />
      <div className="relative">
        <img
          src="dist/assets/Highlight2.svg"
          alt=""
          className="absolute -bottom-10 -right-6"
        />
      </div>
    </div>
  </section>

  <section class="sectionSize items-start pt-8 md:pt-36 bg-black text-white">
    <div>
      <h2 class="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">
        FAQ
      </h2>
    </div>

    <div toggleElement class="w-full py-4">
      <div class="flex justify-between items-center">
        <div question class="font-montserrat font-medium mr-auto">
          Where can I get this HTML template?
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" class="transform transition-transform" />
      </div>
      <div answer class="font-montserrat text-sm font-extralight pb-8 hidden">
        You can download it on Gumroad.com
      </div>
    </div>
    <hr class="w-full bg-white" />

    <div toggleElement class="w-full py-4">
      <div class="flex justify-between items-center">
        <div question class="font-montserrat font-medium mr-auto">
          Is this HTML template free?
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" class="transform transition-transform" />
      </div>
      <div answer class="font-montserrat text-sm font-extralight pb-8 hidden">
        Yes! For you it is free.
      </div>
    </div>
    <hr class="w-full bg-white" />

    <div toggleElement class="w-full py-4">
      <div class="flex justify-between items-center">
        <div question class="font-montserrat font-medium mr-auto">
          Am I awesome?
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" class="transform transition-transform" />
      </div>
      <div answer class="font-montserrat text-sm font-extralight pb-8 hidden">
        Yes! No doubt about it.
      </div>
    </div>
    <hr class="w-full bg-white" />

  </section>

  <section class="bg-black sectionSize">
    <div class="mb-4">
      <img src='dist/assets/Logo_white.svg' alt="Logo" class="h-4" />
    </div>
    <div class="flex mb-8">
      <a href="#">
        <img src='dist/assets/logos/Facebook.svg' alt="Facebook logo" class="mx-4" />
      </a>
      <a href="#">
        <img src='dist/assets/logos/Youtube.svg' alt="Youtube logo" class="mx-4" />
      </a>
      <a href="#">
        <img src='dist/assets/logos/Instagram.svg' alt="Instagram logo" class="mx-4" />
      </a>
      <a href="#">
        <img src='dist/assets/logos/Twitter.svg' alt="Twitter logo" class="mx-4" />
      </a>
    </div>
    <div class="text-white font-montserrat text-sm">
      © 2023 GSJA Mertiguna Sintang. All rights reserved
    </div>
  </section>
</>
  )
}
