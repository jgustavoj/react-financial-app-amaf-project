const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			amaf_url: "",
			hector_url: "",
			camilla_url: "",
			base_url: "https://3000-green-seahorse-8vq8lccz.ws-us03.gitpod.io",
			fmp_url: "https://financialmodelingprep.com/",

			user: {
				loggedIn: false,
				username: "",
				token: null,
				info: null
			},
			register: {
				full_name: "",
				email: "",
				password: ""
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			gainerStocks: () => {
				return fetch(fmp_url + "api/v3/stock/gainers?apikey=da6240539dc1685ff601c5c2edb3ff29", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						let store = getStore();
						// store.user = {
						// 	token: data.jwt,
						// 	info: data.user
						// };
						setStore(store);
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},
			signupPage: (full_name, email, password) => {
				return fetch(getStore().base_url + "/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						password: password
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						let store = getStore();
						// store.user = {
						// 	token: data.jwt,
						// 	info: data.user
						// };
						setStore(store);
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},
			login: (email, password) => {
				return fetch(getStore().base_url + "/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						let store = getStore();
						store.user = {
							loggedIn: true,
							email: email,
							token: data.jwt,
							info: data.user
						};
						setStore(store);
						sessionStorage.setItem("currentUser", JSON.stringify(data));
						sessionStorage.setItem("loggedIn", true);
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},
			isLoggedIn: () => {
				const store = getStore();
				if (sessionStorage.getItem("currentUser")) {
					store.user = {
						loggedIn: sessionStorage.getItem("loggedIn")
					};
					setStore(store);
				}
			},
			logout: () => {
				setStore({
					user: {
						loggedIn: false,
						username: "",
						token: null,
						info: null
					}
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
