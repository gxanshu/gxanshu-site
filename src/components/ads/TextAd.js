import { useEffect } from "react";

function TextAd() {
	useEffect(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}, []);

	return (
		<ins
			class="adsbygoogle"
			style="display:block"
			data-ad-format="fluid"
			data-ad-layout-key="-gu-3+1f-3d+2z"
			data-ad-client="ca-pub-6691816550079346"
			data-ad-slot="2848181114"
		/>
	);
}

export default TextAd;
