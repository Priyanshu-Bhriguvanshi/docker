const express = require('express');
app = express();

app.get("/", (req, res) => {
 res.send("Hello priyanshu")
})
app.listen(3000, () => {
 console.log('Server is running on port 3000');
});