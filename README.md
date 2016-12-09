# react-test-app
Test React boilerplate app from publicsonar

##Instalation
```bash
git clone https://github.com/ifElser/react-test-app.git
cd react-test-app
npm i
```

##current state
    Webpack refactored to client side only rendering.
    Client routing ready.
    Basics components hierarchy ready
    Basic Baobab sore connected and shared between components through conextTypes
    Posts page complete
    Styles refactored
    Webpack config fixes added
    About data sources - it is no ways to implement normal partial data loading, because queriing possibilities very limited, such as I can not query items count or range of items, implement somthing like findOne, etc.
    But I found some way how to create dynamical partial loading - it can be implemented using streaming JSON parser like clarinet or oboe, but implementation spent a lot of time which I do`nt have for complete task.
    So, in result in some cases app load all huge JSON, like an all posts data with all users, but I hope it is not critical looking on testing purpose of this product.
    

##Isomorphic version
Isomorphic version currently experimental and not finished yet
This code was moved into *isomorphic-dev* btanch, so, for access it use next:
```bash
git checkout isomorphic-dev
```

