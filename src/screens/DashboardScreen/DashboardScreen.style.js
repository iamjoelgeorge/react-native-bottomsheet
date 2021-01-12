import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperStyle: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  containerStyle: {
    backgroundColor: '#e9ebef',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
  },
  draggableIconStyle: {
    // height: 0, // To not display the draggable icon
    backgroundColor: '#2f1150',
  },
});
