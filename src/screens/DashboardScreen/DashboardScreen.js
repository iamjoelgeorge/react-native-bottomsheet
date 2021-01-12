import React, {useRef} from 'react';
import {Button, Text, View} from 'react-native';

import BottomSheet from 'react-native-raw-bottom-sheet';
import BottomSheetContent from '../../components/BottomSheetContent/BottomSheetContent';

import styles from './DashboardScreen.style';

const DashboardScreen = () => {
  const bottomSheetRef = useRef();

  const _openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  return (
    <View style={styles.dashboardContainer}>
      <Button title="Open Modal" onPress={_openBottomSheet} />
      <BottomSheet
        ref={bottomSheetRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeDuration={400}
        animationType="fade"
        height={450}
        customStyles={{
          wrapper: styles.wrapperStyle,
          container: styles.containerStyle,
          draggableIcon: styles.draggableIconStyle,
        }}>
        <BottomSheetContent ref={bottomSheetRef} />
      </BottomSheet>
    </View>
  );
};

export default DashboardScreen;
