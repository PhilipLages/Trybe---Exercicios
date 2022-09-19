import React from 'react';
import { useContext } from 'react';
import EmailsContext from '../context/context';
import Email from './Email';
import GeneralButtons from './GeneralButtons';

export default function EmailsList() {
  const { emails } = useContext(EmailsContext);

  return (
    <section>
      <GeneralButtons />
      {emails.map(({id, title}) => (
        <Email key={id} title={title} />        
      ))}
    </section>
  )
}
