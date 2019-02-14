const React = require("react-native");
const { Platform } = React;

export default  {
    layoutContent: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

    section: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#FFF',
    },
    itemList: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
    },
    itemBg: {
        ...Platform.select({
            ios: {
            },
        }),
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    item: {
        flex: 1,
        borderRadius: 0,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    itemImgBg: {
        flex: 1,
    },
    itemImg: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        ...Platform.select({
            ios: {
                borderRadius: 0,
            },
        }),
    },
    itemFavorite: {
        position: 'absolute',
        alignSelf: 'flex-end',
        color: '#ED5D02',
        paddingRight: 10,
        fontSize: 18,
    },
    itemTitle: {
        color: '#39405B',
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 20,
    },
    itemPrice: {
        color: '#333',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 20,
    },
    itemLocation: {
        color: '#999',
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    crv: {
        borderRadius: 0,
    },
    itemRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    itemOverview: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    itemIcon: {
        color: '#CCC',
        marginRight: 5,
        fontSize: 14,
    },
    itemDate: {
        color: '#999',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginRight: 20,
    },
    itemPosted: {
        marginTop: 10,
        color: '#999',
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    itemLeft: {
        flexWrap: 'wrap',
        width: '40%',
    },
    itemContent: {
        flexWrap: 'wrap',
        width: '50%',
    },
    itemRight: {
        flexWrap: 'wrap',
        width: '10%',
    },

    bgFilter: {
        backgroundColor: '#FFF',
        borderTopWidth: 0.5,
        borderColor: '#DDD',
        flexDirection: 'row',
    },

    trash: {
        fontSize: 18,
        color: '#ED5D02',
    },



    
 }