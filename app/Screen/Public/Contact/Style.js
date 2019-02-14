const React = require("react-native");
const { Platform } = React;

export default {
  layoutContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 20,
  },
  pageCol: {
    marginVertical: 30,
  },
  pageIcon: {
    
  },

  infoBg: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    minHeight: 500,
  },
  infoTab: {
    width: '100%',
    backgroundColor: '#FFF',
        borderRadius: 0,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: "#CCC",
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

}