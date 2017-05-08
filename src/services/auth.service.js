const apiUrl = '/api/auth';
let loggedIn = false;
const cookieName = 'loginedusername';
const cookieUserType = 1;

module.exports = {
  isLoggedIn() {
    return (getCookie(cookieName) && getCookie(cookieName) !== '' && getCookie(cookieUserType) && getCookie(cookieUserType) !== '');
  },
  getUser() {
    const username = getCookie(cookieName);
    const type = getCookie(cookieUserType);
    if (!username || !type) {
      this.props.router.replace('/')
    }
    return {
              username: username,
              type: type
      }
  },
  login(username, pass, cb) {
  pretendRequest(username, pass, (res) => {
    if (res.authenticated) {
    if (cb) cb(true)
    this.onChange(true)
    } else {
    if (cb) cb(false)
    this.onChange(false)
    }
  })
  },

  logout(cb) {
  if (cb) cb()
  this.onChange(false)
  },

  onChange() {}
}

function pretendRequest(username, pass, cb) {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: pass
      })
      })
      .then((response) => response.json())
      .then((user) => {
         setTimeout(() => {
          if (user !== null && user.username === username) {
              createCookie(cookieName, user.username, 1);
              createCookie(cookieUserType, user.type, 1);
              cb({
              authenticated: true,
              token: Math.random().toString(36).substring(7),
              username: username,
              type: user.type,
              id: user._id
              });
          } else {
            cb({ authenticated: false });
          }
          }, 0)
      })
      .catch((error) => {
        console.error(error);
        cb({ authenticated: false })
      });
}

function createCookie(name, value, hour) {
    var date, expires;
    if (hour) {
        date = new Date();
        date.setTime(date.getTime()+(hour*60*60*1000));
        expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}