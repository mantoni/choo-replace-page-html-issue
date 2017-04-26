# Choo issue with replacing page

Setup:

- Clone repo
- `npm install`
- `npm start`
- Open <http://localhost:9966>
- Open dev tools console
- Click button

The console shows

```
Hi: false
Hi: true
```

Expected:

> The button is replaced with the heading

Actual:

> Nothing happens

Reported here: <https://github.com/yoshuawuyts/choo/issues/484>

The solution is to always return the same type of node as the root node. An assertsion will be thrown in the next choo release to warn in this case.
