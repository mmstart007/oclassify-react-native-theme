import React from 'react'
import { StatusBar, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, View, FlatList } from 'react-native'
import { Container, Header, Content, Picker, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, FooterTab, Label, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/AdCreate/Style'

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ptype: null
        }

    }
    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('MemberAds')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Create Ad'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.section}>

                    <View style={Styles.step}>
                        <Text style={Styles.stepText}>STEP 1. Overview</Text>
                    </View>

                    <View style={Styles.row}>
                        <Label style={Styles.label}>CATEGORY</Label>
                        <View style={Styles.bgGrey}>
                            <Picker
                                mode="dropdown"
                                selectedValue={this.state.ptype}
                                height={20}
                                itemTextStyle={{
                                    marginLeft: 0,
                                    paddingLeft: 0,
                                }}
                                textStyle= {{
                                    fontFamily: 'Montserrat-Regular',
                                    fontSize: 12,
                                  }}
                                  
                                onValueChange={(itemValue, itemIndex) => this.setState({ ptype: itemValue })}>
                                <Picker.Item label="Cars" value="cars" />
                                <Picker.Item label="Real Estate" value="realestate" />
                                <Picker.Item label="Electronics" value="electronics" />
                                <Picker.Item label="Fashion" value="fashion" />
                                <Picker.Item label="Books" value="books" />
                                <Picker.Item label="Household" value="household" />
                                <Picker.Item label="Pets" value="pets" />
                                <Picker.Item label="Jobs" value="jobs" />
                                <Picker.Item label="Services" value="services" style={Styles.pickerText} />
                            </Picker>
                        </View>
                    </View>
                    <View style={Styles.row}>
                        <Label style={Styles.label}>COMPANY</Label>
                        <View style={Styles.bgGrey}>
                            <Picker
                                selectedValue={this.state.ptype}
                                height={20}
                                onValueChange={(itemValue, itemIndex) => this.setState({ ptype: itemValue })}>
                                <Picker.Item label="Audi" value="Audi" />
                                <Picker.Item label="BMW" value="BMW" />
                                <Picker.Item label="Mercedes-Benz" value="Mercedes-Benz" />
                            </Picker>
                        </View>
                    </View>
                    <View style={Styles.row}>
                        <Label style={Styles.label}>MODEL</Label>
                        <TextInput style={Styles.textInput} placeholder={''} />
                    </View>
                    <View style={Styles.row}>
                        <Label style={Styles.label}>FUEL</Label>
                        <View style={Styles.bgGrey}>
                            <Picker
                                selectedValue={this.state.ptype}
                                height={20}
                                onValueChange={(itemValue, itemIndex) => this.setState({ ptype: itemValue })}>
                                <Picker.Item label="Petrol" value="Petrol" />
                                <Picker.Item label="Diesel" value="Diesel" />
                                <Picker.Item label="Eletric" value="Eletric" />
                            </Picker>
                        </View>
                    </View>
                    <View style={Styles.row}>
                        <Label style={Styles.label}>YEAR</Label>
                        <View style={Styles.bgGrey}>
                            <Picker
                                selectedValue={this.state.ptype}
                                height={20}
                                onValueChange={(itemValue, itemIndex) => this.setState({ ptype: itemValue })}>
                                <Picker.Item label="2015" value="2015" />
                                <Picker.Item label="2016" value="2016" />
                                <Picker.Item label="2017" value="2017" />
                                <Picker.Item label="2018" value="2018" />
                            </Picker>
                        </View>
                    </View>
                    <View style={Styles.row}>
                        <Label style={Styles.label}>COLOR</Label>
                        <TextInput style={Styles.textInput} placeholder={''} />
                    </View>
                    <View style={Styles.row}>
                        <Label style={Styles.label}>AD NAME</Label>
                        <TextInput style={Styles.textInput} placeholder={''} />
                    </View>

                    <View style={Styles.row}>
                        <Label style={Styles.label}>DESCRIPTION</Label>
                        <TextInput style={Styles.textInputMulti} multiline={true} numberOfLines={8} placeholder={'Minimum 20 characters'} value={''} />
                    </View>

                    <View style={Styles.row}>
                        <View style={Styles.col}>
                            <Label style={Styles.label}>PRICE</Label>
                            <TextInput style={Styles.textInput} placeholder={'e.g. 100000'} />
                        </View>
                    </View>

                    <View style={[Styles.step, Styles.spaceTop]}>
                        <Text style={Styles.stepText}>STEP 2. Photos</Text>
                    </View>

                    <View style={Styles.row}>
                        <View style={Styles.photoUpload}>
                            <Button iconLeft transparent style={Styles.photoUploadBtn}>
                                <Icon name="upload" type="FontAwesome" style={Styles.photoUploadIcon} />
                                <Text style={Styles.photoUploadText}>Upload Photos</Text>
                            </Button>
                        </View>

                    </View>

                    <View style={Styles.row}>
                        <View style={Styles.photo}>
                            <View style={Styles.photoItem}>
                                <Image source={{ uri: 'https://houseofhargrove.com/wp-content/uploads/2017/10/Beautiful-Exteriors1.jpg' }} style={Styles.photoIcon} />
                                <Button style={Styles.photoDelete}>
                                    <Icon name="trash" type="FontAwesome" style={Styles.photoDeleteIcon} />
                                </Button>
                            </View>
                            <View style={Styles.photoItem}>
                                <Image source={{ uri: 'https://marketplace.canva.com/MACViAoaMik/1/screen/canva-kitchen%2C-home%2C-house%2C-interior%2C-modern%2C-room%2C-floor-MACViAoaMik.jpg' }} style={Styles.photoIcon} />
                                <Button style={Styles.photoDelete}>
                                    <Icon name="trash" type="FontAwesome" style={Styles.photoDeleteIcon} />
                                </Button>
                            </View>
                            <View style={Styles.photoItem}>
                                <Image source={{ uri: 'https://marketplace.canva.com/MACV3QT96xw/1/screen/canva-interior-design%2C-home%2C-house%2C-design%2C-room%2C-furniture-MACV3QT96xw.jpg' }} style={Styles.photoIcon} />
                                <Button style={Styles.photoDelete}>
                                    <Icon name="trash" type="FontAwesome" style={Styles.photoDeleteIcon} />
                                </Button>
                            </View>
                            <View style={Styles.photoItem}>
                                <Image source={{ uri: 'https://marketplace.canva.com/MAC3YeUwhqQ/1/screen/canva-furniture%2C-chair%2C-interior%2C-modern%2C-room%2C-home%2C-table-MAC3YeUwhqQ.jpg' }} style={Styles.photoIcon} />
                                <Button style={Styles.photoDelete}>
                                    <Icon name="trash" type="FontAwesome" style={Styles.photoDeleteIcon} />
                                </Button>
                            </View>
                            <View style={Styles.photoItem}>
                                <Image source={{ uri: 'https://marketplace.canva.com/MAC4hLqI8bY/1/screen/canva-interior%2C-living-room%2C-living-room-interior%2C-living-MAC4hLqI8bY.jpg' }} style={Styles.photoIcon} />
                                <Button style={Styles.photoDelete}>
                                    <Icon name="trash" type="FontAwesome" style={Styles.photoDeleteIcon} />
                                </Button>
                            </View>
                            <View style={Styles.photoItem}>
                                <Image source={{ uri: 'https://i.pinimg.com/736x/17/48/86/1748869b10e305dfd5403c84fff02d22--zen-bedrooms-luxury-bedrooms.jpg' }} style={Styles.photoIcon} />
                                <Button style={Styles.photoDelete}>
                                    <Icon name="trash" type="FontAwesome" style={Styles.photoDeleteIcon} />
                                </Button>
                            </View>
                        </View>

                    </View>





                    <View style={Styles.itemFooter}>
                        <Button iconLeft transparent style={Styles.itemBtnActive} onPress={() => {
                            NavigationService.navigate('MemberAdPublished')
                        }}>
                            <Icon name="check" type="MaterialIcons" style={Styles.itemIcon} />
                            <Text style={Styles.itemText}>Save</Text>
                        </Button>
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