import { publish } from 'gh-pages';

publish(
    'build',
    {
        branch: 'master',
        repo: 'https://github.com/guiBrisson/guiBrisson.github.io.git', 
        user: {
            name: 'Guilherme Brisson', 
            email: 'guibrisson@hotmail.com' 
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);