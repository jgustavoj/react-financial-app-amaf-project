const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://3000-green-seahorse-8vq8lccz.ws-us03.gitpod.io/";
	return {
		store: {
			user: {
				loggedIn: false,
				username: "",
				token: null,
				info: null
			},
			alert: {
				visible: false,
				message: "",
				type: ""
			},
			subscribed: false,
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
			signupPage: (full_name, email, password) => {
				return fetch(base_url + "/signup", {
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
			login: (username, password) => {
				return fetch(base_url + "/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: username,
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
							username: username,
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
