import sendFilesModel from '../Common/sendFilesModel';
import userDetailsModel from '../Common/userDetailsModel';
import agentFilesModel from '../Common/agentFilesModel';
import adminLoginModel from './adminLoginModel';
import {sendEmail} from '../Common/email';

export const adminLogin = (req, res) =>{
  adminLoginModel.findOne( {"username":req.query.username, "password":req.query.password}, (err,result)=> {
    res.send(result);
  })
}

export const viewUsers = (req, res) => {
  userDetailsModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}

export const sendFiles = (req, res) => {
  sendFilesModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'File Recived';
      const body = `You Recived a File from Admin<br><br>Subject: ${req.body.subject}<br>Secret Key: ${req.body.key}<br>Please Login and Download File Using this Secret Key<br>Thank You.`;
      sendEmail(req.body.emailid, subject, body);
      res.send(result);
    }
  })
}

export const viewFiles = (req, res) =>
  sendAllFiles(res);

const sendAllFiles = (res) => {
  sendFilesModel.find({},'username subject date key status', (err, files) => {
    if (!err) {
      res.send(files);
    } else {
      res.send(err);
    }
  })
}

export const downloadFiles = (req, res) => {
  sendFilesModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const deleteFiles = (req, res) => {
  sendFilesModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      sendAllFiles(res);
    }
  });
}

export const viewLeakFiles = (req, res) => {
  agentFilesModel.find({},'username subject date key from', (err, leakFiles) => {
    if (!err) {
      res.send(leakFiles);
    } else {
      res.send(err);
    }
  })
}

export const downloadLeakFiles = (req, res) => {
  agentFilesModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
