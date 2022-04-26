import { useLottie } from 'lottie-react';
import icon from '../assets/search_icon.json';

const SearchIcon = () => {
  const options = {
    animationData: icon,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);
  return <> {View} </>;
};

export default SearchIcon;
