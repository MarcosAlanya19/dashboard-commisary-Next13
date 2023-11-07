'use client';
import Link from 'next/link';
import { useState } from 'react';
import { RiArrowRightSLine, RiCloseLine, RiFolderAddFill, RiFolderInfoFill, RiLogoutCircleRLine, RiMenu3Line, RiUser2Fill, RiUserFill } from 'react-icons/ri';

const menuItems = [
  {
    icon: <RiFolderAddFill className='text-primary' />,
    label: 'Caso',
    submenuItems: [
      { label: 'Registrar caso', link: '/' },
      { label: 'Visualizar casos', link: '/' },
    ],
  },
  {
    icon: <RiFolderInfoFill className='text-primary' />,
    label: 'Evidencia',
    submenuItems: [
      { label: 'Registrar evidencia', link: '/' },
      { label: 'Visualizar evidencias', link: '/' },
    ],
  },
  {
    icon: <RiUserFill className='text-primary' />,
    label: 'Victima',
    submenuItems: [
      { label: 'Registrar victima', link: '/' },
      { label: 'Visualizar victimas', link: '/' },
    ],
  },
  {
    icon: <RiUser2Fill className='text-primary' />,
    label: 'Testigo',
    submenuItems: [
      { label: 'Registrar testigo', link: '/' },
      { label: 'Visualizar testigos', link: '/' },
    ],
  },
];

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [subMenuStates, setSubMenuStates] = useState(menuItems.map(() => false));

  const toggleSubMenu = (index: number) => {
    const newSubMenuStates = [...subMenuStates];
    newSubMenuStates[index] = !newSubMenuStates[index];
    setSubMenuStates(newSubMenuStates);
  };

  return (
    <>
      <div
        className={`xl:h-[100vh] text-white fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? 'left-0' : '-left-full'
        } transition-all`}
      >
        <div>
          <h1 className='text-center text-2xl font-bold text-white mb-10'>
            Comisaria de Huamanga<span className='text-primary text-4xl'>.</span>
          </h1>
          <ul>
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <button onClick={() => toggleSubMenu(index)} className='w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                  <span className='flex items-center gap-4'>
                    {menuItem.icon} {menuItem.label}
                  </span>
                  <RiArrowRightSLine className={`mt-1 ${subMenuStates[index] && 'rotate-90'} transition-all`} />
                </button>
                <ul className={` ${subMenuStates[index] ? 'h-[120px]' : 'h-0'} overflow-y-hidden transition-all`}>
                  {menuItem.submenuItems.map((submenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={submenuItem.link}
                        className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'
                      >
                        {submenuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <nav>
          <Link href='/' className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
            <RiLogoutCircleRLine className='text-primary' /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50'>
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
