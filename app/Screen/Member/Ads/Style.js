export default {
    layoutContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    section: {
        flex: 1,
        paddingVertical: 10,
    },

    category: {
        paddingHorizontal: 20,
        fontSize: 10,
        color: '#999',
        fontFamily: 'Montserrat-Regular',
    },

    item: {
        flex: 1,
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 20,
        backgroundColor: '#FFF',
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: "grey",
        shadowOpacity: 0.1,
        shadowRadius: 0,
    },
    itemImg: {
        marginBottom: 10,
        width: '100%',
        height: 200,
    },
    itemImgBg: {
        position: 'absolute',
        marginBottom: 10,
        width: '100%',
        height: 200,
        opacity: 0.4,
        backgroundColor: '#000',
    },
    itemFavorite: {
        position: 'absolute',
        alignSelf: 'flex-end',
        color: '#309224',
        marginTop: 10,
        paddingRight: 10,
        fontSize: 24,
    },
    itemTitle: {
        color: '#666',
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
    },
    itemPrice: {
        color: '#666',
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
    },
    itemLocation: {
        color: '#999',
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 10,
    },
    itemRow: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingBottom: 5,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#e7e7e7',
    },
    itemRowIcon: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingBottom: 5,
        marginBottom: 15,
    },
    itemLeft: {
        flexGrow: 1,
        flexDirection: 'row',
    },
    itemRight: {
        flexGrow: 1,
        alignItems: 'flex-end',
    },

    itemOverview: {
        flex: 1,
        flexDirection: 'row',
    },
    itemOverviewIcon: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    /* -- Overview Items -- */
    btnList: {
        width: '48%',
    },
    btnCity: {
        width: '100%',
        height: 100,
        marginBottom: 10,
    },
    btnCityMain: {
        width: '100%',
        height: 210,
        marginBottom: 10,
    },
    btnCityImg: {
        flex: 1,
        borderRadius: 0,
    },
    oItem: {
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        flexDirection: 'row',
        marginLeft: 0,
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10 ,
        flex: 1,
    },
    oLabel: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: '#000',
    },
    oValue: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#39405B',
    },
    adTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#39405B',
    },
    adLocation: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: '#39405B',
        opacity: 0.5,
    },
    adPrice: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: '#39405B',
    },

    overview: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemIcon: {
        color: '#999',
        marginRight: 1,
        fontSize: 24,
    },
    itemLeftIcon: {
        color: '#333',
        marginRight: 1,
        fontSize: 24,
    },
    itemNo: {
        color: '#666',
        marginRight: 5,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 5,
        fontSize: 14,
    },
    itemDate: {
        color: '#999',
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        textAlign: 'right',
    },
    itemText: {
        color: '#333',
        marginRight: 5,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 5,
        fontSize: 12,
    },
    itemBtn: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        color: '#333',
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginRight: 10,
    },

    bgFilter: {
        backgroundColor: '#FFF',
        borderTopWidth: 0.5,
        borderColor: '#DDD',
        flexDirection: 'row',
    },




}