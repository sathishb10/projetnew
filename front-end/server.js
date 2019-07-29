const express = require('express')
const app = express()
const port = 4567;

app.get('/', index);
app.get('/registration', userRegistration);
app.get('/adminlogin', adminLogin);
app.get('/userlogin', userLogin);
app.get('/admin', admin);
app.get('/user', user);

app.get('/admin/viewUsers', adminViewUsers);
app.get('/admin/sendFiles', adminSendFiles);
app.get('/admin/viewFiles', adminViewFiles);
app.get('/admin/veiwLeakFiles', adminViewLeakFiles);

app.get('/user/viewProfile', userViewProfile);
app.get('/user/viewFiles', userViewFiles);
app.get('/user/viewKey', userViewKey);
app.get('/user/sendAgentFiles', userSendAgentFiles);
app.get('/user/viewAgentFiles', userViewAgentFiles);
app.get('/user/rating', rating);

function index(req, res) {
	res.sendFile("./index.html",{root:__dirname});
}

function userRegistration(req, res) {
	res.sendFile("./registration.html",{root:__dirname});
}

function adminLogin(req, res) {
	res.sendFile("./distributor.html",{root:__dirname});
}

function userLogin(req, res) {
	res.sendFile("./user.html",{root:__dirname});
}

function admin(req, res) {
	res.sendFile("Admin/home.html",{root:__dirname});
}

function adminViewUsers(req, res) {
	res.sendFile("Admin/viewUsers.html",{root:__dirname});
}

function adminSendFiles(req, res) {
	res.sendFile("Admin/sendFiles.html",{root:__dirname});
}

function adminViewFiles(req, res) {
	res.sendFile("Admin/viewFiles.html",{root:__dirname});
}

function adminViewLeakFiles(req, res) {
	res.sendFile("Admin/viewLeakFiles.html",{root:__dirname});
}

function user(req, res) {
	res.sendFile("User/home.html",{root:__dirname});
}

function userViewProfile(req, res) {
	res.sendFile("User/profile.html",{root:__dirname});
}

function userViewFiles(req, res) {
	res.sendFile("User/viewFiles.html",{root:__dirname});
}

function userViewKey(req, res) {
	res.sendFile("User/viewKey.html",{root:__dirname});
}

function userSendAgentFiles(req, res) {
	res.sendFile("User/compose.html",{root:__dirname});
}

function userViewAgentFiles(req, res) {
	res.sendFile("User/viewAgentFiles.html",{root:__dirname});
}

function rating(req, res) {
	res.sendFile("User/rating.html",{root:__dirname});
}

app.listen(port, () => console.log(`Server Started on ${port} Port Number`))
