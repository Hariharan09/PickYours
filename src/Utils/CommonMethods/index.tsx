import RNFetchBlob from 'rn-fetch-blob';
import {getPhotos} from '..';

export function ifObjectExist(value: object) {
  let is_valid = true;

  if (Object.keys(value).length !== 0) {
    is_valid = false;
  }
  return is_valid;
}

export function convertToUpperCase(data: string) {
  return data?.charAt(0).toUpperCase() + data?.slice(1);
}

export function capitalizeFirstLetter(string: any) {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const convertUrlToBase64 = async (url: string) => {
  try {
    const response = await RNFetchBlob.config({
      fileCache: true,
    }).fetch('GET', url);

    return await response.base64();
  } catch (error) {
    return null;
  }
};

export function getArrayFromArrayOfObject(data: Array<any>, key: string) {
  return data.map((el: any) => el[key]);
}
