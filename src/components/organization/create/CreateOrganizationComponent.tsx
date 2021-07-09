import React, { useState } from 'react';
import SignInScreen from "./SigninOrRegister";
import { organizationStore } from "../../../services/Firebase";

export const CreateOrganizationComponent = () => {
    const [orgName, setOrgName] = useState('');
    const [orgId, setOrgId] = useState('');
    const [orgNameError, setOrgNameError] = useState('');
    const [mode, setMode] = useState('register')

    const registerOrganization = () => {
      organizationStore.where('organizationName', '==', orgName.toLowerCase()).get().then(doc => {
        if (!doc.empty) {
          setOrgNameError('Organisationen finns redan. Välj ett annat namn.')
        } else {
          organizationStore.add({ organizationName: orgName.toLowerCase() }).then((docRef) => {
            setOrgId(docRef.id)
            setMode('success')

          })
        }
      })
    }

    return (
      <div>
        {mode === 'register' &&
        (<div><h1>Kul att du vill fortsätta!</h1>
          <h4>För att kunna bjuda in medlemmar till din hotdesk-bokning måste du skapa ett konto</h4>

          <SignInScreen onSuccess={() => setMode('organization')}/>
        </div>)
        }
        {mode === 'organization' && (<div>
          <label>
            <input onChange={(e) => setOrgName(e.target.value)}/>
          </label>
          <button onClick={() => registerOrganization()}>Skapa</button>
          <div><p>{orgNameError}</p></div>
        </div>)
        }
        {mode === 'success' && (
          <div>
            <h1>Du har nu registrerat din organization {orgName}!</h1>
            <h3>Du kan nu dela den med dina kollegor</h3>
            <a href={`http://localhost:3000/organization/${orgId}`}>{`http://localhost:3000 /organization/${orgId}`}</a>
          </div>
        )}
      </div>
    );
  }
;

