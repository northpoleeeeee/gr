export default function Baptis() {
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

  <section class="bg-black text-white sectionSize">
    <div>
      <h2 class="secondaryTitle bg-underline2 bg-100%">Langkah-Langkah Pendaftaran Baptis</h2>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="flex-1 mx-8 flex flex-col items-center my-4">
        <div class="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          1
        </div>
        <h3 class="font-montserrat font-medium text-xl mb-2">Eat</h3>
        <p class="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="flex-1 mx-8 flex flex-col items-center my-4">
        <div class="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          2
        </div>
        <h3 class="font-montserrat font-medium text-xl mb-2">Sleep</h3>
        <p class="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="flex-1 mx-8 flex flex-col items-center my-4">
        <div class="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          3
        </div>
        <h3 class="font-montserrat font-medium text-xl mb-2">Rave</h3>
        <p class="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </section>
 </>
    )
}