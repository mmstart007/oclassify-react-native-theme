const React = require("react-native");
const { Platform } = React;

export default {

    layoutContent: {
        flex: 1,
        alignItems: 'center',
    },
    bgCover: {
        flex: 1,
    },
    section: {
        width: '100%',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: 50,
        marginBottom: 20,
    },
    signBg: {
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 0,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#999',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 5,
                    height: 5
                },
            },
        }),
    },
    col: {
        flexDirection: 'row',
    },
    textInput: {
        fontFamily: 'Montserrat-Regular',
        borderBottomWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 13,
        width: '100%',
    },
    textInputHalf: {
        fontFamily: 'Montserrat-Regular',
        borderBottomWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 12,
        width: '50%',
    },
    btn: {
        width: '100%',
        backgroundColor: '#ED5D02',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 0,
        ...Platform.select({
            android: {
                height: 60,
            },
        }),
    },
    btnText: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        fontSize: 14,
        alignSelf: 'center',
    },

    loginBtnText: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center',
    },
    loginBtnIcon: {
        color: '#FFF',
        fontSize: 24,
    },

    login: {
        flex: 1,
        marginVertical: 30,
        width: '100%',
        alignItems: 'center',
    },
    account: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFF',
        fontSize: 14,
    },
    btnLogin: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFF',
        fontSize: 14,
        justifyContent: 'center',
        flex: 1,
        height: 40,
        padding: 5,
        textAlign: 'center',
    },
    forgot: {
        width: '100%',
        justifyContent: 'flex-end'
    },
    btnForgot: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFF',
        paddingVertical: 15,
        textAlign: 'right',
        fontSize: 13,
    }


}