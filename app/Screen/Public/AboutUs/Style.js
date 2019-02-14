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
    marginTop: 20,
  },
  pageIcon: {
    
  },

  overviewBg: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    minHeight: 500,
  },
  overview: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
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

}