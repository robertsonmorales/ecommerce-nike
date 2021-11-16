import Axios from "axios";
import { API } from "../api.config";

const FIELDS = {
	id: 0,
    img: "",
    name: "",
    price: 0
};

export const LatestReleases = {
	state: {
		data: [ FIELDS ]
	},
	mutations: {
		INDEX_LATEST_RELEASE (state, response){
			state.data = response.data;
		}
	},
	actions: {
		fetchLatestReleases({ commit }){
			Axios.get(API.data.latest_release, {
				headers: API.headers
			}).then((res) => {

				commit({
					type: "INDEX_LATEST_RELEASE",
					data: res.data.latest_release
				});
			});
		}
	},
	getters: {
		latestRelease(state){
			return state.data;
		}
	}
};