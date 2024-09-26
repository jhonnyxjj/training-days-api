export const initialize = (app) => {
	app.get("/test", (req, res) => res.send("HELLO!"));
}
