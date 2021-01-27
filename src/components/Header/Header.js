import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import tinderLogo from '../../assets/img/tinder-logo2.png';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon
                    className="header__icon"
                    fontSize="large"
                />
            </IconButton>
            <img
                src={tinderLogo}
                alt="tinder logo"
                className="header__logo" />
            <IconButton>
                <ForumIcon
                    className="header__icon"
                    fontSize="large"
                />
            </IconButton>
        </div>
    );
};

export default Header;
