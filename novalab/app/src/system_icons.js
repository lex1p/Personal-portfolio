import FileViewer from "../components/client/FileViewer";

export const sys_icons = [
    {
        icon: '/this_pc.png',
        name: 'This PC',
        path: 'fileviewer',
        isActive: false,
        type: 'int'
    },
    {
        icon: '/folder.png',
        name: 'Documents',
        path: 'fileviewer',
        isActive: false,
        type: 'int'
    },
    {
        icon: '/folder_file.png',
        name: 'Portfolio',
        path: 'fileviewer',
        isActive: false,
        type: 'int'
    },
];
export const app_icons = [
    {
        icon: 'https://freepngimg.com/thumb/logo/70086-logo-whatsapp-computer-viber-icons-free-download-image.png',
        name: 'Whatsapp',
        path: '',
        isActive: false,
        type: 'ext'
    },
    {
        icon: 'https://brandlogos.net/wp-content/uploads/2020/10/gmail-logo-1-1024x816.png',
        name: 'Email',
        path: '',
        isActive: false,
        type: 'ext'
    },
    {
        icon: 'https://images.icon-icons.com/1826/PNG/512/4202090instagramlogosocialsocialmedia-115598_115703.png',
        name: 'Instagram',
        path: '',
        isActive: false,
        type: 'ext'
    },
    {
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png',
        name: 'Github',
        path: '',
        isActive: false,
        type: 'ext'
    },
    {
        icon: 'https://opensourcemalware.com/images/npm-logo.svg',
        name: 'NPM',
        path: '',
        isActive: false,
        type: 'ext'
    },
];

export const active_apps = [...app_icons];
