var data = { 

	"properties": [
	{
		// 1
	"PropertyStatus":"For Rent",
	"PropertyType":"Apartments",
	"Locations":"Colombo 5",
	"title":"Corsair Residencies Kassapa Road - Colombo 5",
	"price":"$25,000.00",
	"img":"/Images/Apartment(1).jpg",
	"paragrap":"Kassapa Road, Jawatta, Colombo 5",
	"beds":"3",
	"baths":"2",
	"sqfeet":"600 Sq Ft",
	"pricerange":"$10,000.00 - $30,000.00",
	},
	{
		// 2
	"PropertyStatus":"For Rent",
	"PropertyType":"Apartments",
	"Locations":"Colombo 5",
	"title":"Corsair Residencies Bauddhaloka Mawatha",
	"price":"$55,000.00",
	"img":"/Images/Apartment(4).jpg",
	"paragrap":"Bauddhaloka Mawatha, Colombo 5",
	"beds":"3",
	"baths": "2",
	"sqfeet":"600 Sq Ft",
	"pricerange":"$10,000.00 - $30,000.00",
	
	},
	{
		// 3
	"PropertyStatus":"For Rent",
	"PropertyType":"Apartments",
	"Locations":"Colombo 8",
	"title":"Corsair Residencies Castle Street - Colombo 08",
	"price":"$65,000.00",
	"img":"/Images/Apartment(3).jpg",
	"paragrap":"Castle Street,Colombo 08",
	"beds":"5",
	"baths": "3",
	"sqfeet":"600 Sq Ft",
	"pricerange":"$40,000.00 - $60,000.00",
		
	},
	
	{
		// 4
	"PropertyStatus":"For Sale",
	"PropertyType":"Apartments",
	"Locations":"Colombo 7",
	"title":"Corsair Residencies Barnes Place - Colombo 07",
	"price":"$75,000.00",
	"img":"/Images/Apartment(4).jpg",
	"paragrap":"Barnes Place, Colombo 07",
	"beds":"2",
	"baths":"1",
	"sqfeet":"600 Sq Ft",
	"pricerange":"$40,000.00 - $60,000.00",
	
	},
	{
		// 5
	"PropertyStatus":"For Rent",
	"PropertyType":"Apartments",
	"Locations":"Colombo 7",
	"title":"Corsair Residencies Malabe - Battaramulla",
	"price":"$85,000.00",
	"img":"/Images/Apartment(4).jpg",
	"paragrap":"Malabe, Battaramulla",
	"beds":"4",
	"baths":"1",
	"sqfeet":"600 Sq Ft",
	"pricerange":"$70,000.00 - $100,000.00",
	},
	]}
$(function() {
	$( "#filter" ).on("click", function(){
		
		var propStat = $("#Property-Status").val();
	    var propType =  $("#Property-Type1").val();
        var location =  $("#Locations").val();
		var bedrooms =  $("#Bedrooms").val();
		var bathrooms = $("#Bathrooms").val();
		// var priceranger= $ ("#Price").val();
		
		
		var output="<ul>";
		   for (var i in data.properties) {
			   if (( propStat == data.properties[i].PropertyStatus) || (propStat=="All"))
			   if (( propType == data.properties[i].PropertyType) || (propType=="All"))
			   if (( location == data.properties[i].Locations))
			   if (( bedrooms == data.properties[i].beds))
			   if (( bathrooms == data.properties[i].baths))
			//    if (( priceranger == data.properties[i].pricerange))
			   			{
							{
								{
									{
										{
											
								
									
										
				   			output+="<section class='featured'id='Placeholder'><div class='box-container'> <div class='box'> <div class='image-container'> <img src="+data.properties[i].img+"> <div class='info'> <h3>3 days ago</h3> <h3>"+data.properties[i].PropertyStatus+"</h3> </div><div class='icons'> <a href='#' class='fas fa-film'><h3>1</h3></a> <a href='#' class='fas fa-camera'><h3>4</h3></a> </div></div><div class='Feature-content'> <div class='price'> <h3>"+data.properties[i].price+"</h3> <a href='#' class='fas fa-heart'></a> <a href='#' class='fas fa-envelope'></a> <a href='#' class='fas fa-phone'></a> </div><div class='location'> <h3>"+data.properties[i].title+"</h3> <p>"+data.properties[i].paragrap+"</p></div><div class='details'> <h3> <i class='fas fa-expand'></i> 3500 sqft </h3> <h3> <i class='fas fa-bed'></i>" +data.properties[i].beds+ " beds </h3> <h3> <i class='fas fa-bath'></i>" +data.properties[i].baths+" baths </h3> </div><div class='buttons'> <a href='#' class='btn'>view details</a> </div></div></div></div></section>";
						}  } } } } } 
				output+="</ul>";
				document.getElementById( "Placeholder" ).innerHTML = output;
		   });
	});