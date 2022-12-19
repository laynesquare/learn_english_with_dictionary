import { useLottie } from 'lottie-react';
import icon from '../../assets/search_icon.json';

const CheerfulGirl = () => {
  const options = {
    animationData: icon,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);
  return <> {View} </>;
};

export default CheerfulGirl;
