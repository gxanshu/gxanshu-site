import { useEffect } from "react";

function BlogAd() {
	useEffect(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}, []);

	return (
		<ins
			class="adsbygoogle"
			style={{display: 'block', textAlign: 'center'}}
			data-ad-layout="in-article"
			data-ad-format="fluid"
			data-ad-client="ca-pub-6691816550079346"
			data-ad-slot="4857953701"
		/>
	);
}

export default BlogAd;
