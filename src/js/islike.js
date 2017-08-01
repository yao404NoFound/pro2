(function($,root){
	var $scope = $(document.body);
	function show() {
		$scope.find('.like-btn').toggleClass('liked');
	}
	root.islike = {
		show
	}
}(window.Zepto,window.player || (window.player = {})))