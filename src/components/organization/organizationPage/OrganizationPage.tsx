import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchOrganization, firebaseAuth } from "../../../services/Firebase";
import SignInScreen from "../create/SigninOrRegister";
import { organizationRoomPage } from "../../navigation/urls";
import RoomGrid from "../../RoomGrid";

interface RouteParams {
  organizationId: string;
}

export const OrganizationPage = () => {
  const { organizationId } = useParams<RouteParams>()
  const [organization, setOrganization] = useState<any>()
  const history = useHistory();
  useEffect(() => {
    fetchOrganization(organizationId).then(doc => {
      if (doc.exists) {
        setOrganization(doc.data())
      }
    })
  })

  if (!!firebaseAuth.currentUser) {
    return <RoomGrid/>
  } else {
    return (
      <div>
        {!!organization &&
        (<div>
          <h1>Logga in För att boka ett skrivbord.</h1>
          <SignInScreen onSuccess={() => history.push(organizationRoomPage(organizationId))}/>
        </div>)
        }
      </div>
    );
  }

};
