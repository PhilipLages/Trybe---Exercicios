import React from 'react'
import { useState } from 'react';
import data from '../data/emails';
import EmailsContext from './context'

export default function EmailsProvider({children}) {
  const [emails, setEmails] = useState(data);

  const contex = {
    emails,
  };

  return (
    <EmailsContext.Provider value={contex}>
      {children}
    </EmailsContext.Provider>
  )
}
