
$( document ).ready(function() {
 
 //make a div and append it to the page.s
 $(document.body).append('<div id="aRenderer"></div>');
 aRenderingDiv = $('#aRenderer');
 aRenderingDiv.width(1000);
 aRenderingDiv.height(500);

 //create a demRenderer here, passing it an image and a div to place the renderer in on the page.
 var demRenderer = new DemRenderer('nlinsample.jpg', $('#aRenderer'));
 demRenderer.render();
 
});

// make acube
//var geometry = new THREE.CubeGeometry(1,1,1);
//var normTexture = THREE.ImageUtils.loadTexture('nlinsample.jpg');
//var material = new THREE.MeshPhongMaterial( { color: 0x00ff00, ambient: 0x440000, specular: 0xff0000, normalMap: normTexture} );
//var cube = new THREE.Mesh( geometry, material );
//cube.position.z = 4;
//scene.add( cube );



