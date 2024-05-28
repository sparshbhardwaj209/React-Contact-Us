const Navigation = () => {
  return (
    <nav className='flex justify-between items-center p-3 h-[70px] max-w-screen-2xl shadow-md'>
        <div className='cursor-pointer'><img className='' src="/src/assets/logo.png" alt="Logo"/></div>
        <ul className='flex gap-4 text-lg font-semibold cursor-pointer min-w-52'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navigation