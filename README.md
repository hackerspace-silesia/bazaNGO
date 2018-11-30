# bazaNGO

> [Centrum Organizacji Pozarządowych w Katowicach](http://www.cop.katowice.pl/)

Baza organizacji pozarządowych

### [HackSilesia #3](http://hacksilesia.pl/)

* [Demo](https://sin.github.io/bazaNGO)
* [API](https://bazango.herokuapp.com/)
* [Admin Panel](https://bazango.herokuapp.com/admin/)
* [Backend Repo](https://github.com/rafal-jaworski/bazaNGObackend)

### How to

```
$ git clone https://github.com/sin/bazaNGO.git
```

###### Running development server:

```
$ yarn dev
```

Then go to [localhost:8080](http://localhost:8080).

###### Linting code with eslint:

```
$ yarn lint
```

###### Building for production:

```
$ yarn build:prod
```

###### Deploying to gh-pages:

```
$ yarn deploy
```

###### Configuration:

The API URL is currently hardcoded in [app/api.js](https://github.com/sin/bazaNGO/blob/master/app/api.js).
