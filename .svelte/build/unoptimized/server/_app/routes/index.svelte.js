/* src/routes/index.svelte generated by Svelte v3.31.2 */
import { create_ssr_component, validate_component } from "../../_snowpack/pkg/svelte/internal.js";

import Nav from "../../_components/nav.svelte.js";
import Courses from "../../_components/courses.svelte.js";

const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${validate_component(Courses, "Courses").$$render($$result, {}, {}, {})}`;
});

export default Routes;
//# sourceMappingURL=index.svelte.js.map