import Link from 'next/link'
import Routes from '../../config/routes';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Hamburger from '../../assets/hamburger';
import Close from '../../assets/close';

const defaultRoutes = [
  Routes.work,
  Routes.life,
  Routes.love,
  Routes.about,
]

const Header = () => {

  const [isActive, setIsActive] = useState(false)
  const router = useRouter()
  const currPathName = router.pathname
  const routesArray = Object.keys(Routes).map((r) => Routes[r])
  const mobileTitle =
    currPathName === '/'
      ? 'Home'
      : routesArray
        .filter((r) => r.path !== '/')
        .find((r) => currPathName.includes(r.path))?.label
  return (
    <div className=" top-0 z-10 w-full py-2 bg-white lg:z-auto lg:relative border-opacity-20 md:bg-opacity-70 filter-blur" role="navigation">

      {/* Mobile Navigation Starts */}
      <div className="grid grid-cols-1 lg:hidden">
        <div className="flex items-center pr-4">
          <button
            className="p-4 pl-4 -my-2"
            onClick={() => setIsActive(!isActive)}
            aria-label="toggle menu"
          >
            {isActive ? <Close /> : <Hamburger />}
          </button>
          <p className="font-sans text-sm font-semibold">
            {mobileTitle}
          </p>
        </div>
        {isActive && (
          <div className="w-full h-px mt-2 bg-slate-900 bg-opacity-10" />
        )}
        {isActive &&
          defaultRoutes.map((route) => {
            const defaultLinks = `flex font-sans items-center pl-12 py-4 font-medium text-sm text-opacity-80`

            return (
              <Link href={route.path} key={route.path}>
                <a className={`${defaultLinks}`}>{route.label}</a>
              </Link>
            )
          })}
      </div>
      {/* Mobile Navigation Ends */}

      {/* Desktop Navigation Starts */}
      <div className="hidden lg:grid bg-white top-0 z-10 w-full py-8">
        <div className="mx-auto grid grid-cols-3 max-w-screen-lg">
          <div className="col-span-2">
            <Link href="/">
              <a>
                <h1 className="text-sm font-medium text-slate-800 hover:text-black hover:font-semibold px-4 py-2">Sriram Venugopal</h1>
              </a>
            </Link>
          </div>
          <div className= "flex flex-row space-x-8">
            {
              defaultRoutes.map((route) => {
                const isSelected = route.path === router.pathname
                const defaultLinks = `font-sans text-sm flex text-slate-600 font-medium bg-white rounded-2xl px-4 py-2`
                const activeLinks = `font-semibold text-black bg-slate-100 rounded-2xl px-4 py-2`
                const inactiveLinks = `hover:text-slate-900 hover:font-semibold filter-saturate`
                return (
                  <Link href={route.path} key={route.path}>
                    <a
                      className={`
                  ${defaultLinks} 
                  ${isSelected ? activeLinks : inactiveLinks}`}
                    >
                      {route.label}
                    </a>
                  </Link>
                )
              })
            }
          </div>

        </div>

      </div>

      {/* Desktop Navigation Ends */}
    </div>

  );
}

export default Header;