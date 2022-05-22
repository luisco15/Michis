import React from 'react'

import Login from './components/Login/Login';
import Headers from './components/Header/Header';
import Feed from './components/Feed/Feed';

import {useStateValue} from './state/Provider';

function Home() {
  const [{user}, dispatch] = useStateValue();
  return (
    <>
        {!user ? <Login/>:
            <>
                <Headers/>
                <div className="appBody">
                    <Feed/>
                    {/*https://mui.com/material-ui/getting-started/templates/album/*/}
                </div>
            </>
        }
    </>
  )
}

export default Home