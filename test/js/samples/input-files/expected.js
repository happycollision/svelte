/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, addListener, createElement, detachNode, flush, init, insert, run, safe_not_equal, setAttribute } from "svelte/internal";

function create_fragment(component, ctx) {
	var input, input_updating = false, current, dispose;

	return {
		c() {
			input = createElement("input");
			setAttribute(input, "type", "file");
			input.multiple = true;
			dispose = addListener(input, "input", ctx.input_input_handler);
		},

		m(target, anchor) {
			insert(target, input, anchor);

			input.files = ctx.files;

			current = true;
		},

		p(changed, ctx) {
			if (!input_updating && changed.files) input.files = ctx.files;
		},

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			if (detach) {
				detachNode(input);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { files } = $$props;

	function input_input_handler() {
		files = this.files;
		$$invalidate('files', files);
	}

	$$self.$set = $$props => {
		if ('files' in $$props) $$invalidate('files', files = $$props.files);
	};

	return { files, input_input_handler };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get files() {
		return this.$$.ctx.files;
	}

	set files(files) {
		this.$set({ files });
		flush();
	}
}

export default SvelteComponent;