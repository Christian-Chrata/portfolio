import ClientOnly from "@/components/clientonly";

import HomeClient from "./homeclient";

const HomePage = async () => {
	return (
		<ClientOnly>
			<HomeClient />
		</ClientOnly>
	);
};

export default HomePage;
