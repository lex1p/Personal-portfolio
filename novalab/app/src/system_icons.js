import FileViewer from "../components/client/FileViewer";

export const sys_icons = [
    {
        icon: '/this_pc.png',
        name: 'This PC',
        path: 'fileviewer',
        isActive: false,
        type: 'int',
        route: 'Desktop'
    },
    {
        icon: '/folder.png',
        name: 'Documents',
        path: 'fileviewer',
        isActive: false,
        type: 'int',
        route: 'Documents'
    },
    {
        icon: '/folder_file.png',
        name: 'Projects',
        path: 'fileviewer',
        isActive: false,
        type: 'int',
        route: 'Projects'
    },
];
export const app_icons = [
    {
        icon: 'https://freepngimg.com/thumb/logo/70086-logo-whatsapp-computer-viber-icons-free-download-image.png',
        name: 'Whatsapp',
        path:` https://wa.me/233505628891?text='Hello there, from your portfolio'`,
        isActive: false,
        type: 'ext'
    },
    {
        icon: 'https://brandlogos.net/wp-content/uploads/2020/10/gmail-logo-1-1024x816.png',
        name: 'Email',
        path: `https://mail.google.com/mail/?view=cm&fs=1&to=elnovadev@gmail.com`,
        isActive: false,
        type: 'ext'
    },
    {
        icon: 'https://images.icon-icons.com/1826/PNG/512/4202090instagramlogosocialsocialmedia-115598_115703.png',
        name: 'Instagram',
        path: '#',
        isActive: false,
        type: 'ext'
    },
    {
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png',
        name: 'Github',
        path: 'https://github.com/lex1p/',
        isActive: false,
        type: 'ext'
    },
    {
        icon: 'https://opensourcemalware.com/images/npm-logo.svg',
        name: 'NPM',
        path: 'https://www.npmjs.com/~elnova.dev',
        isActive: false,
        type: 'ext'
    },
];

export const active_apps = [...app_icons];
