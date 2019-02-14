const React = require("react-native");
const { Platform } = React;

export default {
  layoutInner: {
    flex: 1,
  },
  layoutContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBg: {
    flex: 1,
    paddingBottom: 30,
  },
  

  section: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  type: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#39405B'
  },

  row: {
    marginBottom: 2,
    paddingLeft: 20,
    paddingVertical: 5,
    borderLeftWidth: 5,
    borderColor: '#f0f0f0',
  },
  rowInline: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    width: '48%',
  },

  bgGrey: {
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingVertical: 0,
  },


  propertyType: {
    marginBottom: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  label: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  labelPrice: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  textInput: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#333',
    paddingTop: 10,
    paddingBottom: 0,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  textInputMulti: {
    fontFamily: 'Montserrat-Regular',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingVertical: 10,
    paddingHorizontal: 0,
    fontSize: 12,
    width: '100%',
    marginBottom: 10,
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
    paddingTop: 20,
    paddingBottom: 20,
    height: 50,
    paddingLeft: 5,
  },
  btnText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 12,
    alignSelf: 'center',
  },
  btnIcon: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 16,
    alignSelf: 'center',
  },


  typeBg: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 0,
    borderRadius: 0,
  },
  typeBtn: {
    flex: 1,
    borderWidth: 0,
    borderRadius: 0,
  },
  typeBtnText: {
    fontFamily: 'Montserrat-Regular',
    color: '#999',
    fontSize: 12,
  },

  typeBtnActive: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 0,
  },
  typeBtnInactive: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 3,
  },
  typeActiveText: {
    color: '#333',
    fontFamily: 'Montserrat-SemiBold',
  },
  typeInactiveText: {
    color: '#FFF',
    fontFamily: 'Montserrat-Regular',
  },

  noBg: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 2,
    borderRadius: 0,
  },
  noBtn: {
    flex: 1,
    borderWidth: 0,
    borderRadius: 0,
    marginRight: 2,
  },
  noBtnText: {
    color: '#999',
    fontSize: 12,
  },

  noBtnActive: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    borderRadius: 0,
    borderWidth: 3,
    borderColor: '#39405B'
  },
  noBtnInactive: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
  },
  noActiveText: {
    color: '#333',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  noInactiveText: {
    color: '#999',
    fontFamily: 'Montserrat-SemiBold',
  },


  itemFooter: {
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
  itemText: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
  itemTextDisabled: {
    color: '#CCC',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
  itemIconDisabled: {
    color: '#CCC',
  },
  itemBtn: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    color: '#FFF',
    paddingHorizontal: 0,
    borderRadius: 0,
  },
  itemIcon: {
    color: '#FFF',
  },
  itemBtnActive: {
    backgroundColor: '#ED5D02',
    color: '#FFF',
    paddingHorizontal: 5,
    borderRadius: 0,
    alignSelf: 'flex-end',
  },

  amenity: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  amenityItem: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 1,
    borderRadius: 0,
    width: '33%'
  },
  amenityIcon: {
    marginBottom: 5,
  },
  amenityText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
  },

  photoUpload: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    borderRadius: 0,
  },
  photoUploadBtn: {
    alignSelf: 'center',
    borderWidth: 0,
    backgroundColor: '#FFF',
    borderColor: '#666',
    paddingVertical: 15,
    height: 50,
    borderRadius: 10,
  },
  photoUploadIcon: {
    color: '#555',
    marginBottom: 0,
  },
  photoUploadText: {
    color: '#333',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },

  photo: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  photoItem: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
    width: '33%'
  },
  photoIcon: {
    width: '100%',
    height: 100,
  },
  photoDelete: {
    position: 'absolute',
    backgroundColor: '#FFF',
    right: 0,
    top: 0,
    marginRight: 10,
    marginTop: 10,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    borderRadius: 0,
  },
  photoDeleteIcon: {
    color: '#FF0000',
    fontSize: 18,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
  },

  publish: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  publishIcon: {
    alignSelf: 'center',
    fontSize: 128,
    color: '#309224',
    marginBottom: 10,
  },
  publishTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#309224',
    marginBottom: 10,
  },
  publishDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#666',
  },
  publishPreview: {
    flex: 1,
    paddingVertical: 30,
  },
  publishBtn: {
    backgroundColor: '#ED5D02',
    borderRadius: 0,
    paddingHorizontal: 10,
  },
  publishBtnIcon: {
    color: '#FFF',
  },
  publishBtnText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#FFF',
  },

  step: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderColor: '#39405B',
    backgroundColor: '#f0f0f0',
  },
  stepText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#39405B',
    fontSize: 14,
  },
  dropDown: {
    flex: 1,
    minWidth: '90%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  dropDownText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#666',
  },
  spaceTop: {
    marginTop: 20,
  }

}