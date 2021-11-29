import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';

export const SidebarData =[
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/MainPageDash"
    },
    {
        title:"Attendance",
        icon:<PeopleIcon/>,
        link:"/Attendance"
    },
    {
        title:"Profile",
        icon:<PersonIcon/>,
        link:"/Profile"
    }
];
