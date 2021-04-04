const mongoose = require('mongoose')
require('dotenv').config()
mongoose.Promise = global.Promise

app.use(
  session({
    secret: 'secret-word',
    key: 'session-key',
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: null,
    },
    saveUninitialized: false,
    resave: false,
  }),
)
require('./config/config-passport')
app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})