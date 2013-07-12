//random comment. To get round CORS for local development, you can do a few things
// in ruby command line: ruby -r webrick -e "s = WEBrick::HTTPServer.new(:Port => 8000, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start"
// in python cmnd line:
// # Python 2.x
// python -m SimpleHTTPServer
// # Python 3.x
// python -m http.server

function DemRenderer(imagePath, aDiv){
	var self = this;

	//need to get dimensions of div
	this.containerWidth = $(aDiv).width();
	this.containerHeight = $(aDiv).height();

	//set the scene and camera
	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera( 90, this.containerWidth / this.containerHeight, 0.1, 1000 );

	//default camera rotation
	this.camera.rotation.x = 45 * (Math.PI / 180);
	this.camera.rotation.y = 15 * (Math.PI / 180);

	//default camera position
	this.camera.position.z = 5;
	this.camera.position.y = -5

	// make a renderer
	this.renderer = new THREE.WebGLRenderer();
	this.renderer.setSize( this.containerWidth, this.containerHeight );

	//make a plane and add it to the scene
	this.plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshPhongMaterial({ color: 0x00ff00, ambient: 0x440000, specular: 0xff0000, normalMap: THREE.ImageUtils.loadTexture(imagePath)}));
	this.plane.overdraw = true;
	this.scene.add(this.plane);
	
	//some default lighting
	this.light = new THREE.AmbientLight( 0x404040 ); // soft white light
	this.scene.add( this.light );

	//some default spotlighting
	this.spotLight = new THREE.SpotLight( 0xaaaaaa );
				this.spotLight.position.set( 100, 1000, 100 );

				this.spotLight.castShadow = true;

				this.spotLight.shadowMapWidth = 1024;
				this.spotLight.shadowMapHeight = 1024;

				this.spotLight.shadowCameraNear = 500;
				this.spotLight.shadowCameraFar = 4000;
				this.spotLight.shadowCameraFov = 30;
				this.scene.add( this.spotLight );

	//probably not correct to do it this way. append to aDiv?
	aDiv.append( this.renderer.domElement );

	this.render = function(){
		

		//update based on mouse coordinates.

		//render the scene
		this.renderer.render(this.scene, this.camera);

		requestAnimationFrame(function() {
			self.render();
		});
	};
}