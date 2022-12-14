import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {PAGES} from '../services/mock';
import Page1 from './page1';
import Page2 from './page2';

export default function App() {
  const {page2, page1} = PAGES;

  const [users, setUsers] = useState(null);
  const [organization, setOrganizations] = useState(null);

  const submit = (organization, users) => {
    if (!organization || !users) {
      setUsers(null);
      setOrganizations(null);
    }else{
      setUsers(users);
      setOrganizations(organization);
    }
  };
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={page1.route} element={<Page1 onSubmit={submit} users={users} organization={organization}/>} />
          <Route path={page2.route} element={<Page2 onSubmit={submit}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}



