app.controller("controller_blog",function($scope, $routeParams, $http, $timeout){

// Mobile menu
$scope.classmenu="invisible_menu";
$scope.classbar1="hamburger_top_bar";
$scope.classbar2="hamburger_middle1_bar";
$scope.classbar3="hamburger_middle2_bar";
$scope.classbar4="hamburger_bottom_bar";

$scope.hidemenu = function(){
	if($scope.classmenu ==="invisible_menu")
		$scope.classmenu = "shown_menu"
	if($scope.classmenu ==="hidden_menu")
		$scope.classmenu = "shown_menu"
	else if($scope.classmenu === "shown_menu")
		$scope.classmenu = "hidden_menu"
};

$scope.crosshamburger = function(){
	if($scope.classbar1 ==="hamburger_top_bar")
		$scope.classbar1 = "hamburger_top_bar_clicked"
	else if($scope.classbar1 === "hamburger_top_bar_clicked")
		$scope.classbar1= "hamburger_top_bar"
	if($scope.classbar2 ==="hamburger_middle1_bar")
		$scope.classbar2 = "hamburger_middle1_bar_clicked"
	else if($scope.classbar2 === "hamburger_middle1_bar_clicked")
		$scope.classbar2 = "hamburger_middle1_bar"
	if($scope.classbar3 ==="hamburger_middle2_bar")
		$scope.classbar3 = "hamburger_middle2_bar_clicked"
	else if($scope.classbar3 === "hamburger_middle2_bar_clicked")
		$scope.classbar3 = "hamburger_middle2_bar"
	if($scope.classbar4 ==="hamburger_bottom_bar")
		$scope.classbar4 = "hamburger_bottom_bar_clicked"
	else if($scope.classbar4 === "hamburger_bottom_bar_clicked")
		$scope.classbar4 = "hamburger_bottom_bar"
};

$scope.painting_to_display_b =[{"photo":"photo1", "path":"../photos/williambuchina/oeuvres/WilliamBuchina-8-small.jpg"}];

$scope.buchina_paintings = [
	{"photo":"photo1", "path":"../photos/williambuchina/oeuvres/WilliamBuchina-8-small.jpg"},
	{"photo":"photo2", "path":"../photos/williambuchina/oeuvres/WilliamBuchina-7-small.jpg"},
	{"photo":"photo3", "path":"../photos/williambuchina/oeuvres/WilliamBuchina-6-small.jpg"},
	{"photo":"photo4", "path":"../photos/williambuchina/Installation/Buchina_TTSAHL_Install07.jpg"},
	{"photo":"photo5", "path":"../photos/williambuchina/Installation/Buchina_TTSAHL_Install09.jpg"},
	{"photo":"photo6", "path":"../photos/williambuchina/Installation/Buchina_TTSAHL_Install01.jpg"}
];

$scope.painting_to_display_c =[{"photo":"photo1", "path":"../photos/colinkilian/oeuvres/col-oeuvres1.png"}];

$scope.colin_paintings = [
	{"photo":"photo1", "path":"../photos/colinkilian/oeuvres/col-oeuvres1.png"},
	{"photo":"photo2", "path":"../photos/colinkilian/oeuvres/col-oeuvres2.png"},
	{"photo":"photo3", "path":"../photos/colinkilian/oeuvres/col-oeuvres3.png"},
	{"photo":"photo4", "path":"../photos/colinkilian/Installation/Colin_Kilian_Robert_Kuo_Install03.jpg"},
	{"photo":"photo5", "path":"../photos/colinkilian/Installation/Kilian_Garis _ Hahn2014_02(1).jpg"},
	{"photo":"photo6", "path":"../photos/colinkilian/Installation/Kilian_Garis _ Hahn2014_07.jpg"}
];

$scope.painting_to_display_s =[{"photo":"photo1", "path":"../photos/samuelstabler/oeuvres/SOeuvres2.jpg"}];

$scope.samuel_paintings = [
	{"photo":"photo1", "path":"../photos/samuelstabler/oeuvres/SOeuvres2.jpg"},
	{"photo":"photo2", "path":"../photos/samuelstabler/Installation/Sinsta4.jpg"},
	{"photo":"photo3", "path":"../photos/samuelstabler/oeuvres/SOeuvres3.jpg"},
	{"photo":"photo4", "path":"../photos/samuelstabler/Installation/Sinsta1.jpg"},
	{"photo":"photo5", "path":"../photos/samuelstabler/Installation/Sinsta2.jpg"},
	{"photo":"photo6", "path":"../photos/samuelstabler/Installation/Sinsta3.jpg"}
];

$scope.painting_to_display_f_b = function(element){
	$scope.painting_to_display_b[0] = element;
};

$scope.painting_to_display_f_c = function(element){
	$scope.painting_to_display_c[0] = element;
};

$scope.painting_to_display_f_s = function(element){
	$scope.painting_to_display_s[0] = element;
};

});


