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

  slider: {
    flex: 1,
    width: '100%',
  },
  sliderImg: {
    flex: 1,
    width: 200,
    height: 150,
    marginRight: 10,
  },
  coverImg: {
    flex: 1,
    height: 360,
  },

  section: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: '#333',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  price: {
    color: '#333',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 10,
  },
  locationTop: {
    flexDirection: 'row',
  },
  locationTopIcon: {
    color: '#999',
    fontSize: 20,
  },
  locationTopInfo: {
    color: '#999',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginTop: 3,
    marginRight: 20,
  },


  itemDate: {
    color: '#999',
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    marginRight: 20,
  },



  count: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#E6E4E4',
  },
  countCol: {
    flexDirection: 'row'
  },
  countItem: {
    flexGrow: 1,
    borderRightWidth: 1,
    borderColor: '#E6E4E4',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  countFirst: {
    paddingLeft: 20,
  },
  countNo: {
    fontFamily: 'Montserrat-SemiBold',
  },
  countText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#999',
  },
  countIcon: {
    color: '#ED5D02',
    marginRight: 10,
    fontSize: 24,
  },


  overview: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  overviewTitle: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
    fontSize: 14,
  },
  overviewDesc: {
    flex: 1,
    color: '#666',
    lineHeight: 20,
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
  },

  gallery: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#f0f0f0',
  },
  galleryTitle: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
    color: '#333',
    fontSize: 14,
  },
  galleryImg: {
    flex: 1,
    color: '#666',
    lineHeight: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  galleryItem: {
    width: '32%',
    marginBottom: 5,
  },
  galleryPic: {
    width: '100%',
    minHeight: 100,
  },



  location: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f0f0f0',
    minHeight: 200,
  },
  locationTitle: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
    color: '#333',
    fontSize: 14,
  },
  locationMap: {
    flex: 1,
    minHeight: 300,
  },


  owner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'column',
  },
  ownerTitle: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
    color: '#333',
    fontSize: 14,
  },
  ownerAvatar: {
    marginLeft: 0,
  },
  ownerAvatarImg: {
    borderRadius: 0,
  },
  ownerInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,

  },
  ownerName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    marginBottom: 5,
  },
  ownerLocation: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#999',
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
    width: '100%',
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
    paddingVertical: 10,
    fontSize: 12,
    width: '100%',
    marginBottom: 10,
    borderRadius: 0,
  },
  textInputHalf: {
    fontFamily: 'Montserrat-Regular',
    borderBottomWidth: 0,
    borderColor: '#DDD',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 12,
    width: '48.5%',
    marginBottom: 10,
    borderRadius: 0,
  },
  textInputMulti: {
    fontFamily: 'Montserrat-Regular',
    borderBottomWidth: 0,
    borderColor: '#DDD',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 12,
    width: '100%',
    marginBottom: 10,
    borderRadius: 0,
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
  btn: {
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#ED5D02',
    paddingVertical: 15,
    paddingLeft: 5,
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

  formBtnText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 12,
  },
  formBtnIcon: {
    color: '#FFF',
    fontSize: 24,
  },

  sectionGrey: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: '#f0f0f0',
  },
  flatList: {
    paddingLeft: 15,
  },
  headerBg: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  headerIcon: {
    fontSize: 24,
    color: '#333',
  },
  sHeader: {
    color: '#333',
    marginLeft: 3,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
  },
  sBtn: {
    padding: 1,
    backgroundColor: '#e7e7e7',
    color: '#FFF',
  },
  sLink: {
    color: '#666',
    fontSize: 10,
    fontFamily: 'Montserrat',
  },
  item: {
    width: 200,
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },

  itemBookmark: {
    position: 'absolute',
    alignSelf: 'flex-start',
    color: '#ED5D02',
    paddingLeft: 2,
    fontSize: 18,
    marginLeft: 10,
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

  /* -- Overview Items -- */
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
    fontSize: 12,
    color: '#999',
  },
  oValue: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#39405B',
  },

  ovLayout: {
    flex: 1,
    flexDirection: 'row',
  },
  ovItem: {
    marginLeft: 0,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',

  },
  ovLabel: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#999',
  },
  ovValue: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#39405B',
  },

  item: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 0,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemImg: {
    width: '100%',
    height: 100,
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

  photo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  photoBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 15,
  },
  photoPic: {
    width: '100%',
    height: '100%',
  },
  photoButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#ED5D02'
  },
  photoBtnText: {
    fontFamily: 'Montserrat-Regular',
    color: '#FFF',
    fontSize: 12,
  }

}