const Navbar = () => (
  <div
    id='navbar'
    className='py-6 w-full flex items-center justify-center fixed bg-ocean bg-opacity-75 top-0'>
    <div className='min-w-1/2 flex items-center justify-between px-8'>
      <a className='link font-medium text-xl text-white'>Home</a>
      <a className='link font-medium text-xl text-grayed'>Experience</a>
      <a className='link font-medium text-xl text-grayed'>Partners</a>
      <a className='link font-medium text-xl text-grayed'>Social Media</a>
    </div>
  </div>
)

export default Navbar
