import ClientOnly from "@/components/clientonly";

import ProjectsClient from "./projectsclient";

const ProjectsPage = async () => {
	return (
		<ClientOnly>
			<ProjectsClient />
		</ClientOnly>
	);
};

export default ProjectsPage;
