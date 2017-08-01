(function($,root){
	var $scope = $(document.body);
	var contrlomanager;
	 var $playlist = $('<div class="play-list">'+
	 	'<div class="line-head">播放列表</div>'+
	 	'<ul class="play-list-wrap"></ul>'+
	 	'<div class="close-btn">关闭</div>'+
	 	'</div>');

	 //渲染播放列表
	 function render(data){
	 	var html = '';
	 	var len = data.length;
	 	for(var i=0;i<len;i++){
	 		html += '<li><h3>'+data[i].song+'-<span>'+data[i].singer+'</span></h3></li>';
	 	}
	 	$playlist.find('ul').html(html);
	 	$scope.append($playlist);
	 	bindEvent();
	 }

	//关闭按钮时间绑定
	function bindEvent(){
		$playlist.on('click','.close-btn',function(){
			$playlist.removeClass('show');
		})
		$playlist.on('click','li',function(){
			var index = $(this).index();
			controlmanager.index = index;
			signSong(index);
			$scope.trigger('play:change',[index,true]);
			$scope.find('.play-btn').addClass('playing');
			setTimeout(function(){
				$playlist.removeClass('show');
			},1000)
		})
	}


	 //显示播放列表
	 function show(control){
	 	contrlomanager = control;
	 	var index = controlmanager.index;
	 	$playlist.addClass('show');
	 	signSong(index);
	 }

	 //标记歌曲
	 function signSong(index){
	 	$playlist.find('.playing').removeClass('playing');
	 	$playlist.find('li').eq(index).addClass('playing');
	 }


	 root.playlist = {
	 	render,
	 	show
	 }
}(window.Zepto,window.player || (window.player = {})))