import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

import FEATURED from './Featured'
import RECENT from './Recent'
import TOPCITIES from './TopCities'
import AGENTS from './Agents'


import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionMenu} onPress={() => {
                        NavigationService.openDrawer()
                    }}>
                        <Image source={require('@Asset/images/menu.png')} />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Home'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <ImageBackground source={require('@Asset/images/bg.png')} imageStyle={'cover'} style={Styles.slider}>

                    <View style={Styles.search}>
                        <TextInput placeholder={'e.g. iPhone 6 Plus'} style={Styles.textInput} />
                        <Button transparent style={Styles.searchBtn} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Icon active name='search' type="FontAwesome" style={Styles.searchBtnIcon} />
                        </Button>
                    </View>


                    <View style={Styles.btnLayout}>
                        <TouchableOpacity style={Styles.btnBox} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Image source={require('@Asset/images/btn-real_estate.png')} resizeMode={'cover'} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Real Estate</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBox} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Image source={require('@Asset/images/btn-car.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Cars</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBoxRight} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Image source={require('@Asset/images/btn-eletronics.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Electronics</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBox} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Image source={require('@Asset/images/btn-fashion.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Fashion</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBox} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Image source={require('@Asset/images/btn-books.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Books</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBoxRight} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Image source={require('@Asset/images/btn-household.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Household</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBoxBot} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Image source={require('@Asset/images/btn-pets.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Pets</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBoxBot} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Image source={require('@Asset/images/btn-jobs.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Jobs</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBoxLast} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Image source={require('@Asset/images/btn-services.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Services</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={Styles.headerBg}>
                        <Icon name="clock" type="Feather" style={Styles.headerIcon} />
                        <Text style={Styles.sHeader}>{'Featured Ads'.toUpperCase()}</Text>
                        <Right>
                            <Button small rounded transparent onPress={() => { NavigationService.navigate('PublicAds') }}>
                                <Image source={require('@Asset/images/dot.png')} />
                            </Button>
                        </Right>
                    </View>
                    <FlatList
                        data={FEATURED}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={Styles.featureList}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity style={Styles.item} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicAdsDetail') }}>
                                <View>
                                    <View>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        <View style={Styles.itemNoCrv}></View>
                                        <Icon name="bookmark" type="FontAwesome" style={Styles.itemFavorite} />
                                    </View>
                                    <Text style={Styles.itemTitleSm}>{item.title}</Text>
                                    <Text style={Styles.itemLocation}>{item.location}</Text>
                                    <View style={Styles.itemBg}>
                                        <View style={Styles.itemLeftSm}>
                                            <Text style={Styles.itemPriceSm}>{item.price}</Text>
                                        </View>
                                        <View style={Styles.itemRight}>
                                            <View style={Styles.itemPosted}>
                                                <Icon name="calendar" type="FontAwesome" style={Styles.itemIcon} />
                                                <Text style={Styles.itemDate}>{item.date}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />



                    <View style={Styles.sectionGrey}>
                        <View style={Styles.headerBg}>
                            <Icon name="map-marker-multiple" type="MaterialCommunityIcons" style={Styles.headerIcon} />
                            <Text style={Styles.sHeader}>{'Ad Locations'.toUpperCase()}</Text>
                            <Right>
                                <Button small rounded transparent onPress={() => { NavigationService.navigate('PublicAds') }}>
                                    <Image source={require('@Asset/images/dot.png')} />
                                </Button>
                            </Right>
                        </View>

                        <View style={Styles.city}>
                            <View style={Styles.btnList}>
                                <TouchableOpacity style={Styles.btnCityMain} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://4.bp.blogspot.com/-B43r-cUpNYQ/VP3X7zvyLzI/AAAAAAAACsw/3SBFTZVWTuk/s1600/7428079.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBgMain} />
                                    <View style={Styles.btnCityLocationMain}>
                                        <Text style={Styles.btnCityText}>Los Angeles</Text>
                                        <Text style={Styles.btnCityCount}>158</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.btnList}>
                                <TouchableOpacity style={Styles.btnCity} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://i2-prod.birminghampost.co.uk/business/commercial-property/article13376659.ece/ALTERNATES/s615/Hotel-la-Tour-1.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBg} />
                                    <View style={Styles.btnCityLocation}>
                                        <Text style={Styles.btnCityText}>New York</Text>
                                        <Text style={Styles.btnCityCount}>1263</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.btnCity} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/05/things-to-do-in-san-francisco-cover-picture.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBg} />
                                    <View style={Styles.btnCityLocation}>
                                        <Text style={Styles.btnCityText}>San Francisco</Text>
                                        <Text style={Styles.btnCityCount}>98</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={Styles.city}>
                            <View style={Styles.btnList}>
                                <TouchableOpacity style={Styles.btnCity} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://d2t1047w253zzm.cloudfront.net/pm-cities/chicago-il-grant-park-apartments-for-rent.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBg} />
                                    <View style={Styles.btnCityLocation}>
                                        <Text style={Styles.btnCityText}>Chicago</Text>
                                        <Text style={Styles.btnCityCount}>2085</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.btnCity} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/b9/e8/boston-freedom-trail.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBg} />
                                    <View style={Styles.btnCityLocation}>
                                        <Text style={Styles.btnCityText}>Boston</Text>
                                        <Text style={Styles.btnCityCount}>253</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.btnList}>
                                <TouchableOpacity style={Styles.btnCityMain} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://www.tripsavvy.com/thmb/RACn8CwaCqilw1nPIZbdkseVf_k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/streetcar-in-new-orleans-699112771-5a98de0d1f4e130036d2e855.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBgMain} />
                                    <View style={Styles.btnCityLocationMain}>
                                        <Text style={Styles.btnCityText}>New Orleans</Text>
                                        <Text style={Styles.btnCityCount}>568</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <View style={Styles.section}>
                        <View style={Styles.headerBg}>
                            <Icon name="clock" type="Feather" style={Styles.headerIcon} />
                            <Text style={Styles.sHeader}>{'Recent Ads'.toUpperCase()}</Text>
                            <Right>
                                <Button small rounded transparent onPress={() => { NavigationService.navigate('PublicAds') }}>
                                    <Image source={require('@Asset/images/dot.png')} />
                                </Button>
                            </Right>
                        </View>
                        <FlatList
                            data={RECENT}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={Styles.flatList}
                            renderItem={({ item, separators }) => (
                                <TouchableOpacity style={Styles.item} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicAdsDetail') }}>
                                    <View>
                                        <View>
                                            <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                            <View style={Styles.itemNoCrv}></View>
                                            <Icon name="heart" type="MaterialCommunityIcons" style={Styles.itemFavorite} />
                                        </View>
                                        <Text style={Styles.itemTitleSm}>{item.title}</Text>
                                        <Text style={Styles.itemLocation}>{item.location}</Text>
                                        <View style={Styles.itemBg}>
                                            <View style={Styles.itemLeftSm}>
                                                <Text style={Styles.itemPriceSm}>{item.price}</Text>
                                            </View>
                                            <View style={Styles.itemRight}>
                                                <View style={Styles.itemPosted}>
                                                    <Icon name="calendar" type="FontAwesome" style={Styles.itemIcon} />
                                                    <Text style={Styles.itemDate}>{item.date}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View style={Styles.sectionGrey}>
                        <View style={Styles.headerBg}>
                            <Icon name="group" type="FontAwesome" style={Styles.headerIcon} />
                            <Text style={Styles.sHeader}>{'Members'.toUpperCase()}</Text>
                            <Right>
                                <Button small rounded transparent onPress={() => { NavigationService.navigate('PublicMembers') }}>
                                    <Image source={require('@Asset/images/dot.png')} />
                                </Button>
                            </Right>
                        </View>
                        <FlatList
                            data={AGENTS}
                            horizontal
                            style={Styles.agents}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, separators }) => (
                                <TouchableOpacity style={Styles.itemAgent} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicMemberDetails') }}>
                                    <View>
                                        <Image source={{ uri: item.image }} style={Styles.itemAgentImg} />
                                        <Text style={Styles.itemAgentName}>{item.name.toUpperCase()}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </ImageBackground>
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