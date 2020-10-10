import { FunctionComponent, Ref } from 'react'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100)

type NavbarProps = {
  refs: Ref<unknown>[]
  buttonNames: string[]
}

const Navbar: FunctionComponent<NavbarProps> = (props: NavbarProps) => {
  let buttons = []
  if (props.refs.length === props.buttonNames.length) {
    buttons = props.buttonNames.map((name, idx) => (
      <a
        onClick={() => scrollToRef(props.refs[idx])}
        key={name}
        className='link cursor-pointer font-medium text-xl text-grayed hover:text-fuschia'>
        {name}
      </a>
    ))
  }
  return (
    <div
      id='navbar'
      className='py-6 w-full flex items-center justify-center fixed bg-ocean bg-opacity-75 top-0 z-50'>
      <div className='w-full sm:w-full md:w-full lg:w-2/3 xl:w-3/10 flex items-center justify-between px-8'>
        {buttons}
      </div>
    </div>
  )
}

export default Navbar
