
import React from 'react';
import Theme from '../components/model/theme';
import Page from '../components/model/splashscreen'
import Container from '../components/model/splashscreen'
import Title from '../components/model/splashscreen'
import ToggleButton from '../components/model/splashscreen'
import { useState } from 'react'


const Test = () => {
  const [theme, setTheme] = useState("light")
  return ( 
        <div>
          <Page>
            <Container>
              <Title>
                hafedh
              </Title>
              <ToggleButton theme={theme} setTheme={setTheme}/>
              <h1>Welcome to our website!</h1>
            </Container>
          </Page>
          
        </div>
  );
};

export default test;