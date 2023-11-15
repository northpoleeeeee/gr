export default function Kontak() {
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
  </>
  )
  }