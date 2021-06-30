import React from 'react';
import {connect} from 'react-redux';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './AdminSideNav.css'

function adminSideNav(props) {

  console.log(props.user)
    return (
      <div>
        {props.user && props.user.type == "ADMIN" ? <div className="sideSection">
      <Navigation
        className="select-nav"
        activeItemId={window.location.pathname}
        onSelect={({ itemId }) => {
            console.log(itemId)
          itemId ==='/sign' ? localStorage.removeItem('user'):(null)
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
            itemId: "/submission",
          //   elemBefore: () => <Icon name="user" />,
            subNav: [
              {
                title: "Add Submission Topic",
                itemId: "/submission/add",
                // Optional
              //   elemBefore: () => <Icon name="cloud-snow" />
              }
            ]
          },
          {
            title: "Conference",
            itemId: "/conferences",
            subNav: [
              {
                title: "Add Conference",
                itemId: "/conference/add"
              }
            ]
          },
          {
            title: "Workshop",
            itemId: "/workshops",
            subNav: [
              {
                title: "Add Workshop",
                itemId: "/workshop/add"
              }
            ]
          },
          {
            title: "Workshop",
            itemId: "/workshops",
            subNav: [
              {
                title: "Add Workshop",
                itemId: "/workshop/add"
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
          },
          {
            title: "Dashboard",
            itemId: "/admin/dashboard"
        }

        ]}
      />
      </div>:null} 

        </div>
    );
}

const mapStateToProps = (state) => ({
  user: state.user.user != null && state.user.user != [] ? state.user.user : null
})

export default connect(mapStateToProps,null)(adminSideNav)