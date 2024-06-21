import Link from 'next/link';
import { AppBar, Toolbar, Button } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit">
                    <Link href="/">Home</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/locais">Locais</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/eventos">Eventos</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
