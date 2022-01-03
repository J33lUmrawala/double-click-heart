@import url('https://fonts.googleapis.com/css?family=Oswald');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Oswald', sans-serif;
  text-align: center;
  overflow: hidden;
  margin: 0;
}

h3 {
  margin-bottom: 0;
  text-align: center;
}

small {
  display: block;
  margin-bottom: 20px;
  text-align: center;
}

.fa-heart {
  color: red;
}

.loveMe {
  height: 440px;
  width: 300px;
  background: url('https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
    no-repeat center center/cover;
  margin: auto;
  cursor: pointer;
  max-width: 100%;
  position: relative;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

.loveMe .fa-heart {
  position: absolute;
  animation: grow 0.6s linear;
  transform: translate(-50%, -50%) scale(0);
}

@keyframes grow {
  to {
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
  }
}