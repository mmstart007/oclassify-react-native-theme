import React from 'react'
import {Dimensions} from 'react-native'
import { createDrawerNavigator, createStackNavigator } from "react-navigation"

import DrawerContent from '@Component/Menu/Left'

import PublicIntro from '@Screen/Public/Intro'
import PublicHome from '@Screen/Public/Home'
import PublicAds from '@Screen/Public/Ads'
import PublicAdsDetail from '@Screen/Public/AdsDetail'
import PublicAdsSearch from '@Screen/Public/AdsSearch'
import PublicMembers from '@Screen/Public/Members'
import PublicMemberDetails from '@Screen/Public/MemberDetails'
import PublicAboutUs from '@Screen/Public/AboutUs'
import PublicContact from '@Screen/Public/Contact'

import MemberSignIn from '@Screen/Member/SignIn'
import MemberSignUp from '@Screen/Member/SignUp'
import MemberHome from '@Screen/Member/Home'
import MemberAds from '@Screen/Member/Ads'
import MemberAdCreate from '@Screen/Member/AdCreate'
import MemberAdPublished from '@Screen/Member/AdCreate/Published'
import MemberBookmark from '@Screen/Member/Bookmark'
import MemberSettings from '@Screen/Member/Settings'
import MemberProfile from '@Screen/Member/Profile'
import MemberMessages from '@Screen/Member/Messages'

import NavigationService from '@Service/Navigation'

const deviceWidth = Dimensions.get("window").width;

const Drawer = createDrawerNavigator(
  {
    PublicHome: {
      screen: PublicHome,
    },
    MemberHome: {
      screen: MemberHome,
    },
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    headerMode: "none",
    initialRouteName: "PublicHome",
    drawerWidth: deviceWidth - 50
  }
)

const AppNav = createStackNavigator(
  {
    PublicIntro: {
      screen: PublicIntro
    },
    PublicAds: {
      screen: PublicAds
    },
    PublicAdsSearch: {
      screen: PublicAdsSearch
    },
    PublicAdsDetail: {
      screen: PublicAdsDetail
    },
    PublicMembers: {
      screen: PublicMembers
    },
    PublicMemberDetails: {
      screen: PublicMemberDetails
    },
    PublicAboutUs: {
      screen: PublicAboutUs
    },
    PublicContact: {
      screen: PublicContact
    },
    

    MemberSignUp: {
      screen: MemberSignUp
    },
    MemberSignIn: {
      screen: MemberSignIn
    },
    MemberAds: {
      screen: MemberAds
    },
    MemberAdCreate: {
      screen: MemberAdCreate
    },
    MemberAdPublished: {
      screen: MemberAdPublished
    },
    MemberMessages: {
      screen: MemberMessages
    },
    MemberProfile: {
      screen: MemberProfile
    },
    MemberSettings: {
      screen: MemberSettings
    },
    MemberBookmark: {
      screen: MemberBookmark
    },
    


    Drawer: {
      screen: Drawer
    }
  },
  {
    headerMode: "none",
    initialRouteName: "PublicIntro"
  }
)

export default class App extends React.Component {
  render() {
    return (
      <AppNav ref={(r) => {NavigationService.setTopLevelNavigator(r)}}/>
    );
  }
}