import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const MenuDrawerData = [
    {
        title:'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Dashboard',
        path: '/reports',
        icon: <FaIcons.FaChartBar />,
        cName: 'nav-text'
    },
    {
        title:'To-Do List',
        path: '/products',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title:'Reviews',
        path: '/team',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title:'Team Manager',
        path: '/messages',
        icon: <IoIcons.IoIosPeople />,
        cName: 'nav-text'
    }
]