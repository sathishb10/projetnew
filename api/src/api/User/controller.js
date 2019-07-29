import sendFilesModel from  '../Common/sendFilesModel';
import userDetailsModel from  '../Common/userDetailsModel';
import agentFilesModel from  '../Common/agentFilesModel';
import userRatingModel from '../Common/ratingmodel';
import {sendEmail} from  '../Common/email';

export const userRegistration = (req, res) => {
  userDetailsModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are successfully registered in Data Leakage Detection<br><br>UserName: ${req.body.username}<br>Password: ${req.body.password}<br>Thank You.`;
      sendEmail(req.body.emailid, subject, body);
      res.send(result);
    }
  })
}

export const rating = (req, res) => {

 

  userRatingModel.create(req.body, (err, result) => {
    if (err) {


      res.send(err);
    } else {
          res.send(result);
          console.log(result);
    }
  })
}



export const userLogin = (req, res) => {
	userDetailsModel.findOne( {"username":req.query.username, "password":req.query.password}, (err, result)=> {
    res.send(result);
	})
}

export const viewProfile = (req, res) => {
  userDetailsModel.find( {"username":req.query.username}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const updateProfile = (req, res) => {
  userDetailsModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const viewFiles = (req, res) => {
  sendFilesModel.find( {"username":req.query.username}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
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

export const viewKey = (req, res) => {
  sendFilesModel.find( {"username":req.query.username}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const getUsers = (req, res) => {
  userDetailsModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else { 
      res.send(err);
    }
  })
}

export const sendAgentFiles = (req, res) => {
  agentFilesModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'File Recived';
      const body = `You Recived a File from ${req.body.from}<br><br>Subject: ${req.body.subject}<br>Secret Key: ${req.body.key}<br>Please Login and Download File Using this Secret Key<br>Thank You.`;
      sendEmail(req.body.emailid, subject, body);
      res.send(result);
    }
  })
}

export const viewAgentFiles = (req, res) => {
  agentFilesModel.find( {$or:[{"username":req.query.username}, {"from":req.query.from}]}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const downloadAgentFiles = (req, res) => {
  agentFilesModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
