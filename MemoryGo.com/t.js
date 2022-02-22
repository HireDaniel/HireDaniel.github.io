
// if(document.URL.includes("canvas.html")){

var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();
    //code not written by me, just used tinit from three.js snippets
    function init() {
        // create a scene, that will hold all our elements such as objects, cameras and lights.
        let scene = new THREE.Scene();
        // const gui = new dat.GUI();

        //get the change button 
        const btn_change_memory = document.querySelector("#new-btn-memory");
        btn_change_memory.addEventListener("click", function(){
            create_new(scene);
        })

    //adding to the scene
        //add floor
        const floor = generateFloor(20, 20);
        floor.translateY(-4);
        floor.rotateX(Math.PI/2);
        scene.add(floor);


        //add three walls, the objects "spawn" at 0 0 0 
        //or are relative to the object they are pinned to
        const leftWall = generateBox(1, 5, 5);
        leftWall.translateX(-5);
        const rightWall = generateBox(1, 5, 5);
        rightWall.translateX(5);
        const backWall = generateBox(10, 6, 1);
        backWall.translateZ(-4);
        backWall.name = "box";
        //pin the walls to the floor
        floor.add(leftWall, rightWall, backWall);
        //pin a function to an object
        floor.traverse(function(child){
            // child.position.x += 2;
        })

        // scene.add(leftWall, rightWall, backWall);

        const pointLight = generatePointLight(0x202020, 20);
        pointLight.position.set(10, 35, 3);
        scene.add(pointLight);
        // gui.add(pointLight, "color", 0x000000, 0xffffff);

        const ambient_light = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambient_light);
        
        //add orbit controls
        // const controls = new OrbitControls(camera, renderer.domElement);


        // create a camera, which defines where we're looking at
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        // tell the camera where to look
        camera.position.set(0, 0, 20);
        // create a render and set the size
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
        let renderer = new THREE.WebGLRenderer();
        renderer.shadowMap.enabled = true;
        renderer.setSize(sizes.width, sizes.height);
        renderer.setClearColor('rgb(0,60,200)');
        // add the output of the render function to the HTML
        document.querySelector("main").appendChild(renderer.domElement);
        // let controls = new THREE.OrbitControls(camera, renderer.domElement);
    
        // var clock = new THREE.Clock();
        // function for re-rendering/animating the scene
        function tick() {
            requestAnimationFrame(tick);
            update(renderer, scene, camera);
            return scene;
            // renderer.render(scene, camera);
        }
        let scenes = tick();
        console.log(scenes);
    }
    init();
 

    //render constantly 
    function update(renderer, scene, camera){
        renderer.render(scene, camera);

        //make changes to the scene
        // scene.children[0].rotation.z += 0.00002;
        var step = 50 * clock.getDelta();
        var box = scene.getObjectByName("box");
        if(keyboard.pressed("A")){
            box.translateX(-step);
        }
        if(keyboard.pressed("D")){
            box.translateX(step);
        }

        requestAnimationFrame(function() {
            update(renderer, scene, camera);
        });
    }

    //what follows is my code
    //create an object
    function generateBox(x, y, z) {
        let cube = new THREE.BoxGeometry(x, y, z);
        var mat = new THREE.MeshPhongMaterial({
            color: "rgb(100, 100, 100)"
        });

        //mesh is geometry + material
        const mesh = new THREE.Mesh(cube, mat);
        mesh.castShadow = true;
        return mesh;
    }

    //create the floor
    function generateFloor(x, z) {
        const floor = new THREE.PlaneGeometry(x, z);
        const mat = new THREE.MeshPhongMaterial({
            color: "rgb(239, 29, 29)",
            side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(floor, mat);
        mesh.reveiveShadow = true;
        return mesh;
    }

    //light source
    function generatePointLight(color, intensity){
        const light = new THREE.PointLight(color, intensity);
        light.castShadow = true;
        return light;
    }

    //create random room
    function create_new(scene) {
        const wall_height = 10;
        const wall_thickness = 1;
        const left_right_wall_width = Math.round(Math.random() * 40); 
        const front_back_wall_width = Math.round(Math.random() * 40);


        //calculate the correct position of every wall, based on the width
        //we start by creating rooms that are always squares
        const distance_left_right = Math.round(front_back_wall_width - (2 * wall_thickness));
        const distance_front_back = Math.round(left_right_wall_width - (2 * wall_thickness));

        //
        let left_wall = new THREE.BoxGeometry(left_right_wall_width, wall_height, wall_thickness);
        let right_wall = new THREE.BoxGeometry(left_right_wall_width, wall_height, wall_thickness);
        let back_wall = new THREE.BoxGeometry(front_back_wall_width, wall_height, wall_thickness);
        let front_wall = new THREE.BoxGeometry(front_back_wall_width, wall_height, wall_thickness);
        let color = new THREE.MeshStandardMaterial({
            color: random_color()
        });
        left_wall = new THREE.Mesh(left_wall, random_color());
        left_wall.position.x = -distance_left_right;
        
        right_wall = new THREE.Mesh(right_wall, random_color());
        right_wall.position.x = distance_left_right;

        back_wall = new THREE.Mesh(back_wall, random_color());
        back_wall.position.x = -distance_front_back;

        front_wall = new THREE.Mesh(front_wall, random_color())
        front_wall.position.x = distance_front_back;

        scene.add(left_wall, right_wall, back_wall, front_wall);
        

        function random_color(){
        //random colors
        const red = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        const full_color = `rgb(${red}, ${green}, ${blue})`;
        return full_color;
        }

    }
// }