import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as CogIcon } from '../../../img/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../../img/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../../img/icons/arrow.svg';

import FeedbackIcon from '@material-ui/icons/Feedback';
import HelpIcon from '@material-ui/icons/Help';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockIcon from '@material-ui/icons/Lock';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import ViewListIcon from '@material-ui/icons/ViewList';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import LanguageIcon from '@material-ui/icons/Language';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MailIcon from '@material-ui/icons/Mail';
import ReportIcon from '@material-ui/icons/Report';

// context api
import { useStateValue } from '../../../state/Provider'

const DropdownMenu = () => {
    const [{ user }, dispatch] = useStateValue();
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
  
    function DropdownItem(props) {
        return (
            <a href="/#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    function DropdownItemImage(props) {
        return (
            <a href="/#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <img src={props.image} alt="pic" className="icon-profile" />
            {props.children}
            <br/>
            Administrar perfil.
            </a>
        );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}
        >
            <div className="menu">
                {/* <DropdownItem>My Profile</DropdownItem> */}
                <DropdownItemImage image={user.photoURL}>{user.displayName}</DropdownItemImage>

                <hr className="hrTag" />

                <DropdownItem
                    leftIcon={<CogIcon />}
                    rightIcon={<ChevronIcon />}
                    goToMenu="settings"
                >Configuración y privacidad</DropdownItem>

                <DropdownItem
                    leftIcon={<HelpIcon/>}
                    rightIcon={<ChevronIcon />}
                    goToMenu="help"
                >Soporte</DropdownItem>

                <DropdownItem
                    leftIcon={<ExitToAppIcon />}
                >Salir</DropdownItem>
            </div>
        </CSSTransition>
  
        <CSSTransition
            in={activeMenu === 'settings'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}
        >
            <div className="menu">
                <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                    <h2>Configuración y privacidad</h2>
                </DropdownItem>
                <DropdownItem leftIcon={<CogIcon />}>Configuración</DropdownItem>
                <DropdownItem leftIcon={<EnhancedEncryptionIcon />}>Politicas de privacidad</DropdownItem>            
                <DropdownItem leftIcon={<LanguageIcon />}>Lenguaje</DropdownItem>
            </div>
        </CSSTransition>

        <CSSTransition
            in={activeMenu === 'help'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}
        >
            <div className="menu">
                <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                    <h2>Soporte</h2>
                </DropdownItem>
                <DropdownItem leftIcon={<ChatBubbleIcon />}>Preguntas frecuentes</DropdownItem>
                <DropdownItem leftIcon={<MailIcon />}>Centro de soporte</DropdownItem>
                <DropdownItem leftIcon={<ReportIcon />}>Reportar un problema</DropdownItem>
            </div>
        </CSSTransition>
      </div>
    );
}

export default DropdownMenu;