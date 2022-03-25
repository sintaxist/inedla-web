import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Conoce INEDLA',
    path: '/',
    icon: <FaIcons.FaRegHandshake />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,

    subNav: [
      {
        title: '¿Por qué estudiar en INEDLA?',
        path: '/estudia-podologia',
        icon: <FaIcons.FaQuestion />
      },
      {
        title: 'Equipo Docente',
        path: '/equipo-docente',
        icon: <FaIcons.FaChalkboardTeacher />
      },
      {
        title: 'Plantel',
        path: '/plantel',
        icon: <FaIcons.FaUniversity />
      },
      {
        title: 'Plan de Estudios',
        path: '/plan-de-estudios',
        icon: <MdIcons.MdOutlineSchool />
      }
    ]
  },
  {
    title: 'Admisiones',
    path: '/admisiones',
    icon: <CgIcons.CgFileDocument />
  },
  {
    title: 'Community',
    path: '/',
    icon: <MdIcons.MdOutlinePeopleAlt />,

    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,

    subNav: [
      {
        title: 'Noticias',
        path: '/noticias',
        icon: <BiIcons.BiNews />
      },
    ]
  },
  {
    title: 'Inscribete',
    path: '/inscribete',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
