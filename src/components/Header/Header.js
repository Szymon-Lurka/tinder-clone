import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import tinderLogo from '../../assets/img/tinder-logo2.png';

const Header = () => {
    return (
        <div className="header">
            <PersonIcon
                className="header__icon"
                fontSize="large"
            />
            <img
                src={tinderLogo}
                alt="tinder logo"
                className="header__logo" />
            <ForumIcon
                className="header__icon"
                fontSize="large"
            />
        </div>
    );
};

export default Header;
