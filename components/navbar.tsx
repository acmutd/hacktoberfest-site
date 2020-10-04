import { FunctionComponent, Ref } from 'react'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100)

type NavbarProps = {
  homeRef: Ref<unknown>
  experienceRef: Ref<unknown>
  partnersRef: Ref<unknown>
  socialMediaRef: Ref<unknown>
}

const Navbar: FunctionComponent<NavbarProps> = (props: NavbarProps) => (
  <div
    id='navbar'
    className='py-6 w-full flex items-center justify-center fixed bg-ocean bg-opacity-75 top-0 z-50'>
    <div className='w-full sm:w-full md:w-full lg:w-2/3 xl:w-3/10 flex items-center justify-between px-8'>
      <a
        onClick={() => scrollToRef(props.homeRef)}
        className='link cursor-pointer font-medium text-xl text-grayed'>
        Home
      </a>
      <a
        onClick={() => scrollToRef(props.experienceRef)}
        className='link cursor-pointer font-medium text-xl text-grayed'>
        Experience
      </a>
      <a
        onClick={() => scrollToRef(props.partnersRef)}
        className='link cursor-pointer font-medium text-xl text-grayed'>
        Partners
      </a>
      <a
        onClick={() => scrollToRef(props.socialMediaRef)}
        className='link cursor-pointer font-medium text-xl text-grayed'>
        Social Media
      </a>
    </div>
  </div>
)

export default Navbar
