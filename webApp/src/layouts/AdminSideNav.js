import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './AdminSideNav.css'

export default function adminSideNav() {

    return (
      <div className="sideSection">
        <Navigation
          activeItemId={window.location.pathname}
          onSelect={({ itemId }) => {
              console.log(itemId)
            itemId ? window.location.href = itemId : (null)
          }}
          items={[
            {
              title: "Home",
              itemId: "/",
              // Optional
            //   elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "Submission",
              itemId: null,
            //   elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "Add Submission Topic",
                  itemId: "/submission/add",
                  // Optional
                //   elemBefore: () => <Icon name="cloud-snow" />
                },
                {
                    title: "View Submission Topics",
                    itemId: "/test"
                }
              ]
            },
            {
                title: "My Profile",
                itemId: "/profile"
            },
            {
                title: "Login",
                itemId: "/signIn"
            },
            {
                title: "Sign Out",
                itemId: "/sign"
            }
          ]}
        />
        </div>
    );
}