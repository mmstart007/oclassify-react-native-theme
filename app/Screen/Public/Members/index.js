import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'


import Style from '@Theme/Style'
import Styles from '@Screen/Public/Members/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Members'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.sectionGrey}>
                    <View style={Styles.agent}>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicMemberDetails')
                        }}>
                            <Image source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Michael</Text>
                                <Text style={Styles.btnAgentCity}>Boston</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicMemberDetails')
                        }}>
                            <Image source={{ uri: 'https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Nick  </Text>
                                <Text style={Styles.btnAgentCity}>San Franciso</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicMemberDetails')
                        }}>
                            <Image source={{ uri: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&h=300' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Jessica</Text>
                                <Text style={Styles.btnAgentCity}>New York</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicMemberDetails')
                        }}>
                            <Image source={{ uri: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&h=300' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Robert De Niro</Text>
                                <Text style={Styles.btnAgentCity}>Chicago</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicMemberDetails')
                        }}>
                            <Image source={{ uri: 'https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&h=300' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Ainsley</Text>
                                <Text style={Styles.btnAgentCity}>New Orleans</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicMemberDetails')
                        }}>
                            <Image source={{ uri: 'https://images.pexels.com/photos/894723/pexels-photo-894723.jpeg?auto=compress&cs=tinysrgb&h=300' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Russell Crowe</Text>
                                <Text style={Styles.btnAgentCity}>Los Angeles</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </View>


            </Content>

            <View style={Style.footer}>
                <View style={Style.fNav}>
                    <Button transparent style={Style.fBtn} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon name='home' style={Style.fBtnIcon} type="FontAwesome" />
                    </Button>
                </View>
                <View style={Style.fNav}>
                    <Button transparent style={Style.fBtn} onPress={() => {
                        NavigationService.navigate('PublicAdsSearch')
                    }}>
                        <Icon name='search' style={Style.fBtnIcon} type="FontAwesome" />
                    </Button>
                </View>
                <View style={Style.fNavActive}>
                    <Button transparent style={Style.fBtn} onPress={() => {
                        NavigationService.navigate('MemberAdCreate')
                    }}>
                        <Icon name='plus' style={Style.fBtnIconActive} type="Foundation" />
                    </Button>
                </View>
                <View style={Style.fNav}>
                    <Button transparent style={Style.fBtn} onPress={() => {
                        NavigationService.navigate('MemberBookmark')
                    }}>
                        <Icon name='bookmark' style={Style.fBtnIcon} type="Octicons" />
                    </Button>
                </View>
                <View style={Style.fNav}>
                    <Button transparent style={Style.fBtn} onPress={() => {
                        NavigationService.navigate('MemberMessages')
                    }}>
                        <Icon name='bell' style={Style.fBtnIcon} type="Entypo" />
                    </Button>
                </View>
            </View>

        </Container>
    }
}