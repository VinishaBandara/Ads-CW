var data = [
	{
		"propertyStatus":"Rent",
		"propertyType":"Apartment",
		"locations":"Colombo 5",
		"bedRooms":"3",
		"bathrooms":"2",
		"price":"25000",
		"image":"/Images/Apartment (1).jpg",
	},
	{
		"propertyStatus":"Sell",
		"propertyType":"House",
		"locations":"Colombo 5",
		"bedRooms":"2",
		"bathrooms":"2",
		"price":"15000",
		"image":"/Images/Apartment (2).jpg",
	},

];

var PropertyStatus1 = "",
    PropertyType1 = "",
	Locations1 = "",
	BedRooms1 = "",
	Bathrooms1 = "",
	Price1 = "",
	Property = "";



for (var i = 0; i < data.length; i++) {
	var PropertyStatus = data[i].propertyStatus,
	    PropertyType = data[i].propertyType,
		Locations = data[i].locations,
		BedRooms = data[i].bedRooms,
		Bathrooms =data[i].bathrooms,
		Price = data[i].price,
		rawPrice = Price.replace("$",""),
		rawPrice = parseInt(rawPrice.replace(",","")),
		image = data[i].image;

	
	//create product cards
	Property += "<section class='featured' id='featured'><div class='box-container'><div class='box' data-propertyStatus='" + PropertyStatus + "'data-propertyType='" + PropertyType + "'data-location='" + Locations +"'data-bedRooms='" + BedRooms + " 'data-bathrooms='" + Bathrooms + "'data-price='" +rawPrice+ "'> <div class='image-container'><img src= ' "+ image +" '> <div class='info'><h3>3 days ago</h3> <h3>for rent</h3> </div> <div class='icons'> <a href='#' class='fas fa-film'><h3>1</h3></a><a href='#' class='fas fa-camera'> <h3>4</h3> </a> </div> </div> <div class='Feature-content'><div class='price'><h3> " +rawPrice+ " </h3> <a href='#' class='fas fa-heart'></a><a href='#' class='fas fa-envelope'> </a> <a href='#' class='fas fa-phone'> </a> </div> <div class='location'> <h3>Corsair Residencies Kassapa Road</h3> <p>Kassapa Road, Jawatta, Colombo 5</p> </div> <div class='details'> <h3> <i class='fas fa-expand'></i> 3500 sqft </h3> <h3> <i class='fas fa-bed'></i> "+ BedRooms +" </h3> <h3> <i class='fas fa-bath'></i> " + Bathrooms + " </h3> </div> <div class='buttons'> <a href='#' class='btn'> view details </a></div></div></div> </div> </section> ";


	//create dropdown of PropertyStatus 
	if (PropertyStatus1.indexOf("<option value='" + PropertyStatus + "'>" + PropertyStatus + "</option>") == -1) {
		PropertyStatus1 += "<option value='" + PropertyStatus + "'>" + PropertyStatus + "</option>";
	}

	//create dropdown of PropertyType
	if (PropertyType1.indexOf("<option value='" + PropertyType +"'>" + PropertyType + "</option>") == -1) {
		PropertyType1 += "<option value='" + PropertyType + "'>" + PropertyType + "</option>";
	}

	//create dropdown of Locations
	if (Locations1.indexOf("<option value='" + Locations + "'>" + Locations + "</option>") == -1) {
		Locations1 += "<option value='" + Locations + "'>" + Locations + "</option>";
	}

	//create dropdown of BedRooms
	if (BedRooms1.indexOf("<option value='" + BedRooms + "'>" + BedRooms + "</option>") == -1) {
		BedRooms1 += "<option value='" + BedRooms + "'>" + BedRooms + "</option>";
	}

	//create dropdown of Bathrooms
	if (Bathrooms1.indexOf("<option value='" + Bathrooms + "'>" + Bathrooms + "</option>") == -1) {
		Bathrooms1 += "<option value='" + Bathrooms + "'>" + Bathrooms + "</option>";
	}

	//create dropdown of Price
	if (Price1.indexOf("<option value='" + Price + "'>" + Price + "</option>") == -1) {
		Price1 += "<option value='" + Price + "'>" + Price + "</option>";
	}
}

$("#feature").html(Property);
$("#filter-PropertyStatus").append(PropertyStatus1);
$("#filter-PropertyType").append(PropertyType1);
$("#filter-Locations").append(Locations1);
$("#filter-BedRooms").append(BedRooms1);
$("#filter-Bathrooms").append(Bathrooms1);
$("#filter-Price").append(Price1);

var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
	if (filters == "") {
		$("#featured").show();
	} else {
		$("#featured").hide();
		$("#featured").hide().filter(filters).show();
	}
});