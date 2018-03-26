
	var latlng = new google.maps.LatLng(47.694974,0.25177);
	var defaultZoom = 7
	var myOptions = {		zoom: defaultZoom,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		draggable: false,
		disableDoubleClickZoom: true,
		keyboardShortcuts: false,
		scrollwheel: false
	};
	
	var map = new google.maps.Map(document.getElementById("map_itineraire"),
				myOptions);

	var flightPlanCoordinates = [
	    new google.maps.LatLng(47.26432,-2.156067),
	    new google.maps.LatLng(47.257796,-2.145882),
	    new google.maps.LatLng(47.254534,-2.122536),
	    new google.maps.LatLng(47.267582,-2.10743),
	    new google.maps.LatLng(47.262922,-2.08889),
	    new google.maps.LatLng(47.290408,-2.043686),
	    new google.maps.LatLng(47.263388,-1.940689),
	    new google.maps.LatLng(47.211173,-1.825333),
	    new google.maps.LatLng(47.207441,-1.571274),
	    new google.maps.LatLng(47.232625,-1.476517),
	    new google.maps.LatLng(47.325792,-1.337814),
	    new google.maps.LatLng(47.318345,-1.317215),
	    new google.maps.LatLng(47.355571,-1.170273),
	    new google.maps.LatLng(47.365804,-1.086502),
	    new google.maps.LatLng(47.367664,-0.983505),
	    new google.maps.LatLng(47.380684,-0.93544),
	    new google.maps.LatLng(47.399279,-0.913467),
	    new google.maps.LatLng(47.388123,-0.854416),
	    new google.maps.LatLng(47.354641,-0.729446),
	    new google.maps.LatLng(47.374175,-0.645676),
	    new google.maps.LatLng(47.411362,-0.611343),
	    new google.maps.LatLng(47.427158,-0.538559),
	    new google.maps.LatLng(47.421583,-0.468521),
	    new google.maps.LatLng(47.421583,-0.394363),
	    new google.maps.LatLng(47.331377,-0.231171),
	    new google.maps.LatLng(47.206508,0.098419),
	    new google.maps.LatLng(47.241949,0.260467),
	    new google.maps.LatLng(47.342545,0.466461),
	    new google.maps.LatLng(47.372315,0.694427),
	    new google.maps.LatLng(47.389053,0.83725),
	    new google.maps.LatLng(47.500503,1.282196),
	    new google.maps.LatLng(47.648737,1.441498),
	    new google.maps.LatLng(47.877671,1.842499),
	    new google.maps.LatLng(47.896089,1.949615),
	    new google.maps.LatLng(47.848188,2.029266),
	    new google.maps.LatLng(47.862931,2.108917),
	    new google.maps.LatLng(47.838971,2.180328),
	    new google.maps.LatLng(47.844501,2.229767),
	    new google.maps.LatLng(47.820532,2.238007),
	    new google.maps.LatLng(47.822376,2.306671),
	    new google.maps.LatLng(47.800242,2.301178),
	    new google.maps.LatLng(47.755945,2.449493),
	    new google.maps.LatLng(47.724545,2.496185),
	    new google.maps.LatLng(47.68573,2.476959),
	    new google.maps.LatLng(47.680183,2.619781),
	    new google.maps.LatLng(47.641336,2.718658),
	    new google.maps.LatLng(47.435519,2.924652),
	    new google.maps.LatLng(47.333239,2.861481),
	    new google.maps.LatLng(47.255,2.965851),
	    new google.maps.LatLng(47.090696,3.026276),
	    new google.maps.LatLng(47.055154,3.015289),
	    new google.maps.LatLng(47.036439,3.064728),
	    new google.maps.LatLng(46.965259,3.059235)
	 ];
	 
	var flightPath = new google.maps.Polyline({	    path: flightPlanCoordinates,
	    strokeColor: "#02693E",
	    strokeOpacity: 1.0,
	    strokeWeight: 2
	 });
	flightPath.setMap(map);
	
	var imageLayer = new google.maps.LatLngBounds(
 			 new google.maps.LatLng(46.582457,-4.932861),
 		    new google.maps.LatLng(48.792702,5.394287));
 		    
 	var oldmap = new google.maps.GroundOverlay(
 		    "http://www.loireavelo.fr/var/lav/storage/gmap/SurcoucheLaLoire_FR.png",
 		   imageLayer,
 		   	{				clickable : false,
				map: map
			});
 	oldmap.setMap(map);
 		
	var contourCoord = [
			new google.maps.LatLng(46.99963958196558, 3.1705982109374418),
			new google.maps.LatLng(47.11938843396375, 3.1101734062499418),
			new google.maps.LatLng(47.29850753764092, 3.0442554374999418),
			new google.maps.LatLng(47.365521273567346, 2.9673511406249418),
			new google.maps.LatLng(47.48815896832655, 3.0058032890624418),
			new google.maps.LatLng(47.6623316176775, 2.8245288749999418),
			new google.maps.LatLng(47.79534872881495, 2.5498706718749418),
			new google.maps.LatLng(47.88752188327275, 2.2312671562499418),
			new google.maps.LatLng(47.95378516181321, 1.9181568046874418),
			new google.maps.LatLng(47.88752188327275, 1.6819507499999418),
			new google.maps.LatLng(47.754740653548794, 1.4182788749999418),
			new google.maps.LatLng(47.591991158140026, 1.1930591484374418),
			new google.maps.LatLng(47.514136294668, 0.9403736015624418),
			new google.maps.LatLng(47.46588245766963, 0.6107837578124418),
			new google.maps.LatLng(47.410149859467175, 0.30865973437494176),
			new google.maps.LatLng(47.30223275388568, 0.10541266406244176),
			new google.maps.LatLng(47.398996255502965, -0.16924553906255824),
			new google.maps.LatLng(47.491870801921074, -0.46587639843755824),
			new google.maps.LatLng(47.462168787684334, -0.7020824531250582),
			new google.maps.LatLng(47.480734514136486, -0.9602611640625582),
			new google.maps.LatLng(47.42130110188622, -1.1964672187500582),
			new google.maps.LatLng(47.37296199536574, -1.4601390937500582),
			new google.maps.LatLng(47.291056317714194, -1.5809887031250582),
			new google.maps.LatLng(47.30595770765502, -1.8117015937500582),
			new google.maps.LatLng(47.34691487653102, -1.9874828437500582),
			new google.maps.LatLng(47.339470480641324, -2.2236888984375582),
			new google.maps.LatLng(47.2425977950634, -2.2621410468750582),
			new google.maps.LatLng(47.17169399309331, -2.1083324531250582),
			new google.maps.LatLng(47.179162014556695, -1.9819896796875582),
			new google.maps.LatLng(47.145547646911915, -1.7128246406250582),
			new google.maps.LatLng(47.18289563144138, -1.3942211250000582),
			new google.maps.LatLng(47.25751283478937, -1.1799877265625582),
			new google.maps.LatLng(47.29478205891801, -0.8009594062500582),
			new google.maps.LatLng(47.335747889026315, -0.5537670234375582),
			new google.maps.LatLng(47.2425977950634, -0.31756096875005824),
			new google.maps.LatLng(47.14181140427255, 0.03949469531244176),
			new google.maps.LatLng(47.16795958850945, 0.30865973437494176),
			new google.maps.LatLng(47.26496877959307, 0.5448657890624418),
			new google.maps.LatLng(47.335747889026315, 0.8140308281249418),
			new google.maps.LatLng(47.369241765679156, 1.1655933281249418),
			new google.maps.LatLng(47.44731148418091, 1.4567310234374418),
			new google.maps.LatLng(47.63272611963812, 1.6654712578124418),
			new google.maps.LatLng(47.76581872828896, 1.8961841484374418),
			new google.maps.LatLng(47.77320280094875, 2.0939380546874418),
			new google.maps.LatLng(47.70670840257036, 2.2752124687499418),
			new google.maps.LatLng(47.59939987488915, 2.3960620781249418),
			new google.maps.LatLng(47.514136294668, 2.5828296562499418),
			new google.maps.LatLng(47.432449982837774, 2.7311450859374418),
			new google.maps.LatLng(47.335747889026315, 2.7531177421874418),
			new google.maps.LatLng(47.15301934443198, 2.8465015312499418),
			new google.maps.LatLng(46.99214634828676, 2.9563648124999418),
			new google.maps.LatLng(46.96216290582745, 2.9893237968749418),
			new google.maps.LatLng(46.96216290582745, 3.1596118828124418),
			new google.maps.LatLng(47.048319990047965, 3.1705982109374418)
			];
 	var contour = new google.maps.Polygon({ 	    paths: contourCoord,
        cursor: "url( /extension/loire_a_velo/design/loire_a_velo/images/marqueur/CurseurVelo.png ), url( /extension/loire_a_velo/design/loire_a_velo/images/marqueur/CurseurVelo.cur ), pointer",
 	    strokeColor: "#FF0000",
 	    strokeOpacity: 0,
 	    strokeWeight: 2,
 	    fillColor: "#FF0000",
 	    fillOpacity: 0
 	  });

 	contour.setMap(map);
 	
	ombreMarqueur = new google.maps.MarkerImage('/extension/loire_a_velo/design/loire_a_velo/images/marqueur/marqueur_photo_ombre.png',
												new google.maps.Size(60, 55),
												new google.maps.Point(0,0),
												new google.maps.Point(30, 55));
	var listMarqueurs = Array();
	var listMarqueursShadow = Array();
	var listImages = Array();
						imageMarqueur = new google.maps.MarkerImage("/var/crtc/storage/images/media/loire-a-velo/socle/images/themes/villes/bateau-sur-le-canal-lateral-a-la-loire/3909875-1-fre-FR/bateau-sur-le-canal-lateral-a-la-loire_lav_vignette_list.jpg",
							new google.maps.Size(50, 34),
							new google.maps.Point(0,0),
							new google.maps.Point(25, 50)
							//new google.maps.Point(25, 17)
							);
			
			centreMarkeur = new google.maps.LatLng(47.066309,3.015831);
			optionsMarqueur = {	          position: centreMarkeur,
	          map: map,
	          title: "Bateau sur le canal latéral à la Loire",
	          icon: imageMarqueur,
	          zIndex: 400
	     	};
	     	optionsMarqueurShadow = {	          position: centreMarkeur,
	          map: map,
	          title: "Bateau sur le canal latéral à la Loire",
	          icon: ombreMarqueur,
	          zIndex: 300
	     	};
	     	
	     	var marqueur = new google.maps.Marker(optionsMarqueur);
	     	var marqueurShadow = new google.maps.Marker(optionsMarqueurShadow);
	     	listMarqueurs.push(marqueur);
	     	listImages.push(imageMarqueur);
	     	listMarqueursShadow.push(marqueurShadow);
	     	
	     	google.maps.event.addListener(marqueur, 'click', function() {	    		hs.expand(document.getElementById("46228"),HighSlide.galleryOptions);
	  		});
	  							imageMarqueur = new google.maps.MarkerImage("/var/crtc/storage/images/media/loire-a-velo/socle/images/themes/villes/village-de-sancerre/4192161-1-fre-FR/village-de-sancerre_lav_vignette_list.jpg",
							new google.maps.Size(50, 40),
							new google.maps.Point(0,0),
							new google.maps.Point(25, 50)
							//new google.maps.Point(25, 20)
							);
			
			centreMarkeur = new google.maps.LatLng(47.331,2.839);
			optionsMarqueur = {	          position: centreMarkeur,
	          map: map,
	          title: "Village de Sancerre",
	          icon: imageMarqueur,
	          zIndex: 400
	     	};
	     	optionsMarqueurShadow = {	          position: centreMarkeur,
	          map: map,
	          title: "Village de Sancerre",
	          icon: ombreMarqueur,
	          zIndex: 300
	     	};
	     	
	     	var marqueur = new google.maps.Marker(optionsMarqueur);
	     	var marqueurShadow = new google.maps.Marker(optionsMarqueurShadow);
	     	listMarqueurs.push(marqueur);
	     	listImages.push(imageMarqueur);
	     	listMarqueursShadow.push(marqueurShadow);
	     	
	     	google.maps.event.addListener(marqueur, 'click', function() {	    		hs.expand(document.getElementById("46235"),HighSlide.galleryOptions);
	  		});
	  							imageMarqueur = new google.maps.MarkerImage("/var/crtc/storage/images/media/loire-a-velo/socle/images/themes/nature/une-toue-cabanee-sur-la-loire/4192077-1-fre-FR/une-toue-cabanee-sur-la-loire_lav_vignette_list.jpg",
							new google.maps.Size(50, 33),
							new google.maps.Point(0,0),
							new google.maps.Point(25, 50)
							//new google.maps.Point(25, 16.5)
							);
			
			centreMarkeur = new google.maps.LatLng(47.868,2.1231);
			optionsMarqueur = {	          position: centreMarkeur,
	          map: map,
	          title: "Une toue cabanée sur la Loire",
	          icon: imageMarqueur,
	          zIndex: 400
	     	};
	     	optionsMarqueurShadow = {	          position: centreMarkeur,
	          map: map,
	          title: "Une toue cabanée sur la Loire",
	          icon: ombreMarqueur,
	          zIndex: 300
	     	};
	     	
	     	var marqueur = new google.maps.Marker(optionsMarqueur);
	     	var marqueurShadow = new google.maps.Marker(optionsMarqueurShadow);
	     	listMarqueurs.push(marqueur);
	     	listImages.push(imageMarqueur);
	     	listMarqueursShadow.push(marqueurShadow);
	     	
	     	google.maps.event.addListener(marqueur, 'click', function() {	    		hs.expand(document.getElementById("46234"),HighSlide.galleryOptions);
	  		});
	  							imageMarqueur = new google.maps.MarkerImage("/var/crtc/storage/images/media/loire-a-velo/socle/images/filieres/cyclo/couple-de-cyclotouristes-sur-les-bords-de-loire-au-pied-du-pont-de-muides-sur-loire/3910193-1-fre-FR/couple-de-cyclotouristes-sur-les-bords-de-loire-au-pied-du-pont-de-muides-sur-loire_lav_vignette_list.jpg",
							new google.maps.Size(50, 33),
							new google.maps.Point(0,0),
							new google.maps.Point(25, 50)
							//new google.maps.Point(25, 16.5)
							);
			
			centreMarkeur = new google.maps.LatLng(47.6738,1.5273);
			optionsMarqueur = {	          position: centreMarkeur,
	          map: map,
	          title: "Couple de cyclotouristes sur les bords de Loire, au pied du pont de Muides-sur-Loire",
	          icon: imageMarqueur,
	          zIndex: 400
	     	};
	     	optionsMarqueurShadow = {	          position: centreMarkeur,
	          map: map,
	          title: "Couple de cyclotouristes sur les bords de Loire, au pied du pont de Muides-sur-Loire",
	          icon: ombreMarqueur,
	          zIndex: 300
	     	};
	     	
	     	var marqueur = new google.maps.Marker(optionsMarqueur);
	     	var marqueurShadow = new google.maps.Marker(optionsMarqueurShadow);
	     	listMarqueurs.push(marqueur);
	     	listImages.push(imageMarqueur);
	     	listMarqueursShadow.push(marqueurShadow);
	     	
	     	google.maps.event.addListener(marqueur, 'click', function() {	    		hs.expand(document.getElementById("46230"),HighSlide.galleryOptions);
	  		});
	  							imageMarqueur = new google.maps.MarkerImage("/var/crtc/storage/images/media/loire-a-velo/socle/images/themes/nature/la-loire-vers-chaumont-sur-loire/3706244-1-fre-FR/la-loire-vers-chaumont-sur-loire_lav_vignette_list.jpg",
							new google.maps.Size(50, 38),
							new google.maps.Point(0,0),
							new google.maps.Point(25, 50)
							//new google.maps.Point(25, 19)
							);
			
			centreMarkeur = new google.maps.LatLng(47.491873,1.233044);
			optionsMarqueur = {	          position: centreMarkeur,
	          map: map,
	          title: "La Loire vers Chaumont-sur-Loire",
	          icon: imageMarqueur,
	          zIndex: 400
	     	};
	     	optionsMarqueurShadow = {	          position: centreMarkeur,
	          map: map,
	          title: "La Loire vers Chaumont-sur-Loire",
	          icon: ombreMarqueur,
	          zIndex: 300
	     	};
	     	
	     	var marqueur = new google.maps.Marker(optionsMarqueur);
	     	var marqueurShadow = new google.maps.Marker(optionsMarqueurShadow);
	     	listMarqueurs.push(marqueur);
	     	listImages.push(imageMarqueur);
	     	listMarqueursShadow.push(marqueurShadow);
	     	
	     	google.maps.event.addListener(marqueur, 'click', function() {	    		hs.expand(document.getElementById("46231"),HighSlide.galleryOptions);
	  		});
	  							imageMarqueur = new google.maps.MarkerImage("/var/crtc/storage/images/media/socle/images/themes/monument/chateau-d-azay-le-rideau/3001432-1-fre-FR/chateau-d-azay-le-rideau_lav_vignette_list.jpg",
							new google.maps.Size(50, 38),
							new google.maps.Point(0,0),
							new google.maps.Point(25, 50)
							//new google.maps.Point(25, 19)
							);
			
			centreMarkeur = new google.maps.LatLng(47.259,0.465781);
			optionsMarqueur = {	          position: centreMarkeur,
	          map: map,
	          title: "Château d'Azay-le-Rideau",
	          icon: imageMarqueur,
	          zIndex: 400
	     	};
	     	optionsMarqueurShadow = {	          position: centreMarkeur,
	          map: map,
	          title: "Château d'Azay-le-Rideau",
	          icon: ombreMarqueur,
	          zIndex: 300
	     	};
	     	
	     	var marqueur = new google.maps.Marker(optionsMarqueur);
	     	var marqueurShadow = new google.maps.Marker(optionsMarqueurShadow);
	     	listMarqueurs.push(marqueur);
	     	listImages.push(imageMarqueur);
	     	listMarqueursShadow.push(marqueurShadow);
	     	
	     	google.maps.event.addListener(marqueur, 'click', function() {	    		hs.expand(document.getElementById("46219"),HighSlide.galleryOptions);
	  		});
	  							imageMarqueur = new google.maps.MarkerImage("/var/crtc/storage/images/media/loire-a-velo/images/spr/passage-troglodytique-a-souzay-champigny/4237293-1-fre-FR/passage-troglodytique-a-souzay-champigny_lav_vignette_list.jpg",
							new google.maps.Size(50, 34),
							new google.maps.Point(0,0),
							new google.maps.Point(25, 50)
							//new google.maps.Point(25, 17)
							);
			
			centreMarkeur = new google.maps.LatLng(47.235386,-0.009405);
			optionsMarqueur = {	          position: centreMarkeur,
	          map: map,
	          title: "Passage troglodytique à Souzay-Champigny",
	          icon: imageMarqueur,
	          zIndex: 400
	     	};
	     	optionsMarqueurShadow = {	          position: centreMarkeur,
	          map: map,
	          title: "Passage troglodytique à Souzay-Champigny",
	          icon: ombreMarqueur,
	          zIndex: 300
	     	};
	     	
	     	var marqueur = new google.maps.Marker(optionsMarqueur);
	     	var marqueurShadow = new google.maps.Marker(optionsMarqueurShadow);
	     	listMarqueurs.push(marqueur);
	     	listImages.push(imageMarqueur);
	     	listMarqueursShadow.push(marqueurShadow);
	     	
	     	google.maps.event.addListener(marqueur, 'click', function() {	    		hs.expand(document.getElementById("46218"),HighSlide.galleryOptions);
	  		});
	  							imageMarqueur = new google.maps.MarkerImage("/var/crtc/storage/images/media/loire-a-velo/images/spr/st-florent-le-vieil2/4282639-1-fre-FR/st-florent-le-vieil_lav_vignette_list.jpg",
							new google.maps.Size(50, 75),
							new google.maps.Point(0,0),
							new google.maps.Point(25, 50)
							//new google.maps.Point(25, 37.5)
							);
			
			centreMarkeur = new google.maps.LatLng(47.3644,-1.001516);
			optionsMarqueur = {	          position: centreMarkeur,
	          map: map,
	          title: "St-Florent-le-Vieil",
	          icon: imageMarqueur,
	          zIndex: 400
	     	};
	     	optionsMarqueurShadow = {	          position: centreMarkeur,
	          map: map,
	          title: "St-Florent-le-Vieil",
	          icon: ombreMarqueur,
	          zIndex: 300
	     	};
	     	
	     	var marqueur = new google.maps.Marker(optionsMarqueur);
	     	var marqueurShadow = new google.maps.Marker(optionsMarqueurShadow);
	     	listMarqueurs.push(marqueur);
	     	listImages.push(imageMarqueur);
	     	listMarqueursShadow.push(marqueurShadow);
	     	
	     	google.maps.event.addListener(marqueur, 'click', function() {	    		hs.expand(document.getElementById("46233"),HighSlide.galleryOptions);
	  		});
	  							imageMarqueur = new google.maps.MarkerImage("/var/crtc/storage/images/media/loire-a-velo/images/spr/mauves-sur-loire/4282576-1-fre-FR/mauves-sur-loire_lav_vignette_list.jpg",
							new google.maps.Size(50, 33),
							new google.maps.Point(0,0),
							new google.maps.Point(25, 50)
							//new google.maps.Point(25, 16.5)
							);
			
			centreMarkeur = new google.maps.LatLng(47.293804,-1.384199);
			optionsMarqueur = {	          position: centreMarkeur,
	          map: map,
	          title: "Mauves-sur-Loire",
	          icon: imageMarqueur,
	          zIndex: 400
	     	};
	     	optionsMarqueurShadow = {	          position: centreMarkeur,
	          map: map,
	          title: "Mauves-sur-Loire",
	          icon: ombreMarqueur,
	          zIndex: 300
	     	};
	     	
	     	var marqueur = new google.maps.Marker(optionsMarqueur);
	     	var marqueurShadow = new google.maps.Marker(optionsMarqueurShadow);
	     	listMarqueurs.push(marqueur);
	     	listImages.push(imageMarqueur);
	     	listMarqueursShadow.push(marqueurShadow);
	     	
	     	google.maps.event.addListener(marqueur, 'click', function() {	    		hs.expand(document.getElementById("46232"),HighSlide.galleryOptions);
	  		});
	  							imageMarqueur = new google.maps.MarkerImage("/var/crtc/storage/images/media/loire-a-velo/images/spr/corsept/4237468-1-fre-FR/corsept_lav_vignette_list.jpg",
							new google.maps.Size(50, 33),
							new google.maps.Point(0,0),
							new google.maps.Point(25, 50)
							//new google.maps.Point(25, 16.5)
							);
			
			centreMarkeur = new google.maps.LatLng(47.281543,-2.063643);
			optionsMarqueur = {	          position: centreMarkeur,
	          map: map,
	          title: "Corsept",
	          icon: imageMarqueur,
	          zIndex: 400
	     	};
	     	optionsMarqueurShadow = {	          position: centreMarkeur,
	          map: map,
	          title: "Corsept",
	          icon: ombreMarqueur,
	          zIndex: 300
	     	};
	     	
	     	var marqueur = new google.maps.Marker(optionsMarqueur);
	     	var marqueurShadow = new google.maps.Marker(optionsMarqueurShadow);
	     	listMarqueurs.push(marqueur);
	     	listImages.push(imageMarqueur);
	     	listMarqueursShadow.push(marqueurShadow);
	     	
	     	google.maps.event.addListener(marqueur, 'click', function() {	    		hs.expand(document.getElementById("46229"),HighSlide.galleryOptions);
	  		});
	  			
	hidePictures();
	
	
	google.maps.event.addListener(contour, 'click', function(event) {    	$$('body').setStyle("cursor","wait");
    	$$('#map_itineraire').setStyle("cursor","wait");
    	var latlong = event.latLng;
    	window.location = "/carte-loire-velo/itineraire-velo-complet" + "?lat=" + latlong.lat() + "&lng=" + latlong.lng();
  	});

	var cptIcon = 0;

	showPicture();
	
	
	
	function showPicture() {		hidePictures();
		listMarqueurs[cptIcon].setIcon(listImages[cptIcon]);
		listMarqueurs[cptIcon].setZIndex(400);
		listMarqueursShadow[cptIcon].setIcon(ombreMarqueur);
		listMarqueursShadow[cptIcon].setZIndex(300);
		if (cptIcon >= 10-1)
		{			cptIcon = 0;
		}		else
		{			cptIcon++;
		}		setTimeout("showPicture()", 2000);
	}	
	function hidePictures() {		for (i=0;i<listMarqueurs.length;i++)
		{			listMarqueurs[i].setIcon();
			listMarqueurs[i].setZIndex(100);
			listMarqueursShadow[i].setIcon();
			listMarqueursShadow[i].setZIndex(0);
		}	}
