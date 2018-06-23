var config = {
	expressPort: 3000,
	client: {
		mongodb: {
			defaultDatabase: "",
			defaultCollection: "",
			defaultUri: ""
		},
	},
	testMongoDBURI: "mongodb://thedestroyer9876:sjfd27@ds117111.mlab.com:17111/broadfork",
	quotesCollection: "quotes"
};

module.exports = config;
