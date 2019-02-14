import React from 'react'
import { StatusBar, WebView, TouchableOpacity, TextInput, ToolbarAndroid, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, Modal, TouchableHighlight } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge, List, ListItem, Tab, Tabs, Fab } from 'native-base'

import NavigationService from '@Service/Navigation'

import GALLERY from './Gallery'
import OVERVIEW from './Overview'
import SIMILAR from './Similar'


import Style from '@Theme/Style'
import Styles from '@Screen/Public/AdsDetail/Style'


//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 'true',
            modalGallery: {
                visible: false,
                images: [
                    'https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/audi-r8-philippines-2018-5ab1edb6dc965.jpg',
                    'https://www.drivespark.com/img/2017/04/audi-rolls-out-audi-mobile-terminal-tour-20174-25-1493121929.jpg',
                    'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/15q4/662479/2016-audi-r8-v10-plus-euro-spec-test-review-car-and-driver-photo-663404-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*',
                    'https://cnet3.cbsistatic.com/img/m2qhiyfRzcJc5ax30kAZBbm7-c8=/830x467/2016/07/21/737d4eb3-53da-49fc-bca6-5d44b1f62b76/news-2017-audi-r8-v10-drive-15.jpg',
                    'https://st.automobilemag.com/uploads/sites/11/2015/06/2015-Audi-A3-Cabriolet-rear-three-quarter-view-in-motion-2.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCvhMmjuNU73IMNptiTUZB3DcRKFSH_l3b09D0BZw14NpH-tp3w',
                    'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2016/04/04/4755/Audi-A4-2.0-TFSI-quattro-static-top.jpg',
                    'https://pt.best-wallpaper.net/wallpaper/1366x768/1106/Audi-R8-red_1366x768.jpg',
                    'https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/audi-r8-philippines-2018-5ab1edb6dc965.jpg',
                ],
                selected: 0
            }
        };

        this.changeGalleryImage = this.changeGalleryImage.bind(this)
        this.closeGallery = this.closeGallery.bind(this)
        this.openGallery = this.openGallery.bind(this)
    }

    closeGallery() {
        const modalGallery = { ...this.state.modalGallery }
        modalGallery.visible = false
        this.setState({
            modalGallery
        })
    }
    openGallery(selected) {
        const modalGallery = { ...this.state.modalGallery }
        modalGallery.visible = true
        modalGallery.selected = selected
        this.setState({
            modalGallery
        })
    }
    changeGalleryImage(selected) {
        const modalGallery = { ...this.state.modalGallery }
        modalGallery.selected = selected
        this.setState({
            modalGallery
        })
    }

    render() {
        return <Container style={Style.bgMain}>
            <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <ImageBackground source={{ uri: ('https://cdn.trangcongnghe.com/uploads/posts/2017-07/can-canh-siecircu-xe-audi-r8-spyder-v10-plus-do-ruc-bang-xuong-bang-thit_1.jpg') }} imageStyle={'cover'} style={Styles.coverImg}>
                    <View style={Style.actionBarIn}>
                        <Button transparent style={Style.actionBarBtn} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                        </Button>
                    </View>
                </ImageBackground>

                <View style={Styles.section}>
                    <Text style={Styles.title}>Audi R8</Text>
                    <View style={Styles.locationTop}>
                        <Icon active name='map-marker-radius' style={Styles.locationTopIcon} type="MaterialCommunityIcons" />
                        <Text style={Styles.locationTopInfo}>Bristol, England</Text>

                        <Icon active name='eye' style={Styles.locationTopIcon} type="MaterialCommunityIcons" />
                        <Text style={Styles.locationTopInfo}>185</Text>
                    </View>
                    <Text style={Styles.price}>2,85,000</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="share" />
                        <Button style={{ backgroundColor: '#34A34F' }}>
                            <Icon name="logo-whatsapp" />
                        </Button>
                        <Button style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="logo-facebook" />
                        </Button>
                        <Button disabled style={{ backgroundColor: '#DD5144' }}>
                            <Icon name="mail" />
                        </Button>
                    </Fab>
                </View>


                <ImageBackground source={require('@Asset/images/shadow.png')} imageStyle={'cover'} style={Styles.shadow} />

                <View style={Styles.overview}>
                    <List>
                        <ListItem style={Styles.oItem}>
                            <Text style={Styles.oLabel}>Company</Text>
                            <Text style={Styles.oValue}>Audi</Text>
                        </ListItem>
                        <ListItem style={Styles.oItem}>
                            <Text style={Styles.oLabel}>Model</Text>
                            <Text style={Styles.oValue}>Audi R8</Text>
                        </ListItem>
                        <ListItem style={Styles.oItem}>
                            <Text style={Styles.oLabel}>Fuel</Text>
                            <Text style={Styles.oValue}>Petrol</Text>
                        </ListItem>
                        <ListItem style={Styles.oItem}>
                            <Text style={Styles.oLabel}>Year</Text>
                            <Text style={Styles.oValue}>2017</Text>
                        </ListItem>
                        <ListItem style={Styles.oItem}>
                            <Text style={Styles.oLabel}>Color</Text>
                            <Text style={Styles.oValue}>Cherry Red</Text>
                        </ListItem>
                    </List>
                </View>

                <View style={Styles.overview}>
                    <Text style={Styles.overviewTitle}>Overview</Text>
                    <Text style={Styles.overviewDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales vitae ligula eu hendrerit. Donec in magna sodales, semper urna et, gravida enim.
                    {"\n\n"}Etiam sagittis turpis a ligula finibus dignissim. Fusce fermentum diam sed vulputate fringilla. Integer interdum, sem sed tincidunt iaculis, odio ante ultricies libero, non tempus nisl erat non enim.
                    {"\n\n"}Mauris dolor magna, sodales et finibus nec, feugiat nec enim. Nullam id arcu lacus.
                </Text>

                </View>

                <View style={Styles.gallery}>
                    <Text style={Styles.galleryTitle}>Photo Gallery</Text>
                    <View style={Styles.galleryImg}>
                        {this.state.modalGallery.images.map((image, index) => {
                            return <TouchableHighlight style={Styles.galleryItem} onPress={() => {
                                this.openGallery(index)
                            }}>
                                <Image source={{ uri: image }} style={Styles.galleryPic} />
                            </TouchableHighlight>
                        })}
                    </View>
                </View>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalGallery.visible}
                >
                    <View style={Styles.photo}>
                        <Image source={{ uri: this.state.modalGallery.images[this.state.modalGallery.selected] }} resizeMode={'contain'} style={Styles.photoPic} />

                        <View style={Styles.photoBtn}>
                            {
                                this.state.modalGallery.images[this.state.modalGallery.selected - 1]
                                    ?
                                    <TouchableHighlight style={Styles.photoButton}
                                        onPress={() => {
                                            this.changeGalleryImage(this.state.modalGallery.selected - 1)
                                        }}>
                                        <Text style={Styles.photoBtnText}>Prev</Text>
                                    </TouchableHighlight>
                                    :
                                    null
                            }
                            <TouchableHighlight style={Styles.photoButton}
                                onPress={() => {
                                    this.closeGallery()
                                }}>
                                <Text style={Styles.photoBtnText}>Close</Text>
                            </TouchableHighlight>
                            {
                                this.state.modalGallery.images[this.state.modalGallery.selected + 1]
                                    ?
                                    <TouchableHighlight style={Styles.photoButton}
                                        onPress={() => {
                                            this.changeGalleryImage(this.state.modalGallery.selected + 1)
                                        }}>
                                        <Text style={Styles.photoBtnText}>Next</Text>
                                    </TouchableHighlight>
                                    :
                                    null
                            }
                        </View>
                    </View>
                </Modal>

                <View style={Styles.owner}>
                    <Text style={Styles.ownerTitle}>Contact</Text>
                    <ListItem style={Styles.ownerAvatar} onPress={() => {
                        NavigationService.navigate('PublicMemberDetails')
                    }}>
                        <Image source={require('@Asset/images/avatar.png')} style={Styles.ownerAvatarImg} />
                        <View style={Styles.ownerInfo}>
                            <View>
                                <Text style={Styles.ownerName}>Ben Parker</Text>
                                <Text style={Styles.ownerLocation}>New York, United States</Text>
                            </View>
                        </View>
                    </ListItem>
                </View>

                <Tabs tabBarUnderlineStyle={Styles.tabBorder}>
                    <Tab tabStyle={Styles.tabGrey} textStyle={Styles.tabText} activeTabStyle={Styles.tabGrey} activeTextStyle={Styles.tabText} heading="Enquiry Form">
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
                    <Tab tabStyle={Styles.tabGrey} textStyle={Styles.tabTextActive} activeTabStyle={Styles.tabGrey} activeTextStyle={Styles.tabTextActive} heading="Info">
                        <List style={Styles.infoTab}>
                            <ListItem style={Styles.infoItem}>
                                <Icon name="map-marker-radius" type="MaterialCommunityIcons" style={Styles.infoIcon} />
                                <View>
                                    <Text style={Styles.infoHeader}>{'Address'.toUpperCase()}</Text>
                                    <Text style={Styles.infoDesc}>3-277-10, Susan Apartment, {"\n"} Liverpool, United Kingdoom</Text>
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

                <View style={Styles.section}>
                    <View style={Styles.headerBg}>
                        <Text style={Styles.sHeader}>{'Similar Ads'.toUpperCase()}</Text>
                        <Right>
                            <Button small rounded transparent onPress={() => { NavigationService.navigate('PublicAds') }}>
                                <Image source={require('@Asset/images/dot.png')} />
                            </Button>
                        </Right>
                    </View>
                    <View>
                        <FlatList
                            data={SIMILAR}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, separators }) => (
                                <TouchableOpacity style={Styles.item} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicAdsDetail') }}>
                                    <View style={Styles.itemLeft}>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        <Icon name="bookmark" type="FontAwesome" style={Styles.itemBookmark} />
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