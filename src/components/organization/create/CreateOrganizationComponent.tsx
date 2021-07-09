import React, { useState } from 'react';
import SignInScreen from "./SigninOrRegister";
import { organizationStore } from "../../../services/Firebase";

export const CreateOrganizationComponent = () => {
    const [orgName, setOrgName] = useState('');
    const [orgNameError, setOrgNameError] = useState('');
    const [mode, setMode] = useState('register')

    const registerOrganization = () => {
      organizationStore.where('organizationName', '==', orgName.toLowerCase()).get().then(doc => {
        if (!doc.empty) {
          setOrgNameError('Organisation exists')
        } else {
          organizationStore.add({ organizationName: orgName.toLowerCase() })
        }
      })
    }

    return (
      <div>
        {mode === 'register' ?
          (<div><h1>Kul att du vill fortsätta!</h1>
            <h4>För att kunna bjuda in medlemmar till din hotdesk-bokning måste du skapa ett konto</h4>

            <SignInScreen onSuccess={() => setMode('organization')}/>
          </div>)
          :
          (<div>
            <label>
              <input onChange={(e) => setOrgName(e.target.value)}/>
            </label>
            <button onClick={() => registerOrganization()}>Skapa</button>
          </div>)
        }
      </div>
    );
  }
;

