import {useEffect} from 'react';
import { AdType } from './type';

export function GoogleAd({variant = AdType.DEFAULT}) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div aria-hidden={true} style={{overflow: 'hidden', minWidth: '300px', minHeight: '250px'}}>
    <ins
      className="adsbygoogle"
      style={{display: 'block'}}
      data-ad-client={"ca-pub-6691816550079346"}
      {...AdType[variant]}
    />
    </div>
  );
}
