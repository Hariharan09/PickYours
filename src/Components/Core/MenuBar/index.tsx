/* eslint-disable react/prop-types */
import {ImageView, Modal} from '../../../Components/Core';
import {Container, Text, Touchable, FlatList} from '../../../Components/Styled';
import React from 'react';
import {icons} from '../../../Assets';
import {MenuBarProps} from './interface';
import {useModal} from '../../../Hooks';

// eslint-disable-next-line react/prop-types
const MenuBar: React.FC<MenuBarProps> = ({onSelectedItem, menuData}) => {
  const menuModal = useModal(false);

  return (
    <>
      <Touchable
        accessibilityRole="button"
        padding-h={10}
        onPress={menuModal.show}>
        <ImageView source={icons.menuBar} h={20} w={20} />
      </Touchable>

      <Modal visible={menuModal.visible} onClose={menuModal.hide}>
        <FlatList<React.ElementType>
          data={menuData}
          renderItem={({item, index}: {item: any; index: number}) => (
            <>
              <Touchable
                margin-t={5}
                accessibilityRole="button"
                padding-v={10}
                flex-ai={'center'}
                flex-d={'row'}
                onPress={() => {
                  if (onSelectedItem) {
                    onSelectedItem(item);
                  }
                  menuModal.hide();
                }}>
                <Container flex-ai={'center'} padding-l={10}>
                  <Text variant={'book'} letter-s={3}>
                    {item.name}
                  </Text>
                </Container>
              </Touchable>
              {index !== menuData.length - 1 && (
                <Container variant={'divider'} />
              )}
            </>
          )}
          keyExtractor={(item: any) => item.id}
        />
      </Modal>
    </>
  );
};

export {MenuBar};
