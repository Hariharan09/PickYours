/* eslint-disable react-native/no-inline-styles */
import {icons} from '../../../../Assets';
import {ImageView, MenuBar} from '../../../../Components/Core';
import {useDimensions} from '../../../../Hooks';
import {Container, Text, Touchable} from '../../../../Components/Styled';
import {color} from '../../../../Theme';
import {
  EVENT_MENU_BAR,
  capitalizeFirstLetter,
  getPhotos,
} from '../../../../Utils';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {EventsItemProps} from './interface';

const EventsItem: React.FC<EventsItemProps> = ({
  item,
  onPress,
  onImageClick,
  onMenuClick,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // console.log(item,'item---------------------');
  

  const {description, title, images, brand, category} = item;

  // const {department, designation, name, profile_image} = event_by;

  const {width, setLayout} = useDimensions();

  return (
    <>
      <Touchable
        accessibilityRole="button"
        // disabled={mark_as_completed}
        onPress={onPress}>
        <Container variant={'card'}>
        <Container flex-d={'row'} flex-ai={'center'} flex-jc={'flex-end'}>
             <MenuBar
               menuData={EVENT_MENU_BAR}
               onSelectedItem={onMenuClick}
               isEventClosed={item?.mark_as_completed}
             />
         </Container>
          <Container flex-d={'row'} flex-ai={'center'}>
            <Container flex={1}>
              <Text variant={'screen-heading'} font-size={14}>
                {capitalizeFirstLetter(title)}
              </Text>
            </Container>
          </Container>
          <Container margin-t={10} flex-d={'row'}>
            <Text flex={1} variant={'regular'} font-size={11} line-h={15}>
              {description}
            </Text>
          </Container>

          <Container margin-t={10}>
            {images && images.length > 0 && (
              <Container
                flex-ai={'center'}
                flex-jc={'center'}
                padding-l={6}
                onLayout={setLayout}>
                <Carousel
                  data={images}
                  renderItem={({item, index}: {item: any; index: number}) => {
                    return (
                      <Touchable
                        accessibilityRole="button"
                        onPress={() => {
                          if (onImageClick) {
                            onImageClick(index);
                          }
                        }}>
                        <ImageView
                          isUri
                          overflow={'hidden'}
                          resize-m={'contain'}
                          source={getPhotos(item)}
                          h={330}
                          w={width}
                        />
                      </Touchable>
                    );
                  }}
                  onSnapToItem={index => setActiveSlide(index)}
                  sliderWidth={width}
                  itemWidth={width}
                />
                <Container margin-t={10}>
                  <Pagination
                    dotsLength={images.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{
                      height: 20,
                      paddingVertical: -15,
                    }}
                    dotStyle={{
                      width: 7,
                      height: 7,
                      borderRadius: 4,
                      marginHorizontal: -10,
                      backgroundColor: color.primary,
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                  />
                </Container>
              </Container>
            )}
          </Container>

          <Container
            flex-d={'row'}
            flex-jc={'space-between'}
            margin-t={10}
            flex-ai={'center'}>
            <Container flex-d={'row'}>
              <Container>
                <Text variant={'input-heading'} margin-b={4}>
                  {'category :'}
                </Text>
              </Container>
              <Container>
                    <Text variant={'bold'} font-size={10} margin-l={5}>
                     {category}
                    </Text>
                </Container>
            </Container>

            <Container flex-d={'row'} margin-l={2}>
              <Container>
                <Text variant={'input-heading'} margin-b={4}>
                  {'Brand :'}
                </Text>
                <Container>
                    <Text variant={'bold'} font-size={10} margin-l={5}>
                     {brand}
                    </Text>
                </Container>
                <Container />
              </Container>
            </Container>
          </Container>
        </Container>
      </Touchable>
    </>
  );
};

export {EventsItem};
