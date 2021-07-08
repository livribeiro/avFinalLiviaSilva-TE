var NOTIFICATIONS = []

const creatNotification
 = (req, res) => {
    var body = req.body;

    var data = {
        'id': Math.random().toString(36).substr(2, 9),
        'content': body.content,
        'subject': body.subject,
        'name': body.name,
        'status': body.status,
    }
    NOTIFICATIONS.push(data)
    res.json({ message: "notificação criada", notification: data })

}

const listNotification = (req, res) => {
  var subjectRes = req.query.subject
  var statusRes = req.query.status
  var nameRes = req.query.name
  var data = [];

  if (subjectRes != null) {
      for (let i = 0; i < NOTIFICATIONS.length; i++) {
          if (subjectRes == NOTIFICATIONS[i].subject) {
              data.push(NOTIFICATIONS[i])
          }
      }
      res.json({ result: data })
  } else if (nameRes != null) {
      for (let i = 0; i < NOTIFICATIONS.length; i++) {
          if (nameRes == NOTIFICATIONS[i].name) {
              data.push(NOTIFICATIONS[i])
          }
      }
      res.json({ result: data })

  } else if (statusRes != null) {
      for (let i = 0; i < NOTIFICATIONS.length; i++) {
          if (statusRes == NOTIFICATIONS[i].status) {
              data.push(NOTIFICATIONS[i])
          }
      }
      res.json({ result: data })
  } else {
      res.json()

  }
}

const removeNotification = (req, res) => {
    var id = `${req.params.id}`;
    let valid = false;
    for (let i = 0; i < NOTIFICATIONS.length; i++) {
        if (id == NOTIFICATIONS[i].id) {
            NOTIFICATIONS.splice(i, 1);
            valid = true;
            res.json({message: "notificação apagada com sucesso"})
        }
    }
}


module.exports = {
  creatNotification,
  listNotification,
  removeNotification
  }