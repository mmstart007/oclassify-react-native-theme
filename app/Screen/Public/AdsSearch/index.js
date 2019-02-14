import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, Picker } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Radio, Right, Body, Input, ListItem, Form, Footer, Textarea, View, FooterTab, Badge, Label } from 'native-base'
import RadioGroup from 'react-native-custom-radio-group'

import NavigationService from '@Service/Navigation'
//import Button as cButton from '@Component/Button'
import Style from '@Theme/Style'
import Styles from '@Screen/Public/AdsSearch/Style'


//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export const propertyType = [{
    label: 'Buy',
    value: 'type_buy'
}, {
    label: 'Rent',
    value: 'type_rent'
}, {
    label: 'Projects',
    value: 'type_projects'
}];

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: undefined,
            sliderOneChanging: false,
            sliderOneValue: [10000],
            multiSliderValue: [100, 100000],
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    sliderOneValuesChangeStart = () => {
        this.setState({
            sliderOneChanging: true,
        });
    }

    sliderOneValuesChange = (values) => {
        let newValues = [0];
        newValues[0] = values[0];
        this.setState({
            sliderOneValue: newValues,
        });
    }

    sliderOneValuesChangeFinish = () => {
        this.setState({
            sliderOneChanging: false,
        });
    }

    multiSliderValuesChange = (values) => {
        this.setState({
            multiSliderValue: values,
        });
    }



    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('PublicAds')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Search'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.section}>
                    <View style={Styles.textView}>
                        <Label style={Styles.labelPrice}>Ad Title</Label>
                        <TextInput style={Styles.textInput} bordered placeholder="Title" />
                    </View>
                    <View style={Styles.textView}>
                        <Label style={Styles.labelPrice}>Category</Label>
                    </View>
                    <View style={Styles.picker}>
                        <Picker
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Properties" value="properties" />
                            <Picker.Item label="Cars" value="cars" />
                            <Picker.Item label="Electronics" value="electronics" />
                            <Picker.Item label="Fashion" value="fashion" />
                            <Picker.Item label="Books" value="books" />
                            <Picker.Item label="Household" value="household" />
                            <Picker.Item label="Pets" value="pets" />
                            <Picker.Item label="Jobs" value="jobs" />
                            <Picker.Item label="Services" value="services" style={Styles.pickerText} />
                        </Picker>
                    </View>
                    <View style={Styles.textView}>
                        <Label style={Styles.labelPrice}>Location</Label>
                        <TextInput style={Styles.textInput} placeholder="Location" />
                    </View>


                    <View style={Styles.price}>
                        <Label style={Styles.labelPrice}>Price</Label>
                        <View style={Styles.col}>
                            <View style={Styles.pricePicker}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={Styles.priceSelect}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                                    <Picker.Item label="Min" value="10" />
                                    <Picker.Item label="$1000" value="1000" />
                                    <Picker.Item label="$2000" value="2000" />
                                    <Picker.Item label="$3000" value="3000" />
                                    <Picker.Item label="$4000" value="4000" />
                                    <Picker.Item label="$5000" value="5000" />
                                    <Picker.Item label="$6000" value="6000" />
                                    <Picker.Item label="$7000" value="7000" />
                                    <Picker.Item label="$8000" value="8000" />
                                    <Picker.Item label="$9000" value="9000" />
                                    <Picker.Item label="$10000" value="10000" />
                                </Picker>
                            </View>
                            <View style={Styles.pricePicker}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={Styles.priceSelect}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                                    <Picker.Item label="Max" value="10" />
                                    <Picker.Item label="$1000" value="1000" />
                                    <Picker.Item label="$2000" value="2000" />
                                    <Picker.Item label="$3000" value="3000" />
                                    <Picker.Item label="$4000" value="4000" />
                                    <Picker.Item label="$5000" value="5000" />
                                    <Picker.Item label="$6000" value="6000" />
                                    <Picker.Item label="$7000" value="7000" />
                                    <Picker.Item label="$8000" value="8000" />
                                    <Picker.Item label="$9000" value="9000" />
                                    <Picker.Item label="$10000" value="10000" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={Styles.btnBg}>
                        <Button style={Styles.btn} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Text style={Styles.btnText}>{'Search'.toUpperCase()}</Text>
                            <Icon active name='search' type="FontAwesome" style={Styles.btnIcon} />
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