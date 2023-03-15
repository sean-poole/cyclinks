import profilepicrs from '../profilepicrs.jpg'

function Header() {
    return (
      <header className="container flex text-center mx-auto py-10">
        <div className="md:w-4/6 mx-auto">
          <img src={profilepicrs} className="h-24 rounded-full mx-auto mb-5 border-white border-double" />
          <h1 className="text-xl font-bold text-cyan-400 dark:text-cyan-200 font-semibold animate-pulse">Sean Poole</h1>
          <p className='text-white'>Full-Stack Software Engineer</p>
        </div>
      </header>
    );
  }
  
  export default Header;
  