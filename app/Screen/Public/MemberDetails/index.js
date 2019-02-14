import React from 'react'
import { StatusBar, WebView, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge, List, ListItem, Tab, Tabs, Accordion } from 'native-base'

import NavigationService from '@Service/Navigation'

import ADS from './Ads'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/MemberDetails/Style'


//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
            <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.profile}>
                    <ImageBackground source={require('@Asset/images/bg_main.png')} imageStyle={'cover'} style={Styles.coverImg} />
                    <View style={Styles.owner}>
                        <Image source={{ uri: ('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300') }} style={Styles.ownerAvatarImg} />
                        <View style={Styles.ownerInfo}>
                            <Text style={Styles.ownerName}>Tim Doyle</Text>
                            <Text style={Styles.ownerLocation}>New York, United States</Text>
                        </View>
                    </View>

                    <View style={[Styles.back, Style.actionBarIn]}>
                        <Button transparent style={Style.actionBarBtn} onPress={() => {
                            NavigationService.navigate('PublicMembers')
                        }}>
                            <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                        </Button>
                    </View>
                </View>

                <Tabs tabBarUnderlineStyle={Styles.tabBorder}>
                    <Tab tabStyle={Styles.tabGrey} textStyle={Styles.tabTextActive} activeTabStyle={Styles.tabGrey} activeTextStyle={Styles.tabTextActive} heading="Member Ads">
                        <View style={Styles.overview}>

                            <FlatList
                                data={ADS}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, separators }) => (
                                    <TouchableOpacity style={Styles.item} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicPropertyDetail') }}>
                                        <View style={Styles.itemLeft}>
                                            <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                            <Icon name="bookmark" type="FontAwesome" style={Styles.itemFavorite} />
                                        </View>
                                        <View style={Styles.itemRight}>
                                            <Text style={Styles.itemTitle}>{item.title}</Text>
                                            <Text style={Styles.itemLocation}>{item.location}</Text>
                                            <Text style={Styles.itemPrice}>{item.price}</Text>
                                            <View style={Styles.itemPosted}>
                                                <Icon name="calendar" type="FontAwesome" style={Styles.itemIcon} />
                                                <Text style={Styles.itemDate}>{item.date}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />

                        </View>
                    </Tab>
                    <Tab tabStyle={Styles.tabGrey} textStyle={Styles.tabText} activeTabStyle={Styles.tabGrey} activeTextStyle={Styles.tabText} heading="Message">
                        <View style={Styles.formBg}>
                            <View style={Styles.col}>
                                <TextInput style={Styles.textInputHalf} placeholder={'First Name'} />
                                <TextInput style={Styles.textInputHalf} placeholder={'Last Name'} />
                            </View>
                            <TextInput style={Styles.textInput} placeholder={'Your Email Address'} />
                            <TextInput style={Styles.textInput} placeholder={'Your Mobile No.'} />
                            <TextInput style={Styles.textInputMulti} multiline={true} numberOfLines={8} placeholder={'Your Message'} />
                            <Button style={Styles.btn} onPress={() => {
                                NavigationService.navigate('MemberLogin')
                            }}>
                                <Text style={Styles.formBtnText}>{'Send'.toUpperCase()}</Text>
                                <Icon active name='envelope' type="FontAwesome" style={Styles.formBtnIcon} />
                            </Button>
                        </View>
                    </Tab>
                    <Tab tabStyle={Styles.tabGrey} textStyle={Styles.tabText} activeTabStyle={Styles.tabGrey} activeTextStyle={Styles.tabText} heading="Contact">
                        <List style={Styles.infoTab}>
                            <ListItem style={Styles.infoItem}>
                                <Icon name="map-marker-radius" type="MaterialCommunityIcons" style={Styles.infoIcon} />
                                <View>
                                    <Text style={Styles.infoHeader}>{'Address'.toUpperCase()}</Text>
                                    <Text style={Styles.infoDesc}>3-277-10, Susan Apartment, {"\n"}Liverpool, United Kingdoom</Text>
                                </View>
                            </ListItem>
                            <ListItem style={Styles.infoItem}>
                                <Icon name="phone" type="FontAwesome" style={Styles.infoIcon} />
                                <View>
                                    <Text style={Styles.infoHeader}>{'Phone'.toUpperCase()}</Text>
                                    <Text style={Styles.infoDesc}>+01 1234567982 / +01 9874658231</Text>
                                </View>
                            </ListItem>
                            <ListItem style={Styles.infoItem}>
                                <Icon name="mail" type="Entypo" style={Styles.infoIcon} />
                                <View>
                                    <Text style={Styles.infoHeader}>{'Email'.toUpperCase()}</Text>
                                    <Text style={Styles.infoDesc}>info@oclassify.com</Text>
                                </View>
                            </ListItem>
                            <ListItem style={[Styles.infoItem, Styles.infoItemLast]}>
                                <Icon name="web" type="MaterialCommunityIcons" style={Styles.infoIcon} />
                                <View>
                                    <Text style={Styles.infoHeader}>{'Website'.toUpperCase()}</Text>
                                    <Text style={Styles.infoDesc}>www.oclassify.com</Text>
                                </View>
                            </ListItem>
                        </List>
                    </Tab>
                </Tabs>


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