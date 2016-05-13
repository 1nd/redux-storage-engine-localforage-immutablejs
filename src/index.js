import immutable from 'immutable';
import localforage from 'localforage';

export default (key, config = {}) => {
	localforage.config(config);

	return {
		load() {
			return localforage.getItem(key);
		},

		save(state) {
			const stateProps = Object.getOwnPropertyNames(state);
			const newState = {};
			stateProps.forEach(stateProp => {
				if (immutable.Iterable.isIterable(state[stateProp])) {
					newState[stateProp] = state[stateProp].toJS();
				} else {
					newState[stateProp] = state[stateProp];
				}
			});
			return localforage.setItem(key, newState);
		},
	};
};
