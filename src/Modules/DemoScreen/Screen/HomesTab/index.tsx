import {icons} from '../../../../Assets';
import {
  Container,
  FlatList,
  Header,
  ImageView,
  NotificationCount,
  SearchInput,
  Text,
  Wrapper,
  Button,
} from '../../../../Components';
import React, {useEffect, useState} from 'react';
import {color} from '../../../../Theme';
import {product, setSelectedEvent} from '../../../../Redux';
import {useDispatch, useSelector} from 'react-redux';
import {EventsItem} from '../../../../Modules';
import {EVENT_MENU_BAR} from '../../../../Utils';
import {useLoader} from '../../../../Hooks';
import {
  ItTmsTabParamList,
  NAVIGATE,
  NAVIGATE_SCREEN,
  navigateStack,
} from '../../../../Navigators';

const HomesTab: React.FC<{}> = ({}) => {
  const dispatch = useDispatch();
  const loader = useLoader(false);

  useEffect(() => {
    const params = {
      q: 'phone',
    };

    dispatch(
      product({
        params,
        onSuccess: (response: any) => () => {
          console.log('res---------------', response);
        },
        onError: (error: any) => () => {
          console.log('error---------', error);
        },
      }),
    );
  }, []);

  const [data, setData] = useState<Array>([
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
      images: [
        'https://cdn.dummyjson.com/product-images/1/1.jpg',
        'https://cdn.dummyjson.com/product-images/1/2.jpg',
        'https://cdn.dummyjson.com/product-images/1/3.jpg',
        'https://cdn.dummyjson.com/product-images/1/4.jpg',
        'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
      ],
    },
    {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
      images: [
        'https://cdn.dummyjson.com/product-images/2/1.jpg',
        'https://cdn.dummyjson.com/product-images/2/2.jpg',
        'https://cdn.dummyjson.com/product-images/2/3.jpg',
        'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
      ],
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
      images: ['https://cdn.dummyjson.com/product-images/3/1.jpg'],
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: 'OPPO',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
      images: [
        'https://cdn.dummyjson.com/product-images/4/1.jpg',
        'https://cdn.dummyjson.com/product-images/4/2.jpg',
        'https://cdn.dummyjson.com/product-images/4/3.jpg',
        'https://cdn.dummyjson.com/product-images/4/4.jpg',
        'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
      ],
    },
    {
      id: 5,
      title: 'Huawei P30',
      description:
        'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: 'Huawei',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/5/thumbnail.jpg',
      images: [
        'https://cdn.dummyjson.com/product-images/5/1.jpg',
        'https://cdn.dummyjson.com/product-images/5/2.jpg',
        'https://cdn.dummyjson.com/product-images/5/3.jpg',
      ],
    },
    {
      id: 6,
      title: 'MacBook Pro',
      description:
        'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: 'Apple',
      category: 'laptops',
      thumbnail: 'https://cdn.dummyjson.com/product-images/6/thumbnail.png',
      images: [
        'https://cdn.dummyjson.com/product-images/6/1.png',
        'https://cdn.dummyjson.com/product-images/6/2.jpg',
        'https://cdn.dummyjson.com/product-images/6/3.png',
        'https://cdn.dummyjson.com/product-images/6/4.jpg',
      ],
    },
    {
      id: 7,
      title: 'Samsung Galaxy Book',
      description:
        'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: 'Samsung',
      category: 'laptops',
      thumbnail: 'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg',
      images: [
        'https://cdn.dummyjson.com/product-images/7/1.jpg',
        'https://cdn.dummyjson.com/product-images/7/2.jpg',
        'https://cdn.dummyjson.com/product-images/7/3.jpg',
        'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg',
      ],
    },
    {
      id: 8,
      title: 'Microsoft Surface Laptop 4',
      description:
        'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: 'Microsoft Surface',
      category: 'laptops',
      thumbnail: 'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg',
      images: [
        'https://cdn.dummyjson.com/product-images/8/1.jpg',
        'https://cdn.dummyjson.com/product-images/8/2.jpg',
        'https://cdn.dummyjson.com/product-images/8/3.jpg',
        'https://cdn.dummyjson.com/product-images/8/4.jpg',
        'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg',
      ],
    },
    {
      id: 9,
      title: 'Infinix INBOOK',
      description:
        'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: 'Infinix',
      category: 'laptops',
      thumbnail: 'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg',
      images: [
        'https://cdn.dummyjson.com/product-images/9/1.jpg',
        'https://cdn.dummyjson.com/product-images/9/2.png',
        'https://cdn.dummyjson.com/product-images/9/3.png',
        'https://cdn.dummyjson.com/product-images/9/4.jpg',
        'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg',
      ],
    },
    {
      id: 10,
      title: 'HP Pavilion 15-DK1056WM',
      description:
        'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
      price: 1099,
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: 'HP Pavilion',
      category: 'laptops',
      thumbnail: 'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
      images: [
        'https://cdn.dummyjson.com/product-images/10/1.jpg',
        'https://cdn.dummyjson.com/product-images/10/2.jpg',
        'https://cdn.dummyjson.com/product-images/10/3.jpg',
        'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
      ],
    },
  ]);

  const {addProductData, setSelectedEvents} = useSelector((state: any) => state.AuthReducer);
  const [slideFullGallery, setSlideFullGallery] = useState<any>({});

  useEffect(() => {
    addProductHandler();
  }, [addProductData]);

  const addProductHandler = () => {
    let copyData = [...data];
    if(addProductData) {
    let updatedData = [...copyData, addProductData];
    setData(updatedData)
    }

    // console.log('updatedData------------------====++++++++++++', updatedData);
  };

  const proceedDeleteEvent = (item: any) => {
    // let copyData = [...data];
    let updatedData = data.filter((el, i) => el.id !== item.id);
    setData(updatedData);
    loader.showLoader();
  };

  return (
    <>
      <Wrapper variant={'default'} margin-b={70}>
        <Container margin-t={15}>
          <SearchInput />
        </Container>
        {data && data?.length > 0 && (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            // estimatedItemSize={200}
            renderItem={({item}: {item: any; index: number}) => {
              return (
                <EventsItem
                  item={item}
                  key={item.id}
                  onImageClick={index => {
                    const {images} = item;
                    const fullImage = images.map((each: any) => {
                      return {
                        uri: getPhotos(each),
                      };
                    });
                    setSlideFullGallery({index, visible: true, fullImage});
                  }}
                  onPress={() => {
                    dispatch(setSelectedEvents(item));
                    // navigateStack(
                    //   NAVIGATE['communication-module']['communication-stack'],
                    //   NAVIGATE['communication-module']['event-chat'],
                    //   {
                    //     id: item.id,
                    //   },
                    // );
                  }}
                  onMenuClick={selected => {
                    if (selected.id === EVENT_MENU_BAR[0].id) {
                      dispatch(setSelectedEvent(item));
                      navigateStack(NAVIGATE_SCREEN['demo-stack']);
                    } else if (selected.id === EVENT_MENU_BAR[1].id) {
                      proceedDeleteEvent(item);
                    }
                  }}
                />
              );
            }}
            onEndReachedThreshold={0.5}
            keyExtractor={(item: any) => item.id}
          />
        )}

        <Container position={'absolute'} right={10} bottom={50}>
          <Button
            variant={'primary-pill'}
            text={'Add Products'}
            onPress={() => {
              dispatch(setSelectedEvent({}));
              navigateStack(NAVIGATE_SCREEN['demo-stack']);
            }}
          />
        </Container>
      </Wrapper>
      {slideFullGallery?.visible && (
        <ImgSlide
          defaultImages={slideFullGallery.fullImage}
          openImg={slideFullGallery.visible}
          currentIndex={slideFullGallery.index}
          onRequestClose={() => {
            setSlideFullGallery(FULL_GALLERY_DEFAULT);
          }}
        />
      )}

      {/* </Container> */}
    </>
  );
};

export {HomesTab};
