const React = require("react-native");
const { Platform } = React;

export default {
  layoutContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadow: {
    flex: 1,
    height: 20,
  },


  coverImg: {
    flex: 1,
    width: '100%',
    height: 200,
    justifyContent: 'center',
  },

  section: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },


  profile: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bgBlue: {
    width: '100%',
    flex: 1,
    height: 200,
    backgroundColor: '#39405B',
    position: 'absolute',
    opacity: 0.75,
  },
  back: {
    flex: 1,
    width: '100%',
    height: 200,
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
  },


  owner: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    position: 'absolute',
    paddingTop: 20,
  },
  ownerTitle: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 20,
    color: '#333',
  },
  ownerAvatar: {
    borderWidth: 5,
    borderColor: '#DDD',
    padding: 5,
  },
  ownerAvatarImg: {
    width: 72,
    height: 72,
    marginRight: 15,
  },
  ownerInfo: {
    flexDirection: 'column',
  },
  ownerName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#FFF',
    marginTop: 10,
    marginBottom: 5,
  },
  ownerLocation: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#FFF',
    opacity: 0.7,
  },

  tabBorder: {
    backgroundColor: '#ED5D02',
  },
  tabGrey: {
    backgroundColor: '#FFF',
    fontFamily: 'Montserrat-Regular',
  },
  tabText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#999',
  },
  tabTextActive: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#333',
  },
  infoTab: {
    paddingVertical: 20,
  },
  infoItem: {
    alignItems: 'flex-start',
    paddingVertical: 30,
  },
  infoItemLast: {
    borderBottomWidth: 0,
  },
  infoIcon: {
    marginRight: 10,
    color: '#39405B',
  },
  infoHeader: {
    fontFamily: 'Montserrat-Regular',
    color: '#39405B',
    marginBottom: 5,
    fontSize: 12,
  },
  infoDesc: {
    fontFamily: 'Montserrat-Regular',
    color: '#999',
    fontSize: 12,
  },

  formBg: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  col: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    fontFamily: 'Montserrat-Regular',
    borderBottomWidth: 0,
    borderColor: '#DDD',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 12,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
  textInputMulti: {
    fontFamily: 'Montserrat-Regular',
    borderBottomWidth: 0,
    borderColor: '#DDD',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 12,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        height: 100,
        paddingTop: 20,
      },
      android: {
        textAlignVertical: 'top',
      },
    }),
  },
  textInputHalf: {
    fontFamily: 'Montserrat-Regular',
    borderBottomWidth: 0,
    borderColor: '#DDD',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 12,
    width: '48.5%',
    marginBottom: 10,
    borderRadius: 5,
  },
  btn: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#ED5D02',
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  btnText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 14,
    alignSelf: 'center',
  },

  formBtnText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 12,
  },
  formBtnIcon: {
    color: '#FFF',
    fontSize: 24,
  },

  overview: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 20,
  },
  overviewTitle: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
  },
  overviewDesc: {
    flex: 1,
    color: '#666',
    lineHeight: 20,
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
  },


  itemFavorite: {
    position: 'absolute',
    alignSelf: 'flex-start',
    color: '#ED5D02',
    paddingLeft: 2,
    fontSize: 24,
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
    borderRadius: 8,
  },
  itemRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  itemOverview: {
    flexGrow: 1,
    flexDirection: 'row',
  },

  itemNo: {
    color: '#333',
    marginRight: 5,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
    fontSize: 14,
  },









  item: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 0,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    flexDirection: 'row',
    padding: 10,
  },
  itemImg: {
    marginBottom: 10,

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

  itemTitle: {
    color: '#39405B',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 20,
  },
  itemIcon: {
    color: '#CCC',
    marginRight: 5,
    fontSize: 14,
  },
  itemPosted: {
    marginTop: 10,
    color: '#999',
    fontFamily: 'Montserrat-Regular',
    fontSize: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  itemLeft: {
    flexWrap: 'wrap',
    minWidth: '40%',
    maxWidth: '50%',
  },
  itemRight: {
    flexWrap: 'wrap',
    minWidth: '50%',
    maxWidth: '60%',
  },
  itemDate: {
    color: '#999',
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    marginRight: 20,
  },


}