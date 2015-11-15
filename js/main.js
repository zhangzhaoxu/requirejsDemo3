requirejs.config({
    baseUrl:'js/lib',
    paths:{
        'add':'../components/addnoAMD',
        'sub':'../components/subnoAMD',
        'math':'../components/mathnoAMD'
    },
    shim:{
        'add':{
            deps:[],
            exports:'a'
        },
        'sub':{
            deps:[],
            exports:'b'
        },
        'math':{
            deps:['add','sub'],
            exports:'c'
        }
    }
});
requirejs(['math'], function (math) {
    alert(math.add(1,2));
});